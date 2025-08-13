import React, {useEffect, useState} from 'react'
import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

export default function FeaturedProducts(){
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function load(){
      try{
        const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.products)
        const featured = res.documents ? res.documents.filter(d=>d.featured) : []
        setProducts(featured)
      }catch(err){
        console.warn('Featured products load error', err)
      }
    }
    load()
  },[])

  return (
    <div id="featured" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 && (
          // placeholder products
          [1,2,3,4].map(i=> (
            <div key={i} className="border rounded p-4">
              <div className="h-40 bg-gray-100 mb-3" />
              <div className="font-semibold">Product {i}</div>
              <div className="text-sm text-gray-600">₹{1000*i}</div>
            </div>
          ))
        )}
        {products.map(p=> (
          <div key={p.$id} className="border rounded p-4">
            <img src={(p.imageUrl) || '/images/product-placeholder.jpg'} alt={p.name} className="h-40 w-full object-cover mb-3" />
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-gray-600">₹{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}