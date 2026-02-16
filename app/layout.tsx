import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anshuman Mishra | Solution Consultant & Full-Stack Developer',
  description: 'Solution Consultant at FireFlink specializing in Testing & Automation. Building high-performance web platforms and scalable applications.',
  keywords: 'Solution Consultant, Testing Automation, Full-Stack Developer, Python, Django, Web Development, FireFlink',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
