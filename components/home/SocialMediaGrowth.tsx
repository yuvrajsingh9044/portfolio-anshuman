'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaChartLine, FaUsers, FaHeart } from 'react-icons/fa'

const SocialMediaGrowth = () => {
  const metrics = [
    { icon: FaUsers, label: 'Followers Growth', value: '+300%', color: 'cyan' },
    { icon: FaHeart, label: 'Engagement Rate', value: '8.5%', color: 'pink' },
    { icon: FaChartLine, label: 'Leads Generated', value: '500+', color: 'purple' },
  ]

  const platforms = [
    { name: 'Instagram', icon: FaInstagram, accounts: '12+', color: 'pink' },
    { name: 'LinkedIn', icon: FaLinkedin, accounts: '8+', color: 'blue' },
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
            Social Media <span className="text-cyan-400">Growth Results</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Proven strategies that drive real engagement and business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Metrics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Performance Metrics</h3>
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-${metric.color}-400/20 flex items-center justify-center`}>
                      <metric.icon className={`text-2xl text-${metric.color}-400`} />
                    </div>
                    <span className="text-gray-300">{metric.label}</span>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{metric.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Platforms Managed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Platforms Managed</h3>
            <div className="space-y-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-full bg-${platform.color}-400/20 flex items-center justify-center`}>
                      <platform.icon className={`text-3xl text-${platform.color}-400`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{platform.name}</h4>
                      <p className="text-gray-400">{platform.accounts} accounts managed</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-cyan-400">+250%</p>
                      <p className="text-xs text-gray-400">Growth</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-400">7.2%</p>
                      <p className="text-xs text-gray-400">Engagement</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-pink-400">200+</p>
                      <p className="text-xs text-gray-400">Leads</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Analytics Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-cyan-400 mb-2">20+</p>
              <p className="text-gray-400 text-sm">Accounts Managed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400 mb-2">50K+</p>
              <p className="text-gray-400 text-sm">Total Reach</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-400 mb-2">500+</p>
              <p className="text-gray-400 text-sm">Leads Generated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400 mb-2">8.5%</p>
              <p className="text-gray-400 text-sm">Avg Engagement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialMediaGrowth
