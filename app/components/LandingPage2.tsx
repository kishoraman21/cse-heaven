"use client"
import React, { useState, useEffect } from 'react';
import { BookOpen, Zap, Target, RefreshCw, Gem, Star, ArrowRight, Menu, X, Code, Database, Cpu, Award, Users, CheckCircle, Download, Lock } from 'lucide-react';

export default function LandingPage2() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('databases');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: <BookOpen className="w-8 h-8" />, title: "Curated Content", description: "Handpicked resources covering databases, languages, frameworks, and more. Every PDF is reviewed by industry experts." },
    { icon: <Zap className="w-8 h-8" />, title: "Instant Access", description: "Download immediately after purchase. No waiting, no hassle. Your learning journey starts right away." },
    { icon: <Target className="w-8 h-8" />, title: "Interview Ready", description: "Focused content to help you crack technical interviews at top tech companies. Real-world examples included." },
    { icon: <RefreshCw className="w-8 h-8" />, title: "Regular Updates", description: "Content updated regularly to match industry standards and new technologies. Stay ahead of the curve." },
    { icon: <Gem className="w-8 h-8" />, title: "Premium Quality", description: "Professional design, clear explanations, and practical examples. Learn complex topics with ease." },
    { icon: <Star className="w-8 h-8" />, title: "Lifetime Access", description: "Buy once, access forever. All future updates included at no extra cost. Your investment protected." }
  ];

  const stats = [
    { number: "500+", label: "Premium Resources", icon: <BookOpen className="w-6 h-6" /> },
    { number: "15K+", label: "Active Students", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Expert Authors", icon: <Award className="w-6 h-6" /> },
    { number: "4.9", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const categories = [
    { id: 'databases', name: 'Databases', icon: <Database className="w-5 h-5" />, count: 120 },
    { id: 'languages', name: 'Languages', icon: <Code className="w-5 h-5" />, count: 180 },
    { id: 'frameworks', name: 'Frameworks', icon: <Zap className="w-5 h-5" />, count: 95 },
    { id: 'algorithms', name: 'Algorithms', icon: <Cpu className="w-5 h-5" />, count: 85 }
  ];

  const pricingPlans = [
    { name: "Starter", price: "₹499", period: "/month", features: ["10 PDF Downloads", "Basic Support", "Mobile Access", "Weekly Updates"], popular: false },
    { name: "Pro", price: "₹999", period: "/month", features: ["Unlimited Downloads", "Priority Support", "All Devices", "Daily Updates", "Interview Prep", "Code Examples"], popular: true },
    { name: "Enterprise", price: "₹2499", period: "/month", features: ["Everything in Pro", "Team Access (5 users)", "Custom Content", "1-on-1 Mentoring", "Private Discord", "API Access"], popular: false }
  ];

  const testimonials = [
    { name: "Rahul Sharma", role: "Software Engineer @ Google", content: "CSE Academy helped me crack my Google interview. The algorithm PDFs are incredibly detailed and practical.", avatar: "RS" },
    { name: "Priya Patel", role: "Full Stack Developer @ Microsoft", content: "Best investment I made in my career. The React and Node.js resources are top-notch and constantly updated.", avatar: "PP" },
    { name: "Amit Kumar", role: "Data Engineer @ Amazon", content: "The database design PDFs are a goldmine. I refer to them almost daily in my work. Absolutely worth it!", avatar: "AK" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-950/20 to-orange-600/30 animate-gradient" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        {[...Array(40)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-orange-500/50 rounded-full animate-float" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 20}s`, animationDuration: `${15 + Math.random() * 10}s` }} />
        ))}
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-orange-500/20 shadow-lg shadow-orange-500/10' : ''}`}>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">CSE Academy</div>
          </div>
          
          <ul className="hidden md:flex items-center gap-10">
            {['Home', 'Features', 'Pricing', 'Resources'].map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-orange-500 transition-colors duration-300 font-semibold relative group text-sm uppercase tracking-wide">{item}<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 group-hover:w-full transition-all duration-300" /></a></li>
            ))}
          </ul>

          <button className="hidden md:flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full font-bold hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300">Get Started<ArrowRight className="w-4 h-4" /></button>

          <button className="md:hidden text-white p-2 hover:bg-orange-500/10 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-orange-500/20 animate-slideDown">
            <ul className="px-6 py-6 space-y-4">
              {['Home', 'Features', 'Pricing', 'Resources'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="block text-white/80 hover:text-orange-500 transition-colors duration-300 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>{item}</a></li>
              ))}
              <li><button className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full font-bold">Get Started</button></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full backdrop-blur-sm animate-fadeIn">
            <span className="text-orange-400 font-semibold text-sm">🚀 Trusted by 15,000+ developers worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fadeInUp">
            <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">Master Computer Science</span><br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent animate-shimmer">Like Never Before</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Access <span className="text-orange-400 font-semibold">500+ premium PDFs</span> on databases, programming languages, frameworks, and algorithms. Learn from industry experts and accelerate your career.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button className="group px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <Download className="w-5 h-5" />Explore Library<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-orange-500/50 rounded-full font-bold text-lg hover:bg-orange-500/10 hover:border-orange-500 transform hover:scale-105 transition-all duration-300">View Demo</button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/50 text-sm animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /><span>No Credit Card Required</span></div>
            <div className="flex items-center gap-2"><Lock className="w-5 h-5 text-orange-500" /><span>Secure Payment</span></div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-orange-500" /><span>4.9/5 Rating</span></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 text-center hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:scale-105 transition-all duration-500 animate-fadeIn overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl mb-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-white/70 font-semibold text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">Explore by Category</h2>
            <p className="text-xl text-white/60">Find the perfect resources for your learning path</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <button key={cat.id} onClick={() => setActiveTab(cat.id)} className={`group relative p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 animate-fadeIn ${activeTab === cat.id ? 'bg-gradient-to-br from-orange-600/20 to-orange-500/10 border-2 border-orange-500 shadow-2xl shadow-orange-500/30' : 'bg-white/5 border border-orange-500/20 hover:border-orange-500/50'}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 ${activeTab === cat.id ? 'bg-gradient-to-br from-orange-600 to-orange-500 shadow-lg shadow-orange-500/50' : 'bg-white/10 group-hover:bg-orange-500/20'}`}>{cat.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{cat.name}</h3>
                <p className="text-orange-400 font-semibold">{cat.count} Resources</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-6" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">Why Choose CSE Academy?</h2>
            <p className="text-xl text-white/60">Everything you need to excel in computer science</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-orange-500/10 rounded-3xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-4 transition-all duration-500 animate-fadeIn overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{f.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{f.title}</h3>
                  <p className="text-white/70 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 py-20 px-6" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">Simple, Transparent Pricing</h2>
            <p className="text-xl text-white/60">Choose the plan that's right for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((p, i) => (
              <div key={i} className={`relative rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 animate-fadeIn ${p.popular ? 'bg-gradient-to-br from-orange-600/20 to-orange-500/10 border-2 border-orange-500 shadow-2xl shadow-orange-500/30' : 'bg-white/5 border border-orange-500/20 hover:border-orange-500/50'}`} style={{ animationDelay: `${i * 0.1}s` }}>
                {p.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-sm font-bold shadow-lg shadow-orange-500/50">Most Popular</div>}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{p.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-black bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">{p.price}</span>
                    <span className="text-white/60">{p.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/80"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" /><span>{feat}</span></li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${p.popular ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:shadow-xl hover:shadow-orange-500/50' : 'bg-white/10 hover:bg-orange-500/20 border border-orange-500/30'}`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">Loved by Developers</h2>
            <p className="text-xl text-white/60">See what our students have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2 transition-all duration-500 animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-orange-500 text-orange-500" />)}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center font-bold shadow-lg shadow-orange-500/30">{t.avatar}</div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-white/60">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-orange-600/20 to-orange-500/10 backdrop-blur-2xl border-2 border-orange-500/30 rounded-[3rem] p-16 text-center overflow-hidden shadow-2xl shadow-orange-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-block mb-6 px-6 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm"><span className="text-orange-400 font-semibold">Limited Time Offer</span></div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">Ready to Level Up?</h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Join 15,000+ students who have transformed their careers with our premium resources</p>
              <button className="group px-12 py-6 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"><Download className="w-6 h-6" />Start Learning Today<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></button>
              <p className="text-white/50 text-sm mt-6">💳 No credit card required • 🔒 Secure checkout • ⭐ 30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-orange-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center"><BookOpen className="w-6 h-6 text-white" /></div>
                <div className="text-xl font-black bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">CSE Academy</div>
              </div>
              <p className="text-white/60 text-sm">Premium learning resources for aspiring developers and engineers.</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Resources", "API"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "License", "Refunds"] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  {col.links.map((link, j) => <li key={j}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center pt-8 border-t border-orange-500/10 text-white/50 text-sm">© 2024 CSE Academy. All rights reserved. Built with 🧡 for developers.</div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100vh) translateX(50px); opacity: 0; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes shimmer { 0%, 100% { background-position: -200% center; } 50% { background-position: 200% center; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-gradient { background-size: 400% 400%; animation: gradient 15s ease infinite; }
        .animate-float { animation: float 20s infinite; }
        .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
        .animate-fadeIn { opacity: 0; animation: fadeIn 0.8s ease forwards; }
        .animate-shimmer { background-size: 200% auto; animation: shimmer 3s linear infinite; }
        .animate-slideDown { animation: slideDown 0.3s ease forwards; }
      `}</style>
    </div>
  );
}