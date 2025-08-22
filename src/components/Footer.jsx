import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-[#542018] text-amber-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 font-serif">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              {/* Logo from public folder */}
              <img 
                src="Logo//LogoFooter.png" 
                alt="Sethi Jewellers Logo" 
                className="w-12 h-12 rounded-full mr-3 shadow-lg border-2 border-yellow-400"
              />
              <span className="text-3xl font-bold font-serif text-yellow-400">
                Sethi Jewellers
              </span>
            </div>
            <p className="text-amber-200 mb-4 leading-relaxed">
              Crafting timeless jewelry that celebrates life’s precious moments. 
              Each piece is meticulously designed and handcrafted with love & precision.
            </p>
            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:scale-110">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:scale-110">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:scale-110">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">About Us</a></li>
              <li><a href="#categories" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Categories</a></li>
              <li><a href="#featured" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Featured</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2">Custom Orders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact Us</h3>
            <div className="space-y-3 text-amber-200">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>info@sethijewellers.com</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Gold Market Road<br/>Mumbai, India 400001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-amber-300 text-sm">
            © {new Date().getFullYear()} Sethi Jewellers. All rights reserved. Crafted with ❤️
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-amber-300">
            <a href="#" className="hover:text-yellow-400 transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
