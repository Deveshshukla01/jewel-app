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
    <div id="categories" className="container mx-auto px-4 py-12 bg-cream-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-brown-800 mb-2 font-serif">Shop by Category</h2>
        <p className="text-brown-600">Discover our curated collection of fine jewelry</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map(c=> (
          <Link 
            key={c.id} 
            to={`/category/${c.id}`} 
            className="rounded-xl elegant-shadow hover:elegant-shadow-lg overflow-hidden block bg-white transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <img src={c.img} alt={c.name} className="w-full h-32 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent"></div>
            </div>
            <div className="p-4 text-center">
              <div className="font-semibold text-brown-800 text-lg">{c.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}