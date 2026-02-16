'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaCodeBranch, FaExternalLinkAlt, FaGithub, FaClock } from 'react-icons/fa'

interface Repository {
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  homepage: string | null
}

const RepositorySkeleton = () => (
  <div className="glass-effect rounded-2xl p-6 animate-pulse">
    <div className="h-6 bg-gray-700/50 rounded mb-3 w-3/4"></div>
    <div className="h-4 bg-gray-700/50 rounded mb-2"></div>
    <div className="h-4 bg-gray-700/50 rounded mb-4 w-5/6"></div>
    <div className="flex gap-2 mb-4">
      <div className="h-6 bg-gray-700/50 rounded w-16"></div>
      <div className="h-6 bg-gray-700/50 rounded w-16"></div>
    </div>
    <div className="h-10 bg-gray-700/50 rounded"></div>
  </div>
)

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Updated today'
  if (diffDays === 1) return 'Updated yesterday'
  if (diffDays < 30) return `Updated ${diffDays} days ago`
  if (diffDays < 365) return `Updated ${Math.floor(diffDays / 30)} months ago`
  return `Updated ${Math.floor(diffDays / 365)} years ago`
}

const languageColors: { [key: string]: string } = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-400',
  Python: 'bg-blue-600',
  Java: 'bg-red-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-purple-500',
  React: 'bg-cyan-400',
  'C++': 'bg-pink-500',
  C: 'bg-gray-500',
  Go: 'bg-cyan-600',
  Rust: 'bg-orange-600',
  PHP: 'bg-indigo-500',
  Ruby: 'bg-red-600',
}

export default function GithubRepositories() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRepositories = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/github')

      if (!response.ok) {
        throw new Error('Failed to fetch repositories')
      }

      const data = await response.json()
      setRepos(data)
    } catch (err) {
      console.error('Error fetching repositories:', err)
      setError('Unable to load GitHub repositories right now.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          Open Source & <span className="text-cyan-400">GitHub Work</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          A collection of my public repositories, experiments, and production-ready codebases.
        </p>
      </motion.div>

      {/* Error State */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-effect rounded-2xl p-8 text-center mb-8"
        >
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={fetchRepositories}
            className="px-6 py-3 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-all"
          >
            Try Again
          </button>
        </motion.div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[...Array(6)].map((_, i) => (
            <RepositorySkeleton key={i} />
          ))}
        </div>
      )}

      {/* Repositories Grid */}
      {!loading && !error && repos.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all group border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors flex-1">
                    {repo.name}
                  </h3>
                  <FaGithub className="text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2 min-h-[40px]">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.language && (
                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          languageColors[repo.language] || 'bg-gray-400'
                        }`}
                      ></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center gap-1">
                    <FaStar className="text-xs" />
                    {repo.stargazers_count}
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20 flex items-center gap-1">
                    <FaCodeBranch className="text-xs" />
                    {repo.forks_count}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <FaClock />
                  <span>{formatDate(repo.updated_at)}</span>
                </div>

                <div className="flex gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-center flex items-center justify-center gap-2"
                  >
                    View Code <FaExternalLinkAlt className="text-xs" />
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 glass-effect rounded-lg text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://github.com/01Anshuman?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              <FaGithub className="text-2xl" />
              View All Repositories →
            </a>
          </motion.div>
        </>
      )}

      {/* No Repos State */}
      {!loading && !error && repos.length === 0 && (
        <div className="glass-effect rounded-2xl p-12 text-center">
          <p className="text-gray-400">No repositories found</p>
        </div>
      )}
    </section>
  )
}
