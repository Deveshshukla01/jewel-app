import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Menu, X, Home, Grid, Star, Phone, Store, Package, Image, ChevronDown } from 'lucide-react'

// Categories with images
const CATEGORIES = [
  { id: 'ladies-rings', name: 'Ladies Rings', img: '/Categories/ladies.png' },
  { id: 'gents-rings', name: 'Gents Rings', img: '/Categories/2.png' },
  { id: 'earings', name: 'Earrings', img: '/Categories/earings.png' },
  { id: 'bangles-karas', name: 'Bangles / Karas', img: '/Categories/bangles.png' },
  { id: 'chains', name: 'Chains', img: '/Categories/chains.png' },
  { id: 'sets', name: 'Sets', img: '/Categories/sets.png' },
  { id: 'bracelets', name: 'Bracelets', img: '/Categories/10.png' },
  { id: 'mangalsutra', name: 'Mangalsutra', img: '/Categories/mangalsutra.png' },
  { id: 'pendant-sets', name: 'Pendant Sets', img: '/Categories/pendant_sets.png' },
  { id: 'pendants', name: 'Pendants', img: '/Categories/pendant.png' },
  { id: 'diamonds', name: 'Diamonds', img: '/Categories/diamonds.png' },
  { id: 'gems', name: 'Gem Stone', img: '/Categories/Gems.png' }
]

export default function Navbar() {
  const { user } = useAuth()
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm top-0 z-50 relative">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        
        {/* Top Row */}
        <div className="w-full flex items-center justify-between">
          {/* Admin/Dashboard Button */}
          {/* <div className="w-16 md:w-20 flex justify-start md:justify-end">
            <Link
              to={isAdmin ? '/' : '/admin'}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full font-serif font-medium text-sm md:text-base transition-colors duration-200 ${
                user
                  ? 'bg-[#542018] text-white hover:bg-[#3d1611]'
                  : 'bg-gray-100 text-[#542018] hover:bg-gray-200'
              }`}
            >
              {isAdmin ? 'Home' : user ? 'Dashboard' : 'Admin'}
            </Link>
          </div> */}

          {/* Logo */}
          <Link to="/" className="flex justify-center flex-1">
            <img
              src="/Logo/LogoNav.png"
              alt="sethi Logo"
              className="h-16 md:h-24 ml-15 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Hamburger */}
          <div className="w-16 md:w-20 flex items-center justify-end md:justify-start">
            <button
              className="md:hidden text-[#542018] transition-transform duration-300 hover:scale-110"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-wrap justify-center font-serif gap-10 mt-6 relative">
          {!isAdmin ? (
            <>
              <Link to="/" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
                <Home size={18}/> Home
              </Link>

              {/* Categories Mega Menu */}
              <div 
                className="relative group"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <button className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
                  <Grid size={18}/> Categories
                  <ChevronDown size={16} className={`transition-transform duration-200 ${showCategories ? 'rotate-180' : ''}`} />
                </button>

                <div className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[600px] bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ${
                  showCategories 
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-3'
                }`}>
                  <div className="p-6">
                    <div className="grid grid-cols-4 gap-4">
                      {CATEGORIES.map(cat => (
                        <Link
                          key={cat.id}
                          to={`/category/${cat.id}`}
                          className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-gray-50 transition duration-300 group/item"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden shadow-sm mb-2 group-hover/item:shadow-md transition duration-300">
                            <img 
                              src={cat.img} 
                              alt={cat.name} 
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-xs font-medium text-[#542018] group-hover/item:text-amber-700 transition duration-300 leading-tight">
                            {cat.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a href="#featured" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition duration-300">
                <Star size={18}/> Featured
              </a>
              <a href="#contact" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition duration-300">
                <Store size={18}/> Silver Store - Gurmeena
              </a>
              <a href="#footer" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition duration-300">
                <Phone size={18}/> Contact Us
              </a>
            </>
          ) : (
            <>
              <Link to="/admin/products" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition duration-300">
                <Package size={18}/> Products
              </Link>
              <Link to="/admin/banner" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition duration-300">
                <Image size={18}/> Banner
              </Link>
            </>
          )}
        </div>

        {/* Mobile Nav - Animated */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? 'max-h-[400px] opacity-100 scale-100 mt-4' : 'max-h-0 opacity-0 scale-95'
          }`}
        >
          <div className="flex flex-col items-center gap-4 bg-white rounded-lg py-6 w-full">
            {!isAdmin ? (
              <>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors duration-300 w-full justify-center"
                >
                  <Home size={18}/> Home
                </Link>

                <a
                  href="#categories"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors duration-300 w-full justify-center"
                >
                  <Grid size={18}/> Categories
                </a>

                <a
                  href="#featured"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors duration-300 w-full justify-center"
                >
                  <Star size={18}/> Featured
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors duration-300 w-full justify-center"
                >
                  <Phone size={18}/> Contact Us
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors duration-300 w-full justify-center"
                >
                  <Store size={18}/> Silver Store - Gurmeena
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/admin/products"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors duration-300 w-full justify-center"
                >
                  <Package size={18}/> Products
                </Link>

                <Link
                  to="/admin/banner"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors duration-300 w-full justify-center"
                >
                  <Image size={18}/> Banner
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

