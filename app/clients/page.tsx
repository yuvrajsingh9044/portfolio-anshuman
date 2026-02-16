'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGlobe, FaInstagram, FaCog, FaChartLine, FaStar, FaQuoteLeft, FaArrowRight, FaWhatsapp } from 'react-icons/fa'

export default function Clients() {
  const services = [
    {
      icon: FaGlobe,
      title: 'Website Development',
      items: ['Business websites', 'Portfolio platforms', 'Landing pages', 'CMS dashboards'],
      color: 'cyan',
    },
    {
      icon: FaInstagram,
      title: 'Social Media Management',
      items: ['Instagram growth', 'LinkedIn branding', 'Content scheduling', 'Engagement optimization'],
      color: 'purple',
    },
    {
      icon: FaCog,
      title: 'Automation Solutions',
      items: ['Lead capture systems', 'Email automation', 'CRM integrations', 'Workflow bots'],
      color: 'pink',
    },
    {
      icon: FaChartLine,
      title: 'Digital Strategy',
      items: ['Brand positioning', 'Funnel design', 'Growth analytics', 'Conversion optimization'],
      color: 'blue',
    },
  ]

  const clients = [
    {
      name: 'Partha Printing and Packaging',
      logo: '/clients/partha-printing.jpg',
      screenshot: '/clients/partha-printing.jpg',
      services: ['Business website', 'Product showcase', 'Contact system', 'Responsive design'],
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      result: 'Professional online presence, Enhanced brand credibility',
      url: 'https://parthaprintpack.com',
    },
    {
      name: 'Village Maksoodan',
      logo: '/clients/village-maksoodan.jpg',
      screenshot: '/clients/village-maksoodan.jpg',
      services: ['Community website', 'Information portal', 'Gallery system', 'Modern UI/UX'],
      tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
      result: 'Digital presence for village community, Easy information access',
      url: 'https://maksoodan.vercel.app/',
    },
  ]

  const testimonials = [
    {
      text: 'Anshuman delivered a professional website that perfectly represents our printing business. His attention to detail and technical expertise made the entire process smooth.',
      author: 'Partha Printing Team',
      company: 'Partha Printing and Packaging',
      location: 'India',
      rating: 5,
      avatar: '/clients/partha-printing.jpg',
    },
    {
      text: 'The village website he created helps our community stay connected and informed. Modern design with easy navigation - exactly what we needed.',
      author: 'Village Committee',
      company: 'Village Maksoodan',
      location: 'Maksoodan, India',
      rating: 5,
      avatar: '/clients/village-maksoodan.jpg',
    },
  ]

  const automations = [
    {
      problem: 'Manual lead follow-ups taking 5+ hours daily',
      solution: 'WhatsApp auto-reply bot with CRM integration',
      tools: ['Python', 'Twilio', 'Google Sheets'],
      timeSaved: '25 hours/week',
    },
    {
      problem: 'Lost leads due to delayed responses',
      solution: 'Automated email drip campaign system',
      tools: ['EmailJS', 'Zapier', 'Mailchimp'],
      timeSaved: '15 hours/week',
    },
    {
      problem: 'Inconsistent social media posting',
      solution: 'Content scheduling automation dashboard',
      tools: ['Buffer API', 'Node.js', 'Cron Jobs'],
      timeSaved: '10 hours/week',
    },
  ]

  const industries = [
    'Printing & Packaging',
    'Personal Brands',
    'Coaches & Consultants',
    'Local Businesses',
    'Startups',
    'Agencies',
  ]

  const workProcess = [
    { step: '1', title: 'Requirement Discovery', desc: 'Understanding your goals and challenges' },
    { step: '2', title: 'Strategy & Planning', desc: 'Creating roadmap for success' },
    { step: '3', title: 'Development & Automation', desc: 'Building your digital solutions' },
    { step: '4', title: 'Launch & Growth Support', desc: 'Ongoing optimization and scaling' },
  ]

  const metrics = [
    { label: 'Clients Served', value: '25+' },
    { label: 'Websites Built', value: '30+' },
    { label: 'Automations Deployed', value: '15+' },
    { label: 'Social Accounts Managed', value: '20+' },
    { label: 'Leads Generated', value: '500+' },
  ]

  return (
    <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering Brands Through{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          <p className="text-gray-400 text-xl mb-8 max-w-3xl mx-auto">
            Delivering high-performance websites, automated systems, and social media growth
            strategies for modern businesses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              View Case Studies
            </a>
            <a
              href="/contact"
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Work With Me
            </a>
            <a
              href="#testimonials"
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Client Testimonials
            </a>
          </div>
        </motion.div>

        {/* Services Provided */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Services <span className="text-cyan-400">Provided</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-${service.color}-400 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Client Projects */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Client <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={client.screenshot}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-lg bg-white p-2">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{client.name}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Work Done:</h4>
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Tech Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {client.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Result:</h4>
                    <p className="text-gray-300">{client.result}</p>
                  </div>

                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Visit Live Site <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Automation Systems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Automation Systems <span className="text-cyan-400">Delivered</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automations.map((auto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-400 mb-2">Problem:</h4>
                  <p className="text-gray-300 text-sm">{auto.problem}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{auto.solution}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {auto.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs rounded-full bg-purple-400/10 text-purple-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-cyan-400 font-semibold">⏱️ Time Saved: {auto.timeSaved}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          id="testimonials"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Client <span className="text-cyan-400">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 relative"
              >
                <FaQuoteLeft className="text-4xl text-cyan-400/20 mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Industries <span className="text-cyan-400">Served</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-6 py-3 glass-effect rounded-full text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/10 transition-all"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Work Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Work <span className="text-cyan-400">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{process.title}</h3>
                  <p className="text-gray-400 text-sm">{process.desc}</p>
                </div>
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results & Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Results & <span className="text-cyan-400">Impact</span>
          </h2>
          <div className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Let&apos;s Build Your <span className="text-cyan-400">Digital Success Story</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge digital solutions? Let&apos;s discuss
            your project and create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
            >
              Start Project <FaArrowRight />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Book Consultation
            </a>
            <a
              href="https://wa.me/919956888757"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition-all inline-flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp Now
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Automation Expert
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Growth Focused
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
