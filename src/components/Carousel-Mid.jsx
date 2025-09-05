import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function VideoWithPopup() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="
      bg-[#f3f0eb]
        relative w-full 
        h-[60vh]         /* smaller height on mobile */
        sm:h-screen     /* full screen from tablet up */
        overflow-hidden flex items-center justify-center
      "
    >
      {/* Video */}
      <video
        src="videos/mid.mp4" // keep your file in public/videos/
        autoPlay
        loop
        muted
        playsInline
        onClick={() => setOpen(true)}
        className="
          absolute inset-0 w-full h-full 
          object-contain       /* show full video on mobile */
          sm:object-cover     /* fill screen on larger devices */
          cursor-pointer
        "
      />

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white text-blue-600 font-bold font-serif text-lg sm:text-3xl md:text-5xl p-4 sm:p-8 rounded-2xl shadow-xl text-center max-w-[90%]"
            >
              🚀 Something new is coming soon!
              <button
                onClick={() => setOpen(false)}
                className="block mx-auto mt-6 bg-blue-600 font-serif text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
