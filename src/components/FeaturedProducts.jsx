import React, {useEffect, useState} from 'react'
import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

export default function FeaturedProducts(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(()=>{
    async function load(){
      setLoading(true)
      setError('')
      try{
        const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.products)
        const featured = res.documents ? res.documents.filter(d=>d.featured) : []
        setProducts(featured)
      }catch(err){
        console.error('Featured products load error', err)
        setError('Failed to load featured products')
      } finally {
        setLoading(false)
      }
    }
    load()
  },[])

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
    <div id="featured" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500">
            <p>No featured products available.</p>
            <p className="text-sm mt-2">Add products and mark them as featured in the admin panel.</p>
          </div>
        )}
        {products.map(p=> (
          <div key={p.$id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={p.imageUrl || 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'} 
                alt={p.name} 
                className="h-40 w-full object-cover mb-3 rounded" 
              />
              <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
            <div className="font-semibold text-gray-900">{p.name}</div>
            <div className="text-lg font-bold text-blue-600">₹{p.price}</div>
            <div className="text-sm text-gray-500 capitalize">{p.category}</div>
          </div>
        ))}
      </div>
    </div>
  )
}