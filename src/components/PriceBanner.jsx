import React, {useEffect, useState} from 'react'
import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

export default function PriceBanner(){
  const [text, setText] = useState('Gold Price: ₹1000 | Silver Price: ₹650')

  useEffect(()=>{
    async function fetchBanner(){
      try{
        const resp = await databases.listDocuments(
          DATABASE_ID, 
          COLLECTIONS.banner,
          [],
          100
        )
        if(resp.total > 0){
          setText(resp.documents[0].text || text)
          console.log('Banner loaded:', resp.documents[0].text)
        }
      }catch(err){
        console.error('Banner fetch error', err)
      }
    }
    fetchBanner()
    
    const interval = setInterval(fetchBanner, 300000)
    return () => clearInterval(interval)
  },[])

  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-white font-medium text-center animate-pulse">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-yellow-300">✨</span>
            <span>{text}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Updated daily</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Free shipping on orders above ₹5000</span>
            <span className="text-yellow-300">✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}