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
      <h3 className="text-xl font-semibold mb-4">Edit Banner Text</h3>
      <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full border p-2 mb-3" rows={3} />
      <button onClick={save} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </div>
  )
}