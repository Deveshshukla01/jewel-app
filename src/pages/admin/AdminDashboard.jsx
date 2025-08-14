import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
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
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white p-6 rounded-xl elegant-shadow mb-6 flex justify-between items-center border border-cream-200">
          <div>
            <h1 className="text-3xl font-bold text-brown-800 font-serif">Admin Dashboard</h1>
            <p className="text-brown-600">Welcome, {user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-200 font-medium"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <Link 
            to="/admin/products" 
            className="bg-white p-4 rounded-xl elegant-shadow hover:elegant-shadow-lg transition-all duration-200 text-brown-800 font-medium border border-cream-200"
          >
            Products
          </Link>
          <Link 
            to="/admin/banner" 
            className="bg-white p-4 rounded-xl elegant-shadow hover:elegant-shadow-lg transition-all duration-200 text-brown-800 font-medium border border-cream-200"
          >
            Banner
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl elegant-shadow border border-cream-200">
          <Routes>
            <Route path="products/*" element={<ManageProducts/>} />
            <Route path="banner" element={<ManageBanner/>} />
            <Route index element={
              <div className="text-center py-12 text-brown-600">
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