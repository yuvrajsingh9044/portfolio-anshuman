'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transforming Ideas into{' '}
              <span className="neon-text bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Scalable Digital Solutions
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Full-Stack Developer | Python & Django Specialist | Automation Builder
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Building high-performance web platforms, automation systems, and scalable
              applications that drive measurable business growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://www.linkedin.com/in/anshuman-mishra-83a069233"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 group"
              >
                <FaLinkedin className="group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative glass-effect p-2 rounded-2xl">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Anshuman Mishra"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full blur-3xl opacity-60 animate-float"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
