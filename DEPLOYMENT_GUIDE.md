# Pristine36 Website Deployment Guide

## Pre-Deployment Checklist

### 1. Replace Placeholder Content (CRITICAL)
- [ ] Update `CALENDLY_URL` in `/src/app/book/page.tsx` (line 8)
- [ ] Replace phone number `+44 123 456 789` throughout the site
- [ ] Verify email `info@pristine36.com` is correct
- [ ] Update or remove placeholder testimonials

### 2. Environment Setup
1. Copy `.env.example` to `.env.local`
2. Update all environment variables:
   ```
   NEXT_PUBLIC_PHONE_NUMBER=+44XXXXXXXXX
   NEXT_PUBLIC_EMAIL=info@pristine36.com
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/pristine36
   ```

### 3. Assets to Add
- [ ] Create `public/og-image.jpg` (1200x630px) for social sharing
- [ ] Add service images to `public/images/`
- [ ] Add client logos if displaying them

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import project to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Option 2: Netlify
1. Push code to GitHub
2. Import project to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Set environment variables

### Option 3: Traditional Hosting
```bash
# Build the project
npm run build

# Start production server
npm start

# Or use PM2
pm2 start npm --name "pristine36" -- start
```

## Post-Deployment Tasks

### 1. Domain Configuration
- Point domain to hosting provider
- Configure SSL certificate
- Set up www redirect

### 2. Email Service Setup
- Configure SendGrid/Postmark/Resend
- Update API keys in environment
- Test contact form

### 3. Analytics Setup
```html
<!-- Add to layout.tsx before </head> -->
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
  `}
</Script>
```

### 4. Performance Monitoring
- Set up Vercel Analytics or
- Google PageSpeed monitoring
- Set up uptime monitoring

## Testing Checklist

### Before Going Live
- [ ] Test all forms
- [ ] Check all links
- [ ] Verify mobile responsiveness
- [ ] Test page load speeds
- [ ] Check SEO meta tags
- [ ] Validate structured data
- [ ] Test 404 page
- [ ] Cross-browser testing

### Security Verification
- [ ] HTTPS enabled
- [ ] Security headers active
- [ ] Form validation working
- [ ] Rate limiting configured

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor form submissions
- Check for broken links
- Review analytics
- Update content as needed

### Backup Strategy
- GitHub repository serves as code backup
- Regular database backups if using CMS
- Export form submissions regularly

## Emergency Contacts

Update these with real information:
- Developer: [Your contact]
- Hosting Support: [Provider support]
- Domain Registrar: [Registrar support]

## Quick Fixes

### Update Content
```bash
# Make changes locally
npm run dev

# Test changes
npm run build

# Push to git
git add .
git commit -m "Update content"
git push

# Auto-deploys if using Vercel/Netlify
```

### Rollback Deployment
- Vercel: Use dashboard to instant rollback
- Netlify: Restore previous deployment
- Manual: `git revert` and redeploy

## Important Notes

1. **DO NOT DEPLOY** without replacing placeholder content
2. Test contact form thoroughly
3. Monitor first 48 hours closely
4. Have rollback plan ready
5. Keep backups of all content
