'use client'

import { motion } from 'framer-motion'
import { FaPython, FaReact, FaNodeJs, FaAws, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiDjango, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMysql } from 'react-icons/si'

const TechStack = () => {
  const technologies = [
    { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
    { name: 'Django', icon: SiDjango, color: 'text-green-600' },
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies I <span className="text-cyan-400">Work With</span>
          </h2>
          <p className="text-gray-400">Modern tools for building scalable solutions</p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-8 flex-wrap justify-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-3 p-6 glass-effect rounded-xl hover:bg-white/10 transition-all group"
              >
                <tech.icon className={`text-5xl ${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="text-gray-400 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
