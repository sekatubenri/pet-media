import { getAllArticles } from '@/lib/articles'
const BASE_URL = 'https://pet-media.vercel.app'
export async function GET() {
  const articles = getAllArticles().slice(0, 20)
  const items = articles.map(a => `<item><title><![CDATA[]]></title><link>/article/</link><guid>/article/</guid><pubDate></pubDate><description><![CDATA[]]></description></item>`).join('')
  const rss = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>ペット保険ナビ</title><link></link><description>犬・猫のペット保険比較</description><language>ja</language></channel></rss>`  
  return new Response(rss, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}