"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  Star,
  BookOpen,
  Code,
  CheckCircle2,
  ShoppingCart,
  Loader2,
  Database,
  Globe,
  Cpu,
  Lock,
  Braces,
  FileCode,
  X,
  LucideIcon,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";


interface Product {
  _id: string;
  id?: number; // Used in sorting logic
  title: string;
  description?: string;
  price?: string;
  pages?: string | number;
  counts?: string | number;
  downloads?: number;
  rating?: number;
  contents?: string[];
  outcomes?: string[];
}

interface ProductContent {
  description: string;
  contents: string[];
  outcomes: string[];
}

// --- Helper Functions ---

const getThumbnailGradient = (title: string | undefined): string => {
  const lowerTitle = title?.toLowerCase() || "";

  if (
    lowerTitle.includes("dsa") ||
    lowerTitle.includes("data structure") ||
    lowerTitle.includes("algorithm")
  ) {
    return "from-indigo-500 via-purple-500 to-pink-500";
  } else if (
    lowerTitle.includes("java") ||
    lowerTitle.includes("python") ||
    lowerTitle.includes("javascript")
  ) {
    return "from-orange-500 via-red-500 to-pink-500";
  } else if (
    lowerTitle.includes("web") ||
    lowerTitle.includes("html") ||
    lowerTitle.includes("css") ||
    lowerTitle.includes("react")
  ) {
    return "from-blue-500 via-cyan-500 to-teal-500";
  } else if (
    lowerTitle.includes("database") ||
    lowerTitle.includes("sql") ||
    lowerTitle.includes("dbms")
  ) {
    return "from-green-500 via-emerald-500 to-teal-500";
  } else if (lowerTitle.includes("system") || lowerTitle.includes("design")) {
    return "from-violet-500 via-purple-500 to-indigo-500";
  } else if (lowerTitle.includes("security") || lowerTitle.includes("cyber")) {
    return "from-red-500 via-rose-500 to-pink-500";
  } else if (lowerTitle.includes("operating") || lowerTitle.includes("os")) {
    return "from-amber-500 via-orange-500 to-red-500";
  } else if (lowerTitle.includes("network")) {
    return "from-sky-500 via-blue-500 to-indigo-500";
  } else if (
    lowerTitle.includes("machine learning") ||
    lowerTitle.includes("ai")
  ) {
    return "from-fuchsia-500 via-purple-500 to-indigo-500";
  } else if (
    lowerTitle.includes("leetcode") ||
    lowerTitle.includes("interview")
  ) {
    return "from-rose-500 via-pink-500 to-purple-500";
  }

  return "from-indigo-500 to-purple-600";
};

const getThumbnailIcon = (title: string | undefined): LucideIcon => {
  const lowerTitle = title?.toLowerCase() || "";

  if (lowerTitle.includes("dsa") || lowerTitle.includes("algorithm")) {
    return Code;
  } else if (lowerTitle.includes("database") || lowerTitle.includes("sql")) {
    return Database;
  } else if (lowerTitle.includes("web") || lowerTitle.includes("html")) {
    return Globe;
  } else if (lowerTitle.includes("system") || lowerTitle.includes("design")) {
    return Cpu;
  } else if (lowerTitle.includes("security")) {
    return Lock;
  } else if (lowerTitle.includes("java") || lowerTitle.includes("python")) {
    return Braces;
  }

  return FileCode;
};

const getProductContent = (product: Product): ProductContent => {
  return {
    description: product.description || "No description available",
    contents: product.contents || [],
    outcomes: product.outcomes || [],
  };
};

// --- Page Component ---

