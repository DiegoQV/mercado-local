import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout/'], // Usually better not to index checkout or specific private flows
    },
    sitemap: 'https://mercado-digital-chachapoyas.vercel.app/sitemap.xml',
  }
}
