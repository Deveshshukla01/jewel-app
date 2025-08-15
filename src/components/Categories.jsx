import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {id:'ladies-rings', name:'Ladies Rings', img:'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'gents-rings', name:'Gents Rings', img:'https://images.pexels.com/photos/1191677/pexels-photo-1191677.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'earings', name:'Earings', img:'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'bangles-karas', name:'Bangles / Karas', img:'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'chains', name:'Chains', img:'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'bracelets', name:'Bracelets', img:'https://images.pexels.com/photos/1191677/pexels-photo-1191677.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'mangalsutra', name:'Mangalsutra', img:'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'pendant-sets', name:'Pendant Sets', img:'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'diamonds', name:'Diamonds', img:'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {id:'pendants', name:'Pendants', img:'https://images.pexels.com/photos/1191677/pexels-photo-1191677.jpeg?auto=compress&cs=tinysrgb&w=400'}
]

export default function Categories(){
  return (
    <div id="categories" className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-cream-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brown-800 mb-4 font-serif">Shop by Category</h2>
        <p className="text-brown-600 text-lg max-w-2xl mx-auto">Discover our exquisite collection of handcrafted jewelry, each piece telling its own unique story</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map(c=> (
          <Link 
            key={c.id} 
            to={`/category/${c.id}`} 
            className="group rounded-2xl elegant-shadow hover:elegant-shadow-lg overflow-hidden block bg-white transform hover:scale-105 transition-all duration-300 border border-cream-100"
          >
            <div className="relative overflow-hidden">
              <img 
                src={c.img} 
                alt={c.name} 
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-brown-600/0 group-hover:bg-brown-600/10 transition-colors duration-300"></div>
            </div>
            <div className="p-4 text-center">
              <div className="font-semibold text-brown-800 text-base group-hover:text-brown-600 transition-colors duration-200">
                {c.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}