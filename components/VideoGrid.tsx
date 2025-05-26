'use client'

import { motion, AnimatePresence } from 'framer-motion'
import VideoCard from './VideoCard'

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  category: string
  provider: 'vidley' | 'doodstream' | 'fidey' | 'viraltrend' | 'other'
}

interface VideoGridProps {
  videos: Video[]
  searchQuery?: string
}

export default function VideoGrid({ videos, searchQuery }: VideoGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8"
          >
            <p className="text-gray-600 dark:text-gray-400 text-center text-lg">
              {videos.length === 0 ? (
                <span className="text-red-500 dark:text-red-400">
                  No videos found for "{searchQuery}"
                </span>
              ) : (
                <span className="text-blue-500 dark:text-blue-400">
                  Found {videos.length} video{videos.length === 1 ? '' : 's'} for "{searchQuery}"
                </span>
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <VideoCard
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                duration={video.duration}
                category={video.category}
                provider={video.provider}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {videos.length === 0 && !searchQuery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No videos available at the moment.
          </p>
        </motion.div>
      )}
    </>
  )
} 