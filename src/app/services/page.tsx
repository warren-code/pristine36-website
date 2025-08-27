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
    description: 'Keep your kitchen safe, compliant, and operating at peak efficiency with our professional deep cleaning',
    icon: Sparkles,
    features: [
      'Prevent fire hazards and insurance issues',
      'Pass health inspections with confidence',
      'Extend equipment life and reduce breakdowns',
      'Improve air quality for staff comfort',
      'Receive compliance certificates for peace of mind'
    ],
    keywords: ['kitchen extract cleaning', 'commercial kitchen deep cleaning', 'tr19 grease', 'ductwork cleaning', 'canopy cleaning London']
  },
  {
    id: 'pest',
    title: 'Post Pest Fouling Cleans',
    description: 'Restore your property to a safe, healthy environment after pest infestations',
    icon: Bug,
    features: [
      'Protect your health from harmful pathogens',
      'Eliminate unpleasant odours completely',
      'Make your space safe for occupancy again',
      'Prevent recurring infestations',
      'Get expert advice to avoid future problems'
    ]
  },
  {
    id: 'grease',
    title: 'Grease Trap Service',
    description: 'Avoid costly blockages, fines, and shutdowns with regular grease management',
    icon: Droplets,
    features: [
      'Prevent expensive drainage blockages',
      'Stay compliant with environmental regulations',
      'Avoid hefty fines and legal issues',
      'Keep your kitchen running smoothly',
      'Save money with scheduled maintenance plans'
    ],
    keywords: ['grease disposal London regulations', 'grease management', 'fog waste management', 'grease filter cleaning']
  },
  {
    id: 'washroom',
    title: 'Washroom Deep Clean',
    description: 'Create a positive impression with spotless, hygienic washroom facilities',
    icon: SprayCan,
    features: [
      'Impress customers with pristine facilities',
      'Eliminate odours that damage your reputation',
      'Restore fixtures to like-new condition',
      'Reduce spread of illness among staff',
      'Get measurable cleanliness with ATP testing'
    ]
  },
  {
    id: 'sanitisation',
    title: 'Sanitisation & Disinfection',
    description: 'Create a safer environment for your staff and customers with proven disinfection',
    icon: Shield,
    features: [
      'Protect against viruses and harmful bacteria',
      'Reduce sick days and boost productivity',
      'Show customers you prioritise their safety',
      'Get scientific proof with ATP testing',
      'Receive certification for compliance and marketing'
    ],
    keywords: ['disinfection services London', 'atp testing', 'coronavirus biohazard decontamination', 'pathogen control solutions']
  },
  {
    id: 'mould',
    title: 'Mould Clean',
    description: 'Protect your health and property value with professional mould remediation',
    icon: Home,
    features: [
      'Breathe easier with improved air quality',
      'Protect your family\'s health from mould spores',
      'Preserve your property value and appeal',
      'Prevent costly structural damage',
      'Stop mould returning with prevention strategies'
    ]
  },
  {
    id: 'bar',
    title: 'Bar Cleans',
    description: 'Keep your venue inviting and your drinks tasting perfect with specialist bar cleaning',
    icon: Wine,
    features: [
      'Serve better-tasting drinks with clean lines',
      'Create a welcoming atmosphere for customers',
      'Reduce waste from spoiled products',
      'Prevent equipment breakdowns and closures',
      'Stay compliant with health regulations'
    ]
  },
  {
    id: 'carpet',
    title: 'Carpet Cleaning',
    description: 'Extend carpet life and create healthier spaces with professional deep cleaning',
    icon: Sofa,
    features: [
      'Save thousands on carpet replacement costs',
      'Remove unsightly stains that hurt your image',
      'Eliminate trapped allergens and dust mites',
      'Get back to business faster with quick drying',
      'Choose eco-friendly options for sustainability'
    ]
  },
  {
    id: 'bin',
    title: 'Bin Store Cleaning',
    description: 'Transform your bin areas from eyesores to clean, manageable spaces',
    icon: Building,
    features: [
      'Eliminate foul odours affecting your property',
      'Prevent pest infestations and health risks',
      'Avoid complaints from tenants or neighbours',
      'Maintain property value and appeal',
      'Save time with regular maintenance plans'
    ]
  },
  {
    id: 'biohazard',
    title: 'Post Trauma & After Death Clean',
    description: 'Compassionate support during difficult times with professional biohazard cleaning',
    icon: Heart,
    features: [
      'Let us handle the difficult cleanup tasks',
      'Return properties to safe, habitable condition',
      'Work with sensitivity and complete discretion',
      'Meet insurance and legal requirements',
      'Available 24/7 when you need us most'
    ],
    keywords: ['trauma cleaning', 'crime scene cleaning', 'sharps removal service London', 'blood and bodily fluid cleaning', 'biohazard cleaning']
  },
  {
    id: 'high-level',
    title: 'High Level Clean',
    description: 'Maintain a professional appearance and healthy air quality with high-level cleaning',
    icon: Building2,
    features: [
      'Brighten your space with clean light fixtures',
      'Improve air quality and reduce energy costs',
      'Project professionalism to clients and visitors',
      'Extend the life of expensive HVAC systems',
      'Stay safe with fully compliant procedures'
    ],
    keywords: ['air handling unit (ahu)', 'indoor air quality (iaq)', 'laundry extraction system cleaning']
  },
  {
    id: 'flood',
    title: 'Post Flood Sanitisation',
    description: 'Get your property back to normal quickly after flood damage',
    icon: Waves,
    features: [
      'Minimise downtime and get back to business',
      'Prevent dangerous mould growth',
      'Save your property from long-term damage',
      'Work with insurance companies on your behalf',
      'Available 24/7 when disaster strikes'
    ]
  },
  {
    id: 'needles',
    title: 'Needle Picking',
    description: 'Protect your community from dangerous sharps with professional removal',
    icon: Syringe,
    features: [
      'Keep children and the public safe from harm',
      'Reduce liability and legal risks',
      'Restore confidence in public spaces',
      'Meet duty of care obligations',
      'Trust certified professionals to handle risks'
    ],
    keywords: ['sharps disposal', 'sharps removal service London']
  },
  {
    id: 'other',
    title: 'Other Specialist Services',
    description: 'Whatever your cleaning challenge, we have the solution through our expert network',
    icon: AlertTriangle,
    features: [
      'Get your deposit back with tenancy cleaning',
      'Remove construction dust and debris completely',
      'Handle sensitive hoarding situations with care',
      'Restore fire-damaged properties professionally',
      'Access any specialist service you need'
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
            <a href="tel:07860249950" style={{ textDecoration: 'none' }}>
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
