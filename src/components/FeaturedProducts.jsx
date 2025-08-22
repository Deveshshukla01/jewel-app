
// import React, {useEffect, useState} from 'react'
// import { Link } from 'react-router-dom'
// import { databases, DATABASE_ID, COLLECTIONS, QueryTool } from '../appwrite/config'

// export default function FeaturedProducts(){
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')

//   useEffect(()=>{
//     async function load(){
//       setLoading(true)
//       setError('')
//       try{
//         const res = await databases.listDocuments(
//           DATABASE_ID, 
//           COLLECTIONS.products,
//           [QueryTool.equal('featured', true)]
//         )
//         const featured = res.documents ? res.documents.filter(d=>d.featured) : []
//         setProducts(featured)
//       }catch(err){
//         setError('Failed to load featured products')
//       } finally {
//         setLoading(false)
//       }
//     }
//     load()
//     const interval = setInterval(load, 300000)
//     return () => clearInterval(interval)
//   },[])

//   if (loading) {
//     return (
//       <div id="featured" className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-700 mb-6">Our Featured Collection</h2>
//           <div className="animate-spin rounded-full h-14 w-14 border-4 border-brown-200 border-t-brown-600 mx-auto"></div>
//           <p className="mt-6 text-brown-600 text-lg">Loading our finest pieces...</p>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div id="featured" className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-700 mb-6">Our Featured Collection</h2>
//           <div className="text-red-600 bg-red-50 rounded-xl p-6 inline-block">{error}</div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div id="featured" className="py-20 bg-white">
//   <div className="container mx-auto px-4 max-w-7xl">   {/* ⬅️ Reduced width */}
//     <div className="text-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-3">
//         Our Featured Collection
//       </h2>
//       <p className="text-brown-600 text-base md:text-lg max-w-2xl mx-auto">
//         Handpicked jewelry, crafted with timeless elegance and beauty.
//       </p>
//     </div>

//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.length === 0 && (
//         <div className="col-span-full text-center py-16 text-brown-700 bg-brown-50 rounded-2xl">
//           <div className="text-6xl mb-4">💎</div>
//           <p className="text-xl mb-2">No featured products available.</p>
//           <p className="text-sm">Add products and mark them as featured in the admin panel.</p>
//         </div>
//       )}
//       {products.map(p => (
//         <Link
//           key={p.$id}
//           to={`/product/${p.$id}`}
//           className="group flex flex-col"
//         >
//           <img
//             src={p.imageUrl || 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400'}
//             alt={p.name}
//             className="h-52 w-full object-cover rounded-xl mb-3 group-hover:scale-105 transition-transform duration-500"
//           />
//           <div className="flex justify-between items-center mb-1">
//             <h3 className="text-brown-800 text-sm md:text-base font-medium line-clamp-1">
//               {p.name}
//             </h3>
//             <span className="text-lg md:text-xl font-bold text-brown-800 ml-2">
//               {p.price?.toLocaleString()}g
//             </span>
//           </div>
//           <div className="flex justify-end items-center gap-2 text-xs md:text-sm">
//             {p.originalPrice && (
//               <span className="line-through text-brown-400">
//                 ₹{p.originalPrice.toLocaleString()}
//               </span>
//             )}
//             {p.originalPrice && (
//               <span className="text-red-600 font-medium">
//                 ({Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}% Off)
//               </span>
//             )}
//           </div>
//         </Link>
//       ))}
//     </div>
//   </div>
// </div>
//   )
// }







// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { databases, DATABASE_ID, COLLECTIONS, QueryTool } from '../appwrite/config'

// export default function FeaturedProducts() {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')

