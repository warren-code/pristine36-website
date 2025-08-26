import Script from 'next/script'

interface SEOProps {
  title?: string
  description?: string
  path?: string
  schemaType?: 'Organization' | 'LocalBusiness' | 'Service' | 'FAQPage'
}

export default function SEO({ title, path = '' }: SEOProps) {
  const baseUrl = 'https://pristine36.com'
  const fullUrl = `${baseUrl}${path}`

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': baseUrl,
    name: 'Pristine36',
    image: `${baseUrl}/logo.png`,
    description: 'Professional specialist cleaning services in Greater London including kitchen extract cleaning, biohazard cleaning, and commercial deep cleaning.',
    url: baseUrl,
    telephone: '+44123456789',
    email: 'info@pristine36.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Greater London',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5074,
      longitude: -0.1278
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 51.5074,
          longitude: -0.1278
        },
        geoRadius: '50000'
      }
    ],
    priceRange: '££-£££',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Specialist Cleaning Services',
      itemListElement: [
        {
          '@type': 'Service',
          name: 'Kitchen Extract Cleaning',
          description: 'TR19 compliant commercial kitchen deep cleaning and grease removal'
        },
        {
          '@type': 'Service',
          name: 'Biohazard Cleaning',
          description: 'Professional crime scene cleaning and biohazard decontamination'
        },
        {
          '@type': 'Service',
          name: 'Grease Trap Service',
          description: 'Comprehensive grease trap cleaning and FOG waste management'
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '47'
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      ...(path && path !== '/' ? [{
        '@type': 'ListItem',
        position: 2,
        name: title || 'Page',
        item: fullUrl
      }] : [])
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}
