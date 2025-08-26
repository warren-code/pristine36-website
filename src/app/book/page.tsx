'use client'

import { Calendar, Phone, ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

// Calendly URL - Update this with your actual Calendly link
const CALENDLY_URL = 'https://calendly.com/your-link-here'

export default function BookPage() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: '48rem' }}>
            <h1 style={{ marginBottom: '1rem' }}>
              Book your free consultation
            </h1>
            <p className="text-lg text-gray-600">
              Schedule a convenient time to discuss your specialist cleaning needs with our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Calendly Placeholder */}
            <div>
              <div className="card">
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Select your preferred time</h2>
                <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '2rem' }}>Choose a date and time that works best for you. Consultations typically last 30 minutes.</p>
                
                {/* Calendly placeholder */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center', backgroundColor: '#f9fafb', minHeight: '500px' }}>
                  <Calendar style={{ height: '3rem', width: '3rem', color: '#9ca3af', margin: '0 auto 1rem' }} />
                  <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Calendly booking widget will appear here</p>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>To enable booking, update CALENDLY_URL in this file</p>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                    <Button variant="primary">
                      Open Calendly
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>What to expect</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check style={{ height: '1.25rem', width: '1.25rem', color: '#16a34a', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <p style={{ fontWeight: '500', color: '#111827' }}>Free consultation</p>
                      <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>No obligation, no hidden fees</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check style={{ height: '1.25rem', width: '1.25rem', color: '#16a34a', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <p style={{ fontWeight: '500', color: '#111827' }}>Expert assessment</p>
                      <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Discuss your specific cleaning needs</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check style={{ height: '1.25rem', width: '1.25rem', color: '#16a34a', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <p style={{ fontWeight: '500', color: '#111827' }}>Detailed quote</p>
                      <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Receive a comprehensive pricing estimate</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check style={{ height: '1.25rem', width: '1.25rem', color: '#16a34a', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <p style={{ fontWeight: '500', color: '#111827' }}>Flexible scheduling</p>
                      <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Book services at your convenience</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Need help?</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1rem' }}>Having trouble booking or prefer to speak with someone?</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href="tel:+44123456789" style={{ width: '100%' }}>
                    <Button size="md" variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
                      <Phone style={{ height: '1rem', width: '1rem', marginRight: '0.5rem' }} />
                      Call us directly
                    </Button>
                  </a>
                  <Link href="/contact" style={{ width: '100%' }}>
                    <Button size="md" variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
                      <ArrowLeft style={{ height: '1rem', width: '1rem', marginRight: '0.5rem' }} />
                      Contact form
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="card" style={{ backgroundColor: '#f9fafb' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar style={{ height: '1.25rem', width: '1.25rem' }} />
                  Quick booking tips
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563', listStyle: 'none', padding: 0 }}>
                  <li>• Morning slots often have shorter wait times</li>
                  <li>• Emergency services available 24/7</li>
                  <li>• Same-day consultations possible</li>
                  <li>• We&apos;ll call to confirm your booking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
