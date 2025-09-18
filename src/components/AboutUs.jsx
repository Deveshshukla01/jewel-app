

import React, { useEffect, useRef, useState } from "react";

export default function About({
  images = [],
  title = "About Us",
  desc =
    "Sethi Jewellers was established in 1984 by Shri Gurcharan Sethi with a humble beginning in a small booth shop in Sector 16, Chandigarh. Our brand was born in an era when the hallmark standards were not much prevalent, and the entire jewellery industry was based on a system of trust. Hence, providing quality jewellery with dedicated personalised service became our motto. Gradually, with almighty’s grace, the hard work of our team, and the love from our clients who appreciate our quality products and dedicated service... ",
}) {
  const slides = images.length
    ? images
    : ["Carousel/1m.jpeg", "Carousel/4m.jpeg","Carousel/2m.jpg", "Carousel/3m.jpeg","Carousel/5m.jpeg"];

  const [isOpen, setIsOpen] = useState(false);

  const fullContent = `
Sethi Jewellers was established in 1984 by Shri Gurcharan Sethi with a humble beginning in a small booth shop in Sector 16, Chandigarh. Our brand was born in an era when the hallmark standards were not much prevalent, and the entire jewellery industry was based on a system of trust. Hence, providing quality jewellery with dedicated personalised service became our motto.

Gradually, with almighty’s grace, the hard work of our team, and the love from our clients who appreciate our quality products and dedicated service, we shifted to a new showroom, and are today running our multi-story flagship store in Sector 16, Chandigarh, located right in the heart of the city. We offer Gold, Diamond (both Natural and Lab Grown), Gemstones and also offer Silver Jewellery, via our sub-brand – Gurmeena (website link), which delivers products to clients across the globe.

With inhouse diamond assortment, jewellery melting-testing and jewellery service facilities we offer end to end solutions to our clients, right from purchase to buyback.

With over 40+ year of experience in the jewellery industry, we have evolved as a trusted brand in India, serving clients across the globe, via our innovative and agile omni-channel model.

We hereby welcome you all to visit our store in Chandigarh, or schedule a video call with us, and we will be happy to assist you have the right jewellery piece for you, because we understand it is your hard earned money and we are committed to offer you nothing less than the best.
  `;

  return (
    <section className="w-full bg-white py-5 font-serif">
      <div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Content */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-2xl md:text-5xl text-center leading-tight text-[#542018]">
            {title}
          </h2>
          <p className="text-[#542018] leading-relaxed">{desc}</p>

          {/* Learn More Button */}
          <div className="flex justify-center md:justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#542018] text-white font-medium rounded-md px-8 py-3 mt-4 
                         hover:bg-[#ebcc78] hover:text-[#542018] transition-colors w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT: Carousel */}
        <div className="mt-8 md:mt-0">
          <Carousel images={slides} />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div
            className="bg-white rounded-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[80vh] relative custom-scroll"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-[#542018]">Our Story</h3>
            <p className="text-[#542018] whitespace-pre-line leading-relaxed">
              {fullContent}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function Carousel({ images, interval = 2000 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval, isPaused]);

  const goTo = (i) => {
    const n = images.length;
    setIndex(((i % n) + n) % n);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };
  const onTouchMove = (e) => {
    touchDelta.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDelta.current) > 50) {
      goTo(index + (touchDelta.current < 0 ? 1 : -1));
    }
  };

  return (
    <div
      id="aboutus"
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full  shrink-0">
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-[300px] md:h-[575px] object-cover select-none"
              draggable={false}
            />
            {/* <img
  src={src}
  alt={`Slide ${i + 1}`}
  className="w-full h-[300px] md:h-[500px] object-contain bg-white select-none"
  draggable={false}
/> */}

          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full px-3 py-2 focus:outline-none"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full px-3 py-2 focus:outline-none"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                i === index ? "bg-[#b68d40]" : "bg-white/80 hover:bg-white"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* Add this CSS (either in globals.css or tailwind.css file) */
<style jsx global>{`
  .custom-scroll::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .custom-scroll::-webkit-scrollbar-thumb {
    background-color: #542018;
    border-radius: 4px;
  }
  .custom-scroll::-webkit-scrollbar-thumb:hover {
    background-color: #3b150f;
  }
`}</style>
