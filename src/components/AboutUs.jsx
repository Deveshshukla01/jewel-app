// import React from "react";
// import { motion } from "framer-motion";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// export default function About() {
//   return (
//     <section className="w-full bg-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
//       {/* Left Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="md:w-1/2 text-center md:text-left"
//       >
//         <h2 className="text-2xl md:text-3xl font-semibold text-[#b68d40]">
//           Thankful to our Amazing Customers and Team.
//         </h2>
//         <p className="mt-4 text-gray-600 leading-relaxed">
//           At Ratnalaya, we have always believed in achieving excellence &
//           our awards are a testimony to this fact. Ratnalaya Jewellers has won
//           several awards at the national level in the last 5 years, making us one
//           of the most respected jewellery retail brands in East India.
//         </p>
//         <button className="mt-6 border-2 border-[#b68d40] text-[#b68d40] font-semibold px-6 py-2 rounded-md hover:bg-[#b68d40] hover:text-white transition">
//           AWARDS
//         </button>
//       </motion.div>

//       {/* Right Carousel */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="md:w-1/2 w-full"
//       >
//         <Carousel
//           showArrows={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showStatus={false}
//           autoPlay
//           interval={3000}
//         >
//           <div>
//             <img src="/images/award1.jpg" alt="Award 1" className="rounded-lg" />
//           </div>
//           <div>
//             <img src="/images/award2.jpg" alt="Award 2" className="rounded-lg" />
//           </div>
//           <div>
//             <img src="/images/award3.jpg" alt="Award 3" className="rounded-lg" />
//           </div>
//         </Carousel>
//       </motion.div>
//     </section>
//   );
// }



import React, { useEffect, useRef, useState } from "react";


export default function About({
  images = [],
  title = "About us.",
  desc =
    "At Sethi jewel, we have always believed in achieving excellence & our awards are a testimony to this fact. Sethi Jewellers has won several awards at the national level in the last 5 years, making us one of the most respected jewellery retail brands in North India.",
  ctaText = "AWARDS",
  onCta = () => {},
}) {
  const slides = images.length
    ? images
    : ["/images/award1.jpg", "/images/award2.jpg", "/images/award3.jpg"];

  return (
    <section className="w-full bg-white py-12 font-serif">
      <div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Content */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold text-center leading-tight text-[#542018]">
            {title}
          </h2>
          <p className="text-[#542018] leading-relaxed">{desc}</p>
          {/* <button
            onClick={onCta}
            className="inline-flex items-center justify-center text-[#542018] border border-[#542018] rounded-md px-6 py-2 hover:bg-[#b68d40] hover:text-white transition-colors"
          >
            {ctaText}
          </button> */}
        </div>

        {/* RIGHT: Carousel */}
        <div className="mt-8 md:mt-0">
          <Carousel images={slides} />
        </div>
      </div>
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
          <div key={i} className="w-full shrink-0">
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-[300px] md:h-[400px] object-cover select-none"
              draggable={false}
            />
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
