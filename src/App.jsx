import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminDashboard from './pages/admin/AdminDashboard'
import CategoryPage from './pages/CategoryPage'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:id" element={<CategoryPage/>} />
        <Route path="/admin/*" element={<AdminDashboard/>} />
      </Routes>
    </div>
  )
}