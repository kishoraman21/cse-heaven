"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/ui/card";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "CSE Heavens transformed how I prepared for placements. The quality and depth of content is unmatched. Landed my dream job at a top tech company!",
    author: "Priya Sharma",
    role: "SDE",
    company: "Amazon",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 2,
    quote: "The system design resources alone are worth it. Clear explanations, real-world examples, and up-to-date content. Helped me crack multiple offers.",
    author: "Rahul Verma",
    role: "Software Engineer",
    company: "Google",
    rating: 5,
    avatar: "RV",
  },
  {
    id: 3,
    quote: "Finally, a resource that doesn't oversimplify complex topics. The DSA PDFs helped me understand patterns I was missing. Got placed in my dream company!",
    author: "Sneha Patel",
    role: "Backend Engineer",
    company: "Microsoft",
    rating: 5,
    avatar: "SP",
  },
  {
    id: 4,
    quote: "The algorithm section is particularly exceptional. Every PDF is well-structured and practical. Best resource for campus placements.",
    author: "Arjun Kumar",
    role: "Tech Lead",
    company: "Flipkart",
    rating: 5,
    avatar: "AK",
  },
  {
    id: 5,
    quote: "Content quality rivals expensive bootcamps but completely free. Every PDF is well-structured and production-ready. Must-have for any CS student.",
    author: "Divya Reddy",
    role: "Full Stack Developer",
    company: "Swiggy",
    rating: 5,
    avatar: "DR",
  },
  {
    id: 6,
    quote: "The interview preparation materials are gold. Real questions from actual interviews at top companies. Helped me ace my technical rounds.",
    author: "Vikram Singh",
    role: "SDE II",
    company: "Atlassian",
    rating: 5,
    avatar: "VS",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 dark:from-blue-400 dark:via-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
              10,000+ students
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of successful students who landed their dream jobs using our resources.
          </p>
        </motion.div>
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
              <Card className="h-full p-8 bg-card/50 dark:bg-card/30 backdrop-blur-sm border-border/50 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 group">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-blue-500/20 mb-4" />
                
                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-base leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} · <span className="text-blue-600 dark:text-blue-400">{testimonial.company}</span>
                    </p>
                  </div>
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
  );
}