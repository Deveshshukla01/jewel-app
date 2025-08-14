import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar(){
  const { user } = useAuth()

  return (
    <nav className="bg-cream-50 shadow-lg border-b border-cream-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-3xl font-bold text-brown-800 font-serif tracking-wide hover:text-brown-700 transition-colors">
            RatnaLaya
          </Link>
          <div className="hidden md:flex gap-4 ml-6">
            <Link to="/" className="text-brown-700 hover:text-brown-800 font-medium transition-colors">Home</Link>
            <a href="#categories" className="text-brown-700 hover:text-brown-800 font-medium transition-colors">Categories</a>
            <a href="#featured" className="text-brown-700 hover:text-brown-800 font-medium transition-colors">Featured</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input 
            placeholder="Search jewelry..." 
            className="border border-cream-300 rounded-lg px-3 py-2 hidden sm:block focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent bg-white" 
          />
          <Link 
            to="/admin" 
            className={`text-sm px-3 py-1 rounded ${
              user 
                ? 'bg-brown-600 text-cream-50 hover:bg-brown-700 elegant-shadow' 
                : 'bg-brown-700 text-cream-50 hover:bg-brown-800 elegant-shadow'
            }`}
          >
            {user ? 'Dashboard' : 'Admin'}
          </Link>
        </div>
      </div>
    </nav>
  )
}