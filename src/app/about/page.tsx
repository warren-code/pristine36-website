'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Shield, Award, Target, Users, CheckCircle2, ArrowRight, Building2, MapPin } from 'lucide-react'

const values = [
  {
    title: 'Quality Excellence',
    description: 'We deliver exceptional cleaning results that exceed industry standards',
    icon: Award,
  },
  {
    title: 'Trust & Reliability',
    description: 'Our clients depend on us for consistent, professional service',
    icon: Shield,
  },
  {
    title: 'Customer Focus',
    description: 'We tailor our services to meet each client\'s unique needs',
    icon: Target,
  },
  {
    title: 'Professional Team',
    description: 'Trained, insured, and dedicated cleaning specialists',
    icon: Users,
  },
]

const certifications = [
  {
    status: 'pursuing',
    title: 'BESA Accreditation',
    description: 'Currently pursuing Building Engineering Services Association accreditation for grease removal',
    icon: Award,
  },
  {
    status: 'considering',
    title: 'CHAS Certification',
    description: 'Considering Contractors Health and Safety Assessment Scheme certification',
    icon: Shield,
  },
  {
    status: 'considering',
    title: 'Safe Contractor',
    description: 'Evaluating Safe Contractor accreditation to enhance trust and safety standards',
    icon: CheckCircle2,
  },
]

