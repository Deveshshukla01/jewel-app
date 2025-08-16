import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Navbar from '../../components/Navbar'
import ManageProducts from './ManageProducts'
import ManageBanner from './ManageBanner'

export default function AdminDashboard(){
  const { logout, user } = useAuth()

  async function handleLogout() {
    const result = await logout()
    if (!result.success) {
      alert('Logout failed: ' + result.error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white p-6 rounded-2xl shadow-warm mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary-800 font-serif">Admin Dashboard</h1>
            <p className="text-primary-600">Welcome, {user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-300 font-medium transform hover:scale-105"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <Link 
            to="/admin/products" 
            className="bg-white p-4 rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-300 text-primary-800 font-medium transform hover:scale-105"
          >
            Products
          </Link>
          <Link 
            to="/admin/banner" 
            className="bg-white p-4 rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-300 text-primary-800 font-medium transform hover:scale-105"
          >
            Banner
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-warm">
          <Routes>
            <Route path="products/*" element={<ManageProducts/>} />
            <Route path="banner" element={<ManageBanner/>} />
            <Route index element={
              <div className="text-center py-12 text-primary-600">
                <h3 className="text-xl font-semibold mb-2">Welcome to Admin Dashboard</h3>
                <p>Select an option from above to manage your store</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </div>
  )
}