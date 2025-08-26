# Manual Deployment Guide for Pristine36 Website

## Current Status

The website has been successfully built and all changes have been committed to the local Git repository. The website includes:

- ✅ Updated email address from enquiries@pristine36.co.uk to Hayat.S@pristine36.co.uk across all pages
- ✅ Enhanced contact form with mould photo upload capability
- ✅ API routes for handling contact form submissions and Calendly webhooks
- ✅ All accessibility and performance improvements

## Deployment Options

### Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository named "pristine36-website"
   - Don't initialize with README, .gitignore, or license

2. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/pristine36-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect GitHub to Netlify**:
   - Go to https://app.netlify.com/sites/pristine36/settings/deploys
   - Click "Link site to Git"
   - Choose GitHub and authorize Netlify
   - Select your repository
   - Deploy settings are already configured in netlify.toml

### Option 2: Deploy via Netlify Drop (Quick Alternative)

1. **Build the project locally**:
   ```bash
   npm run build
   ```

2. **Create deployment folder**:
   ```bash
   npm install -g @netlify/plugin-nextjs
   npx @netlify/plugin-nextjs@latest export
   ```

3. **Deploy via Netlify Drop**:
   - Go to https://app.netlify.com/drop
   - Drag and drop the `.next` folder
   - This will create a new deployment

### Option 3: Deploy via Netlify Dashboard

1. Go to https://app.netlify.com/sites/pristine36
2. Navigate to "Deploys" tab
3. Drag and drop the `.next` folder into the deployment area

## Environment Variables

Make sure to set these environment variables in Netlify Dashboard (Site settings > Environment variables):

```
TO_EMAIL=Hayat.S@pristine36.co.uk
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CALENDLY_VERIFICATION_TOKEN=your-calendly-webhook-token
```

## Post-Deployment Steps

1. **Verify the deployment**:
   - Check https://pristine36.netlify.app
   - Test all pages and navigation
   - Test the contact form
   - Verify email notifications are working

2. **Set up Calendly webhook**:
   - Go to your Calendly account settings
   - Add webhook endpoint: https://pristine36.netlify.app/api/calendly-webhook
   - Copy the verification token to Netlify environment variables

3. **Configure custom domain** (if applicable):
   - Add your domain in Netlify settings
   - Update DNS records as instructed

## Troubleshooting

If you encounter Edge Functions error during deployment:
1. Remove the `[[plugins]]` section from netlify.toml temporarily
2. Deploy without the plugin
3. Re-add the plugin after successful deployment

## Files Changed Summary

- All React components updated with new email
- Contact form enhanced with photo upload
- API routes created for email handling
- Privacy policy updated with new email
- All other references to old email updated
