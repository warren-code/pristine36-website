'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { MapPin, Clock, Phone, ArrowRight, CheckCircle2 } from 'lucide-react'

const serviceAreas = [
  {
    id: 'london',
    name: 'Greater London',
    description: 'Complete coverage across all London boroughs',
    features: [
      'Central London - Same day service',
      'North London - 24/7 availability',
      'South London - Emergency response',
      'East London - Commercial focus',
      'West London - Residential & commercial'
    ],
    highlighted: true
  },
  {
    id: 'essex',
    name: 'Essex',
    description: 'Serving major towns and commercial centers',
    features: [
      'Chelmsford',
      'Basildon',
      'Colchester',
      'Southend-on-Sea',
      'Harlow'
    ]
  },
  {
    id: 'hertfordshire',
    name: 'Hertfordshire',
    description: 'Coverage throughout Hertfordshire',
    features: [
      'Watford',
      'St Albans',
      'Hemel Hempstead',
      'Stevenage',
      'Welwyn Garden City'
    ]
  },
  {
    id: 'kent',
    name: 'Kent',
    description: 'Serving North and West Kent',
    features: [
      'Dartford',
      'Gravesend',
      'Sevenoaks',
      'Tunbridge Wells',
      'Maidstone'
    ]
  },
  {
    id: 'surrey',
    name: 'Surrey',
    description: 'Complete Surrey coverage',
    features: [
      'Guildford',
      'Woking',
      'Epsom',
      'Reigate',
      'Croydon'
    ]
  }
]

export default function CoveragePage() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ marginBottom: '1.5rem' }}>
              Our Service Coverage
            </h1>
            <p className="text-xl text-gray-600" style={{ maxWidth: '48rem', margin: '0 auto' }}>
              Pristine36 provides specialist cleaning services across Greater London 
              and the surrounding Home Counties.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section bg-white" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="text-center">
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: 'var(--card-bg)', marginBottom: '1rem' }}>
                <Clock style={{ height: '1.5rem', width: '1.5rem', color: 'var(--primary)' }} />
              </div>
              <h3 className="text-lg font-semibold" style={{ marginBottom: '0.5rem' }}>24/7 Emergency Service</h3>
              <p className="text-gray-600">Available round the clock for urgent cleaning needs</p>
            </div>
            <div className="text-center">
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: 'var(--card-bg)', marginBottom: '1rem' }}>
                <MapPin style={{ height: '1.5rem', width: '1.5rem', color: 'var(--primary)' }} />
              </div>
              <h3 className="text-lg font-semibold" style={{ marginBottom: '0.5rem' }}>Wide Coverage</h3>
              <p className="text-gray-600">Serving 5 counties with rapid response times</p>
            </div>
            <div className="text-center">
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: 'var(--card-bg)', marginBottom: '1rem' }}>
                <Phone style={{ height: '1.5rem', width: '1.5rem', color: 'var(--primary)' }} />
              </div>
              <h3 className="text-lg font-semibold" style={{ marginBottom: '0.5rem' }}>Direct Contact</h3>
              <p className="text-gray-600">Call us directly for immediate assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600" style={{ maxWidth: '42rem', margin: '0 auto' }}>
              We provide comprehensive specialist cleaning services across these regions
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {serviceAreas.map((area) => (
              <Card 
                key={area.id} 
                id={area.id}
                style={area.highlighted ? { boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)', border: '2px solid var(--primary)' } : {}}
              >
                <CardHeader>
                  {area.highlighted && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: 'var(--primary)', color: 'var(--background)', marginBottom: '1rem' }}>
                      Headquarters
                    </div>
                  )}
                  <CardTitle style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                    <MapPin style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    {area.name}
                  </CardTitle>
                  <CardDescription style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {area.features.map((feature, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 style={{ height: '1rem', width: '1rem', color: 'var(--primary)', marginTop: '0.125rem', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>
              Rapid Response Times
            </h2>
            <p className="text-lg text-gray-600" style={{ maxWidth: '42rem', margin: '0 auto' }}>
              We understand that cleaning emergencies can&apos;t wait
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '56rem', margin: '0 auto' }}>
            <Card>
              <CardHeader>
                <CardTitle style={{ fontSize: '1.25rem' }}>Emergency Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>2-4 hour response for emergencies</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>24/7 phone support</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Weekend and holiday coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle style={{ fontSize: '1.25rem' }}>Standard Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Same-day booking available</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Next-day service guaranteed</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Flexible scheduling options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outside Coverage Area */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container text-center" style={{ maxWidth: '56rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>
            Outside Our Coverage Area?
          </h2>
          <p className="text-lg text-gray-600" style={{ marginBottom: '2rem' }}>
            While our primary service areas are listed above, we may be able to accommodate 
            requests from nearby locations. Contact us to discuss your specific needs.
          </p>
          <div className="button-group">
            <a href="tel:07860249950">
              <Button size="lg" variant="secondary">
                <Phone style={{ marginRight: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
                Call to Discuss
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Send an Inquiry
                <ArrowRight style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(to right, #000000, #374151)', color: 'white', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container text-center" style={{ maxWidth: '56rem' }}>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>
            Need Specialist Cleaning in Your Area?
          </h2>
          <p className="text-lg" style={{ marginBottom: '2rem', opacity: 0.9 }}>
            We&apos;re ready to serve you with professional cleaning services.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Book Your Service
              <ArrowRight style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
