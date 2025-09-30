
// import React from "react";

// export default function Loader() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <div className="w-12 h-12 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
//     </div>
//   );
// }

import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 space-y-8">
      <div className="relative flex items-center justify-center">
        {/* Glowing circular gradient aura */}
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-yellow-300/40 to-yellow-600/40 blur-3xl animate-breath"></div>

        {/* Logo */}
        <img
          src="/Logo/LogoFooter.png" // replace with your logo path
          alt="Logo"
          className="relative w-24 h-24 animate-pulse-glow"
        />
      </div>

      {/* Circular loader below logo */}
      <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
