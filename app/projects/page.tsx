'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import GithubRepositories from '@/components/GithubRepositories'

export default function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'Django-powered portfolio with Bootstrap UI and admin CMS for dynamic content management. Features include blog system, project showcase, and contact forms.',
      image: '/projects/portfolio.jpg',
      tech: ['Django', 'Bootstrap', 'Python', 'SQLite', 'HTML/CSS'],
      features: ['Admin CMS', 'Blog System', 'Contact Forms', 'Responsive Design'],
      github: 'https://github.com/anshumanmishra/portfolio',
      demo: 'https://anshumanmishra.com',
    },
    {
      title: 'Little Lemon Restaurant',
      description: 'Full-featured restaurant booking system with menu management, table reservations, and comprehensive CRUD admin panel for restaurant operations.',
      image: '/projects/little-lemon.jpg',
      tech: ['Django', 'PostgreSQL', 'REST API', 'Bootstrap', 'JavaScript'],
      features: ['Booking Engine', 'Menu Management', 'Admin Panel', 'User Authentication'],
      github: 'https://github.com/anshumanmishra/little-lemon',
      demo: 'https://littlelemon-demo.com',
    },
    {
      title: 'Contact Book GUI',
      description: 'Desktop application built with Tkinter and SQLite for efficient contact management with search, filter, and export capabilities.',
      image: '/projects/contact-book.jpg',
      tech: ['Python', 'Tkinter', 'SQLite', 'GUI Design'],
      features: ['CRUD Operations', 'Search & Filter', 'Data Export', 'User-Friendly UI'],
      github: 'https://github.com/anshumanmishra/contact-book',
      demo: null,
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
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-xl">
            A showcase of my best work in web development and automation
          </p>
        </motion.div>

        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-cyan-400">{project.title}</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Key Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 glass-effect rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                      <FaGithub /> View Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repositories Section */}
        <GithubRepositories />
      </div>
    </div>
  )
}
