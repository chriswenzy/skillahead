import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skillahead.ng'
  
  const pages = [
    '',
    '/about',
    '/locations',
    '/corporate',
    '/partnership',
    '/schools/data',
    '/schools/programming',
    '/contact',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
  }))
}
