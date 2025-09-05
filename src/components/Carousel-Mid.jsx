// import React from "react"

// export default function VideoLink() {
//   return (
//     <div className="relative w-full h-[500px] overflow-hidden">
//       <a href="/newpage"> 
//         <video
//           src="videos/mid.mp4" // put your video inside public/videos/
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover cursor-pointer"
//         />
//       </a>
//     </div>
//   )
// }
import React, { useState } from "react"

export default function VideoWithPopup() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Video */}
      <video
        src="videos/mid.mp4" // put video in public/videos/
        autoPlay
        loop
        muted
        playsInline
        onClick={() => setOpen(true)} // open popup on click
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <h1 className="text-blue-600 text-4xl font-serif font-bold">
              Something big is coming soon
            </h1>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
