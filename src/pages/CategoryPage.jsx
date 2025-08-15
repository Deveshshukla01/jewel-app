import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { databases, DATABASE_ID, COLLECTIONS, QueryTool } from '../appwrite/config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORY_NAMES = {
  'ladies-rings': 'Ladies Rings',
  'gents-rings': 'Gents Rings',
  'earings': 'Earings',
  'bangles-karas': 'Bangles / Karas',
  'chains': 'Chains',
  'bracelets': 'Bracelets',
  'mangalsutra': 'Mangalsutra',
  'pendant-sets': 'Pendant Sets',
  'diamonds': 'Diamonds',
  'pendants': 'Pendants'
}

export default function CategoryPage(){
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(()=>{
    async function load(){
      setLoading(true)
      setError('')
      try{
        // Fetch all products first, then filter by category
        const res = await databases.listDocuments(
          DATABASE_ID, 
          COLLECTIONS.products,
          [QueryTool.equal('category', id)]
        )
        const filtered = res.documents ? res.documents.filter(p => p.category === id) : []
        setProducts(filtered)
        console.log(`Products loaded for category ${id}:`, filtered.length)
      }catch(err){
        console.error('Category load error', err)
        setError('Failed to load products for this category')
      } finally {
        setLoading(false)
      }
    }
    load()
  },[id])

  const categoryName = CATEGORY_NAMES[id] || id

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-cream-50">
        <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-brown-800 mb-2 font-serif">{categoryName}</h1>
          <p className="text-brown-600 text-lg">Discover our beautiful collection of {categoryName.toLowerCase()}</p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brown-600 mx-auto"></div>
            <p className="mt-4 text-brown-600">Loading products...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-700 bg-red-50 rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length === 0 ? (
              <div className="col-span-full text-center py-12 text-brown-600 bg-white rounded-xl elegant-shadow">
                <p className="text-lg">No products found in this category.</p>
                <p className="text-sm mt-2">Check back later for new arrivals!</p>
              </div>
            ) : (
              products.map(p=> (
                <div key={p.$id} className="bg-white border border-cream-200 rounded-xl p-4 elegant-shadow hover:elegant-shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="relative">
                    <img 
                      src={p.imageUrl || 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'} 
                      alt={p.name} 
                      className="h-48 w-full object-cover mb-4 rounded-lg" 
                    />
                    {p.featured && (
                      <span className="absolute top-3 right-3 bg-brown-600 text-cream-50 text-xs px-3 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-brown-800 text-lg">{p.name}</div>
                    <div className="text-xl font-bold text-brown-600">₹{p.price}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        </div>
      </div>
      <Footer />
    </div>
  )
}