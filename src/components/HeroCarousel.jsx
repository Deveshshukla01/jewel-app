// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/effect-fade'

// const slides = [
//   {
//     image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     title: 'Exquisite Brilliance',
//     subtitle: 'NEW COLLECTION',
//     description: 'Discover our latest collection of handcrafted jewelry',
//     buttonText: 'EXPLORE NOW'
//   },
//   {
//     image: 'https://images.pexels.com/photos/1191677/pexels-photo-1191677.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     title: 'Timeless Elegance',
//     subtitle: 'PREMIUM DESIGNS',
//     description: 'Crafted with precision and adorned with finest gems',
//     buttonText: 'SHOP NOW'
//   },
//   {
//     image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     title: 'Diamond Collection',
//     subtitle: 'LUXURY REDEFINED',
//     description: 'Experience the brilliance of our diamond jewelry',
//     buttonText: 'VIEW COLLECTION'
//   }
// ]

// export default function HeroCarousel(){
//   return (
//     <div className="relative">
//       <Swiper 
//         spaceBetween={0} 
//         slidesPerView={1} 
//         loop={true}
//         effect="fade"
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//           bulletClass: 'swiper-pagination-bullet hero-bullet',
//           bulletActiveClass: 'swiper-pagination-bullet-active hero-bullet-active'
//         }}
//         modules={[Autoplay, Pagination, EffectFade]}
//         className="hero-swiper"
//       >
//         {slides.map((slide, idx)=> (
//           <SwiperSlide key={idx}>
//             <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
//               <img 
//                 src={slide.image} 
//                 alt={`slide-${idx}`} 
//                 className="object-cover w-full h-full scale-105" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              
//               <div className="absolute inset-0 flex items-center">
//                 <div className="container mx-auto px-4">
//                   <div className="max-w-2xl text-white">
//                     <div className="text-sm font-semibold tracking-[0.2em] text-purple-300 mb-4 uppercase">
//                       {slide.subtitle}
//                     </div>
//                     <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight slide-in-left">
//                       {slide.title}
//                     </h1>
//                     <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed font-light slide-in-right">
//                       {slide.description}
//                     </p>
//                     <button className="bg-gradient-to-r from-primary-800 to-secondary-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-110 uppercase tracking-wide glow bounce-in">
//                       {slide.buttonText}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }


// import React, { useState, useEffect } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const slides = [
//   'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   'https://images.pexels.com/photos/1191677/pexels-photo-1191677.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   'https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   'https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=1200'
// ]

// export default function ModernHeroCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isHovered, setIsHovered] = useState(false)

//   useEffect(() => {
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
//       }, 4000)
//       return () => clearInterval(interval)
//     }
//   }, [isHovered])

//   const goToSlide = (index) => {
//     setCurrentIndex(index)
//   }

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
//   }

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
//   }

//   return (
//     <div 
//       className="relative w-full h-screen overflow-hidden bg-black group"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Background slides */}
//       <div className="relative w-full h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//               index === currentIndex 
//                 ? 'opacity-100 scale-100' 
//                 : 'opacity-0 scale-110'
//             }`}
//           >
//             <img
//               src={slide}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//             {/* Subtle overlay */}
//             <div className="absolute inset-0 bg-black/20"></div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation arrows */}
//       <button
//         onClick={goToPrevious}
//         className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
//       >
//         <ChevronLeft size={24} />
//       </button>

//       <button
//         onClick={goToNext}
//         className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
//       >
//         <ChevronRight size={24} />
//       </button>

//       {/* Modern dot indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className="group/dot relative"
//           >
//             <div
//               className={`w-12 h-1 rounded-full transition-all duration-500 ${
//                 index === currentIndex 
//                   ? 'bg-white' 
//                   : 'bg-white/40 hover:bg-white/60'
//               }`}
//             >
//               {index === currentIndex && (
//                 <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
//               )}
//             </div>
//           </button>
//         ))}
//       </div>



//       {/* Floating elements for visual interest */}
//       <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl animate-pulse"></div>
//       <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-lg animate-pulse delay-1000"></div>
      
//       {/* Subtle geometric shapes */}
//       <div className="absolute top-1/3 right-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-45 animate-pulse delay-2000"></div>
//       <div className="absolute bottom-1/3 left-1/4 w-1 h-24 bg-gradient-to-b from-transparent via-white/15 to-transparent -rotate-45 animate-pulse delay-3000"></div>

//       {/* Corner accents */}
//       <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20 opacity-60"></div>
//       <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20 opacity-60"></div>
//     </div>
//   )
// }


