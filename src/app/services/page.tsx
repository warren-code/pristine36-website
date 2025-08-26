'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { 
  Sparkles, Shield, Bug, Droplets, SprayCan, Home, Wine, 
  Sofa, Building, Heart, AlertTriangle, Building2, Waves, 
  Syringe, ArrowRight, Wrench
} from 'lucide-react'
import { CONTACT } from '@/components/Header'

const allServices = [
  {
    id: 'kitchen',
    title: 'Kitchen Deep Clean',
    description: 'TR19 compliant commercial kitchen extract cleaning, canopy cleaning, and ductwork cleaning services',
    icon: Sparkles,
    features: [
      'TR19 compliant cleaning',
      'Canopy and filter cleaning',
      'Ductwork degreasing',
      'Fire damper testing',
      'Compliance certificates'
    ],
    keywords: ['kitchen extract cleaning', 'commercial kitchen deep cleaning', 'tr19 grease', 'ductwork cleaning', 'canopy cleaning London']
  },
  {
    id: 'pest',
    title: 'Post Pest Fouling Cleans',
    description: 'Professional cleaning and sanitization after pest infestations',
    icon: Bug,
    features: [
      'Complete decontamination',
      'Removal of droppings and nests',
      'Sanitization and disinfection',
      'Odor removal',
      'Prevention advice'
    ]
  },
  {
    id: 'grease',
    title: 'Grease Trap Service',
    description: 'Comprehensive grease trap cleaning and FOG waste management',
    icon: Droplets,
    features: [
      'Grease trap emptying',
      'FOG waste disposal',
      'Grease filter cleaning',
      'Compliance with regulations',
      'Scheduled maintenance'
    ],
    keywords: ['grease disposal London regulations', 'grease management', 'fog waste management', 'grease filter cleaning']
  },
  {
    id: 'washroom',
    title: 'Washroom Deep Clean',
    description: 'Thorough sanitization and deep cleaning of commercial washrooms',
    icon: SprayCan,
    features: [
      'Deep sanitization',
      'Descaling and deodorizing',
      'Tile and grout cleaning',
      'Fixture restoration',
      'ATP testing available'
    ]
  },
  {
    id: 'sanitisation',
    title: 'Sanitisation & Disinfection',
    description: 'Professional disinfection services including coronavirus decontamination',
    icon: Shield,
    features: [
      'Pathogen control',
      'Coronavirus decontamination',
      'ATP testing',
      'Fogging services',
      'Certification provided'
    ],
    keywords: ['disinfection services London', 'atp testing', 'coronavirus biohazard decontamination', 'pathogen control solutions']
  },
  {
    id: 'mould',
    title: 'Mould Clean',
    description: 'Professional mould remediation for residential and commercial properties',
    icon: Home,
    features: [
      'Mould removal',
      'Anti-mould treatment',
      'Moisture control',
      'Air quality improvement',
      'Prevention strategies'
    ]
  },
  {
    id: 'bar',
    title: 'Bar Cleans',
    description: 'Specialized cleaning services for bars and entertainment venues',
    icon: Wine,
    features: [
      'Beer line cleaning',
      'Floor deep cleaning',
      'Glass washer maintenance',
      'Cellar cleaning',
      'Compliance support'
    ]
  },
  {
    id: 'carpet',
    title: 'Carpet Cleaning',
    description: 'Professional carpet cleaning for commercial and residential properties',
    icon: Sofa,
    features: [
      'Deep extraction cleaning',
      'Stain removal',
      'Odor elimination',
      'Quick drying methods',
      'Eco-friendly options'
    ]
  },
  {
    id: 'bin',
    title: 'Bin Store Cleaning',
    description: 'Comprehensive bin store cleaning and sanitization services',
    icon: Building,
    features: [
      'Pressure washing',
      'Deodorizing',
      'Pest deterrent application',
      'Drainage cleaning',
      'Regular maintenance'
    ]
  },
  {
    id: 'biohazard',
    title: 'Post Trauma & After Death Clean',
    description: 'Sensitive and professional biohazard cleaning services',
    icon: Heart,
    features: [
      'Blood and bodily fluid cleaning',
      'Crime scene cleaning',
      'Compassionate service',
      'Complete sanitization',
      'Discrete and confidential'
    ],
    keywords: ['trauma cleaning', 'crime scene cleaning', 'sharps removal service London', 'blood and bodily fluid cleaning', 'biohazard cleaning']
  },
  {
    id: 'high-level',
    title: 'High Level Clean',
    description: 'Specialist high-level cleaning services (subject to environment)',
    icon: Building2,
    features: [
      'Ceiling cleaning',
      'Light fixture cleaning',
      'Air vent cleaning',
      'High window cleaning',
      'Safety compliant'
    ],
    keywords: ['air handling unit (ahu)', 'indoor air quality (iaq)', 'laundry extraction system cleaning']
  },
  {
    id: 'flood',
    title: 'Post Flood Sanitisation',
    description: 'Emergency flood damage cleaning and sanitization',
    icon: Waves,
    features: [
      'Water extraction',
      'Sanitization',
      'Mould prevention',
      'Structural drying',
      '24/7 emergency response'
    ]
  },
  {
    id: 'needles',
    title: 'Needle Picking',
    description: 'Safe removal and disposal of sharps and drug paraphernalia',
    icon: Syringe,
    features: [
      'Safe sharps removal',
      'Proper disposal',
      'Area sanitization',
      'Risk assessment',
      'Certified handlers'
    ],
    keywords: ['sharps disposal', 'sharps removal service London']
  },
  {
    id: 'other',
    title: 'Other Specialist Services',
    description: 'Additional specialist cleaning services through our network of subcontractors',
    icon: AlertTriangle,
    features: [
      'End of tenancy cleaning',
      'After builder cleaning',
      'Hoarder cleaning',
      'Fire damage cleaning',
      'Custom solutions'
    ],
    keywords: ['end of tenancy cleaning', 'end of tenancy deep clean London', 'after builder cleaning', 'hoarder cleaning', 'compliance certificate cleaning']
  },
  {
    id: 'pristine-special',
    slug: 'pristine-special',
    title: 'Pristine Special',
    description: 'Specialised problem-solving clean. If your need isn\'t listed, we diagnose and handle it.',
    icon: Wrench,
    features: [
      'Initial 30-min call via Calendly to understand the issue',
      'FREE on-site survey by our survey team',
      'Written quote after thorough inspection',
      'Photo-only workflow available for mould enquiries'
    ],
    isSpecial: true,
    ctaText: 'Book initial call',
    ctaLink: CONTACT.calendly
  }
]

