import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pristine36.com'
  
  const routes = [
    '',
    '/about',
    '/services', 
    '/coverage',
    '/clients',
    '/contact',
    '/privacy',
    '/terms'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
