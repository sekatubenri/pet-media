import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: { default: 'ペット保険ナビ | 犬・猫の保険比較・おすすめ', template: '%s | ペット保険ナビ' },
  description: '犬・猫のペット保険を徹底比較。保険料・補償内容・口コミを詳しく解説。愛ペットに合った保険が見つかります。',
  verification: { google: 'XcyMImXtiMlMj5NBeiKQBcD_Vqrw3EDW0TDFBVTAtaA' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-amber-600 text-white shadow">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">🐾 ペット保険ナビ</a>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="/category/dog" className="hover:text-amber-200">犬向け</a>
              <a href="/category/cat" className="hover:text-amber-200">猫向け</a>
              <a href="/category/compare" className="hover:text-amber-200">保険比較</a>
              <a href="/category/beginner" className="hover:text-amber-200">入門ガイド</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-gray-400 text-sm mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center">
            <p>© 2025 ペット保険ナビ | 犬・猫の保険比較・おすすめ</p>
            <p className="mt-1 text-xs">※本サイトにはアフィリエイト広告が含まれます</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