// import React, { useState, useEffect } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const slides = [
//   'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   'https://images.pexels.com/photos/1191677/pexels-photo-1191677.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   'https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=1200',
//   'https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=1200'
// ]

// export default function JewelryHeroCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isHovered, setIsHovered] = useState(false)

//   useEffect(() => {
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
//       }, 4000)
//       return () => clearInterval(interval)
//     }
//   }, [isHovered])

//   const goToSlide = (index) => {
//     setCurrentIndex(index)
//   }

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
//   }

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
//   }

//   const getSlideIndex = (offset) => {
//     return (currentIndex + offset + slides.length) % slides.length
//   }

//   return (
//     <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8">
//       <div 
//         className="relative mx-auto max-w-7xl px-4 group"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Main carousel container */}
//         <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-2xl shadow-2xl">
          
//           {/* Previous slide (left peek) */}
//           <div className="absolute left-0 top-0 w-24 md:w-32 h-full z-20 overflow-hidden">
//             <div 
//               className="w-full h-full bg-black/40 backdrop-blur-sm transition-all duration-700 transform -translate-x-2 hover:translate-x-0 cursor-pointer"
//               onClick={goToPrevious}
//             >
//               <img
//                 src={slides[getSlideIndex(-1)]}
//                 alt="Previous"
//                 className="w-full h-full object-cover scale-110 opacity-60 hover:opacity-80 transition-opacity duration-300"
//               />
//             </div>
//           </div>

//           {/* Next slide (right peek) */}
//           <div className="absolute right-0 top-0 w-24 md:w-32 h-full z-20 overflow-hidden">
//             <div 
//               className="w-full h-full bg-black/40 backdrop-blur-sm transition-all duration-700 transform translate-x-2 hover:-translate-x-0 cursor-pointer"
//               onClick={goToNext}
//             >
//               <img
//                 src={slides[getSlideIndex(1)]}
//                 alt="Next"
//                 className="w-full h-full object-cover scale-110 opacity-60 hover:opacity-80 transition-opacity duration-300"
//               />
//             </div>
//           </div>

//           {/* Main slide area */}
//           <div className="absolute inset-x-8 md:inset-x-16 inset-y-0 overflow-hidden rounded-xl">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//                   index === currentIndex 
//                     ? 'opacity-100 scale-100' 
//                     : 'opacity-0 scale-105'
//                 }`}
//               >
//                 <img
//                   src={slide}
//                   alt={`Jewelry ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Subtle jewelry-focused overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation arrows */}
//           <button
//             onClick={goToPrevious}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-md shadow-lg rounded-full p-2 text-gray-800 hover:bg-white hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <button
//             onClick={goToNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-md shadow-lg rounded-full p-2 text-gray-800 hover:bg-white hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
//           >
//             <ChevronRight size={20} />
//           </button>

//           {/* Elegant dot indicators */}
//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className="group/dot relative"
//               >
//                 <div
//                   className={`w-2 h-2 rounded-full transition-all duration-500 ${
//                     index === currentIndex 
//                       ? 'bg-white scale-125 shadow-lg' 
//                       : 'bg-white/50 hover:bg-white/80 hover:scale-110'
//                   }`}
//                 >
//                   {index === currentIndex && (
//                     <div className="absolute -inset-2 bg-white/30 rounded-full animate-ping"></div>
//                   )}
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Luxury accent elements */}
//           <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-amber-300/20 to-transparent rounded-full blur-xl animate-pulse"></div>
//           <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-rose-300/20 to-transparent rounded-full blur-lg animate-pulse delay-1000"></div>
          
//           {/* Subtle corner frames */}
//           <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/30 opacity-60 rounded-tl-2xl"></div>
//           <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/30 opacity-60 rounded-br-2xl"></div>
//         </div>

//         {/* Optional: Jewelry brand accent line */}
//         <div className="flex justify-center mt-6">
//           <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const JewelryHeroCarousel = () => {
  const slides = [
    "Carousel/1.jpg",
    "Carousel/2.jpg",
    "Carousel/3.jpg",
    
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-12 relative px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="rounded-2xl shadow-2xl"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Jewelry ${idx + 1}`}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}

        {/* Custom Buttons */}
        <div className="swiper-button-prev !text-[#6B4226] !bg-white/90 !w-12 !h-12 !rounded-full !shadow-lg flex items-center justify-center"></div>
        <div className="swiper-button-next !text-[#6B4226] !bg-white/90 !w-12 !h-12 !rounded-full !shadow-lg flex items-center justify-center"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-5"></div>
      </Swiper>

      <style>{`
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: #c9a96d !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #6B4226 !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default JewelryHeroCarousel;
