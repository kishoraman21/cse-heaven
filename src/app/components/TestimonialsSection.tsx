"use client"

import { Card } from '@/ui/card'

const testimonials = [
  {
    id: 1,
    quote: "CSE Library transformed how our team prepares for interviews. The quality and depth of content is unmatched. We've seen a 40% improvement in offer rates.",
    author: "Sarah Chen",
    role: "Engineering Manager",
    company: "Stripe"
  },
  {
    id: 2,
    quote: "The system design resources alone are worth the investment. Clear explanations, real-world examples, and up-to-date content. Our entire team uses it daily.",
    author: "Michael Rodriguez",
    role: "Senior Software Engineer",
    company: "Netflix"
  },
  {
    id: 3,
    quote: "Finally, a resource that doesn't oversimplify complex topics. The database PDFs helped me land my dream job at a FAANG company. Highly recommended.",
    author: "Priya Sharma",
    role: "Backend Engineer",
    company: "Amazon"
  },
  {
    id: 4,
    quote: "We integrated CSE Library into our onboarding process. New engineers get up to speed 3x faster. The algorithm section is particularly exceptional.",
    author: "David Kim",
    role: "Tech Lead",
    company: "Airbnb"
  },
  {
    id: 5,
    quote: "The content quality rivals paid bootcamps at a fraction of the cost. Every PDF is well-structured and production-ready. Best investment in my career.",
    author: "Emily Watson",
    role: "Full Stack Developer",
    company: "Shopify"
  },
  {
    id: 6,
    quote: "As a hiring manager, I appreciate that candidates who use CSE Library come prepared with practical knowledge, not just theoretical concepts.",
    author: "James Liu",
    role: "Director of Engineering",
    company: "Meta"
  }
]

export default function TestimonialsSection() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-left">
          <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            What people are saying.
          </h2>
        </div>
      </div>

      {/* Scrolling Testimonials Container */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll-left">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] px-3"
            >
              <Card className="h-full p-8 bg-card border-border">
                {/* Quote */}
                <blockquote className="text-foreground text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-foreground text-base mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}