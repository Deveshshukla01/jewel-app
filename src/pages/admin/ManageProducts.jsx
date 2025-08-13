import React, {useState, useEffect} from 'react'
import { databases, storage, ID_TOOL, DATABASE_ID, BUCKET_ID, COLLECTIONS } from '../../appwrite/config'

export default function ManageProducts(){
  const [list, setList] = useState([])
  const [form, setForm] = useState({name:'', price:'', category:'bracelet', featured:false})
  const [file, setFile] = useState(null)

  useEffect(()=>{ load() },[])

  async function load(){
    try{
      const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.products)
      setList(res.documents || [])
    }catch(err){ console.warn(err) }
  }

  async function create(){
    try{
      let fileUrl = ''
      if(file){
        const uploaded = await storage.createFile(BUCKET_ID, ID_TOOL.unique(), file)
        // Construct a public view URL for the uploaded file
        fileUrl = `${import.meta.env.VITE_APPWRITE_ENDPOINT || 'http://localhost/v1'}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${import.meta.env.VITE_APPWRITE_PROJECT || 'YOUR_PROJECT_ID'}`
      }
      const doc = await databases.createDocument(DATABASE_ID, COLLECTIONS.products, ID_TOOL.unique(), { ...form, imageUrl: fileUrl })
      setList(prev=>[...prev, doc])
      setForm({name:'', price:'', category:'bracelet', featured:false})
      setFile(null)
      alert('Created')
    }catch(err){ alert(err.message || err) }
  }

  async function remove(id){
    if(!confirm('Delete?')) return
    try{ await databases.deleteDocument(DATABASE_ID, COLLECTIONS.products, id); load() }catch(err){alert(err.message || err)}
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="border p-4 rounded">
            <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border p-2 mb-2" />
            <input placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} className="w-full border p-2 mb-2" />
            <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})} className="w-full border p-2 mb-2">
              <option value="bracelet">Bracelet</option>
              <option value="necklace">Necklace</option>
            </select>
            <label className="inline-flex items-center gap-2 mb-2"><input type="checkbox" checked={form.featured} onChange={e=>setForm({...form,featured:e.target.checked})}/> Featured</label>
            <input type="file" onChange={e=>setFile(e.target.files[0])} className="mb-3" />
            <div>
              <button onClick={create} className="bg-green-600 text-white px-4 py-2 rounded">Create</button>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Existing</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {list.map(p=> (
                <div className="border p-3 rounded" key={p.$id}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-sm text-gray-600">₹{p.price}</div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={()=>remove(p.$id)} className="text-red-600">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}