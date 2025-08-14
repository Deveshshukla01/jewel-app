import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { databases, DATABASE_ID, COLLECTIONS, QueryTool } from '../appwrite/config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORY_NAMES = {
  bracelet: 'Bracelets',
  necklace: 'Necklaces', 
  earring: 'Earrings',
  nosepin: 'Nose Pins',
  waistband: 'Waistbands'
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
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryName}</h1>
          <p className="text-gray-600">Discover our beautiful collection of {categoryName.toLowerCase()}</p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p className="text-lg">No products found in this category.</p>
                <p className="text-sm mt-2">Check back later for new arrivals!</p>
              </div>
            ) : (
              products.map(p=> (
                <div key={p.$id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={p.imageUrl || 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'} 
                      alt={p.name} 
                      className="h-40 w-full object-cover mb-3 rounded" 
                    />
                    {p.featured && (
                      <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="font-semibold text-gray-900">{p.name}</div>
                  <div className="text-lg font-bold text-blue-600">₹{p.price}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}