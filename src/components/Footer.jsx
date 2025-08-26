import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#542018] text-amber-100 mt-auto relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 font-serif">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="Logo/LogoFooter.png"
                alt="Sethi Jewellers Logo"
                className="w-16 h-16 rounded-full mr-4 shadow-lg border-2 border-yellow-400"
              />
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Sethi Jewellers
              </span>
            </div>
            <p className="text-amber-200 mb-6 leading-relaxed text-lg">
              Crafting timeless jewelry that celebrates life’s precious moments. 
              Each masterpiece is meticulously designed and handcrafted with love & precision.
            </p>

            {/* Social Links */}
            <div className="flex space-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-amber-500 hover:bg-yellow-400 hover:text-[#542018] transition-all duration-300 shadow-md"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-amber-500 hover:bg-yellow-400 hover:text-[#542018] transition-all duration-300 shadow-md"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-amber-500 hover:bg-yellow-400 hover:text-[#542018] transition-all duration-300 shadow-md"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-amber-500 hover:bg-yellow-400 hover:text-[#542018] transition-all duration-300 shadow-md"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">Quick Links</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  href="#custom"
                  className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">Contact Us</h3>
            <div className="space-y-4 text-lg text-amber-200">
              <div className="flex items-center">
                <Phone className="mr-3 text-yellow-300" size={20} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-yellow-300" size={20} />
                <span>sethijewellers.100@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 text-yellow-300" size={20} />
                <span>
                  123 Gold Market Road
                  <br />
                  Mumbai, India 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-amber-300 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-semibold">Sethi Jewellers</span>. All rights reserved. 
            Crafted with <span className="text-red-400">❤️</span>
          </div>
          <div className="flex space-x-8 mt-4 md:mt-0 text-sm text-amber-300">
            <a href="#" className="hover:text-yellow-400 transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
