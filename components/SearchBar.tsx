'use client'

import { useState, useEffect, useRef } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/lib/hooks/useDebounce'

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const debouncedSearch = useDebounce(searchQuery, 300)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (debouncedSearch) {
      const params = new URLSearchParams(searchParams.toString())
      params.set('q', debouncedSearch)
      router.push(`/?${params.toString()}`)
    } else if (searchParams.has('q')) {
      const params = new URLSearchParams(searchParams.toString())
      params.delete('q')
      router.push('/')
    }
  }, [debouncedSearch, router, searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search videos..."
          className="w-full px-4 py-2 pl-10 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            ×
          </button>
        )}
      </div>
    </form>
  )
} 