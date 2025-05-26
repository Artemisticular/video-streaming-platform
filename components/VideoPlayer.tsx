'use client'

import { useEffect, useRef } from 'react'

interface VideoPlayerProps {
  embedUrl: string
  provider: 'vidley' | 'doodstream' | 'fidey' | 'viraltrend' | 'other'
  title: string
}

export default function VideoPlayer({ embedUrl, provider, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Reset player when URL changes
    if (provider === 'vidley' && embedUrl.endsWith('.mp4')) {
      if (videoRef.current) {
        videoRef.current.load()
      }
    } else if (iframeRef.current) {
      iframeRef.current.style.height = '0px'
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.style.height = '100%'
        }
      }, 100)
    }
  }, [embedUrl, provider])

  const getPlayerStyle = () => {
    switch (provider) {
      case 'vidley':
        return {
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '0.5rem',
          backgroundColor: '#000'
        }
      case 'fidey':
        return {
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '0.5rem',
          backgroundColor: '#000'
        }
      case 'viraltrend':
        return {
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '0.5rem',
          backgroundColor: '#000'
        }
      case 'doodstream':
        return {
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '0.5rem'
        }
      default:
        return {
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '0.5rem'
        }
    }
  }

  if (provider === 'vidley' && embedUrl.endsWith('.mp4')) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full"
          controls
          playsInline
          poster={`https://cdn.videy.co/thumb/${embedUrl.split('/').pop()?.replace('.mp4', '.jpg')}`}
        >
          <source src={embedUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={getPlayerStyle()}
      />
    </div>
  )
} 