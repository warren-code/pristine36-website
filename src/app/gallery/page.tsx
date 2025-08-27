'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

// Gallery images data
const galleryImages = [
  { id: 1, src: '/gallery/kitchen-clean-1.jpg', alt: 'Commercial kitchen deep cleaning', category: 'Kitchen Cleaning' },
  { id: 2, src: '/gallery/grease-trap-1.jpg', alt: 'Grease trap cleaning service', category: 'Grease Management' },
  { id: 3, src: '/gallery/washroom-1.jpg', alt: 'Washroom deep cleaning', category: 'Washroom Cleaning' },
  { id: 4, src: '/gallery/carpet-1.jpg', alt: 'Professional carpet cleaning', category: 'Carpet Cleaning' },
  { id: 5, src: '/gallery/kitchen-extract-1.jpg', alt: 'Kitchen extract cleaning', category: 'Kitchen Cleaning' },
  { id: 6, src: '/gallery/biohazard-1.jpg', alt: 'Biohazard cleaning service', category: 'Specialist Cleaning' },
  { id: 7, src: '/gallery/bar-clean-1.jpg', alt: 'Bar deep cleaning', category: 'Bar Cleaning' },
  { id: 8, src: '/gallery/mould-1.jpg', alt: 'Mould remediation service', category: 'Mould Remediation' },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    setSelectedImage((prev) => 
      prev !== null ? (prev > 0 ? prev - 1 : galleryImages.length - 1) : null
    )
  }

  const goToNext = () => {
    setSelectedImage((prev) => 
      prev !== null ? (prev < galleryImages.length - 1 ? prev + 1 : 0) : null
    )
  }

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ marginBottom: '1.5rem', color: 'white' }}>
              Our Work Gallery
            </h1>
            <p className="text-xl" style={{ maxWidth: '48rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              See the quality and attention to detail we bring to every specialist cleaning project
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="gallery-item"
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => openLightbox(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '100%',
                  backgroundColor: 'var(--card-bg)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}>
                    <p>Image Placeholder</p>
                    <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{image.alt}</p>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                }}>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--primary)',
                    marginBottom: '0.25rem' 
                  }}>
                    {image.category}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'white' }}>
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={closeLightbox}
        >
          <button
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
            onClick={closeLightbox}
          >
            <X style={{ width: '2rem', height: '2rem' }} />
          </button>
          
          <button
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.5rem',
            }}
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft style={{ width: '2rem', height: '2rem' }} />
          </button>

          <div 
            style={{ 
              maxWidth: '90vw', 
              maxHeight: '90vh',
              backgroundColor: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '1rem',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
              {galleryImages[selectedImage].alt}
            </p>
            <div style={{
              width: '600px',
              height: '450px',
              backgroundColor: 'var(--background)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.5rem',
            }}>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Image Placeholder</p>
            </div>
            <p style={{ 
              color: 'var(--primary)', 
              textAlign: 'center', 
              marginTop: '1rem',
              fontSize: '0.875rem' 
            }}>
              {galleryImages[selectedImage].category}
            </p>
          </div>

          <button
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.5rem',
            }}
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight style={{ width: '2rem', height: '2rem' }} />
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section style={{ 
        paddingTop: '6rem', 
        paddingBottom: '6rem', 
        background: 'linear-gradient(135deg, var(--secondary), var(--primary))' 
      }}>
        <div className="container text-center" style={{ maxWidth: '48rem' }}>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg" style={{ marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            Let us bring the same level of excellence to your cleaning project
          </p>
          <div className="flex gap-4 justify-center" style={{ flexWrap: 'wrap' }}>
            <Link href="/book" style={{ textDecoration: 'none' }}>
              <Button size="lg" style={{ backgroundColor: 'white', color: 'var(--primary)', fontWeight: '600' }}>
                Get Your Free Quote
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
