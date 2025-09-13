import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import AdminDashboard from './pages/admin/AdminDashboard'
import CategoryPage from './pages/CategoryPage'
import ProductDetail from './pages/ProductDetail'

// New pages for legal links
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import ReturnsPage from './pages/ReturnsPage'

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        {/* ✅ This makes every route change scroll to top */}
        <ScrollToTop />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Legal pages */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          {/* <Route path="/returns" element={<ReturnsPage />} /> */}

          {/* Admin (protected) */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  )
}
