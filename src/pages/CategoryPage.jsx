import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { databases, DATABASE_ID, COLLECTIONS, QueryTool } from "../appwrite/config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Menu,
  X,
  Gem,
  Diamond,
  Circle,
  CircleDot,
  Sparkles,
  Link2,
  Layers,
} from "lucide-react";

const CATEGORY_NAMES = {
  "ladies-rings": { name: "Ladies Rings", icon: <Gem className="w-4 h-4" /> },
  "gents-rings": { name: "Gents Rings", icon: <Circle className="w-4 h-4" /> },
  "earings": { name: "Earings", icon: <CircleDot className="w-4 h-4" /> },
  "bangles-karas": { name: "Bangles / Karas", icon: <Layers className="w-4 h-4" /> },
  "chains": { name: "Chains", icon: <Link2 className="w-4 h-4" /> },
  "bracelets": { name: "Bracelets", icon: <Sparkles className="w-4 h-4" /> },
  "mangalsutra": { name: "Mangalsutra", icon: <Diamond className="w-4 h-4" /> },
  "pendant-sets": { name: "Pendant Sets", icon: <Gem className="w-4 h-4" /> },
  "diamonds": { name: "Diamonds", icon: <Diamond className="w-4 h-4" /> },
  "pendants": { name: "Pendants", icon: <Sparkles className="w-4 h-4" /> },
};

export default function CategoryPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.products,
          [QueryTool.equal("category", id)]
        );
        const filtered = res.documents ? res.documents.filter((p) => p.category === id) : [];
        setProducts(filtered);
        console.log(`Products loaded for category ${id}:`, filtered.length);
      } catch (err) {
        console.error("Category load error", err);
        setError("Failed to load products for this category");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  const categoryName = CATEGORY_NAMES[id]?.name || id;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Background wrapper with overlay */}
      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/Background/Categories.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        {/* Page Content */}
        <div className="relative">
          <div className="container mx-auto px-4 py-4 flex gap-8 font-serif">
            {/* Sidebar Menu */}
            <div className="w-64 hidden md:block">
              <div className="bg-white rounded-xl shadow p-4 sticky top-24">
                <h2 className="text-lg font-semibold text-amber-800 mb-4">Categories</h2>
                <ul className="space-y-2">
                  {Object.entries(CATEGORY_NAMES).map(([key, { name, icon }]) => (
                    <li key={key}>
                      <Link
                        to={`/category/${key}`}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          id === key
                            ? "bg-amber-100 text-amber-800 font-semibold"
                            : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                        }`}
                      >
                        {icon}
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden fixed bottom-6 left-6 bg-amber-600 text-white p-3 rounded-full shadow-lg z-50"
            >
              <Menu size={24} />
            </button>

            {/* Mobile Sidebar (Overlay Drawer) */}
            {menuOpen && (
              <div className="fixed inset-0 z-50 flex">
                {/* Backdrop */}
                <div
                  className="flex-1 bg-black/50"
                  onClick={() => setMenuOpen(false)}
                ></div>

                {/* Drawer */}
                <div className="w-64 bg-white h-full p-4 shadow-xl overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-amber-800">Categories</h2>
                    <button onClick={() => setMenuOpen(false)}>
                      <X size={24} className="text-amber-800" />
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {Object.entries(CATEGORY_NAMES).map(([key, { name, icon }]) => (
                      <li key={key}>
                        <Link
                          to={`/category/${key}`}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                            id === key
                              ? "bg-amber-100 text-amber-800 font-semibold"
                              : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                          }`}
                        >
                          {icon}
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Products Section */}
            <div className="flex-1">
              {loading && (
                <div className="text-center py-16 font-serif">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-secondary-200 border-t-secondary-600 mx-auto"></div>
                  <p className="mt-6 text-primary-600 text-lg">Loading products...</p>
                </div>
              )}

              {error && (
                <div className="text-center py-16 text-red-700 bg-red-50 rounded-2xl">
                  <div className="text-4xl mb-4">⚠️</div>
                  <p className="text-lg">{error}</p>
                </div>
              )}

              {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                  {products.length === 0 ? (
                    <div className="col-span-full text-center py-16 text-primary-600 bg-white rounded-3xl shadow-warm">
                      <div className="text-6xl mb-4">💎</div>
                      <p className="text-xl mb-2">No products found in this category.</p>
                      <p className="text-sm">Check back later for new arrivals!</p>
                    </div>
                  ) : (
                    products.map((p) => (
                      <Link
                        key={p.$id}
                        className="group bg-white rounded-3xl overflow-hidden shadow-warm hover:shadow-warm-lg card-hover stagger-item"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={
                              p.imageUrl ||
                              "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400"
                            }
                            alt={p.name}
                            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {p.featured && (
                            <div className="absolute top-4 right-4">
                              <span className="bg-gradient-to-r from-primary-800 to-secondary-600 text-white text-xs px-3 py-2 rounded-full font-semibold shadow-warm glow">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
