import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-800 to-secondary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">{categoryName}</h1>
          <p className="text-secondary-100 text-lg md:text-xl max-w-2xl mx-auto">Discover our beautiful collection of {categoryName.toLowerCase()}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {loading && (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-secondary-200 border-t-secondary-600 mx-auto"></div>
            <p className="mt-6 text-primary-600 text-lg">Loading products...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-16 text-red-700 bg-red-50 rounded-2xl">
            <div className="text-4xl mb-4">⚠️</div>
            <p className="text-lg">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.length === 0 ? (
              <div className="col-span-full text-center py-16 text-primary-600 bg-white rounded-3xl shadow-warm">
                <div className="text-6xl mb-4">💎</div>
                <p className="text-xl mb-2">No products found in this category.</p>
                <p className="text-sm">Check back later for new arrivals!</p>
              </div>
            ) : (
              products.map(p=> (
                <Link 
                  key={p.$id} 
                  to={`/product/${p.$id}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-warm hover:shadow-warm-lg card-hover stagger-item"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={p.imageUrl || 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'} 
                      alt={p.name} 
                      className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    {p.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-primary-800 to-secondary-600 text-white text-xs px-3 py-2 rounded-full font-semibold shadow-warm glow">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-primary-800 text-lg mb-2 group-hover:text-secondary-600 transition-colors line-clamp-2">
                      {p.name}
                    </h3>
                    <div className="text-2xl font-bold gradient-text">
                      ₹{p.price?.toLocaleString()}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}