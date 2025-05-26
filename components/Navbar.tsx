'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

const categories = [
  { name: 'All', href: '/' },
  { name: 'Movies', href: '/category/movies' },
  { name: 'Series', href: '/category/series' },
  { name: 'Anime', href: '/category/anime' },
  { name: 'Documentary', href: '/category/documentary' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            VideoStream
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`nav-link ${pathname === category.href ? 'active' : ''}`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
} 