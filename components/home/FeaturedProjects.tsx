'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'Django-powered portfolio with Bootstrap UI and admin CMS for dynamic content management',
      image: '/projects/portfolio.jpg',
      tech: ['Django', 'Bootstrap', 'Python', 'SQLite'],
      github: 'https://github.com/anshumanmishra/portfolio',
      demo: 'https://anshumanmishra.com',
    },
    {
      title: 'Little Lemon Restaurant',
      description: 'Full-featured restaurant booking system with menu management and CRUD admin panel',
      image: '/projects/little-lemon.jpg',
      tech: ['Django', 'PostgreSQL', 'REST API', 'Bootstrap'],
      github: 'https://github.com/anshumanmishra/little-lemon',
      demo: 'https://littlelemon-demo.com',
    },
    {
      title: 'Contact Book GUI',
      description: 'Desktop application built with Tkinter and SQLite for efficient contact management',
      image: '/projects/contact-book.jpg',
      tech: ['Python', 'Tkinter', 'SQLite', 'GUI'],
      github: 'https://github.com/anshumanmishra/contact-book',
      demo: null,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing my best work in web development and automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/projects"
            className="inline-block px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
