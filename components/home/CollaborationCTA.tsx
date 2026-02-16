'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaWhatsapp, FaCalendar } from 'react-icons/fa'

const CollaborationCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Let's Build Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Digital Success Story
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            >
              Ready to transform your business with cutting-edge digital solutions? Let's discuss
              your project and create something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
              >
                Start Project <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <FaCalendar /> Book Consultation
              </Link>
              <a
                href="https://wa.me/919956888757"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition-all inline-flex items-center gap-2"
              >
                <FaWhatsapp /> WhatsApp Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Automation Expert
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Growth Focused
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> 24/7 Support
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollaborationCTA
