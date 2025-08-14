import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {id:'bracelet', name:'Bracelet', img:'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'necklace', name:'Necklace', img:'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'earring', name:'Earring', img:'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'nosepin', name:'Nose Pin', img:'https://images.pexels.com/photos/1191677/pexels-photo-1191677.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'waistband', name:'Waistband', img:'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'}
]

export default function Categories(){
  return (
    <div id="categories" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map(c=> (
          <Link key={c.id} to={`/category/${c.id}`} className="rounded shadow hover:shadow-lg overflow-hidden block">
            <img src={c.img} alt={c.name} className="w-full h-32 object-cover" />
            <div className="p-3 text-center font-medium">{c.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}