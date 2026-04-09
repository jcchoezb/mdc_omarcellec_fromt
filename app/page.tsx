import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { LiveChatPreview } from "@/components/landing/live-chat-preview"
import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { WorkflowSection } from "@/components/landing/workflow-section"
import { TemplatesWorkflowSection } from "@/components/landing/templates-workflow-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { StatsSection } from "@/components/landing/stats-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <LiveChatPreview />
        <DashboardPreview />
        <WorkflowSection />
        <TemplatesWorkflowSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
