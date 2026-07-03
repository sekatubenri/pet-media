import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'
const categories = [
  { slug: 'dog', label: '犬向け保険', desc: '犬のペット保険を比較', emoji: '🐕' },
  { slug: 'cat', label: '猫向け保険', desc: '猫のペット保険を比較', emoji: '🐈' },
  { slug: 'compare', label: '保険比較', desc: '保険料・補償を徹底比較', emoji: '📊' },
  { slug: 'beginner', label: '入門ガイド', desc: 'ペット保険の基礎知識', emoji: '🌱' },
]
export default function Home() {
  const articles = getAllArticles().slice(0, 6)
  return (
    <div>
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-2xl p-8 mb-10 text-center">
        <h1 className="text-3xl font-bold mb-3">ペット保険を徹底比較</h1>
        <p className="text-lg opacity-90">愛犬・愛猫に最適な保険が見つかる</p>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-gray-700">カテゴリから探す</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(c => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="bg-white rounded-xl p-5 shadow hover:shadow-md transition text-center border border-amber-100">
              <div className="text-3xl mb-2">{c.emoji}</div>
              <div className="font-bold text-gray-800 mb-1">{c.label}</div>
              <div className="text-xs text-gray-500">{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>
      {articles.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-700">最新記事</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {articles.map(a => (
              <Link key={a.slug} href={`/article/${a.slug}`} className="bg-white rounded-xl p-5 shadow hover:shadow-md transition border border-gray-100">
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{a.category}</span>
                <h3 className="font-bold mt-2 mb-1 text-gray-800 line-clamp-2">{a.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{a.description}</p>
                <p className="text-xs text-gray-400 mt-2">{a.date}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
