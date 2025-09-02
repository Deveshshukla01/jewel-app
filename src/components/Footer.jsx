// // import React from "react";
// import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export default function Footer() {
//   const { user } = useAuth();
//   const location = useLocation();
//   const isAdmin = location.pathname.startsWith("/admin");

//   // Button logic reused from Navbar
//   const to = isAdmin ? "/" : "/admin";
//   const label = isAdmin ? "Home" : user ? "Dashboard" : "Admin";
//   const variantClasses = user
//     ? "bg-[#542018] text-white hover:bg-[#3d1611]"
//     : "bg-gray-100 text-[#542018] hover:bg-gray-200";

//   return (
//     <footer className="bg-[#542018] text-amber-100 mt-auto relative">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 font-serif">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
//           {/* Brand Section */}
//           <div className="md:col-span-2">
//             <div className="flex items-center mb-6">
//               <img
//                 src="Logo/LogoFooter.png"
//                 alt="Sethi Jewellers Logo"
//                 className="w-16 h-16 rounded-full mr-4 shadow-lg border-2 border-yellow-400"
//               />
//               <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
//                 Sethi Jewellers
//               </span>
//             </div>
//             <p className="text-amber-200 mb-6 leading-relaxed text-lg max-w-xl">
//             Your reliable jewellery destination that makes you feel special.
//             </p>

//             {/* Social Media Links */}
//             <div className="flex space-x-5">
//               <a
//                 href="https://www.facebook.com/share/1B2na9Lwa8/?mibextid=wwXIfr"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-white hover:scale-110 transition-all duration-300 shadow-lg"
//               >
//                 <FaFacebookF size={22} className="text-[#1877F2]" />
//               </a>
//               <a
//                 href="https://www.instagram.com/sethijewellers16?igsh=b2N2cnJza2l3dmN2"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-white hover:scale-110 transition-all duration-300 shadow-lg"
//               >
//                 <FaInstagram size={22} className="text-[#E4405F]" />
//               </a>
//               <a
//                 href="https://wa.me/917373616115"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-white hover:scale-110 transition-all duration-300 shadow-lg"
//               >
//                 <FaWhatsapp size={22} className="text-[#25D366]" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 text-yellow-300">Quick Links</h3>
//             <ul className="space-y-3 text-lg">
//               {["About Us", "Categories", "Featured"].map((link, i) => (
//                 <li key={i}>
//                   <a
//                     href={`#${link.toLowerCase().replace(" ", "")}`}
//                     className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 text-yellow-300">Contact Us</h3>
//             <div className="space-y-4 text-lg text-amber-200">
//               <div className="flex items-center">
//                 <Phone className="mr-3 text-yellow-300" size={20} />
//                 <span>+91 79736 16115</span>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="mr-3 text-yellow-300" size={20} />
//                 <span>sethijewellers.100@gmail.com</span>
//               </div>
//               <div className="flex items-start">
//                 <MapPin className="mr-3 mt-1 text-yellow-300" size={20} />
//                 <span>
//                   SCO 15, Sector 16D, Chandigarh, 160015
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-amber-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="text-amber-300 text-sm text-center md:text-left">
//             © {new Date().getFullYear()}{" "}
//             <span className="text-yellow-400 font-semibold">Sethi Jewellers</span>. All rights reserved. 
            
//           </div>

//           {/* Admin/Dashboard Toggle Button */}
//           <Link
//             to={to}
//             className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full font-serif font-medium text-sm md:text-base transition-colors duration-200 ${variantClasses}`}
//           >
//             {label}
//           </Link>

//           <div className="flex space-x-8 text-sm text-amber-300">
//             <a href="#" className="hover:text-yellow-400 transition-all duration-300">Terms of Service</a>
//             <a href="#" className="hover:text-yellow-400 transition-all duration-300">Privacy Policy</a>
//             <a href="#" className="hover:text-yellow-400 transition-all duration-300">Return Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdMailOutline } from "react-icons/md";
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
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 font-serif">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-8">
              <img
                src="Logo/LogoFooter.png"
                alt="Sethi Jewellers Logo"
                className="w-20 h-20 rounded-full mr-5 shadow-lg border-2 border-yellow-400"
              />
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Sethi Jewellers
              </span>
            </div>
            <p className="text-amber-200 mb-8 leading-relaxed text-lg max-w-xl">
              Your reliable jewellery destination that makes you feel special.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/share/1B2na9Lwa8/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-4 rounded-full bg-white hover:scale-110 hover:shadow-amber-400/50 transition-all duration-300 shadow-lg"
              >
                <FaFacebookF size={24} className="text-[#1877F2]" />
              </a>
              <a
                href="https://www.instagram.com/sethijewellers16?igsh=b2N2cnJza2l3dmN2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-4 rounded-full bg-white hover:scale-110 hover:shadow-amber-400/50 transition-all duration-300 shadow-lg"
              >
                <FaInstagram size={24} className="text-[#E4405F]" />
              </a>
              <a
                href="https://wa.me/917973616115"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-4 rounded-full bg-white hover:scale-110 hover:shadow-amber-400/50 transition-all duration-300 shadow-lg"
              >
                <FaWhatsapp size={24} className="text-[#25D366]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-yellow-300 border-b border-amber-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-4 text-lg">
              {["About Us", "Categories", "Featured"].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-yellow-400 transition-all duration-300 relative group"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-yellow-300 border-b border-amber-600 pb-2">
              Contact Us
            </h3>
            <div className="space-y-5 text-lg text-amber-200">
              <div className="flex items-center">
                <MdPhone className="mr-3 text-yellow-300" size={20} />
                <a href="tel:+917973616115" className="hover:underline">+91 79736 16115</a>
              </div>
              <div className="flex items-center">
                <MdMailOutline className="mr-3 text-yellow-300" size={20} />
                <a href="mailto:sethijewellers.100@gmail.com" className="hover:underline">sethijewellers.100@gmail.com</a>
              </div>
              <div className="flex items-start">
                <MdLocationOn className="mr-3 mt-1 text-yellow-300" size={20} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SCO+15+Sector+16D+Chandigarh+160015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  SCO 15, Sector 16D, Chandigarh, 160015
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-amber-300 text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-semibold">Sethi Jewellers</span>. All rights reserved.
          </div>

          {/* Admin/Dashboard Toggle Button */}
          <Link
            to={to}
            className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full font-serif font-medium text-base transition-all duration-300 shadow-md ${variantClasses}`}
          >
            {label}
          </Link>

          <div className="flex space-x-10 text-sm md:text-base text-amber-300">
            <a href="#" className="hover:text-yellow-400 hover:underline underline-offset-4 transition-all duration-300">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 hover:underline underline-offset-4 transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 hover:underline underline-offset-4 transition-all duration-300">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
