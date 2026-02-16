'use client'

import { motion } from 'framer-motion'
import { FaRobot, FaEnvelope, FaWhatsapp, FaDatabase } from 'react-icons/fa'

const AutomationShowcase = () => {
  const automations = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp Auto-Reply Bot',
      problem: 'Manual responses taking 5+ hours daily',
      solution: 'Intelligent bot handling customer queries 24/7',
      timeSaved: '25 hours/week',
      color: 'green',
    },
    {
      icon: FaEnvelope,
      title: 'Email Automation',
      problem: 'Lost leads due to delayed follow-ups',
      solution: 'Automated drip campaigns with personalization',
      timeSaved: '15 hours/week',
      color: 'cyan',
    },
    {
      icon: FaRobot,
      title: 'Lead Capture Funnel',
      problem: 'Manual lead qualification process',
      solution: 'Automated scoring and routing system',
      timeSaved: '20 hours/week',
      color: 'purple',
    },
    {
      icon: FaDatabase,
      title: 'CRM Integration',
      problem: 'Data scattered across platforms',
      solution: 'Unified dashboard with auto-sync',
      timeSaved: '10 hours/week',
      color: 'pink',
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
            Automation <span className="text-cyan-400">Systems</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Save time, reduce costs, and scale your operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {automations.map((auto, index) => (
            <motion.div
              key={auto.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-lg bg-${auto.color}-400/20 flex items-center justify-center flex-shrink-0`}>
                  <auto.icon className={`text-2xl text-${auto.color}-400`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{auto.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-red-400 mb-1">Problem:</p>
                  <p className="text-gray-300 text-sm">{auto.problem}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400 mb-1">Solution:</p>
                  <p className="text-gray-300 text-sm">{auto.solution}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Time Saved:</span>
                  <span className="text-xl font-bold text-cyan-400">{auto.timeSaved}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-2xl p-8 text-center"
        >
          <p className="text-2xl font-bold text-white mb-2">
            Total Time Saved for Clients
          </p>
          <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            70+ Hours/Week
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AutomationShowcase
