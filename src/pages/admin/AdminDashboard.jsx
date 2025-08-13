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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white p-4 rounded shadow mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome, {user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <Link to="/admin/products" className="bg-white p-3 rounded shadow">Products</Link>
          <Link to="/admin/banner" className="bg-white p-3 rounded shadow">Banner</Link>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <Routes>
            <Route path="products/*" element={<ManageProducts/>} />
            <Route path="banner" element={<ManageBanner/>} />
            <Route index element={<div>Select an admin option</div>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}