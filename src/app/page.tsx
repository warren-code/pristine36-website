import Link from 'next/link'
import { ArrowRight, Check, Sparkles, Shield, Building2, Clock, Award, ChevronRight } from 'lucide-react'

const services = [
  {
    title: 'Kitchen Extract Cleaning',
    description: 'TR19 compliant commercial kitchen deep cleaning and grease removal',
    icon: Sparkles,
    href: '/services#kitchen',
  },
  {
    title: 'Biohazard & Trauma Cleaning',
    description: 'Professional crime scene cleaning and biohazard decontamination',
    icon: Shield,
    href: '/services#biohazard',
  },
  {
    title: 'Commercial Deep Cleaning',
    description: 'Comprehensive cleaning for offices, restaurants, and facilities',
    icon: Building2,
    href: '/services#commercial',
  },
]

const stats = [
  { value: '24/7', label: 'Emergency Service' },
  { value: '100%', label: 'Fully Insured' },
  { value: '5+', label: 'Years Experience' },
  { value: '1000+', label: 'Projects Completed' },
]

const testimonial = {
  quote: "Pristine36 has been instrumental in maintaining our commercial properties. Their kitchen deep cleaning service is thorough and compliant with all regulations.",
  author: "James Mitchell",
  role: "Property Manager",
  company: "JJ Properties"
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section section-light" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '64rem' }}>
            <h1 className="animate-fade-in">
              Professional Specialist Cleaning Services in London
            </h1>
            <p className="text-xl animate-slide-up" style={{ animationDelay: '0.1s', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              TR19 compliant kitchen extract cleaning, biohazard decontamination, and commercial deep cleaning across Greater London and surrounding areas.
            </p>
            <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.2s', flexWrap: 'wrap' }}>
              <Link href="/book" className="btn btn-primary">
                Book Free Consultation
                <ArrowRight style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
            <div className="flex gap-8 animate-slide-up" style={{ marginTop: '3rem', animationDelay: '0.3s', flexWrap: 'wrap' }}>
              <div className="flex items-center gap-4">
                <Check style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary)' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Fully Insured</span>
              </div>
              <div className="flex items-center gap-4">
                <Check style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary)' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>24/7 Emergency Response</span>
              </div>
              <div className="flex items-center gap-4">
                <Check style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary)' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>TR19 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" style={{ padding: '1rem 0.5rem' }}>
                <div className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '0.25rem', color: 'var(--primary)' }}>{stat.value}</div>
                <div className="text-sm md:text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Our Specialist Services</h2>
            <p className="text-xl" style={{ maxWidth: '48rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              Comprehensive cleaning solutions tailored to your specific needs
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.title} href={service.href} className="service-card" style={{ textDecoration: 'none' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.5rem', backgroundColor: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <Icon style={{ width: '1.75rem', height: '1.75rem', color: 'var(--primary)' }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ marginBottom: '0.75rem', color: 'white' }}>{service.title}</h3>
                  <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>{service.description}</p>
                  <div className="flex items-center" style={{ color: 'var(--secondary)', fontWeight: '500' }}>
                    Learn More
                    <ChevronRight style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }} />
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-secondary">
              View All Services
              <ArrowRight style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3rem' }}>What Our Clients Say</h2>
            <div className="card">
              <blockquote className="text-2xl font-medium" style={{ marginBottom: '2rem', color: 'white' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex justify-center">
                <div>
                  <div className="font-semibold" style={{ color: 'white' }}>{testimonial.author}</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-light">
        <div className="container">
          <div className="features-grid">
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Why Choose Pristine36</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="flex gap-4">
                  <div style={{ flexShrink: 0 }}>
                    <div className="flex items-center justify-center" style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: 'var(--primary)' }}>
                      <Shield style={{ width: '1.5rem', height: '1.5rem', color: 'var(--background)' }} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ marginBottom: '0.5rem', color: 'white' }}>Fully Insured & Certified</h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Complete insurance coverage with active pursuit of BESA accreditation for your peace of mind</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div style={{ flexShrink: 0 }}>
                    <div className="flex items-center justify-center" style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: 'var(--primary)' }}>
                      <Clock style={{ width: '1.5rem', height: '1.5rem', color: 'var(--background)' }} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ marginBottom: '0.5rem', color: 'white' }}>24/7 Emergency Response</h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Round-the-clock availability for urgent cleaning needs with rapid response times</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div style={{ flexShrink: 0 }}>
                    <div className="flex items-center justify-center" style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: 'var(--primary)' }}>
                      <Award style={{ width: '1.5rem', height: '1.5rem', color: 'var(--background)' }} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ marginBottom: '0.5rem', color: 'white' }}>Industry Expertise</h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Specialized knowledge in TR19 compliance and all aspects of commercial cleaning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-padding" style={{ borderRadius: '1rem', backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="text-2xl font-semibold" style={{ marginBottom: '1.5rem', color: 'white' }}>Get Started Today</h3>
              <p style={{ marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>Contact us for a free consultation and discover how our specialist cleaning services can benefit your business.</p>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Get in Touch
                <ArrowRight style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, var(--secondary), var(--primary))' }}>
        <div className="container text-center">
          <h2 className="text-white" style={{ marginBottom: '1rem' }}>Ready to Experience Professional Cleaning?</h2>
          <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', maxWidth: '32rem', margin: '0 auto 2rem' }}>
            Join hundreds of satisfied clients who trust Pristine36 for their specialist cleaning needs.
          </p>
          <div className="flex gap-4 justify-center" style={{ flexWrap: 'wrap' }}>
            <Link href="/book" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', fontWeight: '600', padding: '0.875rem 1.75rem', borderRadius: '9999px' }}>
              Book Consultation
            </Link>
            <a href="tel:+44123456789" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', backgroundColor: 'transparent' }}>
              Call: +44 123 456 789
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
