import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="font-bold">RatnaLaya</div>
            <div className="text-sm">Contact: +91 99999 99999</div>
          </div>
          <div className="text-sm mt-4 md:mt-0">© {new Date().getFullYear()} RatnaLaya</div>
        </div>
      </div>
    </footer>
  )
}