export default function AboutPage() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ marginBottom: '1.5rem', color: 'white' }}>
              About Pristine36
            </h1>
            <p className="text-xl" style={{ maxWidth: '48rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              Your trusted partner for specialist cleaning services across Greater London, 
              Essex, Hertfordshire, Kent, and Surrey.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="features-grid">
            <div>
              <h2 style={{ marginBottom: '1.5rem', color: 'white' }}>
                Professional Cleaning Excellence Since Day One
              </h2>
              <p className="text-lg" style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                Based in Greater London, Pristine36 specializes in delivering exceptional cleaning 
                services that go beyond the ordinary. We understand that every cleaning challenge 
                is unique, which is why we offer a comprehensive range of specialist services.
              </p>
              <p className="text-lg" style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                From <Link href="/services#kitchen" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>commercial kitchen deep cleaning</Link> to sensitive <Link href="/services#biohazard" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>biohazard decontamination</Link>, 
                our team approaches every job with professionalism, discretion, and attention to detail.
              </p>
              <p className="text-lg" style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                We&apos;re proud to serve businesses and homeowners across the region, building lasting 
                relationships based on trust, quality, and reliability.
              </p>
            </div>
            <div className="mobile-padding" style={{ backgroundColor: 'var(--background)', borderRadius: '1rem', border: '2px solid var(--primary)' }}>
              <h3 className="text-2xl font-bold" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Service Areas</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Greater London', 'Essex', 'Hertfordshire', 'Kent', 'Surrey'].map((area) => (
                  <li key={area} className="flex items-center" style={{ gap: '0.75rem' }}>
                    <MapPin style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)', flexShrink: 0 }} />
                    <span className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{area}</span>
                  </li>
                ))}
              </ul>
              <Link href="/coverage" style={{ display: 'inline-block', marginTop: '1.5rem', textDecoration: 'none' }}>
                <Button variant="outline">
                  View Full Coverage Map
                  <ArrowRight style={{ marginLeft: '0.5rem', height: '1rem', width: '1rem' }} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', color: 'white' }}>
              Our Core Values
            </h2>
            <p className="text-lg" style={{ maxWidth: '32rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              These principles guide everything we do at Pristine36
            </p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: 'rgba(74, 222, 128, 0.1)', marginBottom: '1rem' }}>
                      <Icon style={{ height: '2rem', width: '2rem', color: 'var(--primary)' }} />
                    </div>
                    <CardTitle style={{ fontSize: '1.25rem', color: 'white' }}>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Insurance */}
      <section id="certifications" className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', color: 'white' }}>
              Certifications & Insurance
            </h2>
            <p className="text-lg" style={{ maxWidth: '32rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              Your peace of mind is our priority
            </p>
          </div>

          {/* Insurance Coverage */}
          <Card style={{ marginBottom: '3rem' }}>
            <CardHeader>
              <div className="flex items-center" style={{ gap: '1rem' }}>
                <div className="flex items-center justify-center" style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: 'var(--primary)' }}>
                  <Shield style={{ height: '1.5rem', width: '1.5rem', color: 'var(--background)' }} />
                </div>
                <div>
                  <CardTitle style={{ fontSize: '1.5rem', color: 'white' }}>Fully Insured</CardTitle>
                  <CardDescription style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    Complete coverage for all cleaning services
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                We maintain comprehensive insurance coverage for all our <Link href="/services" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>cleaning services</Link>, 
                excluding high-level work. However, we can still accommodate <Link href="/services#high-level" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>high-level cleaning</Link> 
                jobs through our network of specialist partners.
              </p>
              <div className="flex items-center" style={{ gap: '0.5rem', color: 'var(--primary)' }}>
                <CheckCircle2 style={{ height: '1.25rem', width: '1.25rem' }} />
                <span className="font-medium">Active Insurance Policy</span>
              </div>
            </CardContent>
          </Card>

          {/* Certifications Grid */}
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <Card key={cert.title} style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px',
                      backgroundColor: cert.status === 'pursuing' ? 'var(--primary)' : 'var(--card-bg)',
                      color: cert.status === 'pursuing' ? 'var(--background)' : 'rgba(255, 255, 255, 0.8)'
                    }}>
                      {cert.status === 'pursuing' ? 'In Progress' : 'Considering'}
                    </span>
                  </div>
                  <CardHeader>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: 'rgba(74, 222, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon style={{ height: '1.5rem', width: '1.5rem', color: 'var(--primary)' }} />
                    </div>
                    <CardTitle style={{ fontSize: '1.25rem', color: 'white' }}>{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{cert.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Existing Clients */}
      <section className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>
            Trusted by Leading Businesses
          </h2>
          <p className="text-lg" style={{ marginBottom: '3rem', maxWidth: '32rem', margin: '0 auto 3rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            We&apos;re proud to serve a growing list of satisfied clients
          </p>
          <div className="flex justify-center items-center" style={{ flexWrap: 'wrap', gap: '3rem' }}>
            <div className="text-center">
              <Building2 style={{ height: '3rem', width: '3rem', color: 'var(--primary)', margin: '0 auto 0.5rem' }} />
              <h3 className="text-xl font-semibold" style={{ color: 'white' }}>JJ Properties</h3>
            </div>
            <div className="text-center">
              <Building2 style={{ height: '3rem', width: '3rem', color: 'var(--primary)', margin: '0 auto 0.5rem' }} />
              <h3 className="text-xl font-semibold" style={{ color: 'white' }}>All Season Foods</h3>
            </div>
          </div>
          <Link href="/clients" style={{ display: 'inline-block', marginTop: '2rem', textDecoration: 'none' }}>
            <Button variant="outline">
              View All Clients & Testimonials
              <ArrowRight style={{ marginLeft: '0.5rem', height: '1rem', width: '1rem' }} />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, var(--secondary), var(--primary))', color: '#ffffff' }}>
        <div className="container text-center" style={{ maxWidth: '48rem' }}>
          <h2 className="text-white" style={{ marginBottom: '1rem' }}>
            Ready to Work With Us?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Join our growing list of satisfied clients and transform your space today.
          </p>
          <div className="flex gap-4 justify-center" style={{ flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button size="lg" style={{ backgroundColor: 'white', color: 'var(--primary)', border: 'none', fontWeight: '600' }}>
                Start Your Free Quote
                <ArrowRight style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
              </Button>
            </Link>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="outline" style={{ borderColor: 'white', color: 'white', backgroundColor: 'transparent' }}>
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

