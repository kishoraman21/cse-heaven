"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Zap,
  Shield,
  Download,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { Card } from "@/ui/card";


interface HeroFeature {
  icon: LucideIcon;
  label: string;
  color: string;
}

interface PopularTopic {
  name: string;
  count: string;
  gradient: string;
}

const features: HeroFeature[] = [
  {
    icon: Zap,
    label: "Instant Access",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    label: "Verified Content",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    label: "Expert Curated",
    color: "from-blue-500 to-indigo-500",
  },
];

const popularTopics: PopularTopic[] = [
  {
    name: "System Design",
    count: "120+ PDFs",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Data Structures",
    count: "85+ PDFs",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "SQL & Databases",
    count: "95+ PDFs",
    gradient: "from-green-500 to-teal-500",
  },
  {
    name: "Algorithms",
    count: "110+ PDFs",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background text-foreground flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Join 12,000+ Students Learning Smarter
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            Your Gateway to
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tech Excellence
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Premium PDFs on algorithms, databases, system design, and more.
            <span className="block mt-2 font-semibold text-foreground">
              Everything you need to ace your tech interviews.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl shadow-indigo-500/50 group"
            >
              <Link href="/browsepdfs" className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Explore Library
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg font-semibold border-2 hover:bg-accent"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card px-5 py-2.5 rounded-full shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                >
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-foreground">
                  {feature.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Popular Topics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Browse Popular Topics
            </h2>
            <p className="text-muted-foreground">
              Start learning from our most-loved collections
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer"
              >
                <Card className="relative h-full p-6 bg-card hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-indigo-200 overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {topic.count}
                    </p>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 rounded-2xl border border-border bg-card/80 backdrop-blur px-8 py-6 shadow-sm">
            {/* Students */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-gradient-to-br from-indigo-500 to-purple-500 text-xs font-bold text-white"
                  >
                    {i === 3 ? "12K" : ""}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  12,000+ Students
                </p>
                <p className="text-xs text-muted-foreground">Learning daily</p>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-border sm:block" />

            {/* Downloads */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  50K+ Downloads
                </p>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-border sm:block" />

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  4.9 / 5 Rating
                </p>
                <p className="text-xs text-muted-foreground">
                  From verified reviews
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}