export default function ServicesPage() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center">
            <h1 className="font-bold" style={{ marginBottom: '1.5rem', color: 'white' }}>
              Our Specialist Cleaning Services
            </h1>
            <p className="text-xl" style={{ maxWidth: '48rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              Comprehensive cleaning solutions for commercial kitchens, biohazard situations, 
              and specialist cleaning needs across Greater London and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {allServices.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} id={service.id} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardHeader>
                    <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.5rem', backgroundColor: 'rgba(74, 222, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon style={{ height: '1.75rem', width: '1.75rem', color: 'var(--primary)' }} />
                    </div>
                    <CardTitle style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>{service.title}</CardTitle>
                    <CardDescription style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <ul style={{ listStyle: 'none', marginBottom: '1.5rem', flexGrow: 1 }}>
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start" style={{ gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <div style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: 'var(--primary)', marginTop: '0.5rem', flexShrink: 0 }} />
                          <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.isSpecial ? (
                      <>
                        <p className="text-sm" style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.8)', fontStyle: 'italic' }}>
                          Initial call (≈30 minutes) to describe the issue. FREE on-site survey follows; quote after inspection. Mould enquiries can be handled via photos.
                        </p>
                        <a href={service.ctaLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                          <Button variant="outline" style={{ width: '100%', position: 'relative' }}>
                            {service.ctaText || 'Book initial call'}
                            <ArrowRight style={{ marginLeft: '0.5rem', height: '1rem', width: '1rem' }} />
                          </Button>
                        </a>
                      </>
                    ) : (
                      <Link href="/book" style={{ textDecoration: 'none' }}>
                        <Button variant="outline" style={{ width: '100%', position: 'relative' }}>
                          Get Quote
                          <ArrowRight style={{ marginLeft: '0.5rem', height: '1rem', width: '1rem' }} />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'linear-gradient(135deg, var(--secondary), var(--primary))' }}>
        <div className="container" style={{ maxWidth: '48rem', textAlign: 'center' }}>
          <h2 className="font-bold" style={{ marginBottom: '1rem', color: 'white' }}>
            Need a Custom Cleaning Solution?
          </h2>
          <p className="text-lg" style={{ marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            We work with trusted subcontractors to provide any specialist cleaning service you need.
          </p>
          <div className="flex gap-4 justify-center" style={{ flexWrap: 'wrap' }}>
            <Link href="/book" style={{ textDecoration: 'none' }}>
              <Button size="lg" style={{ backgroundColor: 'white', color: 'var(--primary)', fontWeight: '600', border: 'none' }}>
                Book Free Consultation
                <ArrowRight style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
              </Button>
            </Link>
            <a href="tel:+44123456789" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="outline" style={{ borderColor: 'white', color: 'white', backgroundColor: 'transparent' }}>
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
