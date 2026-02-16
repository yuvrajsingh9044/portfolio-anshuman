'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaCalendar } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (integrate with EmailJS or backend)
    console.log('Form submitted:', formData)
    alert('Thank you! I will get back to you soon.')
  }

  const contactMethods = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+91 99568 88757',
      href: 'https://wa.me/919956888757',
      color: 'text-green-500',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'manshumanmishra221122@gmail.com',
      href: 'mailto:manshumanmishra221122@gmail.com',
      color: 'text-cyan-400',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anshuman-mishra',
      href: 'https://www.linkedin.com/in/anshuman-mishra-83a069233',
      color: 'text-blue-500',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/01Anshuman',
      href: 'https://github.com/01Anshuman',
      color: 'text-purple-400',
    },
  ]

  return (
    <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-xl">
            Let's discuss your project and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Project Type</label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="web-app">Web Application</option>
                  <option value="automation">Automation System</option>
                  <option value="api">API Development</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Budget Range</label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="<5k">Less than $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact Methods</h2>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center ${method.color}`}>
                      <method.icon className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{method.label}</div>
                      <div className="text-white group-hover:text-cyan-400 transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Quick Actions</h2>
              <div className="space-y-3">
                <a
                  href="/resume-anshuman.pdf"
                  download
                  className="flex items-center gap-3 px-6 py-3 glass-effect rounded-lg hover:bg-white/10 transition-all"
                >
                  <FaDownload className="text-cyan-400" />
                  Download Resume
                </a>
                <a
                  href="https://calendly.com/anshumanmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 glass-effect rounded-lg hover:bg-white/10 transition-all"
                >
                  <FaCalendar className="text-purple-400" />
                  Schedule a Call
                </a>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Availability</h2>
              <p className="text-gray-300 mb-4">
                I'm currently available for freelance projects and consulting opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-500 font-semibold">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
