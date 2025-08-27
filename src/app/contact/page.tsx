'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Upload } from 'lucide-react'
import { CONTACT } from '@/components/Header'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    isMouldIssue: false
  })
  const [photos, setPhotos] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, String(value))
      })
      
      // Add photos if it's a mould issue
      if (formData.isMouldIssue && photos.length > 0) {
        photos.forEach((photo, index) => {
          formDataToSend.append(`photo${index}`, photo)
        })
      }
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend
      })
      
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      setIsSubmitted(true)
    } catch {
      setSubmitError('Failed to send message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.type === 'checkbox' ? target.checked : target.value
    setFormData({
      ...formData,
      [target.name]: value
    })
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files).slice(0, 5) // Max 5 photos
      setPhotos(newPhotos)
    }
  }

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ marginBottom: '1.5rem', color: 'white' }}>
              Contact Us
            </h1>
            <p className="text-xl" style={{ maxWidth: '48rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              Get in touch for a free consultation and quote for your specialist cleaning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section id="calendly" className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Schedule Your Free Consultation</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Choose a convenient time for your initial consultation. Our specialist cleaning experts are ready to discuss your needs.
            </p>
          </div>
          
          {/* Calendly inline widget - Using iframe approach */}
          <div style={{ position: 'relative', width: '100%' }}>
            <iframe
              src={`${CONTACT.calendly}?embed_domain=${typeof window !== 'undefined' ? window.location.hostname : ''}&embed_type=Inline`}
              width="100%"
              height="700"
              frameBorder="0"
              style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                backgroundColor: 'var(--card-bg)'
              }}
              title="Schedule a consultation"
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div>
              {/* Book Consultation CTA */}
              <div style={{ marginBottom: '2rem', padding: '2rem', background: 'linear-gradient(135deg, #20C9B6 0%, #4ADE80 100%)', borderRadius: '1.5rem', textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2rem' }}>Ready to Book a Consultation?</h2>
                <p style={{ color: 'white', marginBottom: '1.5rem', opacity: 0.9, fontSize: '1.125rem' }}>
                  Schedule a free consultation with our specialist cleaning experts
                </p>
                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" style={{ backgroundColor: 'white', color: 'var(--primary)', border: 'none', fontWeight: '600' }}>
                    Book Your Free Consultation
                  </Button>
                </a>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontSize: '1.5rem', color: 'white' }}>Send Us a Message</CardTitle>
                  <CardDescription style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center" style={{ padding: '3rem 0' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: 'rgba(74, 222, 128, 0.1)', marginBottom: '1rem' }}>
                        <CheckCircle2 style={{ height: '2rem', width: '2rem', color: 'var(--primary)' }} />
                      </div>
                      <h3 className="text-2xl font-semibold" style={{ marginBottom: '0.5rem', color: 'white' }}>Thank You!</h3>
                      <p style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                        We&apos;ve received your message and will get back to you soon.
                      </p>
                      {!formData.isMouldIssue && (
                        <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.5rem' }}>
                          <p style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>Want to schedule your consultation now?</p>
                          <a 
                            href={CONTACT.calendly} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: 'var(--primary)', fontWeight: '500' }}
                          >
                            Book your initial call via Calendly →
                          </a>
                        </div>
                      )}
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            name: '',
                            company: '',
                            email: '',
                            phone: '',
                            service: '',
                            message: '',
                            isMouldIssue: false
                          })
                          setPhotos([])
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div>
                          <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                            style={{ 
                              width: '100%', 
                              padding: '0.75rem 1rem', 
                              border: '1px solid var(--border)', 
                              borderRadius: '0.5rem', 
                              fontSize: '16px', // Prevent zoom on iOS
                              minHeight: '48px',
                              backgroundColor: 'var(--card-bg)',
                              color: 'var(--foreground)',
                              WebkitAppearance: 'none',
                            }}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            inputMode="email"
                            style={{ 
                              width: '100%', 
                              padding: '0.75rem 1rem', 
                              border: '1px solid var(--border)', 
                              borderRadius: '0.5rem', 
                              fontSize: '16px', // Prevent zoom on iOS
                              minHeight: '48px',
                              backgroundColor: 'var(--card-bg)',
                              color: 'var(--foreground)',
                              WebkitAppearance: 'none',
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          autoComplete="organization"
                          style={{ 
                            width: '100%', 
                            padding: '0.75rem 1rem', 
                            border: '1px solid var(--border)', 
                            borderRadius: '0.5rem', 
                            fontSize: '16px',
                            minHeight: '48px',
                            backgroundColor: 'var(--card-bg)',
                            color: 'var(--foreground)',
                            WebkitAppearance: 'none',
                          }}
                        />
                      </div>

                      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div>
                          <label htmlFor="phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            autoComplete="tel"
                            inputMode="tel"
                            style={{ 
                              width: '100%', 
                              padding: '0.75rem 1rem', 
                              border: '1px solid var(--border)', 
                              borderRadius: '0.5rem', 
                              fontSize: '16px', // Prevent zoom on iOS
                              minHeight: '48px',
                              backgroundColor: 'var(--card-bg)',
                              color: 'var(--foreground)',
                              WebkitAppearance: 'none',
                            }}
                          />
                        </div>
                        <div>
                          <label htmlFor="service" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>
                            Service Required *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            style={{ 
                              width: '100%', 
                              padding: '0.75rem 1rem', 
                              border: '1px solid var(--border)', 
                              borderRadius: '0.5rem', 
                              fontSize: '16px', // Prevent zoom on iOS
                              minHeight: '48px',
                              backgroundColor: 'var(--card-bg)',
                              color: 'var(--foreground)',
                              WebkitAppearance: 'none',
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                              backgroundPosition: 'right 0.5rem center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '1.5em 1.5em',
                              paddingRight: '2.5rem',
                            }}
                          >
                            <option value="">Select a service</option>
                            <option value="kitchen">Kitchen Deep Clean</option>
                            <option value="biohazard">Biohazard Cleaning</option>
                            <option value="grease">Grease Trap Service</option>
                            <option value="mould">Mould Remediation</option>
                            <option value="commercial">Commercial Cleaning</option>
                            <option value="other">Other Services</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          style={{ 
                            width: '100%', 
                            padding: '0.75rem 1rem', 
                            border: '1px solid var(--border)', 
                            borderRadius: '0.5rem', 
                            fontSize: '16px', // Prevent zoom on iOS
                            resize: 'vertical',
                            minHeight: '120px',
                            backgroundColor: 'var(--card-bg)',
                            color: 'var(--foreground)',
                            WebkitAppearance: 'none',
                          }}
                          placeholder="Please describe your cleaning needs..."
                        />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <input
                          type="checkbox"
                          id="isMouldIssue"
                          name="isMouldIssue"
                          checked={formData.isMouldIssue}
                          onChange={handleChange}
                          style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer' }}
                        />
                        <label htmlFor="isMouldIssue" style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.9)', cursor: 'pointer' }}>
                          This is a mould issue
                        </label>
                      </div>

                      {formData.isMouldIssue && (
                        <div style={{ padding: '1rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.5rem', border: '1px solid var(--primary)' }}>
                          <label htmlFor="photos" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>
                            Upload Photos (Optional, max 5)
                          </label>
                          <input
                            type="file"
                            id="photos"
                            name="photos"
                            accept="image/*"
                            multiple
                            onChange={handlePhotoChange}
                            style={{ display: 'none' }}
                          />
                          <label 
                            htmlFor="photos"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              padding: '0.75rem 1rem',
                              backgroundColor: 'transparent',
                              border: '2px dashed var(--border)',
                              borderRadius: '0.5rem',
                              cursor: 'pointer',
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '0.875rem',
                              transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'var(--primary)'
                              e.currentTarget.style.color = 'var(--primary)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'var(--border)'
                              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                            }}
                          >
                            <Upload style={{ width: '1rem', height: '1rem' }} />
                            {photos.length > 0 ? `${photos.length} photo(s) selected` : 'Choose photos'}
                          </label>
                          <p className="text-sm" style={{ marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', fontStyle: 'italic' }}>
                            Photos help us assess the mould issue without requiring an initial site visit
                          </p>
                        </div>
                      )}

                      {submitError && (
                        <div style={{ padding: '0.75rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.5)', borderRadius: '0.5rem' }}>
                          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>{submitError}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        variant="secondary"
                        disabled={isSubmitting}
                        style={{ width: '100%' }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: 'white' }}>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', backgroundColor: 'rgba(74, 222, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: '0.5rem' }}>
                      <Phone style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    </div>
                    <p className="font-medium" style={{ color: 'white', marginBottom: '0.25rem' }}>Phone</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <a href={`tel:${CONTACT.phones[0]}`} className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                        {CONTACT.phones[0]}
                      </a>
                      <a href={`tel:${CONTACT.phones[1]}`} className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                        {CONTACT.phones[1]}
                      </a>
                    </div>
                  </div>

                  <a href={`mailto:${CONTACT.email}`} className="flex items-start hover:opacity-90 transition-opacity" style={{ gap: '1rem', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', backgroundColor: 'rgba(74, 222, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: 'white' }}>Email</p>
                      <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{CONTACT.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start" style={{ gap: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', backgroundColor: 'rgba(74, 222, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: 'white' }}>Service Areas</p>
                      <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Greater London, Essex, Hertfordshire, Kent, Surrey</p>
                    </div>
                  </div>

                  <div className="flex items-start" style={{ gap: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', backgroundColor: 'rgba(74, 222, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Clock style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: 'white' }}>Emergency Service</p>
                      <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>24/7 Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle style={{ color: 'white' }}>Prefer to Book a Consultation?</CardTitle>
                  <CardDescription style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Schedule a time that works for you using our online booking system.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="outline" style={{ width: '100%' }}>
                      Book Consultation
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
