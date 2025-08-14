import React, {useEffect, useState} from 'react'
import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

export default function PriceBanner(){
  const [text, setText] = useState('Gold Price: ₹1000 | Silver Price: ₹650')

  useEffect(()=>{
    // fetch banner doc from Appwrite database
    async function fetchBanner(){
      try{
        const resp = await databases.listDocuments(
          DATABASE_ID, 
          COLLECTIONS.banner,
          [], // No queries needed for banner
          100 // Limit
        )
        if(resp.total > 0){
          setText(resp.documents[0].text || text)
          console.log('Banner loaded:', resp.documents[0].text)
        }
      }catch(err){
        console.error('Banner fetch error', err)
        // Keep default text if fetch fails
      }
    }
    fetchBanner()
    
    // Refresh banner every 5 minutes
    const interval = setInterval(fetchBanner, 300000)
    return () => clearInterval(interval)
  },[])

  return (
    <div className="bg-gradient-to-r from-brown-600 to-brown-700 border-t border-b border-brown-500 py-3">
      <div className="container mx-auto px-4 marquee">
        <div className="text-cream-100 font-medium text-center">
          ✨ {text} &nbsp; • &nbsp; Updated daily &nbsp; • &nbsp; Free shipping on orders above ₹5000 ✨
        </div>
      </div>
    </div>
  )
}