'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ClockIcon } from '@heroicons/react/24/outline'

interface VideoCardProps {
  id: string
  title: string
  thumbnail: string
  duration: string
  category: string
  provider: 'vidley' | 'doodstream' | 'fidey' | 'viraltrend' | 'other'
}

export default function VideoCard({ id, title, thumbnail, duration, category, provider }: VideoCardProps) {
  const getProviderColor = (provider: string) => {
    switch (provider) {
      case 'fidey':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
      case 'vidley':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
      case 'doodstream':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
      case 'viraltrend':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
    }
  }

  return (
    <Link href={`/watch/${id}`} className="video-card">
      <div className="relative aspect-video">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="video-thumbnail object-cover"
          priority={false}
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {duration}
        </div>
      </div>
      <div className="video-info">
        <h3 className="video-title">{title}</h3>
        <div className="video-meta">
          <span className="category-badge">{category}</span>
          <span className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4" />
            {duration}
          </span>
          <span className={`text-xs uppercase px-2 py-1 rounded-full ${getProviderColor(provider)}`}>
            {provider}
          </span>
        </div>
      </div>
    </Link>
  )
} 