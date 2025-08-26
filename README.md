# Pristine36 Website

A modern, SEO-optimized website for Pristine36 specialist cleaning services, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Glassmorphism Design** - Inspired by Ramp.com with glass-effect UI components
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Performance Optimized** - Built with Next.js 15 and optimized for Core Web Vitals
- 🔍 **SEO Ready** - Complete with meta tags, structured data, sitemap, and robots.txt
- 📅 **Calendly Integration** - Seamless booking system for consultations
- ✨ **Smooth Animations** - Subtle animations using Framer Motion

## Pages

- **Home** - Hero section with services overview and trust indicators
- **Services** - Comprehensive list of all specialist cleaning services
- **About** - Company information, values, and certifications
- **Coverage** - Service areas with response times
- **Clients** - Testimonials and client showcase
- **Contact** - Contact form and company information
- **Book** - Calendly integration for booking consultations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **SEO**: Next.js Metadata API + JSON-LD structured data

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pristine36-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Deployment

This website is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project to Vercel
3. Deploy with zero configuration

## Environment Variables

No environment variables are required for basic functionality. 

For Calendly integration, update the Calendly URL in `/app/book/page.tsx` with your actual Calendly link.

## SEO Configuration

- Update metadata in `app/layout.tsx`
- Modify structured data in `components/SEO.tsx`
- Sitemap is automatically generated at `/sitemap.xml`
- Robots.txt is available at `/robots.txt`

## Customization

### Colors
Edit the color palette in `tailwind.config.ts`

### Content
- Service listings: `app/services/page.tsx`
- Client testimonials: `app/clients/page.tsx`
- Coverage areas: `app/coverage/page.tsx`

### Contact Information
Update phone numbers and email addresses throughout the site by searching for:
- `+44123456789`
- `info@pristine36.com`

## License

© 2024 Pristine36. All rights reserved.
