import FeaturesSection from "@/components/FeaturesSection"
import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import TestimonialsSection from "@/components/TestimonialsSection"


export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturesSection/>
      <TestimonialsSection/>
    </main>
  )
}
