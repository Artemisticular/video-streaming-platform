import { getVideoById, getAllVideos } from '@/lib/videos'
import VideoCard from '@/components/VideoCard'
import { notFound } from 'next/navigation'

interface VideoPlayerPageProps {
  params: {
    id: string
  }
}

export default async function VideoPlayerPage({ params }: VideoPlayerPageProps) {
  const video = await getVideoById(params.id)
  
  if (!video) {
    notFound()
  }

  const relatedVideos = (await getAllVideos())
    .filter((v) => v.category === video.category && v.id !== video.id)
    .slice(0, 4)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="aspect-video w-full bg-black">
          <iframe
            src={video.embedUrl}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{video.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="category-badge">{video.category}</span>
            <span>{video.duration}</span>
            <span className="uppercase">{video.provider}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{video.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Related Videos</h2>
        <div className="grid gap-4">
          {relatedVideos.map((relatedVideo) => (
            <VideoCard
              key={relatedVideo.id}
              id={relatedVideo.id}
              title={relatedVideo.title}
              thumbnail={relatedVideo.thumbnail}
              duration={relatedVideo.duration}
              category={relatedVideo.category}
              provider={relatedVideo.provider}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 