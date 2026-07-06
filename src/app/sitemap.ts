import { getAllArticles } from '@/lib/articles'
import type { MetadataRoute } from 'next'
const BASE_URL = 'https://pet-media.vercel.app'
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: "https://pet-media.vercel.app/category/dog", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://pet-media.vercel.app/category/cat", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://pet-media.vercel.app/category/compare", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://pet-media.vercel.app/category/beginner", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...articles.map(a => ({ url: `${BASE_URL}/article/${a.slug}`, lastModified: new Date(a.date), changeFrequency: 'weekly' as const, priority: 0.8 })),
  ]
}