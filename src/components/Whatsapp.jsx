// // FloatingWhatsApp.jsx
// import React from "react";

// export default function FloatingWhatsApp({
//   phone = "917973616115",
//   message = "Hi! I’d like to know more.",
//   bgClass = "bg-[#25d366] hover:bg-[#075e54]",
//   textClass = "text-white",
//   offsetClass = "bottom-6 right-6",
// }) {
//   const encoded = typeof window !== "undefined"
//     ? encodeURIComponent(message)
//     : message;

//   const waLink = `https://wa.me/${phone}?text=${encoded}`;

//   return (
//     <div className={`fixed ${offsetClass} z-50 flex items-center`}>
//       <a
//         href={waLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         className={`relative inline-flex h-20 w-20 items-center justify-center rounded-full ${bgClass} ${textClass} transition-transform active:scale-95 animate-bounce`}
//       >
//         {/* WhatsApp Icon */}
//         <svg
//           viewBox="0 0 32 32"
//           className="h-12 w-12 relative"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path d="M19.11 17.23c-.29-.15-1.68-.83-1.94-.93-.26-.1-.45-.15-.64.15-.19.3-.74.93-.91 1.12-.17.19-.34.21-.63.08-.29-.13-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.12-.6.12-.12.29-.31.43-.46.14-.15.19-.26.29-.45.1-.19.05-.36-.02-.51-.08-.15-.64-1.54-.88-2.12-.23-.56-.47-.49-.64-.5l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.06 4.86 4.29 2.86 1.23 2.86.83 3.38.8.52-.03 1.68-.68 1.92-1.35.24-.67.24-1.24.17-1.35-.07-.11-.26-.18-.55-.33z"/>
//           <path d="M26.9 5.12A13.83 13.83 0 0 0 16 1.33c-7.62 0-13.82 6.19-13.82 13.81 0 2.43.64 4.8 1.86 6.9L2 30.67l8.83-2.76a13.79 13.79 0 0 0 5.17 1c7.62 0 13.82-6.2 13.82-13.82 0-3.69-1.44-7.16-3.92-9.97zm-10.9 21.1c-1.68 0-3.32-.44-4.77-1.27l-.34-.2-5.23 1.64 1.7-5.09-.22-.33a11.52 11.52 0 1 1 8.86 5.25z"/>
//         </svg>
//       </a>
//     </div>
//   );
// }


// FloatingWhatsApp.jsx
import React from "react";

export default function FloatingWhatsApp({
  phone = "917973616115",
  message = "Hi! I’d like to know more.",
  bgClass = "bg-[#25d366]",
  textClass = "text-white",
  offsetClass = "bottom-6 right-6",
  showLabel = true,
}) {
  const encoded =
    typeof window !== "undefined" ? encodeURIComponent(message) : message;

  const waLink = `https://wa.me/${phone}?text=${encoded}`;

  return (
    <div className={`fixed ${offsetClass} z-50 flex items-center`}>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`relative group inline-flex h-16 w-16 items-center justify-center rounded-full 
          ${bgClass} ${textClass} 
          shadow-lg shadow-green-400/40
          backdrop-blur-md bg-opacity-90 
          transition-all duration-300 ease-out 
          hover:scale-110 hover:shadow-xl hover:shadow-green-500/50`}
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          className="h-9 w-9"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.23c-.29-.15-1.68-.83-1.94-.93-.26-.1-.45-.15-.64.15-.19.3-.74.93-.91 1.12-.17.19-.34.21-.63.08-.29-.13-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.12-.6.12-.12.29-.31.43-.46.14-.15.19-.26.29-.45.1-.19.05-.36-.02-.51-.08-.15-.64-1.54-.88-2.12-.23-.56-.47-.49-.64-.5l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.06 4.86 4.29 2.86 1.23 2.86.83 3.38.8.52-.03 1.68-.68 1.92-1.35.24-.67.24-1.24.17-1.35-.07-.11-.26-.18-.55-.33z"/>
          <path d="M26.9 5.12A13.83 13.83 0 0 0 16 1.33c-7.62 0-13.82 6.19-13.82 13.81 0 2.43.64 4.8 1.86 6.9L2 30.67l8.83-2.76a13.79 13.79 0 0 0 5.17 1c7.62 0 13.82-6.2 13.82-13.82 0-3.69-1.44-7.16-3.92-9.97zm-10.9 21.1c-1.68 0-3.32-.44-4.77-1.27l-.34-.2-5.23 1.64 1.7-5.09-.22-.33a11.52 11.52 0 1 1 8.86 5.25z"/>
        </svg>

        {/* Glow Pulse */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping pointer-events-none"></span>

        {/* Tooltip */}
        {showLabel && (
          <span
            className="absolute right-20 px-3 py-1 rounded-xl text-sm font-medium text-white 
              bg-black/70 backdrop-blur-sm opacity-0 scale-90 
              group-hover:opacity-100 group-hover:scale-100 transition-all"
          >
            need help?
          </span>
        )}
      </a>
    </div>
  );
}
