import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {id:'bracelet', name:'Bracelet', img:'/images/cat-bracelet.jpg'},
  {id:'necklace', name:'Necklace', img:'/images/cat-necklace.jpg'},
  {id:'earring', name:'Earring', img:'/images/cat-earring.jpg'},
  {id:'nosepin', name:'Nose Pin', img:'/images/cat-nosepin.jpg'},
  {id:'waistband', name:'Waistband', img:'/images/cat-waistband.jpg'}
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