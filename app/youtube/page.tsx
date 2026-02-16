'use client'

import { motion } from 'framer-motion'
import { FaYoutube, FaUsers, FaVideo, FaEye, FaMicrophone } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import VideoCard from '@/components/youtube/VideoCard'
import VideoModal from '@/components/youtube/VideoModal'
import VideoSkeleton from '@/components/youtube/VideoSkeleton'
import { YouTubeVideo, formatViewCount } from '@/lib/youtube'

interface YouTubeData {
  channel: {
    id: string
    title: string
    description: string
    thumbnail: string
    subscriberCount: string
    videoCount: string
    viewCount: string
  } | null
  videos: YouTubeVideo[]
}

export default function YouTube() {
  const [data, setData] = useState<YouTubeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchYouTubeData()
  }, [])

  const fetchYouTubeData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/youtube')
      
      if (!response.ok) {
        throw new Error('Failed to fetch YouTube data')
      }

      const result = await response.json()
      setData(result)
    } catch (err) {
      console.error('Error fetching YouTube data:', err)
      setError('Failed to load YouTube content. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const podcastThemes = [
    'Career Development',
    'Technical Skills',
    'Industry Insights',
    'Startup Stories',
    'Technology Trends',
    'Personal Growth',
  ]

  return (
    <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Channel Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center shadow-lg shadow-red-600/50">
              <FaYoutube className="text-6xl text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Achiever&apos;s Ki <span className="text-red-500">Duniya</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                A podcast and YouTube channel featuring tech tutorials, developer interviews, and industry insights to help you grow your career
              </p>
              <a
                href="https://youtube.com/@acheiverskiduniya5891"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition-all"
              >
                <FaYoutube className="text-2xl" />
                Subscribe Now
              </a>
            </div>
          </div>
        </motion.div>

        {/* Channel Stats */}
        {!loading && data?.channel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: FaUsers, label: 'Subscribers', value: formatViewCount(data.channel.subscriberCount) },
              { icon: FaVideo, label: 'Videos', value: data.channel.videoCount },
              { icon: FaMicrophone, label: 'Podcast Episodes', value: '25+' },
              { icon: FaEye, label: 'Total Views', value: formatViewCount(data.channel.viewCount) },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <stat.icon className="text-4xl text-red-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Channel Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            What You&apos;ll <span className="text-red-500">Learn</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Tech Interviews',
                description: 'In-depth conversations with industry professionals sharing their experiences',
              },
              {
                title: 'Developer Insights',
                description: 'Practical tips, tutorials, and best practices for modern development',
              },
              {
                title: 'Industry Discussions',
                description: 'Analysis of tech trends, career advice, and industry developments',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-red-500">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Podcast Interview Themes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-effect rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Podcast Interview <span className="text-red-500">Themes</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {podcastThemes.map((theme) => (
              <span
                key={theme}
                className="px-4 py-2 glass-effect rounded-full text-red-400 border border-red-400/20 hover:bg-red-400/10 transition-all"
              >
                {theme}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-effect rounded-2xl p-8 text-center mb-16"
          >
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={fetchYouTubeData}
              className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition-all"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {/* Latest Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Latest <span className="text-red-500">Videos</span>
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <VideoSkeleton key={i} />
              ))}
            </div>
          ) : data?.videos && data.videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.videos.map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={index}
                  onPlay={setSelectedVideo}
                />
              ))}
            </div>
          ) : (
            <div className="glass-effect rounded-2xl p-12 text-center">
              <p className="text-gray-400">No videos found</p>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center glass-effect rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t Miss Out on <span className="text-red-500">New Content</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Subscribe to get notified about new videos, tutorials, and interviews
          </p>
          <a
            href="https://youtube.com/@acheiverskiduniya5891?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition-all text-lg"
          >
            <FaYoutube className="text-2xl" />
            Subscribe & Watch More
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  )
}
