import React, {useEffect, useState} from 'react'
import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

export default function PriceBanner(){
  const [text, setText] = useState('Gold Price: ₹1000 | Silver Price: ₹650')

  useEffect(()=>{
    // fetch banner doc from Appwrite database
    async function fetchBanner(){
      try{
        const resp = await databases.listDocuments(DATABASE_ID, COLLECTIONS.banner)
        if(resp.total > 0){
          setText(resp.documents[0].text || text)
        }
      }catch(err){
        console.warn('Banner fetch error', err)
      }
    }
    fetchBanner()
  },[])

  return (
    <div className="bg-yellow-50 border-t border-b py-2">
      <div className="container mx-auto px-4 marquee">
        <div>{text} &nbsp; • &nbsp; Updated daily</div>
      </div>
    </div>
  )
}