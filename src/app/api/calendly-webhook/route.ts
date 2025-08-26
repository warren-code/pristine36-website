import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import crypto from 'crypto'

// Email configuration
const TO_EMAIL = process.env.TO_EMAIL || 'Hayat.S@pristine36.co.uk'
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587')
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = process.env.SMTP_PASS || ''
const CALENDLY_VERIFICATION_TOKEN = process.env.CALENDLY_VERIFICATION_TOKEN || ''

// Create transporter
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

// Verify Calendly webhook signature
function verifyCalendlySignature(payload: string, signature: string): boolean {
  if (!CALENDLY_VERIFICATION_TOKEN) {
    console.warn('CALENDLY_VERIFICATION_TOKEN not configured')
    return true // Allow in development
  }
  
  const expectedSignature = crypto
    .createHmac('sha256', CALENDLY_VERIFICATION_TOKEN)
    .update(payload)
    .digest('base64')
  
  return signature === expectedSignature
}

export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const rawBody = await request.text()
    const signature = request.headers.get('Calendly-Webhook-Signature') || ''
    
    // Verify signature
    if (!verifyCalendlySignature(rawBody, signature)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }
    
    // Parse webhook payload
    const payload = JSON.parse(rawBody)
    const { event, payload: eventPayload } = payload
    
    // Handle different event types
    if (event === 'invitee.created' || event === 'invitee.canceled') {
      const { name, email, event: eventDetails, questions_and_answers, cancel_url, reschedule_url } = eventPayload
      
      // Format email subject
      const subject = event === 'invitee.created' 
        ? `New Calendly Booking: ${name}`
        : `Calendly Booking Cancelled: ${name}`
      
      // Format email content
      let emailHtml = `
        <h2>${event === 'invitee.created' ? 'New Booking Received' : 'Booking Cancelled'}</h2>
        <p><strong>Client Name:</strong> ${name}</p>
        <p><strong>Client Email:</strong> ${email}</p>
        <p><strong>Event:</strong> ${eventDetails.name}</p>
        <p><strong>Date & Time:</strong> ${new Date(eventPayload.scheduled_event.start_time).toLocaleString('en-GB', {
          dateStyle: 'full',
          timeStyle: 'short',
          timeZone: 'Europe/London'
        })}</p>
        <p><strong>Duration:</strong> ${eventDetails.duration} minutes</p>
      `
      
      // Add questions and answers if available
      if (questions_and_answers && questions_and_answers.length > 0) {
        emailHtml += '<h3>Responses:</h3>'
        questions_and_answers.forEach((qa: { question: string; answer: string }) => {
          emailHtml += `<p><strong>${qa.question}:</strong> ${qa.answer}</p>`
        })
      }
      
      // Add action links
      if (event === 'invitee.created') {
        emailHtml += `
          <h3>Actions:</h3>
          <p><a href="${reschedule_url}">Reschedule this booking</a></p>
          <p><a href="${cancel_url}">Cancel this booking</a></p>
        `
      }
      
      // Add meeting location if available
      if (eventPayload.location) {
        emailHtml += `<p><strong>Location:</strong> ${eventPayload.location}</p>`
      }
      
      // Send notification email
      try {
        await transporter.sendMail({
          from: SMTP_USER || 'noreply@pristine36.co.uk',
          to: TO_EMAIL,
          replyTo: email,
          subject: subject,
          html: emailHtml,
        })
      } catch (emailError) {
        console.error('Email send error:', emailError)
        // Log the event if email fails
        console.log('Calendly webhook event:', {
          event,
          name,
          email,
          scheduledTime: eventPayload.scheduled_event?.start_time,
        })
      }
    }
    
    // Return success response
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Calendly webhook error:', error)
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    )
  }
}
