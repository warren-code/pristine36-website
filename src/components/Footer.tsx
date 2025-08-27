'use client'

import Link from 'next/link'
import { Phone, Mail, ExternalLink, Clock } from 'lucide-react'
import { LogoSimple } from './Logo'
import { CONTACT } from './Header'

const footerLinks = {
  services: [
    { name: 'Kitchen Deep Clean', href: '/services#kitchen' },
    { name: 'Post Pest Fouling', href: '/services#pest' },
    { name: 'Grease Trap Service', href: '/services#grease' },
    { name: 'Washroom Deep Clean', href: '/services#washroom' },
    { name: 'Sanitisation', href: '/services#sanitisation' },
    { name: 'Mould Clean', href: '/services#mould' },
    { name: 'Biohazard Cleaning', href: '/services#biohazard' },
    { name: 'All Services', href: '/services' },
  ],
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Clients', href: '/clients' },
    { name: 'Coverage Areas', href: '/coverage' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Book Consultation', href: '/contact' },
  ],
  areas: [
    { name: 'Greater London', href: '/coverage#london' },
    { name: 'Essex', href: '/coverage#essex' },
    { name: 'Hertfordshire', href: '/coverage#hertfordshire' },
    { name: 'Kent', href: '/coverage#kent' },
    { name: 'Surrey', href: '/coverage#surrey' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)', width: '100%' }}>
      {/* Main Footer Content */}
      <div style={{ backgroundColor: 'var(--card-bg)', width: '100%' }}>
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
            alignItems: 'start'
          }}>
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  flexShrink: 0,
                  position: 'relative'
                }}>
                  <LogoSimple />
                </div>
                <span style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--primary)' }}>
                  Pristine<span style={{ color: 'var(--secondary)' }}>36</span>
                </span>
              </Link>
              <p className="text-gray-600" style={{ marginBottom: '1.5rem', maxWidth: '400px' }}>
                Professional specialist cleaning services for commercial and residential properties across Greater London and surrounding areas. Available 24/7 for emergency cleaning.
              </p>
              
              {/* Contact Info */}
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '2rem', 
                    height: '2rem', 
                    borderRadius: '0.5rem', 
                    backgroundColor: 'rgba(74, 222, 128, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone style={{ width: '1rem', height: '1rem', color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <a href={`tel:${CONTACT.phones[0]}`} className="text-white hover:text-primary transition-colors" style={{ textDecoration: 'none', fontWeight: '500' }}>
                      {CONTACT.phones[0]}
                    </a>
                    <span style={{ color: 'var(--border)', margin: '0 0.5rem' }}>|</span>
                    <a href={`tel:${CONTACT.phones[1]}`} className="text-white hover:text-primary transition-colors" style={{ textDecoration: 'none', fontWeight: '500' }}>
                      {CONTACT.phones[1]}
                    </a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '2rem', 
                    height: '2rem', 
                    borderRadius: '0.5rem', 
                    backgroundColor: 'rgba(74, 222, 128, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail style={{ width: '1rem', height: '1rem', color: 'var(--primary)' }} />
                  </div>
                  <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-primary transition-colors" style={{ textDecoration: 'none', fontWeight: '500' }}>
                    {CONTACT.email}
                  </a>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '2rem', 
                    height: '2rem', 
                    borderRadius: '0.5rem', 
                    backgroundColor: 'rgba(74, 222, 128, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock style={{ width: '1rem', height: '1rem', color: 'var(--primary)' }} />
                  </div>
                  <span className="text-white" style={{ fontWeight: '500' }}>24/7 Emergency Service</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 style={{ 
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>Services</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 hover:text-white transition-colors duration-200" style={{ textDecoration: 'none', fontSize: '0.9375rem' }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{ 
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>Quick Links</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 hover:text-white transition-colors duration-200" style={{ textDecoration: 'none', fontSize: '0.9375rem' }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas Served */}
            <div>
              <h3 style={{ 
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>Areas We Cover</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footerLinks.areas.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 hover:text-white transition-colors duration-200" style={{ textDecoration: 'none', fontSize: '0.9375rem' }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        {/* Company Info Section */}
        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--background)', borderRadius: '0.75rem' }}>
          <h3 className="font-semibold text-white" style={{ marginBottom: '1rem' }}>Company Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <p className="text-gray-600" style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: 'white' }}>Pristine 36 Limited</strong>
              </p>
              <p className="text-gray-600" style={{ marginBottom: '0.25rem' }}>Company Number: 16213530</p>
              <p className="text-gray-600" style={{ marginBottom: '0.5rem' }}>
                Registered address: <span style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>124 City Road, London, United Kingdom, EC1V 2NX</span>
              </p>
              <a 
                href="https://find-and-update.company-information.service.gov.uk/company/16213530" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors inline-flex items-center gap-1"
                style={{ textDecoration: 'none', fontSize: '0.875rem' }}
              >
                View on Companies House
                <ExternalLink style={{ width: '0.875rem', height: '0.875rem' }} />
              </a>
            </div>
            <div>
              <p className="text-gray-600" style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: 'white' }}>SIC Codes:</strong>
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                <li className="text-gray-600">81100 - Combined facilities support activities</li>
                <li className="text-gray-600">81222 - Specialised cleaning services</li>
                <li className="text-gray-600">81229 - Other building and industrial cleaning</li>
                <li className="text-gray-600">81291 - Disinfecting and exterminating services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
              <p className="text-gray-600" style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                © {new Date().getFullYear()} Pristine 36 Limited. All rights reserved.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'var(--primary)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span className="text-sm text-gray-600">24/7 Emergency Service Available</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-white transition-colors duration-200" style={{ textDecoration: 'none' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-white transition-colors duration-200" style={{ textDecoration: 'none' }}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
