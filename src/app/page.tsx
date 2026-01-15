import FeaturesSection from "@/components/FeaturesSection"
import HeroSection from "@/components/HeroSection"
import TestimonialsSection from "@/components/TestimonialsSection"


export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeaturesSection/>
      <TestimonialsSection/>
      
     
    </main>
  )
}
