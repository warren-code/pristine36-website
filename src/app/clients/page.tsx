'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Star, Building2, Quote, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'James Mitchell',
    company: 'JJ Properties',
    role: 'Property Manager',
    content: 'Pristine36 has been instrumental in maintaining our commercial properties. Their kitchen deep cleaning service is thorough and compliant with all regulations. The team is professional, reliable, and always goes above and beyond.',
    rating: 5,
    service: 'Commercial Kitchen Cleaning'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    company: 'All Season Foods',
    role: 'Operations Director',
    content: 'We\'ve been using Pristine36 for our restaurant\'s grease trap services and kitchen extract cleaning. Their attention to detail and compliance with TR19 standards gives us peace of mind. Highly recommended!',
    rating: 5,
    service: 'Grease Management & Kitchen Extract'
  },
  {
    id: 3,
    name: 'Michael Thompson',
    company: 'Private Client',
    role: 'Homeowner',
    content: 'After a flooding incident, Pristine36 responded within hours. Their post-flood sanitization service was exceptional. They handled everything professionally and helped prevent any mould issues. Truly grateful for their 24/7 service.',
    rating: 5,
    service: 'Emergency Flood Cleaning'
  },
  {
    id: 4,
    name: 'Emma Williams',
    company: 'City Centre Bar',
    role: 'Bar Manager',
    content: 'The bar cleaning service from Pristine36 transformed our venue. From the cellar to the main floor, everything is spotless. Their team works around our schedule, which is crucial for our business.',
    rating: 5,
    service: 'Bar Deep Cleaning'
  }
]

const clients = [
  { name: 'JJ Properties', type: 'Property Management' },
  { name: 'All Season Foods', type: 'Food & Beverage' },
  { name: 'Various FM Companies', type: 'Facilities Management' },
  { name: 'Local Restaurants', type: 'Hospitality' },
  { name: 'Commercial Offices', type: 'Corporate' },
  { name: 'Residential Clients', type: 'Private' }
]

export default function ClientsPage() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ marginBottom: '1.5rem', color: 'white' }}>
              Our Clients & Testimonials
            </h1>
            <p className="text-xl" style={{ maxWidth: '48rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              Trusted by businesses and homeowners across Greater London for 
              professional specialist cleaning services.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos/Names */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: 'white' }}>
            Proud to Serve These Organizations
          </h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center" style={{ width: '5rem', height: '5rem', margin: '0 auto 0.75rem', borderRadius: '0.5rem', backgroundColor: 'var(--card-bg)' }}>
                  <Building2 style={{ height: '2.5rem', width: '2.5rem', color: 'var(--primary)' }} />
                </div>
                <h3 className="font-semibold" style={{ color: 'white' }}>{client.name}</h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{client.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', color: 'white' }}>
              What Our Clients Say
            </h2>
            <p className="text-lg" style={{ maxWidth: '32rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              Don&apos;t just take our word for it - hear from our satisfied clients about 
              their experience with Pristine36.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} style={{ position: 'relative' }}>
                <Quote style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', height: '2rem', width: '2rem', color: 'var(--card-border)' }} />
                <CardHeader>
                  <div className="flex items-center" style={{ gap: '0.25rem', marginBottom: '0.75rem' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} style={{ height: '1.25rem', width: '1.25rem', fill: '#facc15', color: '#facc15' }} />
                    ))}
                  </div>
                  <CardTitle style={{ fontSize: '1.125rem' }}>{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role} at {testimonial.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p style={{ marginBottom: '1rem', position: 'relative', zIndex: 10, color: 'rgba(255, 255, 255, 0.9)' }}>{testimonial.content}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
                    Service: {testimonial.service}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', color: 'white' }}>
              Industries We Serve
            </h2>
            <p className="text-lg" style={{ maxWidth: '32rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              Our specialist cleaning services cater to a wide range of sectors
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Restaurants, bars, hotels, and cafes trust us for kitchen deep cleaning, 
                  grease management, and compliance services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Property Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  FM companies and property managers rely on us for emergency cleaning, 
                  routine maintenance, and specialist services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Government & Public Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Local authorities and government facilities choose us for biohazard 
                  cleaning, sanitization, and emergency response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(to right, #000000, #1f2937)', color: '#ffffff' }}>
        <div className="container text-center" style={{ maxWidth: '48rem' }}>
          <h2 className="text-white" style={{ marginBottom: '1rem' }}>
            Join Our Growing List of Satisfied Clients
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Experience the Pristine36 difference with our professional specialist cleaning services.
          </p>
          <div className="flex gap-4 justify-center" style={{ flexWrap: 'wrap' }}>
            <Link href="/book" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="secondary">
                Book Free Consultation
                <ArrowRight style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
              </Button>
            </Link>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="outline" style={{ borderColor: 'white', color: 'white' }}>
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
