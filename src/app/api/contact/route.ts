import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const TO_EMAIL = process.env.TO_EMAIL || 'enquiries@pristine36.co.uk'
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587')
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = process.env.SMTP_PASS || ''
const CALENDLY_URL = 'https://calendly.com/enquiries-pristine36/30min'

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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form fields
    const name = formData.get('name') as string
    const company = formData.get('company') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const service = formData.get('service') as string
    const message = formData.get('message') as string
    const isMouldIssue = formData.get('isMouldIssue') === 'true'
    
    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Prepare email content
    const emailSubject = `New Enquiry: ${service} - ${name}${company ? ` (${company})` : ''}`
    
    let emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Service Required:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      ${isMouldIssue ? '<p><strong>Note:</strong> This is a mould issue.</p>' : ''}
    `
    
    // Prepare attachments array
    const attachments = []
    
    // Handle photo attachments for mould issues
    if (isMouldIssue) {
      for (let i = 0; i < 5; i++) {
        const photo = formData.get(`photo${i}`) as File
        if (photo && photo.size > 0) {
          const buffer = Buffer.from(await photo.arrayBuffer())
          attachments.push({
            filename: photo.name,
            content: buffer,
            contentType: photo.type,
          })
        }
      }
      
      if (attachments.length > 0) {
        emailHtml += `<p><strong>Photos attached:</strong> ${attachments.length} file(s)</p>`
      }
    }
    
    // Send email
    try {
      await transporter.sendMail({
        from: SMTP_USER || 'noreply@pristine36.co.uk',
        to: TO_EMAIL,
        replyTo: email,
        subject: emailSubject,
        html: emailHtml,
        attachments,
      })
    } catch (emailError) {
      console.error('Email send error:', emailError)
      // If SMTP is not configured, log the submission instead
      console.log('Contact form submission:', {
        name,
        company,
        email,
        phone,
        service,
        message,
        isMouldIssue,
        photoCount: attachments.length,
      })
    }
    
    // Return success response
    const response: {
      success: boolean;
      message: string;
      calendlyUrl?: string;
      calendlyMessage?: string;
    } = {
      success: true,
      message: 'Thank you for your enquiry. We will get back to you within 24 hours.',
    }
    
    // Include Calendly link for non-mould issues
    if (!isMouldIssue) {
      response.calendlyUrl = CALENDLY_URL
      response.calendlyMessage = 'Would you like to schedule your initial consultation now?'
    }
    
    return NextResponse.json(response)
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
