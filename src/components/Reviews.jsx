import React from 'react'

const data = [
  {name:'Anita', text:'Beautiful design and fast delivery. The quality exceeded my expectations!', rating: 5},
  {name:'Rahul', text:'High quality craftsmanship, definitely worth the price. Will order again.', rating: 5},
  {name:'Sana', text:'Lovely packaging and exquisite jewelry. Perfect for gifting.', rating: 5}
]

export default function Reviews(){
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6 font-serif fade-in-up">Customer Reviews</h2>
          <p className="text-primary-700 text-lg max-w-3xl mx-auto fade-in-up">What our valued customers say about their experience with RatnaLaya</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((r,i)=> (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-warm hover:shadow-warm-lg card-hover stagger-item">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-800 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 glow">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-primary-800 text-lg">{r.name}</div>
                  <div className="flex text-secondary-500 text-sm">
                    {Array.from({length: r.rating}, (_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-primary-700 italic text-lg leading-relaxed">
                "{r.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}