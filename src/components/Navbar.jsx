import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold">RatnaLaya</Link>
          <div className="hidden md:flex gap-4 ml-6">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <a href="#categories" className="hover:text-gray-600">Categories</a>
            <a href="#featured" className="hover:text-gray-600">Featured</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input placeholder="Search" className="border rounded px-2 py-1 hidden sm:block" />
          <Link to="/admin" className="text-sm bg-gray-800 text-white px-3 py-1 rounded">Admin</Link>
        </div>
      </div>
    </nav>
  )
}