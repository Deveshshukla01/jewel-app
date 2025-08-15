import React, {useEffect, useState} from 'react'
import { databases, DATABASE_ID, COLLECTIONS, QueryTool } from '../appwrite/config'

export default function FeaturedProducts(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(()=>{
    async function load(){
      setLoading(true)
      setError('')
      try{
        // Fetch with explicit query to get featured products
        const res = await databases.listDocuments(
          DATABASE_ID, 
          COLLECTIONS.products,
          [QueryTool.equal('featured', true)]
        )
        const featured = res.documents ? res.documents.filter(d=>d.featured) : []
        setProducts(featured)
        console.log('Featured products loaded:', featured.length)
      }catch(err){
        console.error('Featured products load error', err)
        setError('Failed to load featured products')
      } finally {
        setLoading(false)
      }
    }
    load()
  },[])

  // Add a refresh function that can be called
  useEffect(() => {
    const interval = setInterval(() => {
      load()
    }, 30000) // Refresh every 30 seconds
    
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div id="featured" className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div id="featured" className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="text-center py-8 text-red-600">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div id="featured" className="container mx-auto px-4 py-16 bg-gradient-to-b from-cream-50 to-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-brown-800 mb-4 font-serif">Featured Products</h2>
        <p className="text-brown-600 text-lg max-w-2xl mx-auto">Handpicked treasures from our exclusive collection, each piece crafted with exceptional attention to detail</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 && (
          <div className="col-span-full text-center py-12 text-brown-600">
            <p>No featured products available.</p>
            <p className="text-sm mt-2">Add products and mark them as featured in the admin panel.</p>
          </div>
        )}
        {products.map(p=> (
          <div key={p.$id} className="group bg-white border border-cream-200 rounded-2xl p-4 elegant-shadow hover:elegant-shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="relative">
              <img 
                src={p.imageUrl || 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'} 
                alt={p.name} 
                className="h-48 w-full object-cover mb-4 rounded-xl group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                Featured
              </span>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-brown-800 text-lg group-hover:text-brown-600 transition-colors">{p.name}</div>
              <div className="text-xl font-bold text-purple-600">₹{p.price}</div>
              <div className="text-sm text-brown-500 capitalize bg-gradient-to-r from-cream-100 to-cream-200 px-3 py-1 rounded-full inline-block">
                {p.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}