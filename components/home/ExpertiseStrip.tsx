'use client'

import { motion } from 'framer-motion'
import { FaCode, FaCog, FaPenNib, FaCloud } from 'react-icons/fa'

const ExpertiseStrip = () => {
  const expertise = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'End-to-end web applications with modern frameworks',
    },
    {
      icon: FaCog,
      title: 'Automation Systems',
      description: 'Streamline workflows and boost productivity',
    },
    {
      icon: FaPenNib,
      title: 'Technical Content Writing',
      description: 'Clear documentation and engaging tech articles',
    },
    {
      icon: FaCloud,
      title: 'Cloud Deployment',
      description: 'Scalable infrastructure on AWS and modern platforms',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ExpertiseStrip
