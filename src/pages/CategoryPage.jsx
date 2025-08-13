import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

export default function CategoryPage(){
  const { id } = useParams()
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function load(){
      try{
        const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.products)
        const filtered = res.documents ? res.documents.filter(p => p.category === id) : []
        setProducts(filtered)
      }catch(err){
        console.warn('Category load error', err)
      }
    }
    load()
  },[id])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Category: {id}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <div>No products in this category.</div>
        ) : (
          products.map(p=> (
            <div key={p.$id} className="border rounded p-4">
              <img src={p.imageUrl || '/images/product-placeholder.jpg'} alt={p.name} className="h-40 w-full object-cover mb-3" />
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-600">₹{p.price}</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}