import Hero from '@/components/home/Hero'
import ExpertiseStrip from '@/components/home/ExpertiseStrip'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import ImpactMetrics from '@/components/home/ImpactMetrics'
import ClientLogos from '@/components/home/ClientLogos'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import SocialMediaGrowth from '@/components/home/SocialMediaGrowth'
import AutomationShowcase from '@/components/home/AutomationShowcase'
import WorkProcess from '@/components/home/WorkProcess'
import TechStack from '@/components/home/TechStack'
import MediaPreview from '@/components/home/MediaPreview'
import TestimonialsPreview from '@/components/home/TestimonialsPreview'
import IndustriesServed from '@/components/home/IndustriesServed'
import CollaborationCTA from '@/components/home/CollaborationCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Existing Sections */}
      <Hero />
      <ExpertiseStrip />
      <FeaturedProjects />
      <ImpactMetrics />
      
      {/* New Premium Sections */}
      <ClientLogos />
      <CaseStudiesPreview />
      <SocialMediaGrowth />
      <AutomationShowcase />
      <WorkProcess />
      <TechStack />
      <MediaPreview />
      <TestimonialsPreview />
      <IndustriesServed />
      <CollaborationCTA />
    </div>
  )
}
