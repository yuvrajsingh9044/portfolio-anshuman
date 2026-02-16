'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ClientLogos = () => {
  const clients = [
    { name: 'Partha Printing', logo: '/clients/partha-logo.jpg' },
    { name: 'TechStart Solutions', logo: '/clients/techstart-logo.jpg' },
    { name: 'Wellness Coach Pro', logo: '/clients/wellness-logo.jpg' },
    { name: 'Digital Agency', logo: '/clients/agency-logo.jpg' },
    { name: 'Local Business', logo: '/clients/business-logo.jpg' },
    { name: 'Startup Brand', logo: '/clients/startup-logo.jpg' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Growing <span className="text-cyan-400">Businesses & Digital Brands</span>
          </h2>
          <p className="text-gray-400">Delivering excellence to clients across industries</p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-8 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-40 h-24 glass-effect rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <div className="relative w-full h-full opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
