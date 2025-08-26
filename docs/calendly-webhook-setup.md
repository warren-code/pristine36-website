# Calendly Webhook Setup Guide

This guide explains how to configure Calendly webhooks to send booking notifications to enquiries@pristine36.co.uk.

## Prerequisites

1. Access to Calendly account settings
2. The site URL (e.g., https://pristine36.netlify.app)
3. Environment variable `CALENDLY_VERIFICATION_TOKEN` set in your hosting platform

## Setup Steps

### 1. Generate Verification Token

First, generate a secure token for webhook verification:

```bash
# On Linux/Mac:
openssl rand -hex 32

# Or use any secure random string generator
```

Save this token - you'll need it for both Calendly and your environment variables.

### 2. Set Environment Variable

In your hosting platform (Netlify/Vercel):

1. Go to Site Settings → Environment Variables
2. Add: `CALENDLY_VERIFICATION_TOKEN` = [your generated token]
3. Save and redeploy

### 3. Configure Calendly Webhook

1. Log into Calendly
2. Go to **Integrations** → **Webhooks**
3. Click **Create Webhook Subscription**
4. Configure as follows:

   - **Webhook URL**: `${SITE_URL}/api/calendly-webhook`
     - Example: `https://pristine36.netlify.app/api/calendly-webhook`
   
   - **Events to Subscribe**:
     - ✓ invitee.created
     - ✓ invitee.canceled
   
   - **Signing Key**: Enter the same token you generated in Step 1

5. Click **Create Webhook**
6. Test the webhook using Calendly's test feature

### 4. Verify Setup

The webhook will send emails to enquiries@pristine36.co.uk containing:

- **For new bookings**:
  - Client name and email
  - Event date, time, and duration
  - Any questions/answers from the booking form
  - Links to reschedule or cancel

- **For cancellations**:
  - Client name and email
  - Original booking details
  - Cancellation notification

## Email Format Example

```
Subject: New Calendly Booking: John Smith

New Booking Received
Client Name: John Smith
Client Email: john@example.com
Event: 30 Minute Consultation
Date & Time: Monday, 15 January 2024, 14:30
Duration: 30 minutes

Responses:
Service Type: Mould remediation
Property Type: Commercial
Additional Info: Large warehouse with visible mould

Actions:
Reschedule this booking
Cancel this booking
```

## Troubleshooting

### Webhook not receiving events
1. Check the webhook URL is correct
2. Ensure CALENDLY_VERIFICATION_TOKEN matches in both places
3. Check your hosting platform logs for errors

### Emails not being received
1. Verify SMTP settings in environment variables:
   - `TO_EMAIL`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
2. Check spam folder
3. Review application logs for email sending errors

## Security Notes

- The webhook endpoint verifies signatures to ensure requests come from Calendly
- No sensitive data is stored - only forwarded via email
- All communications go to enquiries@pristine36.co.uk
