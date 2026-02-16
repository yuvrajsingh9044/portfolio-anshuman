'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const CaseStudiesPreview = () => {
  const caseStudies = [
    {
      client: 'Partha Printing Solutions',
      image: '/clients/partha-website.jpg',
      services: ['Website Development', 'SEO Optimization'],
      result: '3× inquiry growth',
      metric: '+200%',
    },
    {
      client: 'TechStart Solutions',
      image: '/clients/techstart-website.jpg',
      services: ['Portfolio Platform', 'Lead Automation'],
      result: '5× lead generation',
      metric: '+400%',
    },
    {
      client: 'Wellness Coach Pro',
      image: '/clients/wellness-website.jpg',
      services: ['Landing Page', 'Booking System'],
      result: '200+ bookings/month',
      metric: '+150%',
    },
  ]

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
            Success <span className="text-cyan-400">Stories</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real results from real clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={study.image}
                  alt={study.client}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{study.client}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Result</p>
                    <p className="text-white font-semibold">{study.result}</p>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400">{study.metric}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            View All Case Studies <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview
