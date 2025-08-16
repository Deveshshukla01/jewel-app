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
    <div className="bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 py-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      <div className="container mx-auto px-4">
        <div className="text-primary-800 font-semibold text-center bounce-in">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-primary-800 text-lg animate-float">💎</span>
            <span className="text-lg">{text}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Updated daily</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Free shipping on orders above ₹5000</span>
            <span className="text-primary-800 text-lg animate-float">💎</span>
          </div>
        </div>
      </div>
    </div>
  )
}