//   useEffect(() => {
//     async function load() {
//       setLoading(true)
//       setError('')
//       try {
//         const res = await databases.listDocuments(
//           DATABASE_ID,
//           COLLECTIONS.products,
//           [QueryTool.equal('featured', true)]
//         )
//         const featured = res.documents ? res.documents.filter(d => d.featured) : []
//         setProducts(featured)
//       } catch (err) {
//         setError('Failed to load featured products')
//       } finally {
//         setLoading(false)
//       }
//     }
//     load()
//     const interval = setInterval(load, 300000)
//     return () => clearInterval(interval)
//   }, [])

//   if (loading) {
//     return (
//       <div id="featured" className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center font-serif">
//           <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6 " style={{ color: '#542018' }}>
//             Our Featured Collection
//           </h2>
//           <div className="animate-spin rounded-full h-14 w-14 border-4 border-brown-200 mx-auto"
//                style={{ borderTopColor: '#542018' }}></div>
//           <p className="mt-6 text-lg" style={{ color: '#542018' }}>
//             Loading our finest pieces...
//           </p>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div id="featured" className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#542018' }}>
//             Our Featured Collection
//           </h2>
//           <div className="text-red-600 bg-red-50 rounded-xl p-6 inline-block">{error}</div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div id="featured" className="py-20 bg-white">
//       <div className="container mx-auto px-4 max-w-7xl font-serif">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-serif mb-3" style={{ color: '#542018' }}>
//             Featured Products
//           </h2>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.length === 0 && (
//             <div className="col-span-full text-center py-16 bg-brown-50 rounded-2xl" style={{ color: '#542018' }}>
//               <div className="text-6xl mb-4">💎</div>
//               <p className="text-xl font-serif mb-2">No featured products available.</p>
//               <p className="text-sm font-serif">Add products and mark them as featured in the admin panel.</p>
//             </div>
//           )}

//           {products.map(p => (
//             <Link
//               key={p.$id}
//               // to={`/product/${p.$id}`}
//               className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               {/* Image */}
//               <img
//                 src={
//                   p.imageUrl ||
//                   'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400'
//                 }
//                 alt={p.name}
//                 className="w-full h-64 object-cover"
//               />

//               {/* Info */}
//               {/* <div className="p-4">
//                 <h3 className="text-sm md:text-base font-medium mb-2 line-clamp-1" style={{ color: '#542018' }}>
//                   {p.name}
//                 </h3>
//                 <p className="text-lg md:text-xl font-bold" style={{ color: '#542018' }}>
//                   ₹{p.price?.toLocaleString()}
//                 </p>
//               </div> */}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { databases, DATABASE_ID, COLLECTIONS, QueryTool } from '../appwrite/config'

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      setLoading(true)
      setError('')
      try {
        const res = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.products,
          [QueryTool.equal('featured', true)]
        )
        const featured = res.documents ? res.documents.filter(d => d.featured) : []
        setProducts(featured)
      } catch (err) {
        setError('Failed to load featured products')
      } finally {
        setLoading(false)
      }
    }
    load()
    const interval = setInterval(load, 300000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      id="featured" 
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/Background/Categories.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 max-w-7xl font-serif">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-3" style={{ color: '#542018' }}>
            Featured Products
          </h2>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center">
            <div 
              className="animate-spin rounded-full h-14 w-14 border-4 border-brown-200 mx-auto"
              style={{ borderTopColor: '#542018' }}
            ></div>
            <p className="mt-6 text-lg" style={{ color: '#542018' }}>
              Loading our finest pieces...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-red-600 bg-red-50 rounded-xl p-6 text-center inline-block">
            {error}
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.length === 0 && (
              <div className="col-span-full text-center py-16 bg-brown-50 rounded-2xl" style={{ color: '#542018' }}>
                <div className="text-6xl mb-4">💎</div>
                <p className="text-xl font-serif mb-2">No featured products available.</p>
                <p className="text-sm font-serif">Add products and mark them as featured in the admin panel.</p>
              </div>
            )}

            {products.map(p => (
              <Link
                key={p.$id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={
                    p.imageUrl ||
                    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400'
                  }
                  alt={p.name}
                  className="w-full h-64 object-cover"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
