import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar(){
  const { user } = useAuth()
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-warm border-b border-secondary-200 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {!isAdmin && (
              <>
                <Link to="/" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300 hover:scale-105">
                  Home
                </Link>
                <a href="#categories" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300 hover:scale-105">
                  Categories
                </a>
                <a href="#featured" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300 hover:scale-105">
                  Featured
                </a>
              </>
            )}
            {isAdmin && (
              <>
                <Link to="/admin/products" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300 hover:scale-105">
                  Products
                </Link>
                <Link to="/admin/banner" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300 hover:scale-105">
                  Banner
                </Link>
              </>
            )}
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-3xl font-bold gradient-text font-serif tracking-wide hover:scale-110 transition-all duration-300 float">
              RatnaLaya
            </Link>
          </div>

          {/* Right side - Search and Admin */}
          <div className="flex items-center space-x-4">
            {!isAdmin && (
              <div className="hidden sm:block">
                <input 
                  placeholder="Search jewelry..." 
                  className="border border-secondary-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent bg-secondary-50 hover:bg-white transition-all duration-300 w-48 hover:shadow-warm" 
                />
              </div>
            )}
            <Link 
              to={isAdmin ? "/" : "/admin"} 
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                user 
                  ? 'bg-gradient-to-r from-primary-800 to-secondary-600 text-white hover:shadow-warm glow' 
                  : 'bg-secondary-100 text-primary-800 hover:bg-secondary-200 hover:shadow-warm'
              }`}
            >
              {isAdmin ? 'Home' : (user ? 'Dashboard' : 'Admin')}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex justify-center space-x-6">
          {!isAdmin ? (
            <>
              <Link to="/" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300">Home</Link>
              <a href="#categories" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300">Categories</a>
              <a href="#featured" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300">Featured</a>
            </>
          ) : (
            <>
              <Link to="/admin/products" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300">Products</Link>
              <Link to="/admin/banner" className="text-primary-800 hover:text-secondary-600 font-medium transition-all duration-300">Banner</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}