'use client'

import { motion } from 'framer-motion'

const IndustriesServed = () => {
  const industries = [
    'Startups',
    'Agencies',
    'Coaches & Consultants',
    'Local Businesses',
    'Tech Brands',
    'E-commerce',
    'Personal Brands',
    'SaaS Companies',
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
            Industries <span className="text-cyan-400">Served</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Delivering solutions across diverse sectors
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-3 glass-effect rounded-full text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/10 transition-all cursor-pointer"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesServed
