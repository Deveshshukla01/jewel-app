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
    <div className="bg-yellow-50 border-t border-b py-2">
      <div className="container mx-auto px-4 marquee">
        <div>{text} &nbsp; • &nbsp; Updated daily</div>
      </div>
    </div>
  )
}