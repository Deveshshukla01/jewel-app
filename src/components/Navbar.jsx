import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar(){
  const { user } = useAuth()
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {!isAdmin && (
              <>
                <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  Home
                </Link>
                <a href="#categories" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  Categories
                </a>
                <a href="#featured" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  Featured
                </a>
              </>
            )}
            {isAdmin && (
              <>
                <Link to="/admin/products" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  Products
                </Link>
                <Link to="/admin/banner" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  Banner
                </Link>
              </>
            )}
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-serif tracking-wide hover:scale-105 transition-transform duration-200">
              RatnaLaya
            </Link>
          </div>

          {/* Right side - Search and Admin */}
          <div className="flex items-center space-x-4">
            {!isAdmin && (
              <div className="hidden sm:block">
                <input 
                  placeholder="Search jewelry..." 
                  className="border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors duration-200 w-48" 
                />
              </div>
            )}
            <Link 
              to={isAdmin ? "/" : "/admin"} 
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                user 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
              <a href="#categories" className="text-gray-700 hover:text-purple-600 font-medium">Categories</a>
              <a href="#featured" className="text-gray-700 hover:text-purple-600 font-medium">Featured</a>
            </>
          ) : (
            <>
              <Link to="/admin/products" className="text-gray-700 hover:text-purple-600 font-medium">Products</Link>
              <Link to="/admin/banner" className="text-gray-700 hover:text-purple-600 font-medium">Banner</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}