// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { AuthProvider } from './contexts/AuthContext'
// import ProtectedRoute from './components/ProtectedRoute'
// import ScrollToTop from './components/ScrollToTop'

// import Home from './pages/Home'
// import AdminDashboard from './pages/admin/AdminDashboard'
// import CategoryPage from './pages/CategoryPage'
// import ProductDetail from './pages/ProductDetail'

// // New pages for legal links
// import TermsPage from './pages/TermsPage'
// import PrivacyPage from './pages/PrivacyPage'
// // Import new page
// import GuidesPage from './pages/GuidesPage'

// export default function App() {
//   return (
//     <AuthProvider>
//       <div className="min-h-screen flex flex-col">
//         <ScrollToTop />

//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/category/:id" element={<CategoryPage />} />
//           <Route path="/product/:id" element={<ProductDetail />} />

//           {/* Guides Page */}
//           <Route path="/guides" element={<GuidesPage />} />

//           {/* Legal pages */}
//           <Route path="/terms" element={<TermsPage />} />
//           <Route path="/privacy" element={<PrivacyPage />} />

//           {/* Admin (protected) */}
//           <Route
//             path="/admin/*"
//             element={
//               <ProtectedRoute>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </AuthProvider>
//   )
// }


import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import GuidesPage from "./pages/GuidesPage";

import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fonts, assets, API calls)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Guides Page */}
          <Route path="/guides" element={<GuidesPage />} />

          {/* Legal pages */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

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
  );
}
