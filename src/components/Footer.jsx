
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
    <footer className="bg-gradient-to-b from-[#542018] to-[#3d1611] text-amber-100 mt-auto relative overflow-hidden font-serif">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-42 h-42 rounded-full bg-yellow-300"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-amber-200"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-yellow-300"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="Logo/LogoFooter.png"
                  alt="Sethi Jewellers Logo"
                  className="w-16 h-16 rounded-2xl shadow-2xl border border-yellow-400/30"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-2xl opacity-20 blur-sm"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  Sethi Jewellers
                </h2>
                <p className="text-amber-300/70 text-sm font-medium tracking-wide">
                Your reliable jewellery destination that makes you feel special.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-yellow-300 relative">
            Our Social Network
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </h3>

            {/* Social Media - Redesigned */}
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/share/1B2na9Lwa8/?mibextid=wwXIfr", color: "#1877F2", label: "Facebook" },
                { icon: FaInstagram, href: "https://www.instagram.com/sethijewellers16?igsh=b2N2cnJza2l3dmN2", color: "#E4405F", label: "Instagram" },
                { icon: FaWhatsapp, href: "https://wa.me/917973616115", color: "#25D366", label: "WhatsApp" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300 blur-sm"></div>
                  <div className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-white/20 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300">
                    <social.icon size={20} style={{ color: social.color }} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Redesigned */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold text-yellow-300 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </h3>
            <nav className="space-y-3">
              {["About Us", "Categories", "Featured Product"].map((link, i) => (
                <a
                  key={i}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block text-amber-200/80 hover:text-yellow-400 transition-all duration-300 text-base font-light group"
                >
                  <span className="relative">
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info - Redesigned */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-semibold text-yellow-300 relative">
              Get in Touch
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </h3>
            <div className="space-y-4">
              {[
                { icon: MdPhone, href: "tel:+917973616115", text: "+91 79736 16115" },
                { icon: MdMailOutline, href: "mailto:sethijewellers.100@gmail.com", text: "sethijewellers.100@gmail.com" },
                { icon: MdLocationOn, href: "https://www.google.com/maps/search/?api=1&query=SCO+15+Sector+16D+Chandigarh+160015", text: "SCO 15, Sector 16D, Chandigarh, 160015" }
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target={contact.href.includes("maps") ? "_blank" : undefined}
                  rel={contact.href.includes("maps") ? "noopener noreferrer" : undefined}
                  className="flex items-start space-x-3 text-amber-200/80 hover:text-yellow-400 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-yellow-400/10 transition-all duration-300">
                    <contact.icon size={18} className="text-yellow-300" />
                  </div>
                  <span className="text-sm font-light leading-relaxed flex-1">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Completely redesigned */}
        <div className="border-t border-amber-700/30 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-amber-300/70 text-sm font-light text-center lg:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-yellow-400 font-medium">Sethi Jewellers</span>
              . Crafted with care.
            </div>

            {/* Admin Button - Redesigned */}
            <Link
              to={to}
              className={`relative px-6 py-2.5 rounded-full font-light text-sm transition-all duration-300 ${variantClasses} hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group`}
            >
              <span className="relative z-10">{label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>

            {/* Legal Links */}
            <div className="flex space-x-6 text-xs text-amber-300/60">
              {["Terms of Service", "Privacy Policy", "Return Policy"].map((policy, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-yellow-400 transition-all duration-300 relative group font-light"
                >
                  {policy}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}