'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { LogoSimple } from './Logo'

// Real contact information
export const CONTACT = { 
  phones: ["07860249950", "07932020944"], 
  email: "enquiries@pristine36.co.uk", 
  calendly: "https://calendly.com/enquiries-pristine36/30min" 
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Coverage', href: '/coverage' },
  { name: 'Clients', href: '/clients' },
  { name: 'Book', href: '/book' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }
      
      setScrolled(currentScrollY > 10)
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Handle touch swipe to close
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return

    const touchEndX = e.touches[0].clientX
    const touchEndY = e.touches[0].clientY
    const deltaX = touchStartX.current - touchEndX
    const deltaY = touchStartY.current - touchEndY

    // Swipe right to close (only if horizontal swipe is dominant)
    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < -50) {
      setMobileMenuOpen(false)
      touchStartX.current = null
      touchStartY.current = null
    }
  }

  const headerStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'var(--card-bg)' : 'rgba(43, 52, 64, 0.95)',
    backdropFilter: 'blur(8px)',
    boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' : 'none',
    WebkitBackdropFilter: 'blur(8px)', // iOS Safari support
    transform: mobileMenuOpen || scrollDirection === 'up' ? 'translateY(0)' : scrolled ? 'translateY(-20%)' : 'translateY(0)',
  }

  const navStyle = {
    display: 'flex',
    height: scrolled && !mobileMenuOpen ? '4rem' : '5rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'height 0.3s ease',
  }

  const desktopNavStyle = {
    alignItems: 'center',
    gap: '1.75rem',
  }

  const mobileMenuStyle = {
    transition: 'all 0.3s ease',
    maxHeight: mobileMenuOpen ? '100vh' : '0',
    opacity: mobileMenuOpen ? 1 : 0,
    overflow: 'hidden',
  }

  return (
    <header style={headerStyle}>
      <nav className="container" aria-label="Global">
        <div style={navStyle}>
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} aria-label="Pristine36 Home">
              <div style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                <LogoSimple style={{ width: '100%', height: '100%' }} aria-hidden="true" />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--primary)' }}>
                Pristine<span style={{ color: 'var(--secondary)' }}>36</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex" style={desktopNavStyle}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-white font-medium transition-colors duration-200"
                style={{ fontSize: '0.95rem' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-3">
              <a
                href={`tel:${CONTACT.phones[0]}`}
                className="flex items-center gap-2 text-gray-600 hover:text-white font-medium transition-colors"
                title="Call us directly"
                style={{ fontSize: '0.875rem' }}
              >
                <Phone style={{ width: '1rem', height: '1rem' }} />
                <span>{CONTACT.phones[0]}</span>
              </a>
              <span style={{ color: 'var(--border)' }}>|</span>
              <a
                href={`tel:${CONTACT.phones[1]}`}
                className="text-gray-600 hover:text-white font-medium transition-colors"
                title="Alternative number"
                style={{ fontSize: '0.875rem' }}
              >
                {CONTACT.phones[1]}
              </a>
            </div>
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.9375rem' }}
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem',
                minWidth: '48px',
                minHeight: '48px',
                color: 'var(--foreground)',
                borderRadius: '0.5rem',
                transition: 'all 0.2s',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--card-bg)'
                e.currentTarget.style.color = 'var(--secondary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--foreground)'
              }}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X style={{ height: '1.5rem', width: '1.5rem' }} aria-hidden="true" />
              ) : (
                <Menu style={{ height: '1.5rem', width: '1.5rem' }} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="lg:hidden" style={mobileMenuStyle} ref={menuRef}>
        <div 
          style={{
            backgroundColor: 'var(--card-bg)',
            borderTop: '1px solid var(--border)',
            padding: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
            minHeight: 'calc(100vh - 5rem)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--background)'
                  e.currentTarget.style.color = 'var(--secondary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a
                href={`tel:${CONTACT.phones[0]}`}
                className="flex items-center justify-center gap-2"
                style={{
                  flex: 1,
                  padding: '0.75rem 0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: '500',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                }}
              >
                <Phone style={{ width: '1rem', height: '1rem' }} />
                <span>{CONTACT.phones[0]}</span>
              </a>
              <a
                href={`tel:${CONTACT.phones[1]}`}
                className="flex items-center justify-center"
                style={{
                  flex: 1,
                  padding: '0.75rem 0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: '500',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                }}
              >
                {CONTACT.phones[1]}
              </a>
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center justify-center gap-2"
              style={{
                padding: '0.75rem 1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '500',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
            >
              <Mail style={{ width: '1rem', height: '1rem' }} />
              <span>{CONTACT.email}</span>
            </a>
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
