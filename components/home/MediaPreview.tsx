'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaYoutube, FaMicrophone, FaArrowRight, FaPlay } from 'react-icons/fa'

const MediaPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Media <span className="text-cyan-400">Presence</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Sharing knowledge through podcasts and video content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Podcast */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <FaMicrophone className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">Achiever's Ki Duniya</h3>
                <p className="text-gray-400">Podcast</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Interviewing industry professionals and sharing insights on career growth, technology trends, and personal development.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-400">25+</p>
                <p className="text-xs text-gray-400">Episodes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">20+</p>
                <p className="text-xs text-gray-400">Guests</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-pink-400">5K+</p>
                <p className="text-xs text-gray-400">Listeners</p>
              </div>
            </div>
          </motion.div>

          {/* YouTube */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                <FaYoutube className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-500">YouTube Channel</h3>
                <p className="text-gray-400">Tech Tutorials & Interviews</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Creating educational content on web development, Python programming, and career advice for aspiring developers.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-500">45+</p>
                <p className="text-xs text-gray-400">Videos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-400">5.2K</p>
                <p className="text-xs text-gray-400">Subscribers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-400">250K+</p>
                <p className="text-xs text-gray-400">Views</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/youtube"
            className="inline-flex items-center gap-2 px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            Explore Media Presence <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default MediaPreview
