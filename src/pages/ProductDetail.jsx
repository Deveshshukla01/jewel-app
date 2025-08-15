import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'
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

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProduct() {
      setLoading(true)
      setError('')
      try {
        const doc = await databases.getDocument(DATABASE_ID, COLLECTIONS.products, id)
        setProduct(doc)
        console.log('Product loaded:', doc)
      } catch (err) {
        console.error('Product load error', err)
        setError('Failed to load product details')
      } finally {
        setLoading(false)
      }
    }
    loadProduct()
  }, [id])

  const handleWhatsAppContact = () => {
    if (!product) return
    
    const message = `Hi! I'm interested in ${product.name} (₹${product.price?.toLocaleString()}). Can you provide more details?`
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg">Loading product details...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center py-16 text-red-700 bg-red-50 rounded-2xl">
            <div className="text-4xl mb-4">⚠️</div>
            <p className="text-lg mb-4">{error || 'Product not found'}</p>
            <Link to="/" className="text-purple-600 hover:text-purple-800 font-medium">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const categoryName = CATEGORY_NAMES[product.category] || product.category

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:text-purple-600">{categoryName}</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <img
                src={product.imageUrl || 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt={product.name}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              {product.featured && (
                <div className="absolute top-6 right-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    Featured
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {categoryName}
                </span>
                {product.featured && (
                  <span className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                {product.name}
              </h1>
              
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                ₹{product.price?.toLocaleString()}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description || `Exquisite ${product.name} crafted with precision and attention to detail. This beautiful piece from our ${categoryName.toLowerCase()} collection represents the perfect blend of traditional craftsmanship and modern elegance. Made with high-quality materials and finished to perfection, this jewelry piece is designed to be treasured for generations.`}
              </p>
            </div>

            {/* Product Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Premium quality materials
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Handcrafted with precision
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Elegant and timeless design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Perfect for special occasions
                </li>
              </ul>
            </div>

            {/* WhatsApp Contact Button */}
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppContact}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Contact via WhatsApp</span>
              </button>
              
              <p className="text-center text-gray-600 text-sm">
                Get instant assistance and personalized recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}