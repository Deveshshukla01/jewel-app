import React, { useState, useEffect } from "react"

export default function Carousel() {
  const images = [
    "Carousel/2.jpg",
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length)
      }, 4000) // 4s auto slide
      return () => clearInterval(interval)
    }
  }, [images.length])

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Image */}
      <img
        src={images[current]}
        alt="carousel"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Navigation (only if more than one image) */}
      {images.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + images.length) % images.length)
            }
            className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
          >
            ❮
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
          >
            ❯
          </button>
        </>
      )}

      {/* Dots (only if more than one image) */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                i === current ? "bg-[#542018]" : "bg-white/70"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
