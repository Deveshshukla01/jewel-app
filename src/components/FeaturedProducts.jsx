import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
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

    const interval = setInterval(load, 30000)
    return () => clearInterval(interval)
  },[])

  if (loading) {
    return (
      <div id="featured" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 font-serif text-gray-900">Featured Products</h2>
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg">Loading our finest pieces...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div id="featured" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 font-serif text-gray-900">Featured Products</h2>
          <div className="text-center py-12 text-red-600 bg-red-50 rounded-2xl">
            {error}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="featured" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Featured Products</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">Handpicked treasures from our exclusive collection, each piece crafted with exceptional attention to detail and timeless beauty</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.length === 0 && (
            <div className="col-span-full text-center py-16 text-gray-600 bg-gray-50 rounded-3xl">
              <div className="text-6xl mb-4">💎</div>
              <p className="text-xl mb-2">No featured products available.</p>
              <p className="text-sm">Add products and mark them as featured in the admin panel.</p>
            </div>
          )}
          {products.map(p=> (
            <Link 
              key={p.$id} 
              to={`/product/${p.$id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={p.imageUrl || 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'} 
                  alt={p.name} 
                  className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-2 rounded-full font-semibold shadow-lg">
                    Featured
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {p.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ₹{p.price?.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 capitalize bg-gray-100 px-3 py-1 rounded-full">
                    {p.category?.replace('-', ' ')}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}