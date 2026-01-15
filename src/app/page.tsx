import FeaturesSection from "@/app/components/FeaturesSection"
import FooterSection from "@/app/components/FooterSection"
import HeroSection from "@/app/components/HeroSection"
import TestimonialsSection from "@/app/components/TestimonialsSection"


export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeaturesSection/>
      <TestimonialsSection/>
      
     
    </main>
  )
}
