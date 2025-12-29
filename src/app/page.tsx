import FeaturesSection from "@/src/app/components/FeaturesSection"
import FooterSection from "@/src/app/components/FooterSection"
import HeroSection from "@/src/app/components/HeroSection"
import TestimonialsSection from "@/src/app/components/TestimonialsSection"


export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeaturesSection/>
      <TestimonialsSection/>
      
     
    </main>
  )
}
