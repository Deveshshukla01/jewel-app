import React from 'react'

const data = [
  {name:'Anita', text:'Beautiful design and fast delivery.'},
  {name:'Rahul', text:'High quality, worth the price.'},
  {name:'Sana', text:'Lovely packaging.'}
]

export default function Reviews(){
  return (
    <div className="bg-cream-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-brown-800 mb-2 font-serif">Customer Reviews</h2>
          <p className="text-brown-600">What our valued customers say about us</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((r,i)=> (
          <div key={i} className="bg-white p-6 border border-cream-200 rounded-xl elegant-shadow hover:elegant-shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-brown-600 rounded-full flex items-center justify-center text-cream-50 font-bold mr-3">
                {r.name.charAt(0)}
              </div>
              <div className="font-semibold text-brown-800">{r.name}</div>
            </div>
            <div className="text-brown-700 italic">"{r.text}"</div>
            <div className="flex text-brown-400 mt-3">
              {'★'.repeat(5)}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}