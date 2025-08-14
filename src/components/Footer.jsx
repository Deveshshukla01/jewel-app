import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-brown-900 text-cream-100 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="font-bold text-xl font-serif text-cream-50 mb-2">RatnaLaya</div>
            <div className="text-sm text-cream-200">Contact: +91 99999 99999</div>
            <div className="text-sm text-cream-200">Email: info@ratnalaya.com</div>
          </div>
          <div className="text-sm mt-4 md:mt-0 text-cream-200">
            © {new Date().getFullYear()} RatnaLaya. Crafted with ❤️
          </div>
        </div>
      </div>
    </footer>
  )
}