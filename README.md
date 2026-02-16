# Anshuman Mishra - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring dynamic content, glassmorphism design, and seamless animations.

## 🚀 Live Demo

Visit the live website: [Your Portfolio URL]

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Dynamic Features](#dynamic-features)
- [Customization](#customization)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contact](#contact)

## ✨ Features

### Core Features
- 🎨 Modern glassmorphism UI design
- 🌙 Dark theme with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast page loads with Next.js 14 App Router
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- ♿ Accessibility compliant

### Dynamic Content
- 📺 YouTube channel integration with live video fetching
- 🐙 GitHub repositories showcase (auto-updated)
- 💼 Client projects with live demos
- � Real-time channel statistics
- 🎨 Animated particle background

### Pages
- 🏠 Home - Hero, services, projects, metrics
- 👤 About - Education, career journey, skills
- 💼 Projects - Featured work + GitHub repos
- 🤝 Clients - Client work and testimonials
- 📺 YouTube - Channel showcase with videos
- 📧 Contact - Multiple contact methods

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Images:** Next.js Image Optimization

### Backend/APIs
- **YouTube Data API v3** - Dynamic video fetching
- **GitHub REST API** - Repository showcase
- **Next.js API Routes** - Server-side data fetching

### Development
- **Package Manager:** npm
- **Linting:** ESLint
- **Type Checking:** TypeScript

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yuvrajsingh9044/portfolio-anshuman.git
cd portfolio-anshuman
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
```env
YOUTUBE_API_KEY=your_youtube_api_key_here
```

To get a YouTube API key:
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project
- Enable YouTube Data API v3
- Create credentials (API Key)

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-anshuman/
├── app/
│   ├── about/              # About page
│   ├── api/
│   │   ├── github/         # GitHub API route
│   │   └── youtube/        # YouTube API route
│   ├── clients/            # Clients page
│   ├── contact/            # Contact page
│   ├── projects/           # Projects page
│   ├── youtube/            # YouTube page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── home/               # Home page components
│   ├── youtube/            # YouTube components
│   ├── AnimatedBackground.tsx
│   ├── Footer.tsx
│   ├── GithubRepositories.tsx
│   └── Navbar.tsx
├── lib/
│   └── youtube.ts          # YouTube utilities
├── public/
│   ├── clients/            # Client project images
│   ├── projects/           # Project images
│   ├── youtube/            # YouTube thumbnails
│   ├── profile.jpg         # Profile photo
│   ├── profile-about.jpg   # About page photo
│   └── resume-anshuman.pdf # Resume file
├── .env.local              # Environment variables (not in git)
├── .gitignore
├── next.config.js          # Next.js configuration
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## � Pages Overview

### Home Page (`/`)
- Hero section with profile photo
- Expertise/Services cards
- Featured projects preview
- Impact metrics with animations
- Client logos
- Case studies preview
- Social media growth showcase
- Automation systems
- Work process timeline
- Tech stack
- Media preview (YouTube/Podcast)
- Testimonials
- Industries served
- Collaboration CTA

### About Page (`/about`)
- Personal introduction with portrait
- Professional philosophy
- Education (B.Tech + Intermediate)
- Career journey timeline
- Skills & competencies
- Professional mindset
- Currently learning
- Achievements & highlights
- Download resume button

### Projects Page (`/projects`)
- Featured projects (manual)
  - Portfolio Website
  - Little Lemon Restaurant
  - Contact Book GUI
- GitHub Repositories (dynamic)
  - Auto-fetched from GitHub API
  - Top 6 repos by stars
  - Live demo links

### Clients Page (`/clients`)
- Services provided
- Featured client projects
  - Partha Printing and Packaging
  - Village Maksoodan
- Client testimonials
- Automation systems delivered
- Industries served
- Work process
- Results & impact metrics

### YouTube Page (`/youtube`)
- Channel hero banner
- Live channel statistics
- Content categories
- Podcast themes
- Latest videos (dynamic)
- Video modal player
- Subscribe CTA

### Contact Page (`/contact`)
- Contact form
- Multiple contact methods
- Quick actions
- Availability status
- Social media links

## 🔄 Dynamic Features

### YouTube Integration

**Features:**
- Fetches latest 6 videos from YouTube channel
- Displays channel statistics (subscribers, views, videos)
- Video modal player with autoplay
- Skeleton loading states
- Error handling with retry

**API Endpoint:**
```
/api/youtube
```

**Channel:**
- Handle: @acheiverskiduniya5891
- URL: https://youtube.com/@acheiverskiduniya5891

**Configuration:**
- API key stored in `.env.local`
- Server-side fetching for security
- 1-hour cache for performance

### GitHub Integration

**Features:**
- Auto-fetches public repositories
- Filters out forks
- Sorts by stars and recency
- Shows top 6 repositories
- Language badges with colors
- Star and fork counts
- Last updated dates
- Live demo links (if available)

**API Endpoint:**
```
/api/github
```

**GitHub Profile:**
- Username: 01Anshuman
- URL: https://github.com/01Anshuman

**Configuration:**
- No API key required (public endpoint)
- Server-side fetching
- 1-hour cache

## 🎨 Customization

### Update Personal Information

**Profile Photos:**
- Replace `/public/profile.jpg` (home page)
- Replace `/public/profile-about.jpg` (about page)

**Resume:**
- Replace `/public/resume-anshuman.pdf`

**Contact Information:**
Update in these files:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `components/home/Hero.tsx`
- `app/about/page.tsx`

### Update Projects

**Featured Projects:**
Edit `app/projects/page.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Description',
    image: '/projects/your-image.jpg',
    tech: ['Tech1', 'Tech2'],
    features: ['Feature1', 'Feature2'],
    github: 'https://github.com/...',
    demo: 'https://...',
  },
]
```

**Client Projects:**
Edit `app/clients/page.tsx`:
```typescript
const clients = [
  {
    name: 'Client Name',
    screenshot: '/clients/client-image.jpg',
    services: ['Service1', 'Service2'],
    tech: ['Tech1', 'Tech2'],
    result: 'Results achieved',
    url: 'https://...',
  },
]
```

### Update YouTube Channel

Edit `app/api/youtube/route.ts`:
```typescript
const CHANNEL_HANDLE = 'your-channel-handle'
```

Update `.env.local`:
```env
YOUTUBE_API_KEY=your_api_key
```

### Update GitHub Username

Edit `app/api/github/route.ts`:
```typescript
const GITHUB_USERNAME = 'your-github-username'
```

### Styling

**Colors:**
Edit `tailwind.config.js` to change theme colors.

**Fonts:**
Edit `app/layout.tsx` to change fonts.

**Animations:**
Adjust Framer Motion settings in component files.

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Add environment variable: `YOUTUBE_API_KEY`
- Deploy

### Other Platforms

Compatible with:
- Netlify
- AWS Amplify
- Railway
- Render

**Environment Variables:**
Make sure to add `YOUTUBE_API_KEY` in your hosting platform's environment settings.

## ⚡ Performance

### Optimizations Implemented

- ✅ Next.js Image Optimization
- ✅ Server-side API routes
- ✅ API response caching (1 hour)
- ✅ Lazy loading images
- ✅ Code splitting
- ✅ Minification (SWC)
- ✅ Optimized animations
- ✅ Reduced particle count (30 particles)
- ✅ Skeleton loading states

### Performance Metrics

Target scores:
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🔒 Security

- API keys stored in environment variables
- Server-side API calls only
- No sensitive data in client code
- `.env.local` in `.gitignore`
- HTTPS enforced in production

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Anshuman Mishra**

- Email: manshumanmishra221122@gmail.com
- LinkedIn: [anshuman-mishra-83a069233](https://www.linkedin.com/in/anshuman-mishra-83a069233)
- GitHub: [01Anshuman](https://github.com/01Anshuman)
- YouTube: [@acheiverskiduniya5891](https://youtube.com/@acheiverskiduniya5891)
- WhatsApp: +91 99568 88757

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- Tailwind CSS for styling utilities
- Framer Motion for animations
- React Icons for icon library

## 📚 Documentation

For detailed documentation on specific features:
- YouTube Integration: See YouTube API implementation in `/app/api/youtube/route.ts`
- GitHub Integration: See GitHub API implementation in `/app/api/github/route.ts`
- Component Structure: Check individual component files in `/components`

## 🐛 Known Issues

None currently. If you find any bugs, please open an issue on GitHub.

## 🔄 Updates

**Latest Version:** 1.0.0
**Last Updated:** February 17, 2026

### Recent Changes
- ✅ Added YouTube channel integration
- ✅ Added GitHub repositories showcase
- ✅ Optimized performance (reduced particles)
- ✅ Added client projects with live demos
- ✅ Enhanced About page with education details
- ✅ Made company names clickable in career section
- ✅ Updated resume download links

## 🚧 Future Enhancements

Potential improvements:
- [ ] Blog section with CMS
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Newsletter subscription
- [ ] Project filtering/search
- [ ] More GitHub stats (contributions, streaks)
- [ ] Testimonials carousel
- [ ] Case study detail pages

---

**Built with ❤️ by YUVRAJ SINGH**

If you found this helpful, please give it a ⭐ on GitHub!
