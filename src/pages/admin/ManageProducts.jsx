import React, {useState, useEffect} from 'react'
import { databases, storage, ID_TOOL, DATABASE_ID, BUCKET_ID, COLLECTIONS } from '../../appwrite/config'

const CATEGORIES = [
  { id: 'ladies-rings', name: 'Ladies Rings' },
  { id: 'gents-rings', name: 'Gents Rings' },
  { id: 'earings', name: 'Earings' },
  { id: 'bangles-karas', name: 'Bangles / Karas' },
  { id: 'chains', name: 'Chains' },
  { id: 'bracelets', name: 'Bracelets' },
  { id: 'mangalsutra', name: 'Mangalsutra' },
  { id: 'pendant-sets', name: 'Pendant Sets' },
  { id: 'diamonds', name: 'Diamonds' },
  { id: 'pendants', name: 'Pendants' }
]

export default function ManageProducts(){
  const [list, setList] = useState([])
  const [form, setForm] = useState({name:'', price:'', category:'ladies-rings', featured:false})
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(()=>{ load() },[])

  async function load(){
    try{
      setError('')
      const res = await databases.listDocuments(
        DATABASE_ID, 
        COLLECTIONS.products,
        [], // No filters - get all products
        100 // Limit to 100 products
      )
      setList(res.documents || [])
      console.log('Admin: Products loaded:', res.documents?.length || 0)
    }catch(err){ 
      console.error('Load products error:', err)
      setError('Failed to load products: ' + (err.message || err))
    }
  }

  async function create(){
    if (!form.name || !form.price) {
      setError('Name and price are required')
      return
    }

    setLoading(true)
    setError('')
    
    try{
      let imageUrl = ''
      if(file){
        const uploaded = await storage.createFile(BUCKET_ID, ID_TOOL.unique(), file)
        // Construct a public view URL for the uploaded file
        imageUrl = `${import.meta.env.VITE_APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${import.meta.env.VITE_APPWRITE_PROJECT}`
      }
      
      const productData = {
        name: form.name,
        price: parseFloat(form.price),
        category: form.category,
        featured: form.featured,
        imageUrl: imageUrl,
        createdAt: new Date().toISOString()
      }
      
      console.log('Creating product with data:', productData)
      const doc = await databases.createDocument(DATABASE_ID, COLLECTIONS.products, ID_TOOL.unique(), productData)
      console.log('Product created successfully:', doc)
      setList(prev=>[...prev, doc])
      setForm({name:'', price:'', category:'ladies-rings', featured:false})
      setFile(null)
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]')
      if (fileInput) fileInput.value = ''
      
      alert('Product created successfully!')
    }catch(err){ 
      console.error('Create product error:', err)
      setError('Failed to create product: ' + (err.message || err))
    } finally {
      setLoading(false)
    }
  }

  async function toggleFeatured(id, currentFeatured) {
    try {
      setError('')
      await databases.updateDocument(DATABASE_ID, COLLECTIONS.products, id, { 
        featured: !currentFeatured 
      })
      
      // Update local state
      setList(prev => prev.map(p => 
        p.$id === id ? { ...p, featured: !currentFeatured } : p
      ))
      
      alert('Product updated successfully!')
    } catch (err) {
      console.error('Toggle featured error:', err)
      setError('Failed to update product: ' + (err.message || err))
    }
  }

  async function remove(id){
    if(!confirm('Are you sure you want to delete this product?')) return
    
    try{ 
      setError('')
      await databases.deleteDocument(DATABASE_ID, COLLECTIONS.products, id)
      setList(prev => prev.filter(p => p.$id !== id))
      alert('Product deleted successfully!')
    }catch(err){
      console.error('Delete product error:', err)
      setError('Failed to delete product: ' + (err.message || err))
    }
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-brown-800 mb-6 font-serif">Manage Products</h3>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Create Product Form */}
        <div className="bg-cream-50 p-6 rounded-xl border border-cream-200">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Add New Product</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input 
                placeholder="Enter product name" 
                value={form.name} 
                onChange={e=>setForm({...form,name:e.target.value})} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
              <input 
                type="number"
                placeholder="Enter price" 
                value={form.price} 
                onChange={e=>setForm({...form,price:e.target.value})} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select 
                value={form.category} 
                onChange={e=>setForm({...form,category:e.target.value})} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="inline-flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={form.featured} 
                  onChange={e=>setForm({...form,featured:e.target.checked})}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm font-medium text-gray-700">Featured Product</span>
              </label>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={e=>setFile(e.target.files[0])} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white" 
              />
            </div>
            
            <button 
              onClick={create} 
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all duration-200"
            >
              {loading ? 'Creating...' : 'Create Product'}
            </button>
          </div>
        </div>

        {/* Products List */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-800">All Products ({list.length})</h4>
            <button 
              onClick={load}
              className="text-purple-600 hover:text-purple-800 text-sm font-medium"
            >
              Refresh
            </button>
          </div>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {list.length === 0 ? (
              <div className="text-center py-8 text-gray-600 bg-gray-50 rounded-lg">
                No products found. Create your first product!
              </div>
            ) : (
              list.map(product => (
                <div key={product.$id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h5 className="font-semibold text-gray-800">{product.name}</h5>
                        {product.featured && (
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Price: ₹{product.price}</div>
                        <div>Category: {CATEGORIES.find(c => c.id === product.category)?.name || product.category}</div>
                        {product.imageUrl && (
                          <div>
                            <img 
                              src={product.imageUrl} 
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded-lg mt-2"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 ml-4">
                      <button
                        onClick={() => toggleFeatured(product.$id, product.featured)}
                        className={`text-xs px-3 py-1 rounded ${
                          product.featured 
                            ? 'bg-purple-600 text-white hover:bg-purple-700' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {product.featured ? 'Remove Featured' : 'Make Featured'}
                      </button>
                      
                      <button 
                        onClick={() => remove(product.$id)} 
                        className="text-xs px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}