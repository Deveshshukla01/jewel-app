
// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'
// import { Menu, X, Home, Grid, Star, Phone, Store, Package, Image } from 'lucide-react'

// export default function Navbar() {
//   const { user } = useAuth()
//   const location = useLocation()
//   const isAdmin = location.pathname.startsWith('/admin')
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav className="bg-white/95 backdrop-blur-md top-0 z-50 transition-all duration-300">
//       <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        
//         {/* Top Row */}
//         <div className="w-full flex items-center justify-between">
//           {/* Left spacer for alignment on desktop */}
//           <div className="w-16 md:w-20 flex items-center">
//             {/* Hamburger only on mobile */}
//             <button
//               className="md:hidden text-[#542018]"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Logo */}
//           <Link to="/" className="flex justify-center flex-1">
//             <img
//               src="/Logo/LogoNav.png"
//               alt="sethi Logo"
//               className="h-26 w-auto hover:scale-110 transition-transform duration-300"
//             />
//           </Link>

//           {/* Dashboard/Admin Button */}
//           <div className="w-16 md:w-20 flex justify-end">
//             <Link
//               to={isAdmin ? '/' : '/admin'}
//               className={`px-4 py-2 rounded-full font-serif font-medium transition-all duration-200 ${
//                 user
//                   ? 'bg-[#542018] text-white hover:opacity-90'
//                   : 'bg-gray-100 text-[#542018] hover:bg-gray-200'
//               }`}
//             >
//               {isAdmin ? 'Home' : user ? 'Dashboard' : 'Admin'}
//             </Link>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-wrap justify-center font-serif gap-10 mt-6">
//           {!isAdmin ? (
//             <>
//               <Link to="/" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Home size={18}/> Home
//               </Link>
//               <a href="#categories" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Grid size={18}/> Categories
//               </a>
//               <a href="#featured" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Star size={18}/> Featured
//               </a>
//               <a href="#footer" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Phone size={18}/> Contact Us
//               </a>
//               <a href="#contact" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Store size={18}/> Silver Store
//               </a>
//             </>
//           ) : (
//             <>
//               <Link to="/admin/products" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Package size={18}/> Products
//               </Link>
//               <Link to="/admin/banner" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Image size={18}/> Banner
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Navigation - Slide Down */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 flex flex-col items-center gap-6 bg-[#fdf7ef] rounded-lg shadow-md py-6 w-full">
//             {!isAdmin ? (
//               <>
//                 <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Home size={18}/> Home
//                 </Link>
//                 <a href="#categories" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Grid size={18}/> Categories
//                 </a>
//                 <a href="#featured" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Star size={18}/> Featured
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Phone size={18}/> Contact Us
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Store size={18}/> Silver Store
//                 </a>
//               </>
//             ) : (
//               <>
//                 <Link to="/admin/products" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Package size={18}/> Products
//                 </Link>
//                 <Link to="/admin/banner" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Image size={18}/> Banner
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'
// import { Menu, X, Home, Grid, Star, Phone, Store, Package, Image } from 'lucide-react'

// // Categories with images (place your images in /public/Categories/)
// const CATEGORIES = [
//   { id: 'ladies-rings', name: 'Ladies Rings', img: '/Categories/ladies.png' },
//   { id: 'gents-rings', name: 'Gents Rings', img: '/Categories/gents.png' },
//   { id: 'earings', name: 'Earings', img: '/Categories/earings.png' },
//   { id: 'bangles-karas', name: 'Bangles / Karas', img: '/Categories/bangles.png' },
//   { id: 'chains', name: 'Chains', img: '/Categories/chains.png' },
//   { id: 'bracelets', name: 'Bracelets', img: '/Categories/bracelets.png' },
//   { id: 'mangalsutra', name: 'Mangalsutra', img: '/Categories/mangalsutra.png' },
//   { id: 'pendant-sets', name: 'Pendant Sets', img: '/Categories/pendantset.png' },
//   { id: 'diamonds', name: 'Diamonds', img: '/Categories/diamonds.png' },
//   { id: 'pendants', name: 'Pendants', img: '/Categories/pendants.png' },
// ]

// export default function Navbar() {
//   const { user } = useAuth()
//   const location = useLocation()
//   const isAdmin = location.pathname.startsWith('/admin')
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [showCategories, setShowCategories] = useState(false)

//   return (
//     <nav className="bg-white/95 backdrop-blur-md top-0 z-50 transition-all duration-300 relative">
//       <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        
//         {/* Top Row */}
//         <div className="w-full flex items-center justify-between">
//           {/* Left spacer for alignment on desktop */}
//           <div className="w-16 md:w-20 flex items-center">
//             {/* Hamburger only on mobile */}
//             <button
//               className="md:hidden text-[#542018]"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Logo */}
//           <Link to="/" className="flex justify-center flex-1">
//             <img
//               src="/Logo/LogoNav.png"
//               alt="sethi Logo"
//               className="h-26 w-auto hover:scale-110 transition-transform duration-300"
//             />
//           </Link>

//           {/* Dashboard/Admin Button */}
//           <div className="w-16 md:w-20 flex justify-end">
//             <Link
//               to={isAdmin ? '/' : '/admin'}
//               className={`px-4 py-2 rounded-full font-serif font-medium transition-all duration-200 ${
//                 user
//                   ? 'bg-[#542018] text-white hover:opacity-90'
//                   : 'bg-gray-100 text-[#542018] hover:bg-gray-200'
//               }`}
//             >
//               {isAdmin ? 'Home' : user ? 'Dashboard' : 'Admin'}
//             </Link>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-wrap justify-center font-serif gap-10 mt-6 relative">
//           {!isAdmin ? (
//             <>
//               <Link to="/" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Home size={18}/> Home
//               </Link>

//               {/* Categories with Mega Menu */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setShowCategories(true)}
//                 onMouseLeave={() => setShowCategories(false)}
//               >
//                 <button className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                   <Grid size={18}/> Categories
//                 </button>

//                 {showCategories && (
//                   <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-5 gap-6 z-50">
//                     {CATEGORIES.map(cat => (
//                       <Link
//                         key={cat.id}
//                         to={`/category/${cat.id}`}
//                         className="flex flex-col items-center text-center group"
//                       >
//                         <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md mb-2 group-hover:scale-105 transition-transform">
//                           <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
//                         </div>
//                         <span className="text-sm font-medium text-[#542018] group-hover:text-amber-700 transition">
//                           {cat.name}
//                         </span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <a href="#featured" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Star size={18}/> Featured
//               </a>
//               <a href="#footer" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Phone size={18}/> Contact Us
//               </a>
//               <a href="#contact" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Store size={18}/> Silver Store
//               </a>
//             </>
//           ) : (
//             <>
//               <Link to="/admin/products" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Package size={18}/> Products
//               </Link>
//               <Link to="/admin/banner" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Image size={18}/> Banner
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Navigation - Slide Down */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 flex flex-col items-center gap-6 bg-[#fdf7ef] rounded-lg shadow-md py-6 w-full">
//             {!isAdmin ? (
//               <>
//                 <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Home size={18}/> Home
//                 </Link>

//                 {/* Mobile Categories Dropdown */}
//                 <div className="w-full">
//                   <button 
//                     onClick={() => setShowCategories(!showCategories)}
//                     className="flex items-center gap-2 text-[#542018] font-medium mx-auto"
//                   >
//                     <Grid size={18}/> Categories
//                   </button>
//                   {showCategories && (
//                     <div className="mt-4 grid grid-cols-2 gap-4 px-4">
//                       {CATEGORIES.map(cat => (
//                         <Link
//                           key={cat.id}
//                           to={`/category/${cat.id}`}
//                           onClick={() => { setMenuOpen(false); setShowCategories(false) }}
//                           className="flex flex-col items-center text-center bg-white p-2 rounded-lg shadow-sm"
//                         >
//                           <img src={cat.img} alt={cat.name} className="w-16 h-16 object-cover rounded-md mb-2" />
//                           <span className="text-sm font-medium text-[#542018]">{cat.name}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <a href="#featured" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Star size={18}/> Featured
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Phone size={18}/> Contact Us
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Store size={18}/> Silver Store
//                 </a>
//               </>
//             ) : (
//               <>
//                 <Link to="/admin/products" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Package size={18}/> Products
//                 </Link>
//                 <Link to="/admin/banner" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Image size={18}/> Banner
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'
// import { Menu, X, Home, Grid, Star, Phone, Store, Package, Image } from 'lucide-react'

// // Categories with images (place your images in /public/Categories/)
// const CATEGORIES = [
//   { id: 'ladies-rings', name: 'Ladies Rings', img: '/Categories/ladies.png' },
//   { id: 'gents-rings', name: 'Gents Rings', img: '/Categories/gents.png' },
//   { id: 'earings', name: 'Earings', img: '/Categories/earings.png' },
//   { id: 'bangles-karas', name: 'Bangles / Karas', img: '/Categories/bangles.png' },
//   { id: 'chains', name: 'Chains', img: '/Categories/chains.png' },
//   { id: 'bracelets', name: 'Bracelets', img: '/Categories/bracelets.png' },
//   { id: 'mangalsutra', name: 'Mangalsutra', img: '/Categories/mangalsutra.png' },
//   { id: 'pendant-sets', name: 'Pendant Sets', img: '/Categories/pendantset.png' },
//   { id: 'diamonds', name: 'Diamonds', img: '/Categories/diamonds.png' },
//   { id: 'pendants', name: 'Pendants', img: '/Categories/pendants.png' },
// ]

// export default function Navbar() {
//   const { user } = useAuth()
//   const location = useLocation()
//   const isAdmin = location.pathname.startsWith('/admin')
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [showCategories, setShowCategories] = useState(false)

//   return (
//     <nav className="bg-white/95 backdrop-blur-md top-0 z-50 transition-all duration-300 relative">
//       <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        
//         {/* Top Row */}
//         <div className="w-full flex items-center justify-between">
//           {/* Left spacer for alignment on desktop */}
//           <div className="w-16 md:w-20 flex items-center">
//             {/* Hamburger only on mobile */}
//             <button
//               className="md:hidden text-[#542018]"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Logo */}
//           <Link to="/" className="flex justify-center flex-1">
//             <img
//               src="/Logo/LogoNav.png"
//               alt="sethi Logo"
//               className="h-26 w-auto hover:scale-110 transition-transform duration-300"
//             />
//           </Link>

//           {/* Dashboard/Admin Button */}
//           <div className="w-16 md:w-20 flex justify-end">
//             <Link
//               to={isAdmin ? '/' : '/admin'}
//               className={`px-4 py-2 rounded-full font-serif font-medium transition-all duration-200 ${
//                 user
//                   ? 'bg-[#542018] text-white hover:opacity-90'
//                   : 'bg-gray-100 text-[#542018] hover:bg-gray-200'
//               }`}
//             >
//               {isAdmin ? 'Home' : user ? 'Dashboard' : 'Admin'}
//             </Link>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-wrap justify-center font-serif gap-10 mt-6 relative">
//           {!isAdmin ? (
//             <>
//               <Link to="/" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Home size={18}/> Home
//               </Link>

//               {/* Categories with Mega Menu (Desktop only) */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setShowCategories(true)}
//                 onMouseLeave={() => setShowCategories(false)}
//               >
//                 <button className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                   <Grid size={18}/> Categories
//                 </button>

//                 {showCategories && (
//                   <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-5 gap-6 z-50">
//                     {CATEGORIES.map(cat => (
//                       <Link
//                         key={cat.id}
//                         to={`/category/${cat.id}`}
//                         className="flex flex-col items-center text-center group"
//                       >
//                         <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md mb-2 group-hover:scale-105 transition-transform">
//                           <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
//                         </div>
//                         <span className="text-sm font-medium text-[#542018] group-hover:text-amber-700 transition">
//                           {cat.name}
//                         </span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <a href="#featured" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Star size={18}/> Featured
//               </a>
//               <a href="#footer" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Phone size={18}/> Contact Us
//               </a>
//               <a href="#contact" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Store size={18}/> Silver Store
//               </a>
//             </>
//           ) : (
//             <>
//               <Link to="/admin/products" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Package size={18}/> Products
//               </Link>
//               <Link to="/admin/banner" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Image size={18}/> Banner
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Navigation - Slide Down */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 flex flex-col items-center gap-6 bg-[#fdf7ef] rounded-lg shadow-md py-6 w-full">
//             {!isAdmin ? (
//               <>
//                 <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Home size={18}/> Home
//                 </Link>

//                 {/* On mobile, just scroll to categories section */}
//                 <a 
//                   href="#categories"
//                   onClick={() => setMenuOpen(false)}
//                   className="flex items-center gap-2 text-[#542018] font-medium"
//                 >
//                   <Grid size={18}/> Categories
//                 </a>

//                 <a href="#featured" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Star size={18}/> Featured
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Phone size={18}/> Contact Us
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Store size={18}/> Silver Store
//                 </a>
//               </>
//             ) : (
//               <>
//                 <Link to="/admin/products" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Package size={18}/> Products
//                 </Link>
//                 <Link to="/admin/banner" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Image size={18}/> Banner
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }
// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'
// import { Menu, X, Home, Grid, Star, Phone, Store, Package, Image } from 'lucide-react'

// // Categories with images (place your images in /public/Categories/)
// const CATEGORIES = [
//   { id: 'ladies-rings', name: 'Ladies Rings', img: '/Categories/ladies.png' },
//   { id: 'gents-rings', name: 'Gents Rings', img: '/Categories/gents.png' },
//   { id: 'earings', name: 'Earings', img: '/Categories/earings.png' },
//   { id: 'bangles-karas', name: 'Bangles / Karas', img: '/Categories/bangles.png' },
//   { id: 'chains', name: 'Chains', img: '/Categories/chains.png' },
//   { id: 'bracelets', name: 'Bracelets', img: '/Categories/bracelets.png' },
//   { id: 'mangalsutra', name: 'Mangalsutra', img: '/Categories/mangalsutra.png' },
//   { id: 'pendant-sets', name: 'Pendant Sets', img: '/Categories/pendantset.png' },
//   { id: 'diamonds', name: 'Diamonds', img: '/Categories/diamonds.png' },
//   { id: 'pendants', name: 'Pendants', img: '/Categories/pendants.png' },
// ]

// export default function Navbar() {
//   const { user } = useAuth()
//   const location = useLocation()
//   const isAdmin = location.pathname.startsWith('/admin')
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [showCategories, setShowCategories] = useState(false)

//   return (
//     <nav className="bg-white/95 backdrop-blur-md top-0 z-50 transition-all duration-300 relative">
//       <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        
//         {/* Top Row */}
//         <div className="w-full flex items-center justify-between">
//           {/* Left spacer for alignment on desktop */}
//           <div className="w-16 md:w-20 flex items-center">
//             {/* Hamburger only on mobile */}
//             <button
//               className="md:hidden text-[#542018]"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Logo */}
//           <Link to="/" className="flex justify-center flex-1">
//             <img
//               src="/Logo/LogoNav.png"
//               alt="sethi Logo"
//               className="h-26 w-auto hover:scale-110 transition-transform duration-300"
//             />
//           </Link>

//           {/* Dashboard/Admin Button */}
//           <div className="w-16 md:w-20 flex justify-end">
//             <Link
//               to={isAdmin ? '/' : '/admin'}
//               className={`px-4 py-2 rounded-full font-serif font-medium transition-all duration-200 ${
//                 user
//                   ? 'bg-[#542018] text-white hover:opacity-90'
//                   : 'bg-gray-100 text-[#542018] hover:bg-gray-200'
//               }`}
//             >
//               {isAdmin ? 'Home' : user ? 'Dashboard' : 'Admin'}
//             </Link>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-wrap justify-center font-serif gap-10 mt-6 relative">
//           {!isAdmin ? (
//             <>
//               <Link to="/" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Home size={18}/> Home
//               </Link>

//               {/* Categories with Mega Menu (Desktop only) */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setShowCategories(true)}
//                 onMouseLeave={() => setShowCategories(false)}
//               >
//                 <button className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                   <Grid size={18}/> Categories
//                 </button>

//                 {/* Invisible bridge to prevent menu from disappearing */}
//                 <div className="fixed top-full left-1/2 -translate-x-1/2 w-[800px] h-4 bg-transparent" style={{top: '100%'}} />

//                 {showCategories && (
//                   <div className="fixed left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-5 gap-6 z-50 opacity-0 animate-fadeIn" style={{top: 'calc(100% + 1rem)'}}>
//                     {CATEGORIES.map(cat => (
//                       <Link
//                         key={cat.id}
//                         to={`/category/${cat.id}`}
//                         className="flex flex-col items-center text-center group"
//                       >
//                         <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md mb-2 group-hover:scale-105 transition-transform duration-200">
//                           <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
//                         </div>
//                         <span className="text-sm font-medium text-[#542018] group-hover:text-amber-700 transition-colors duration-200">
//                           {cat.name}
//                         </span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <a href="#featured" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Star size={18}/> Featured
//               </a>
//               <a href="#footer" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Phone size={18}/> Contact Us
//               </a>
//               <a href="#contact" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Store size={18}/> Silver Store
//               </a>
//             </>
//           ) : (
//             <>
//               <Link to="/admin/products" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Package size={18}/> Products
//               </Link>
//               <Link to="/admin/banner" className="flex items-center gap-2 text-[#542018] font-medium transition-all duration-300 hover:scale-105">
//                 <Image size={18}/> Banner
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Navigation - Slide Down */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 flex flex-col items-center gap-6 bg-[#fdf7ef] rounded-lg shadow-md py-6 w-full">
//             {!isAdmin ? (
//               <>
//                 <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Home size={18}/> Home
//                 </Link>

//                 {/* On mobile, just scroll to categories section */}
//                 <a 
//                   href="#categories"
//                   onClick={() => setMenuOpen(false)}
//                   className="flex items-center gap-2 text-[#542018] font-medium"
//                 >
//                   <Grid size={18}/> Categories
//                 </a>

//                 <a href="#featured" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Star size={18}/> Featured
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Phone size={18}/> Contact Us
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Store size={18}/> Silver Store
//                 </a>
//               </>
//             ) : (
//               <>
//                 <Link to="/admin/products" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Package size={18}/> Products
//                 </Link>
//                 <Link to="/admin/banner" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Image size={18}/> Banner
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateX(-50%) translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(-50%) translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out forwards;
//         }
//       `}</style>
//     </nav>
//   )
// }

// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'
// import { Menu, X, Home, Grid, Star, Phone, Store, Package, Image, ChevronDown } from 'lucide-react'

// // Categories with images (place your images in /public/Categories/)
// const CATEGORIES = [
//   { id: 'ladies-rings', name: 'Ladies Rings', img: '/Categories/ladies.png' },
//   { id: 'gents-rings', name: 'Gents Rings', img: '/Categories/2.png' },
//   { id: 'earings', name: 'Earrings', img: '/Categories/earings.png' },
//   { id: 'bangles-karas', name: 'Bangles / Karas', img: '/Categories/3.png' },
//   { id: 'chains', name: 'Chains', img: '/Categories/chains.png' },
//   { id: 'bracelets', name: 'Bracelets', img: '/Categories/bracelet.jpg' },
//   { id: 'mangalsutra', name: 'Mangalsutra', img: '/Categories/5.png' },
//   { id: 'pendant-sets', name: 'Pendant Sets', img: '/Categories/pendantset.png' },
//   { id: 'diamonds', name: 'Diamonds', img: '/Categories/diamonds.png' },
//   { id: 'pendants', name: 'Pendants', img: '/Categories/pendants.png' },
// ]

// export default function Navbar() {
//   const { user } = useAuth()
//   const location = useLocation()
//   const isAdmin = location.pathname.startsWith('/admin')
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [showCategories, setShowCategories] = useState(false)

//   return (
//     <nav className="bg-white/95 backdrop-blur-sm top-0 z-50 relative">
//       <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        
//         {/* Top Row */}
//         <div className="w-full flex items-center justify-between">
//           {/* Left spacer for alignment on desktop */}
//           <div className="w-16 md:w-20 flex items-center">
//             {/* Hamburger only on mobile */}
//             <button
//               className="md:hidden text-[#542018]"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Logo */}
//           <Link to="/" className="flex justify-center flex-1">
//             <img
//               src="/Logo/LogoNav.png"
//               alt="sethi Logo"
//               className="h-26 w-auto hover:scale-105 transition-transform duration-200"
//             />
//           </Link>

//           {/* Dashboard/Admin Button */}
//           <div className="w-16 md:w-20 flex justify-end">
//             <Link
//               to={isAdmin ? '/' : '/admin'}
//               className={`px-4 py-2 rounded-full font-serif font-medium transition-colors duration-200 ${
//                 user
//                   ? 'bg-[#542018] text-white hover:bg-[#3d1611]'
//                   : 'bg-gray-100 text-[#542018] hover:bg-gray-200'
//               }`}
//             >
//               {isAdmin ? 'Home' : user ? 'Dashboard' : 'Admin'}
//             </Link>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-wrap justify-center font-serif gap-10 mt-6 relative">
//           {!isAdmin ? (
//             <>
//               <Link to="/" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
//                 <Home size={18}/> Home
//               </Link>

//               {/* Categories with Mega Menu (Desktop only) */}
//               <div 
//                 className="relative group"
//                 onMouseEnter={() => setShowCategories(true)}
//                 onMouseLeave={() => setShowCategories(false)}
//               >
//                 <button className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
//                   <Grid size={18}/> Categories
//                   <ChevronDown size={16} className={`transition-transform duration-200 ${showCategories ? 'rotate-180' : ''}`} />
//                 </button>

//                 {/* Optimized Mega Menu */}
//                 <div className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[600px] bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
//                   showCategories 
//                     ? 'opacity-100 visible translate-y-0' 
//                     : 'opacity-0 invisible -translate-y-2'
//                 }`}>
//                   <div className="p-6">
//                     <div className="grid grid-cols-4 gap-4">
//                       {CATEGORIES.map(cat => (
//                         <Link
//                           key={cat.id}
//                           to={`/category/${cat.id}`}
//                           className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group/item"
//                         >
//                           <div className="w-16 h-16 rounded-lg overflow-hidden shadow-sm mb-2 group-hover/item:shadow-md transition-shadow duration-200">
//                             <img 
//                               src={cat.img} 
//                               alt={cat.name} 
//                               className="w-full h-full object-cover"
//                               loading="lazy"
//                             />
//                           </div>
//                           <span className="text-xs font-medium text-[#542018] group-hover/item:text-amber-700 transition-colors duration-200 leading-tight">
//                             {cat.name}
//                           </span>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <a href="#featured" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
//                 <Star size={18}/> Featured
//               </a>
//               <a href="#footer" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
//                 <Phone size={18}/> Contact Us
//               </a>
//               <a href="#contact" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
//                 <Store size={18}/> Silver Store
//               </a>
//             </>
//           ) : (
//             <>
//               <Link to="/admin/products" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
//                 <Package size={18}/> Products
//               </Link>
//               <Link to="/admin/banner" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
//                 <Image size={18}/> Banner
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Navigation - Slide Down */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 flex flex-col items-center gap-6 bg-[#fdf7ef] rounded-lg shadow-md py-6 w-full">
//             {!isAdmin ? (
//               <>
//                 <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Home size={18}/> Home
//                 </Link>

//                 {/* On mobile, just scroll to categories section */}
//                 <a 
//                   href="#categories"
//                   onClick={() => setMenuOpen(false)}
//                   className="flex items-center gap-2 text-[#542018] font-medium"
//                 >
//                   <Grid size={18}/> Categories
//                 </a>

//                 <a href="#featured" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Star size={18}/> Featured
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Phone size={18}/> Contact Us
//                 </a>
//                 <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Store size={18}/> Silver Store
//                 </a>
//               </>
//             ) : (
//               <>
//                 <Link to="/admin/products" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Package size={18}/> Products
//                 </Link>
//                 <Link to="/admin/banner" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
//                   <Image size={18}/> Banner
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Menu, X, Home, Grid, Star, Phone, Store, Package, Image, ChevronDown } from 'lucide-react'

// Categories with images (place your images in /public/Categories/)
const CATEGORIES = [
  { id: 'ladies-rings', name: 'Ladies Rings', img: '/Categories/ladies.png' },
  { id: 'gents-rings', name: 'Gents Rings', img: '/Categories/2.png' },
  { id: 'earings', name: 'Earrings', img: '/Categories/earings.png' },
  { id: 'bangles-karas', name: 'Bangles / Karas', img: '/Categories/3.png' },
  { id: 'chains', name: 'Chains', img: '/Categories/chains.png' },
  { id: 'bracelets', name: 'Bracelets', img: '/Categories/bracelet.png' },
  { id: 'mangalsutra', name: 'Mangalsutra', img: '/Categories/5.png' },
  { id: 'pendant-sets', name: 'Pendant Sets', img: '/Categories/pendantset.png' },
  
  { id: 'pendants', name: 'Pendants', img: '/Categories/pendants.png' },
  { id: 'diamonds', name: 'Diamonds', img: '/Categories/diamonds.png' },
  { id: 'gems', name: 'Gem Stone', img: '/Categories/Gems.png' }
]

export default function Navbar() {
  const { user } = useAuth()
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm top-0 z-50 relative">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        
        {/* Top Row */}
        <div className="w-full flex items-center justify-between">
          {/* Left spacer / Hamburger */}
          <div className="w-16 md:w-20 flex items-center">
            <button
              className="md:hidden text-[#542018]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex justify-center flex-1">
            <img
              src="/Logo/LogoNav.png"
              alt="sethi Logo"
              className="h-16 md:h-24 w-auto hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Dashboard/Admin Button */}
          <div className="w-16 md:w-20 flex justify-end">
            <Link
              to={isAdmin ? '/' : '/admin'}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full font-serif font-medium text-sm md:text-base transition-colors duration-200 ${
                user
                  ? 'bg-[#542018] text-white hover:bg-[#3d1611]'
                  : 'bg-gray-100 text-[#542018] hover:bg-gray-200'
              }`}
            >
              {isAdmin ? 'Home' : user ? 'Dashboard' : 'Admin'}
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap justify-center font-serif gap-10 mt-6 relative">
          {!isAdmin ? (
            <>
              <Link to="/" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
                <Home size={18}/> Home
              </Link>

              {/* Categories with Mega Menu (Desktop only) */}
              <div 
                className="relative group"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <button className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
                  <Grid size={18}/> Categories
                  <ChevronDown size={16} className={`transition-transform duration-200 ${showCategories ? 'rotate-180' : ''}`} />
                </button>

                {/* Optimized Mega Menu */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[600px] bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
                  showCategories 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="p-6">
                    <div className="grid grid-cols-4 gap-4">
                      {CATEGORIES.map(cat => (
                        <Link
                          key={cat.id}
                          to={`/category/${cat.id}`}
                          className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group/item"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden shadow-sm mb-2 group-hover/item:shadow-md transition-shadow duration-200">
                            <img 
                              src={cat.img} 
                              alt={cat.name} 
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-xs font-medium text-[#542018] group-hover/item:text-amber-700 transition-colors duration-200 leading-tight">
                            {cat.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a href="#featured" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
                <Star size={18}/> Featured
              </a>
             
              <a href="#contact" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
                <Store size={18}/> Silver Store - Gurmeena
              </a>
              <a href="#footer" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
                <Phone size={18}/> Contact Us
              </a>
            </>
          ) : (
            <>
              <Link to="/admin/products" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
                <Package size={18}/> Products
              </Link>
              <Link to="/admin/banner" className="flex items-center gap-2 text-[#542018] font-medium hover:text-amber-700 transition-colors duration-200">
                <Image size={18}/> Banner
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation - Slide Down */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-6 bg-[#fdf7ef] rounded-lg shadow-md py-6 w-full">
            {!isAdmin ? (
              <>
                <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
                  <Home size={18}/> Home
                </Link>

                {/* On mobile, just scroll to categories section */}
                <a 
                  href="#categories"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[#542018] font-medium"
                >
                  <Grid size={18}/> Categories
                </a>

                <a href="#featured" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
                  <Star size={18}/> Featured
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
                  <Phone size={18}/> Contact Us
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
                  <Store size={18}/> Silver Store
                </a>
              </>
            ) : (
              <>
                <Link to="/admin/products" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
                  <Package size={18}/> Products
                </Link>
                <Link to="/admin/banner" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-[#542018] font-medium">
                  <Image size={18}/> Banner
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
