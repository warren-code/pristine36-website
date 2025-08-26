'use client'

import Link from 'next/link'
import { Phone, Mail, ExternalLink } from 'lucide-react'
import { Logo } from './Logo'
import { CONTACT } from './Header'

const footerLinks = {
  services: [
    { name: 'Kitchen Deep Clean', href: '/services#kitchen' },
    { name: 'Biohazard Cleaning', href: '/services#biohazard' },
    { name: 'Grease Management', href: '/services#grease' },
    { name: 'Mould Remediation', href: '/services#mould' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Coverage', href: '/coverage' },
    { name: 'Certifications', href: '/about#certifications' },
    { name: 'Insurance', href: '/about#insurance' },
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
    <footer style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border)', width: '100%', overflowX: 'hidden' }}>
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {/* Company Info */}
          <div className="footer-company-info">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', width: 'fit-content' }}>
              <div style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                <Logo style={{ width: '100%', height: '100%' }} />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>
                Pristine<span style={{ color: 'var(--secondary)' }}>36</span>
              </span>
            </Link>
            <p className="text-gray-600" style={{ marginTop: '1rem' }}>
              Professional specialist cleaning services for commercial and residential properties across Greater London and surrounding areas.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div className="flex items-center justify-center" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', marginBottom: '0.5rem', float: 'left', marginRight: '1rem' }}>
                  <Phone style={{ height: '1rem', width: '1rem' }} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Call Us</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a href={`tel:${CONTACT.phones[0]}`} className="font-medium text-white hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                      {CONTACT.phones[0]}
                    </a>
                    <a href={`tel:${CONTACT.phones[1]}`} className="font-medium text-white hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                      {CONTACT.phones[1]}
                    </a>
                  </div>
                </div>
              </div>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 text-gray-600 hover:text-white transition-colors" style={{ textDecoration: 'none', clear: 'both' }}>
                <div className="flex items-center justify-center" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)' }}>
                  <Mail style={{ height: '1rem', width: '1rem' }} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email Us</div>
                  <div className="font-medium text-white">{CONTACT.email}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white" style={{ marginBottom: '1.5rem' }}>Services</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-white transition-colors duration-200" style={{ textDecoration: 'none' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white" style={{ marginBottom: '1.5rem' }}>Company</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-white transition-colors duration-200" style={{ textDecoration: 'none' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-semibold text-white" style={{ marginBottom: '1.5rem' }}>Areas Served</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-white transition-colors duration-200" style={{ textDecoration: 'none' }}>
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
          <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1.5rem' }}>
            <div className="flex items-center" style={{ flexWrap: 'wrap', gap: '1.5rem' }}>
              <p className="text-gray-600">
                © {new Date().getFullYear()} Pristine 36 Limited. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'var(--primary)', borderRadius: '9999px' }}></div>
                <span className="text-sm text-gray-600">24/7 Emergency Service Available</span>
              </div>
            </div>
            <div className="flex items-center gap-8">
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
    </footer>
  )
}
