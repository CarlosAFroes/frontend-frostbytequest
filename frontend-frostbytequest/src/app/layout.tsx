import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FrostbyteQuest',
  description: 'Portfolio, games, and more — by Carlos Froes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gray-950 text-gray-100`}>
        <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-cyan-400 transition-colors">
              ❄️ FrostbyteQuest
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/games" className="hover:text-cyan-400 transition-colors">Games</Link>
              <Link href="/admin" className="hover:text-cyan-400 transition-colors">Admin</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FrostbyteQuest — Built by Carlos Froes
        </footer>
      </body>
    </html>
  )
}
