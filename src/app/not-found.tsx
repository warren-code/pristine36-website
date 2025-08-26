'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div style={{ width: '100%', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container text-center">
        <div style={{ maxWidth: '32rem', margin: '0 auto' }}>
          <h1 style={{ fontSize: '6rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '1rem' }}>
            404
          </h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600" style={{ marginBottom: '2rem' }}>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>
          <div className="button-group">
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home style={{ marginRight: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                <ArrowLeft style={{ marginRight: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
