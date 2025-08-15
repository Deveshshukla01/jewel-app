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
    <div id="categories" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Shop by Category</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">Discover our exquisite collection of handcrafted jewelry, each piece telling its own unique story of elegance and craftsmanship</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map(c=> (
            <Link 
              key={c.id} 
              to={`/category/${c.id}`} 
              className="group rounded-3xl overflow-hidden block bg-white transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={c.img} 
                  alt={c.name} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 group-hover:from-purple-600/20 to-pink-600/0 group-hover:to-pink-600/20 transition-all duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <div className="font-semibold text-gray-800 text-base group-hover:text-purple-600 transition-colors duration-300">
                  {c.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}