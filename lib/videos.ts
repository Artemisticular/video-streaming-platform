import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const videosDirectory = path.join(process.cwd(), 'content/videos')

export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  category: string
  provider: 'vidley' | 'doodstream' | 'fidey' | 'viraltrend' | 'other'
  embedUrl: string
  date: string
  tags?: string[]
  content?: string
}

export async function getAllVideos(): Promise<Video[]> {
  const fileNames = fs.readdirSync(videosDirectory)
  const allVideosData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(videosDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        id,
        ...data,
      } as Video
    })

  return allVideosData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getVideoById(id: string): Promise<Video | null> {
  try {
    const fullPath = path.join(videosDirectory, `${id}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const video: Video = {
      id,
      title: data.title,
      description: data.description,
      thumbnail: data.thumbnail,
      duration: data.duration,
      category: data.category,
      provider: data.provider,
      embedUrl: data.embedUrl,
      date: data.date,
      tags: data.tags,
      content
    }

    return video
  } catch (error) {
    return null
  }
}

export async function getVideosByCategory(category: string): Promise<Video[]> {
  const allVideos = await getAllVideos()
  return allVideos.filter((video) => video.category.toLowerCase() === category.toLowerCase())
} 