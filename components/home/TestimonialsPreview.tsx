'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialsPreview = () => {
  const testimonials = [
    {
      text: 'Anshuman transformed our digital presence completely. His automation systems saved us countless operational hours.',
      author: 'Rajesh Kumar',
      company: 'Partha Printing Solutions',
      rating: 5,
    },
    {
      text: 'The website he built exceeded our expectations. Professional, fast, and exactly what we needed for our business growth.',
      author: 'Priya Sharma',
      company: 'TechStart Solutions',
      rating: 5,
    },
    {
      text: 'His social media strategies helped us grow our Instagram by 300% in just 3 months. Highly recommended!',
      author: 'Amit Patel',
      company: 'Wellness Coach Pro',
      rating: 5,
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
            Client <span className="text-cyan-400">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 relative"
            >
              <FaQuoteLeft className="text-4xl text-cyan-400/20 mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{testimonial.author[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPreview
