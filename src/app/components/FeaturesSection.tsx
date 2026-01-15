"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  TrendingUp,
  BookOpen,
  RefreshCw,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { Card } from "@/ui/card";
import { Badge } from "@/ui/badge";


interface Feature {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  badge?: string;
  stats?: string[];
  visual?: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    icon: BookOpen,
    badge: "Most Popular",
    title: "Curated Learning Paths",
    description:
      "Expert-designed PDFs covering everything from data structures to system design. Each resource is reviewed by industry professionals.",
    gradient: "from-cyan-500 to-blue-500",
    stats: ["500+ PDFs", "50+ Topics"],
    visual: (
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl" />
    ),
  },
  {
    id: 2,
    icon: Zap,
    title: "Instant Access",
    description:
      "Download immediately after purchase. No waiting, no delays. Start learning right away.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    icon: RefreshCw,
    title: "Lifetime Access",
    description:
      "Buy once, access forever. All future updates included at no extra cost.",
    gradient: "from-rose-500 to-red-500",
  },
  {
    id: 4,
    icon: TrendingUp,
    badge: "Premium",
    title: "Interview Preparation",
    description:
      "Focused content to help you crack interviews at top tech companies.",
    gradient: "from-purple-500 to-pink-500",
    stats: ["95% Success Rate", "1000+ Questions"],
    visual: (
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
    ),
  },
];

export default function FeaturesSection() {
  // Explicitly type the ref for a div element
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-background text-foreground"
    >
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary text-primary-foreground">
            Features
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything you need to
            <span className="block mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              excel in your tech career
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Premium resources from fundamentals to advanced interview prep.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={feature.id === 1 || feature.id === 4 ? "lg:col-span-2" : ""}
            >
              <Card className="relative h-full p-8 bg-card border-border hover:shadow-xl transition-all overflow-hidden">
                {feature.visual}

                {feature.badge && (
                  <Badge className="mb-4 bg-muted text-foreground">
                    {feature.badge}
                  </Badge>
                )}

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>

                {feature.stats && (
                  <div className="flex flex-wrap gap-3">
                    {feature.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="font-medium">{stat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}