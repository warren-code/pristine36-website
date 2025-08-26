import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pristine36.com'),
  title: "Pristine36 - Specialist Cleaning Services London | Kitchen Deep Clean & Biohazard",
  description: "Professional specialist cleaning services in Greater London. Kitchen extract cleaning, TR19 grease removal, biohazard cleaning, trauma cleaning, and commercial deep cleaning. 24/7 emergency service available.",
  keywords: "kitchen extract cleaning, commercial kitchen deep cleaning, tr19 grease, ductwork cleaning, fire damper testing, canopy cleaning London, biohazard cleaning, trauma cleaning, crime scene cleaning",
  openGraph: {
    title: "Pristine36 - Specialist Cleaning Services London",
    description: "Professional specialist cleaning services across Greater London, Essex, Hertfordshire, Kent, and Surrey. 24/7 emergency service.",
    url: "https://pristine36.com",
    siteName: "Pristine36",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pristine36 - Specialist Cleaning Services London",
    description: "Professional specialist cleaning services in Greater London. Kitchen extract cleaning, biohazard cleaning, and more.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SEO />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#2B3440" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
