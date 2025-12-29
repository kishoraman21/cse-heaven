"use client"

import { useState } from 'react'
import { Search, Filter, Download, Star, BookOpen, Code, Database, Globe, Cpu, Lock, TrendingUp } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Badge } from "../components/ui/badge"
import { Card } from '../components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/app/components/ui/select'

const categories = [
  { id: 'all', label: 'All Resources', icon: BookOpen },
  { id: 'algorithms', label: 'Algorithms', icon: Code },
  { id: 'databases', label: 'Databases', icon: Database },
  { id: 'web-dev', label: 'Web Development', icon: Globe },
  { id: 'system-design', label: 'System Design', icon: Cpu },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'leetcode', label: 'LeetCode Problems', icon: TrendingUp },
]

const pdfs = [
  {
    id: 1,
    title: "LeetCode Top 150 Problems",
    description: "Comprehensive guide covering the most important LeetCode problems for interview preparation.",
    category: "leetcode",
    pages: 250,
    downloads: 15420,
    rating: 4.9,
    level: "Intermediate",
    price: "$29",
    thumbnail: "bg-gradient-to-br from-orange-400 to-red-500"
  },
  {
    id: 2,
    title: "System Design Fundamentals",
    description: "Learn how to design scalable systems from scratch. Covers load balancing, caching, databases, and more.",
    category: "system-design",
    pages: 180,
    downloads: 12800,
    rating: 4.8,
    level: "Advanced",
    price: "$39",
    thumbnail: "bg-gradient-to-br from-purple-400 to-indigo-500"
  },
  {
    id: 3,
    title: "SQL & Database Design Mastery",
    description: "Complete guide to SQL queries, optimization, indexing, and database architecture.",
    category: "databases",
    pages: 220,
    downloads: 18900,
    rating: 4.9,
    level: "Intermediate",
    price: "$24",
    thumbnail: "bg-gradient-to-br from-blue-400 to-cyan-500"
  },
  {
    id: 4,
    title: "Modern Web Development Stack",
    description: "Master React, Next.js, TypeScript, and modern web development practices.",
    category: "web-dev",
    pages: 320,
    downloads: 22100,
    rating: 4.7,
    level: "Beginner",
    price: "$34",
    thumbnail: "bg-gradient-to-br from-green-400 to-emerald-500"
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    description: "In-depth coverage of essential data structures with practical coding examples.",
    category: "algorithms",
    pages: 280,
    downloads: 16700,
    rating: 4.9,
    level: "Intermediate",
    price: "$29",
    thumbnail: "bg-gradient-to-br from-pink-400 to-rose-500"
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    description: "Learn about common vulnerabilities, encryption, and security best practices.",
    category: "security",
    pages: 160,
    downloads: 9300,
    rating: 4.6,
    level: "Advanced",
    price: "$32",
    thumbnail: "bg-gradient-to-br from-red-400 to-orange-500"
  },
  {
    id: 7,
    title: "Dynamic Programming Patterns",
    description: "Master DP problems with 50+ patterns and detailed explanations.",
    category: "leetcode",
    pages: 190,
    downloads: 14200,
    rating: 4.8,
    level: "Advanced",
    price: "$27",
    thumbnail: "bg-gradient-to-br from-yellow-400 to-orange-500"
  },
  {
    id: 8,
    title: "Microservices Architecture",
    description: "Design and implement microservices with Docker, Kubernetes, and API gateways.",
    category: "system-design",
    pages: 210,
    downloads: 11500,
    rating: 4.7,
    level: "Advanced",
    price: "$42",
    thumbnail: "bg-gradient-to-br from-indigo-400 to-purple-500"
  },
  {
    id: 9,
    title: "MongoDB Complete Guide",
    description: "NoSQL database design, aggregation pipelines, and performance optimization.",
    category: "databases",
    pages: 170,
    downloads: 13400,
    rating: 4.6,
    level: "Intermediate",
    price: "$26",
    thumbnail: "bg-gradient-to-br from-green-500 to-teal-500"
  },
  {
    id: 10,
    title: "Full-Stack JavaScript",
    description: "Build complete applications with Node.js, Express, React, and MongoDB.",
    category: "web-dev",
    pages: 340,
    downloads: 19800,
    rating: 4.8,
    level: "Intermediate",
    price: "$36",
    thumbnail: "bg-gradient-to-br from-yellow-400 to-green-500"
  },
  {
    id: 11,
    title: "Graph Algorithms Masterclass",
    description: "BFS, DFS, Dijkstra, and advanced graph algorithms with interview questions.",
    category: "algorithms",
    pages: 230,
    downloads: 12900,
    rating: 4.9,
    level: "Advanced",
    price: "$31",
    thumbnail: "bg-gradient-to-br from-cyan-400 to-blue-500"
  },
  {
    id: 12,
    title: "DSA Cheat Sheets",
    description: "Ace your DSA journey with all the hot questions asked in FANNG or big startups.",
    category: "dsa",
    pages: 150,
    downloads: 8700,
    rating: 4.7,
    level: "Intermediate",
    price: "$28",
    thumbnail: "bg-gradient-to-br from-red-500 to-pink-500"
  }
]

export default function PDFLibraryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  const filteredPDFs = pdfs
    .filter(pdf => {
      const matchesSearch = pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pdf.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || pdf.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'popular') return b.downloads - a.downloads
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'recent') return b.id - a.id
      return 0
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50/30">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
            500+ Premium Resources
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Browse Our Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover comprehensive PDFs on algorithms, system design, databases, and more
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for PDFs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-background"
              />
            </div>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px] h-12 bg-background">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = selectedCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-indigo-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* PDF Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing <span className="font-semibold text-foreground">{filteredPDFs.length}</span> results
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPDFs.map((pdf) => (
              <Card key={pdf.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                {/* Thumbnail */}
                <div className={`h-48 ${pdf.thumbnail} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900 border-0 font-semibold">
                      {pdf.price}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-0">
                      {pdf.level}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-indigo-600 transition-colors">
                    {pdf.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {pdf.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{pdf.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{(pdf.downloads / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{pdf.rating}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredPDFs.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No PDFs found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}