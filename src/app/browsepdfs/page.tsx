"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Filter,
  Download,
  Star,
  BookOpen,
  Code,
  Database,
  Globe,
  Cpu,
  Lock,
  TrendingUp,
  Loader2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/app/components/ui/select";

const categories = [
  { id: 'all', label: 'All Resources', icon: BookOpen },
  { id: 'algorithms', label: 'Algorithms', icon: Code },
  { id: 'databases', label: 'Databases', icon: Database },
  { id: 'web-dev', label: 'Web Development', icon: Globe },
  { id: 'system-design', label: 'System Design', icon: Cpu },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'leetcode', label: 'LeetCode Problems', icon: TrendingUp },
  { id: 'dsa', label: 'DSA', icon: Code },
];

export default function PDFLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get("/api/products");
        console.log("data from api ", response.data);
        setProducts(response.data.products || []);
      } catch (error) {
        console.error("Error while fetching data", error);
        // setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredPDFs = products
    .filter((pdf) => {
      const matchesSearch =
        pdf.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pdf.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || pdf.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return (b.downloads || 0) - (a.downloads || 0);
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "recent") return (b.id || 0) - (a.id || 0);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50/30">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
            {isLoading ? "Loading..." : `${products.length}+ Premium Resources`}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Browse Our Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover comprehensive PDFs on algorithms, system design, databases,
            and more
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
                disabled={isLoading}
              />
            </div>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy} disabled={isLoading}>
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
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  disabled={isLoading}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-indigo-300"
                  } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PDF Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-20">
              <Loader2 className="w-16 h-16 text-indigo-600 mx-auto mb-4 animate-spin" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Loading products...
              </h3>
              <p className="text-muted-foreground">
                Please wait while we fetch the latest resources
              </p>
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {error}
              </h3>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Retry
              </Button>
            </div>
          )}

          {/* Results Count */}
          {!isLoading && !error && (
            <p className="text-muted-foreground mb-6">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredPDFs.length}
              </span>{" "}
              results
            </p>
          )}

          {/* Grid */}
          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPDFs.map((pdf) => (
                <Card
                  key={pdf.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
                >
                  {/* Thumbnail */}
                  <div
                    className={`h-48 ${pdf.thumbnail || 'bg-gradient-to-br from-indigo-400 to-purple-500'} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-900 border-0 font-semibold">
                        {pdf.price || 'Free'}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/20 backdrop-blur-md text-white border-0">
                        {pdf.level || 'All Levels'}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-indigo-600 transition-colors">
                      {pdf.title || 'Untitled'}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {pdf.description || 'No description available'}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{pdf.pages || 0} pages</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{((pdf.downloads || 0) / 1000).toFixed(1)}k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{pdf.rating || 0}</span>
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
          )}

          {/* No Results */}
          {!isLoading && !error && filteredPDFs.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No PDFs found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}