"use client";
import { useEffect, useState } from "react";
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
} from "lucide-react";
import axios from "axios"

// Function to get thumbnail gradient based on title
const getThumbnailGradient = (title) => {
  const lowerTitle = title?.toLowerCase() || "";
  
  if (lowerTitle.includes("dsa") || lowerTitle.includes("data structure") || lowerTitle.includes("algorithm")) {
    return "from-indigo-500 via-purple-500 to-pink-500";
  } else if (lowerTitle.includes("java") || lowerTitle.includes("python") || lowerTitle.includes("javascript")) {
    return "from-orange-500 via-red-500 to-pink-500";
  } else if (lowerTitle.includes("web") || lowerTitle.includes("html") || lowerTitle.includes("css") || lowerTitle.includes("react")) {
    return "from-blue-500 via-cyan-500 to-teal-500";
  } else if (lowerTitle.includes("database") || lowerTitle.includes("sql") || lowerTitle.includes("dbms")) {
    return "from-green-500 via-emerald-500 to-teal-500";
  } else if (lowerTitle.includes("system") || lowerTitle.includes("design")) {
    return "from-violet-500 via-purple-500 to-indigo-500";
  } else if (lowerTitle.includes("security") || lowerTitle.includes("cyber")) {
    return "from-red-500 via-rose-500 to-pink-500";
  } else if (lowerTitle.includes("operating") || lowerTitle.includes("os")) {
    return "from-amber-500 via-orange-500 to-red-500";
  } else if (lowerTitle.includes("network")) {
    return "from-sky-500 via-blue-500 to-indigo-500";
  } else if (lowerTitle.includes("machine learning") || lowerTitle.includes("ai")) {
    return "from-fuchsia-500 via-purple-500 to-indigo-500";
  } else if (lowerTitle.includes("leetcode") || lowerTitle.includes("interview")) {
    return "from-rose-500 via-pink-500 to-purple-500";
  }
  
  return "from-indigo-500 to-purple-600";
};

// Function to get icon based on title
const getThumbnailIcon = (title) => {
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

// Function to get dynamic content based on title
const getProductContent = (product) => {
  // Return product data from API, no hardcoded fallbacks
  return {
    description: product.description || "No description available",
    contents: product.contents || [],
    outcomes: product.outcomes || []
  };
};

export default function PDFLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch("/api/products");
        const data = await response.json();
        console.log("Products fetched:", data.products);
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error while fetching data", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Fixed handleBuy function - now expects the product ID directly
  const handleBuy = async (productId) => {
    if (!acceptedTerms) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    if (!productId) {
      alert("Invalid product ID");
      return;
    }

    try {
      setIsDownloading(true);
      console.log("Downloading product with ID:", productId);
      
      // Call the Download API with the correct field name
      const res = await axios.post("/api/download", { 
        productId: productId
      });

      console.log("Download response:", res.data);

      const links = res.data.files; // Array of signed PDF URLs

      if (!links || links.length === 0) {
        alert("No files found for this product.");
        return;
      }

      // Auto-open each PDF in a new tab
      links.forEach((url, index) => {
        setTimeout(() => {
          window.open(url, "_blank");
        }, index * 300); // Stagger the openings slightly
      });

      // Success message
      alert(`Successfully opened ${links.length} file(s)!`);
      
      // Close modal after successful download
      closeModal();
      
    } catch (err) {
      console.error("Download error:", err);
      const errorMessage = err.response?.data?.message || "Something went wrong while downloading.";
      alert(errorMessage);
    } finally {
      setIsDownloading(false);
    }
  };

  // Handle modal open with animation
  const openModal = (product) => {
    console.log("Opening modal for product:", product);
    setSelectedProduct(product);
    setAcceptedTerms(false);
    setIsModalAnimating(true);
  };

  // Handle modal close with animation
  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setSelectedProduct(null);
      setAcceptedTerms(false);
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
      if (sortBy === "recent") return (b.id || 0) - (a.id || 0);
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
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for PDFs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
              >
                Retry
              </button>
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
              {filteredPDFs.map((pdf) => {
                const ThumbnailIcon = getThumbnailIcon(pdf.title);
                return (
                  <div
                    key={pdf._id}
                    className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-200 cursor-pointer"
                    onClick={() => openModal(pdf)}
                  >
                    {/* Thumbnail with custom gradient and icon */}
                    <div className={`h-48 bg-gradient-to-br ${getThumbnailGradient(pdf.title)} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                      
                      {/* Large Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <ThumbnailIcon className="w-32 h-32 text-white" strokeWidth={1} />
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm font-semibold shadow-sm">
                          {pdf.price || "₹499"}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
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

          {/* No Results */}
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

      {/* Product Detail Modal with Animation */}
      {selectedProduct && (
        <div
          className={`fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${
            isModalAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-200 ${
              isModalAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Thumbnail */}
            <div className={`h-52 bg-gradient-to-br ${getThumbnailGradient(selectedProduct.title)} relative`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Large Icon in Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {(() => {
                  const Icon = getThumbnailIcon(selectedProduct.title);
                  return <Icon className="w-40 h-40 text-white" strokeWidth={1} />;
                })()}
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                  {selectedProduct.title}
                </h2>
                <p className="text-white/80 text-sm mt-2">
                  Product ID: {selectedProduct._id}
                </p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Overview & Stats */}
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

                {/* Stats Card */}
                <div className="bg-muted/50 h-15 p-4 rounded-lg border border-border space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Pages</span>
                    <span className="font-semibold text-foreground">
                      {selectedProduct.pages || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* What's Inside & What You'll Learn */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* What's Inside */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <Code className="w-5 h-5 text-indigo-600" />
                    What's Inside
                  </h3>
                  <ul className="space-y-3">
                    {getProductContent(selectedProduct).contents.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What You'll Learn */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    What You'll Learn
                  </h3>
                  <div className="space-y-3">
                    {getProductContent(selectedProduct).outcomes.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-100 dark:border-green-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a href="/legal/terms" className="text-indigo-600 hover:underline font-medium" onClick={(e) => e.stopPropagation()}>
                      Terms & Conditions
                    </a>
                    {" "}and{" "}
                    <a href="/legal/refund" className="text-indigo-600 hover:underline font-medium" onClick={(e) => e.stopPropagation()}>
                      Refund Policy
                    </a>
                    . I understand that all sales are final for digital products.
                  </span>
                </label>
              </div>
            </div>

            {/* Footer / CTA */}
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
                disabled={!acceptedTerms || isDownloading}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  acceptedTerms && !isDownloading
                    ? 'bg-foreground text-background hover:opacity-90' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
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
    </div>
  );
}