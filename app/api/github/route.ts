import { NextResponse } from 'next/server'

const GITHUB_USERNAME = '01Anshuman'

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  fork: boolean
  homepage: string | null
}

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories')
    }

    const repos: GitHubRepo[] = await response.json()

    // Filter and sort repositories
    const filteredRepos = repos
      .filter((repo) => !repo.fork && repo.description) // Exclude forks and empty descriptions
      .sort((a, b) => {
        // Sort by stars first, then by updated date
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      })
      .slice(0, 6) // Limit to 6 repositories

    return NextResponse.json(filteredRepos)
  } catch (error) {
    console.error('GitHub API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}
