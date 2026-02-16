'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGraduationCap, FaCode, FaPenNib, FaMicrophone, FaBriefcase, FaDatabase, FaGitAlt, FaAws, FaReact, FaDownload, FaBriefcase as FaHire, FaLightbulb, FaBook, FaTrophy } from 'react-icons/fa'

export default function About() {
  const milestones = [
    { year: '2020', event: 'Started B.Tech in Computer Science Engineering' },
    { year: '2023', event: 'Joined Q-Spider for Python Full-Stack Training' },
    { year: '2023', event: 'Began Technical Content Writing at KnoDAX' },
    { year: '2024', event: 'Launched "Achiever\'s Ki Duniya" Podcast' },
    { year: '2024', event: 'Graduated with CGPA 7.8' },
  ]

  const coreSkills = [
    { category: 'Programming', skills: ['Python', 'C', 'JavaScript', 'HTML/CSS'] },
    { category: 'Frameworks', skills: ['Django', 'React', 'Next.js', 'Bootstrap'] },
    { category: 'Data & Databases', skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Pandas', 'NumPy'] },
    { category: 'Tools & Platforms', skills: ['Git', 'GitHub', 'VS Code', 'AWS', 'Linux'] },
  ]

  const learningAreas = [
    'Advanced System Design',
    'Cloud Architecture (AWS)',
    'Machine Learning Fundamentals',
    'DevOps Practices',
    'Technical Leadership',
  ]

  const achievements = [
    { title: 'B.Tech CSE Graduate', desc: 'CGPA 7.8 - Strong foundation in computer science' },
    { title: '50+ Technical Articles', desc: 'Contributing to books and educational content' },
    { title: '25+ Podcast Episodes', desc: 'Interviewing industry professionals' },
    { title: '15+ Projects Built', desc: 'From web apps to automation systems' },
  ]

  return (
    <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-cyan-400">Anshuman</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              A full-stack developer who believes in the power of technology to solve real problems
              and create meaningful impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume-anshuman.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <FaHire /> Hire Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative glass-effect p-2 rounded-2xl">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/profile-about.jpg"
                    alt="Anshuman Mishra"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              My <span className="text-cyan-400">Philosophy</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p className="italic text-cyan-400 text-center text-xl">
                "Technology is not just about writing code—it's about understanding problems deeply
                and crafting solutions that make a difference."
              </p>
              <p>
                I approach development with a mindset of continuous learning and improvement. Every
                project is an opportunity to not just build something functional, but to build
                something thoughtful, maintainable, and scalable.
              </p>
              <p>
                My journey in tech has taught me that the best solutions come from understanding
                both the technical constraints and the human needs behind every requirement. I
                believe in writing clean code, documenting thoroughly, and always considering the
                long-term implications of today's decisions.
              </p>
              <p>
                Beyond the technical skills, I value collaboration, clear communication, and the
                ability to translate complex technical concepts into understandable insights—whether
                through code, writing, or conversation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Education</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* B.Tech */}
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-4xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xl text-purple-400 mb-3">Computer Science Engineering</p>
                  <p className="text-gray-400 mb-2">Institute of Engineering and Rural Technology Allahabad (IERT)</p>
                  <p className="text-gray-400 mb-4">2021 - 2025 | CGPA: 7.8</p>
                  <p className="text-gray-300 leading-relaxed">
                    My academic journey provided a strong foundation in computer science fundamentals—from
                    data structures and algorithms to software engineering principles. But more importantly,
                    it taught me how to think systematically, break down complex problems, and approach
                    challenges with both creativity and logic.
                  </p>
                </div>
              </div>
            </div>

            {/* Intermediate */}
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-4xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">
                    Intermediate (12th)
                  </h3>
                  <p className="text-xl text-pink-400 mb-3">PCM (Physics, Chemistry, Mathematics)</p>
                  <p className="text-gray-400 mb-2">Swami Vivekanand Inter College Gopalpur Madaiya, Lambhua</p>
                  <p className="text-gray-400 mb-4">2021 | CGPA: 81</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Career Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Career <span className="text-cyan-400">Journey</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-600 to-cyan-400"></div>
              <div className="space-y-12">
                {/* FireFlink */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <FaBriefcase className="text-2xl text-white" />
                  </div>
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400">Solution Consultant</h3>
                        <a
                          href="https://www.fireflink.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-400/30 hover:decoration-purple-300"
                        >
                          FireFlink Pvt. Ltd.
                        </a>
                        <p className="text-sm text-gray-400">Testing & Automation Department</p>
                      </div>
                      <span className="px-3 py-1 glass-effect rounded-lg text-sm text-cyan-400">
                        Present
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Working in the Testing & Automation department, helping clients implement robust
                      testing solutions and automation frameworks. This role combines technical expertise
                      with client consultation, ensuring quality and efficiency in software delivery.
                    </p>
                  </div>
                </motion.div>

                {/* Q-Spider */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <FaBriefcase className="text-2xl text-white" />
                  </div>
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400">Python Full-Stack Trainee</h3>
                        <a
                          href="https://www.qspiders.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-400/30 hover:decoration-purple-300"
                        >
                          Q-Spider Global
                        </a>
                      </div>
                      <span className="px-3 py-1 glass-effect rounded-lg text-sm text-cyan-400">
                        2023 - 2024
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      This was where theory met practice. I dove deep into Django, learned to build
                      RESTful APIs, worked with databases, and discovered the satisfaction of seeing
                      code come to life as functional web applications. The collaborative environment
                      taught me as much about teamwork and code reviews as it did about Python.
                    </p>
                  </div>
                </motion.div>

                {/* KnoDAX */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <FaPenNib className="text-2xl text-white" />
                  </div>
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400">Technical Content Writer</h3>
                        <a
                          href="https://www.knodax.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-400/30 hover:decoration-purple-300"
                        >
                          KnoDAX
                        </a>
                      </div>
                      <span className="px-3 py-1 glass-effect rounded-lg text-sm text-cyan-400">
                        2023 - 2025
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Writing about technology forced me to truly understand it. Contributing to books
                      on AWS and AI, creating tutorials, and explaining complex concepts taught me the
                      art of clear communication—a skill just as important as coding itself.
                    </p>
                  </div>
                </motion.div>

                {/* Podcast */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <FaMicrophone className="text-2xl text-white" />
                  </div>
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400">Podcast Host</h3>
                        <p className="text-purple-400">Achiever's Ki Duniya</p>
                      </div>
                      <span className="px-3 py-1 glass-effect rounded-lg text-sm text-cyan-400">
                        2024 - Present
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Interviewing industry professionals opened my eyes to different perspectives and
                      career paths. Each conversation is a learning opportunity, and sharing these
                      insights helps others navigate their own journeys in tech.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills & Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & <span className="text-cyan-400">Competencies</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreSkills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/5 text-gray-300 border border-cyan-400/20 hover:bg-cyan-400/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Ethos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional <span className="text-cyan-400">Mindset</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <FaLightbulb className="text-5xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Problem-First Thinking</h3>
              <p className="text-gray-400 text-sm">
                I start by understanding the problem deeply before jumping to solutions. The best
                code solves real needs.
              </p>
            </div>
            <div className="text-center p-6">
              <FaBook className="text-5xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Continuous Learning</h3>
              <p className="text-gray-400 text-sm">
                Technology evolves rapidly. I stay curious, read documentation, and never stop
                learning new approaches.
              </p>
            </div>
            <div className="text-center p-6">
              <FaCode className="text-5xl text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Clean Code Advocate</h3>
              <p className="text-gray-400 text-sm">
                Code is read more than it's written. I prioritize readability, maintainability, and
                proper documentation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Learning & Growth Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Currently <span className="text-cyan-400">Learning</span>
          </h2>
          <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-8">
            <p className="text-gray-300 mb-6 text-center">
              Growth never stops. Here's what I'm exploring right now:
            </p>
            <div className="space-y-3">
              {learningAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="text-gray-300">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Achievements & <span className="text-cyan-400">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <FaTrophy className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            I'm always open to interesting conversations about technology, career growth, or
            potential collaborations. Whether you're looking to work together or just want to chat
            about tech, feel free to reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
