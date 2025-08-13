import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ManageProducts from './ManageProducts'
import ManageBanner from './ManageBanner'

export default function AdminDashboard(){
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
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