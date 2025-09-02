// import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Footer() {
  const { user } = useAuth();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  // Button logic reused from Navbar
  const to = isAdmin ? "/" : "/admin";
  const label = isAdmin ? "Home" : user ? "Dashboard" : "Admin";
  const variantClasses = user
    ? "bg-[#542018] text-white hover:bg-[#3d1611]"
    : "bg-gray-100 text-[#542018] hover:bg-gray-200";

  return (
    <footer className="bg-[#542018] text-amber-100 mt-auto relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 font-serif">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
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
            <p className="text-amber-200 mb-6 leading-relaxed text-lg max-w-xl">
            Your reliable jewellery destination that makes you feel special.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-5">
              <a
                href="https://www.facebook.com/share/1B2na9Lwa8/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaFacebookF size={22} className="text-[#1877F2]" />
              </a>
              <a
                href="https://www.instagram.com/sethijewellers16?igsh=b2N2cnJza2l3dmN2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaInstagram size={22} className="text-[#E4405F]" />
              </a>
              <a
                href="https://wa.me/917373616115"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaWhatsapp size={22} className="text-[#25D366]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">Quick Links</h3>
            <ul className="space-y-3 text-lg">
              {["About Us", "Categories", "Featured"].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">Contact Us</h3>
            <div className="space-y-4 text-lg text-amber-200">
              <div className="flex items-center">
                <Phone className="mr-3 text-yellow-300" size={20} />
                <span>+91 79736 16115</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-yellow-300" size={20} />
                <span>sethijewellers.100@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 text-yellow-300" size={20} />
                <span>
                  SCO 15, Sector 16D, Chandigarh, 160015
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-amber-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-semibold">Sethi Jewellers</span>. All rights reserved. 
            
          </div>

          {/* Admin/Dashboard Toggle Button */}
          <Link
            to={to}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full font-serif font-medium text-sm md:text-base transition-colors duration-200 ${variantClasses}`}
          >
            {label}
          </Link>

          <div className="flex space-x-8 text-sm text-amber-300">
            <a href="#" className="hover:text-yellow-400 transition-all duration-300">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
