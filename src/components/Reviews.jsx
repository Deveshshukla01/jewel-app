import React from 'react'

const data = [
  {name:'Anita', text:'Beautiful design and fast delivery.'},
  {name:'Rahul', text:'High quality, worth the price.'},
  {name:'Sana', text:'Lovely packaging.'}
]

export default function Reviews(){
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((r,i)=> (
          <div key={i} className="p-4 border rounded">
            <div className="font-semibold">{r.name}</div>
            <div className="text-sm text-gray-700">{r.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}