import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { databases, DATABASE_ID, COLLECTIONS, QueryTool } from "../appwrite/config";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Hook for media query
function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [pageLoading, setPageLoading] = useState(false);

  // Media queries
  const isMobile = useMediaQuery("(max-width: 767px)");
  const itemsPerPage = isMobile ? 4 : 8; // ✅ 2x2 on phone, 4x2 on laptop

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.products,
          [QueryTool.equal("featured", true)]
        );
        const featured = res.documents ? res.documents.filter((d) => d.featured) : [];
        setProducts(featured);
      } catch (err) {
        setError("Failed to load featured products");
      } finally {
        setLoading(false);
      }
    }
    load();
    const interval = setInterval(load, 300000);
    return () => clearInterval(interval);
  }, []);

  // Pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage < 0 || newPage >= totalPages) return;
    setPageLoading(true);
    setTimeout(() => {
      setPage(newPage);
      setPageLoading(false);
    }, 600);
  };

  return (
    <div
      id="featured"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/Background/Categories.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative container mx-auto px-4 max-w-7xl font-serif">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2
              className="text-3xl md:text-5xl font-serif relative z-10"
              style={{ color: "#542018" }}
            >
              Featured Products
            </h2>
            <img
              src="/underline.png"
              alt="underline"
              className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 md:w-60"
            />
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center">
            <div
              className="animate-spin rounded-full h-14 w-14 border-4 border-brown-200 mx-auto"
              style={{ borderTopColor: "#542018" }}
            ></div>
            <p className="mt-6 text-lg" style={{ color: "#542018" }}>
              Loading our finest pieces...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-red-600 bg-red-50 rounded-xl p-6 text-center inline-block">
            {error}
          </div>
        )}

        {/* Products Grid with Pagination */}
        {!loading && !error && (
          <div className="relative">
            <AnimatePresence mode="wait">
              {pageLoading ? (
                // Spinner
                <motion.div
                  key="loader"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center py-20"
                >
                  <div
                    className="animate-spin rounded-full h-12 w-12 border-4 border-[#542018]"
                    style={{ borderTopColor: "transparent" }}
                  ></div>
                </motion.div>
              ) : (
                <motion.div
                  key={page}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`grid gap-6 ${
                    isMobile ? "grid-cols-2" : "grid-cols-4"
                  }`}
                >
                  {currentProducts.length === 0 ? (
                    <div
                      className="col-span-full text-center py-16 bg-brown-50 rounded-2xl"
                      style={{ color: "#542018" }}
                    >
                      <div className="text-6xl mb-4">💎</div>
                      <p className="text-xl font-serif mb-2">
                        No featured products available.
                      </p>
                      <p className="text-sm font-serif">
                        Add products and mark them as featured in the admin panel.
                      </p>
                    </div>
                  ) : (
                    currentProducts.map((p) => (
                      <a
                          key={p.$id}
                          href={`https://wa.me/917973616115?text=I%20am%20interested%20in%20featured%20product`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <img
                            src={p.imageUrl}
                            alt={p.name}
                            className="w-full h-58 md:h-70 object-cover"
                          />
                        </a>

                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 0}
                  className="p-3 rounded-full border transition-all duration-300 
                             disabled:opacity-50
                             border-[#542018] text-[#542018] bg-transparent
                             hover:bg-[#542018] hover:text-white hover:scale-105"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <span className="text-[#542018] font-serif">
                  Page {page + 1} of {totalPages}
                </span>

                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages - 1}
                  className="p-3 rounded-full border transition-all duration-300 
                             disabled:opacity-50
                             border-[#542018] text-[#542018] bg-transparent
                             hover:bg-[#542018] hover:text-white hover:scale-105"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
