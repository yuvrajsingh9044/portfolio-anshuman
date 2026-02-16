'use client'

import { motion } from 'framer-motion'
import { FaSearch, FaLightbulb, FaCode, FaRocket } from 'react-icons/fa'

const WorkProcess = () => {
  const steps = [
    {
      step: '01',
      icon: FaSearch,
      title: 'Discovery & Consultation',
      description: 'Understanding your goals, challenges, and target audience',
    },
    {
      step: '02',
      icon: FaLightbulb,
      title: 'Strategy & Planning',
      description: 'Creating a roadmap with clear milestones and deliverables',
    },
    {
      step: '03',
      icon: FaCode,
      title: 'Development & Automation',
      description: 'Building your solution with best practices and modern tech',
    },
    {
      step: '04',
      icon: FaRocket,
      title: 'Launch & Growth Support',
      description: 'Deployment, training, and ongoing optimization',
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
            How I <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A proven process that delivers results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-6 h-full hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                    <step.icon className="text-2xl text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
