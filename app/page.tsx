import { getAllVideos } from '@/lib/videos'
import SearchBar from '@/components/SearchBar'
import VideoGrid from '@/components/VideoGrid'

interface SearchParams {
  q?: string
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const videos = await getAllVideos()
  const searchQuery = searchParams.q?.toLowerCase() || ''

  const filteredVideos = searchQuery
    ? videos.filter(
        (video) =>
          video.title.toLowerCase().includes(searchQuery) ||
          video.description.toLowerCase().includes(searchQuery) ||
          video.category.toLowerCase().includes(searchQuery)
      )
    : videos

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Video Streaming Platform
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Discover and watch amazing videos from various providers
        </p>
        <SearchBar />
      </div>

      <VideoGrid videos={filteredVideos} searchQuery={searchQuery} />
    </main>
  )
} 