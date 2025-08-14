import React, {useState, useEffect} from 'react'
import { databases, ID_TOOL, DATABASE_ID, COLLECTIONS } from '../../appwrite/config'

export default function ManageBanner(){
  const [text, setText] = useState('Gold Price: ₹1000 | Silver Price: ₹650')

  useEffect(()=>{
    async function load(){
      try{
        const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.banner)
        if(res.total > 0){
          setText(res.documents[0].text)
        }
      }catch(err){
        console.warn('ManageBanner load', err)
      }
    }
    load()
  },[])

  async function save(){
    try{
      const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.banner)
      if(res.total > 0){
        await databases.updateDocument(DATABASE_ID, COLLECTIONS.banner, res.documents[0].$id, { text })
      }else{
        await databases.createDocument(DATABASE_ID, COLLECTIONS.banner, ID_TOOL.unique(), { text })
      }
      alert('Saved')
    }catch(err){
      alert('Error: ' + (err.message || err))
    }
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-brown-800 mb-6 font-serif">Edit Banner Text</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-brown-700 mb-2">Banner Message</label>
          <textarea 
            value={text} 
            onChange={e=>setText(e.target.value)} 
            className="w-full border border-cream-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-brown-500 bg-white" 
            rows={4}
            placeholder="Enter your banner message..."
          />
        </div>
        <button 
          onClick={save} 
          className="bg-brown-600 text-cream-50 px-6 py-3 rounded-lg hover:bg-brown-700 transition-colors font-medium"
        >
          Save Banner
        </button>
      </div>
    </div>
  )
}