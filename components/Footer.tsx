'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/01Anshuman', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anshuman-mishra-83a069233', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/AnshumanMi47021', label: 'Twitter' },
    { icon: FaYoutube, href: 'https://youtube.com/@acheiverskiduniya5891', label: 'YouTube' },
    { icon: FaWhatsapp, href: 'https://wa.me/919956888757', label: 'WhatsApp' },
    { icon: FaEnvelope, href: 'mailto:manshumanmishra221122@gmail.com', label: 'Email' },
  ]

  const services = [
    'Full-Stack Development',
    'Python & Django',
    'Automation Systems',
    'Technical Writing',
    'Cloud Deployment',
    'Consulting',
  ]

  return (
    <footer className="relative z-10 glass-effect mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AM</span>
              </div>
              <span className="text-xl font-bold">Anshuman Mishra</span>
            </div>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer & Digital Solutions Consultant
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Building scalable digital solutions that drive business growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-cyan-400/20 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Anshuman Mishra. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2 md:mt-0">
            Built with Next.js • React • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
