"use client"
import React, { useState, useEffect } from 'react';
import { BookOpen, Zap, Target, RefreshCw, Gem, Star, ArrowRight, Menu, X } from 'lucide-react';

export default function LandingPage1() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Curated Content",
      description: "Handpicked resources covering databases, languages, frameworks, and more. Every PDF is reviewed by industry experts."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Access",
      description: "Download immediately after purchase. No waiting, no hassle. Your learning journey starts right away."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Interview Ready",
      description: "Focused content to help you crack technical interviews at top tech companies. Real-world examples included."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Regular Updates",
      description: "Content updated regularly to match industry standards and new technologies. Stay ahead of the curve."
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Professional design, clear explanations, and practical examples. Learn complex topics with ease."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Lifetime Access",
      description: "Buy once, access forever. All future updates included at no extra cost. Your investment protected."
    }
  ];

  const stats = [
    { number: "500+", label: "Premium Resources" },
    { number: "15K+", label: "Active Students" },
    { number: "50+", label: "Expert Authors" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-950/20 to-orange-600/30 animate-gradient" />
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-orange-500/20' : ''}`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            CSE Academy
          </div>
          
          <ul className="hidden md:flex items-center gap-8">
            {['Home', 'Features', 'Resources', 'Pricing'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-orange-500 transition-colors duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
            Get Started
          </button>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-orange-500/20">
            <ul className="px-6 py-4 space-y-4">
              {['Home', 'Features', 'Resources', 'Pricing'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="block text-white/80 hover:text-orange-500 transition-colors duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button className="w-full px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full font-semibold">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
              Master Computer Science
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Access premium PDFs on databases, programming languages, frameworks, and algorithms. Learn from industry experts and accelerate your career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              Explore Library
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-orange-500/50 rounded-full font-bold text-lg hover:bg-orange-500/10 hover:border-orange-500 transform hover:-translate-y-1 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 text-center hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-2 transition-all duration-500 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
              Why Choose CSE Academy?
            </h2>
            <p className="text-xl text-white/60">
              Everything you need to excel in computer science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-orange-500/10 rounded-3xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-3 transition-all duration-500 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-orange-600/20 to-orange-500/10 backdrop-blur-xl border-2 border-orange-500/30 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                Ready to Level Up Your Skills?
              </h2>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with our premium resources
              </p>

              <button className="group px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto">
                Start Learning Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-orange-500/20 py-8 px-6 text-center text-white/50">
        <p>© 2024 CSE Academy. All rights reserved. Built with 🧡 for developers.</p>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .animate-float {
          animation: float 20s infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}