export default function PDFLibraryPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [isModalAnimating, setIsModalAnimating] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await axios.get<{ products: Product[] }>("/api/products");
        
        console.log("Products fetched:", response.data.products);
        setProducts(response.data.products || []);
      } catch (err) {
        console.error("Error while fetching data", err);
        setError("Failed to load products. Please try again later.");
        toast.error("Cannot complete the request now. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleBuy = async (productId: string) => {
    if (!acceptedTerms) {
      toast.error("Please accept the Terms & Conditions.");
      return;
    }

    if (!userEmail) return;

    try {
      setIsDownloading(true);

      await axios.post("/api/download", { productId, userEmail });

      toast.success(
        "Download links sent to your email! (Valid for 15 minutes)"
      );

      closeModal();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send email");
    } finally {
      setIsDownloading(false);
    }
  };

  const openModal = (product: Product) => {
    console.log("Opening modal for product:", product);
    setSelectedProduct(product);
    setAcceptedTerms(false);
    setUserEmail("");
    setIsModalAnimating(true);
  };

  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setSelectedProduct(null);
      setAcceptedTerms(false);
      setUserEmail("");
    }, 200);
  };

  const filteredPDFs = products
    .filter((pdf) => {
      const matchesSearch =
        pdf.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pdf.description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return (b.downloads || 0) - (a.downloads || 0);
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "recent") return (Number(b.id) || 0) - (Number(a.id) || 0);
      return 0;
    });

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-indigo-600 text-white text-sm font-medium">
            {isLoading ? "Loading..." : `${products.length}+ Premium Resources`}
          </div>
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
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for PDFs..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                disabled={isLoading}
                className="w-full pl-12 pr-4 h-12 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PDF Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
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

          {error && !isLoading && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {error}
              </h3>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
              >
                Retry
              </button>
            </div>
          )}

          {!isLoading && !error && (
            <p className="text-muted-foreground mb-6">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredPDFs.length}
              </span>{" "}
              results
            </p>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPDFs.map((pdf) => {
                const ThumbnailIcon = getThumbnailIcon(pdf.title);
                return (
                  <div
                    key={pdf._id}
                    className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-200 cursor-pointer"
                    onClick={() => openModal(pdf)}
                  >
                    <div
                      className={`h-48 bg-linear-to-br ${getThumbnailGradient(
                        pdf.title
                      )} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <ThumbnailIcon
                          className="w-32 h-32 text-white"
                          strokeWidth={1}
                        />
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm font-semibold shadow-sm">
                          {pdf.price || "₹499"}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1">
                        {pdf.title || "Untitled"}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {pdf.description || "No description available"}
                      </p>
                      <button className="w-full px-4 py-2.5 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity">
                        View Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!isLoading && !error && filteredPDFs.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No PDFs found
              </h3>
              <p className="text-muted-foreground">Try adjusting your search</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className={`fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${
            isModalAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-200 ${
              isModalAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div
              className={`h-52 bg-linear-to-br ${getThumbnailGradient(
                selectedProduct.title
              )} relative`}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {(() => {
                  const Icon = getThumbnailIcon(selectedProduct.title);
                  return (
                    <Icon className="w-40 h-40 text-white" strokeWidth={1} />
                  );
                })()}
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                  {selectedProduct.title}
                </h2>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {getProductContent(selectedProduct).description}
                  </p>
                </div>

                <div className="bg-muted/50 p-3 h-22 rounded-lg border border-border">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">
                        Pages:
                      </span>
                      <span className="font-semibold text-foreground">
                        {selectedProduct.pages || "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">
                        No. of PDFs:
                      </span>
                      <span className="font-semibold text-foreground">
                        {selectedProduct.counts || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <Code className="w-5 h-5 text-indigo-600" />
                    What's Inside
                  </h3>
                  <ul className="space-y-3">
                    {getProductContent(selectedProduct).contents.map(
                      (item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    What You'll Learn
                  </h3>
                  <div className="space-y-3">
                    {getProductContent(selectedProduct).outcomes.map(
                      (item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-100 dark:border-green-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAcceptedTerms(e.target.checked)
                    }
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="text-indigo-600 hover:underline font-medium"
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="/refund"
                      className="text-indigo-600 hover:underline font-medium"
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                      Refund Policy
                    </a>
                    . I understand that all sales are final for digital
                    products.
                  </span>
                </label>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email to receive download links"
                  value={userEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUserEmail(e.target.value)
                  }
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-foreground placeholder:text-muted-foreground"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Download links will be sent to this email and are valid for 15
                  minutes.
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-border bg-muted/30 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">
                  Total Price
                </span>
                <span className="text-3xl font-bold text-foreground">
                  {selectedProduct.price || "₹499"}
                </span>
              </div>
              <button
                onClick={() => handleBuy(selectedProduct._id)}
                disabled={!acceptedTerms || !userEmail || isDownloading}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  acceptedTerms && userEmail && !isDownloading
                    ? "bg-foreground text-background hover:opacity-90"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-[100] animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-start gap-3 max-w-md">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold">Success!</p>
              <p className="text-sm text-green-50">
                Download links sent to your email! (Valid for 15 minutes)
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-white hover:text-green-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}