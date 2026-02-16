'use client'

import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import Image from 'next/image'
import { YouTubeVideo, formatDate } from '@/lib/youtube'

interface VideoCardProps {
  video: YouTubeVideo
  index: number
  onPlay: (videoId: string) => void
}

export default function VideoCard({ video, index, onPlay }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onPlay(video.id)}
      className="glass-effect rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
    >
      <div className="relative h-48">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/50">
            <FaPlay className="text-2xl text-white ml-1" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors mb-2 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-400 text-sm">{formatDate(video.publishedAt)}</p>
      </div>
    </motion.div>
  )
}
