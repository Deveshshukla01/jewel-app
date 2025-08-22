
// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const categories = [
//   {id:'ladies-rings', name:'Ladies Rings', img:'/Categories/ladies.png'},
//   {id:'gents-rings', name:'Gente Rings', img:'/Categories/ladies.png'},
//   {id:'earings', name:'Earings', img:'/Categories/ladies.png'},
//   {id:'bangles-karas', name:'Bangles | karas', img:'/Categories/ladies.png'},
//   {id:'chains', name:'Chains', img:'/Categories/chains.png'},
//   {id:'bracelets', name:'Bracelets', img:'/Categories/bracelet.png'},
//   {id:'mangalsutra', name:'Mangalsutra', img:'/Categories/ladies.png'},
//   {id:'pendant-sets', name:'Pendant Sets', img:'/Categories/ladies.png'},
//   {id:'pendants', name:'Pendants', img:'/Categories/pendants.png'},
//   {id:'diamonds', name:'Diamonds', img:'/Categories/diamonds.png'}
// ];

// export default function Categories() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPos, setStartPos] = useState(0);
//   const [currentTranslate, setCurrentTranslate] = useState(0);
//   const [prevTranslate, setPrevTranslate] = useState(0);

//   // Auto-play functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isDragging) {
//         setCurrentIndex((prev) => (prev + 1) % Math.ceil(categories.length / 2));
//       }
//     }, 40000);

//     return () => clearInterval(interval);
//   }, [isDragging]);

//   // Touch/drag handlers
//   const getPositionX = (event) => {
//     return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
//   };

//   const dragStart = (event) => {
//     setIsDragging(true);
//     setStartPos(getPositionX(event));
//     if (carouselRef.current) {
//       carouselRef.current.style.transition = 'none';
//     }
//   };

//   const dragMove = (event) => {
//     if (!isDragging) return;
//     const currentPosition = getPositionX(event);
//     const diff = currentPosition - startPos;
//     setCurrentTranslate(prevTranslate + diff);
//   };

//   const dragEnd = () => {
//     setIsDragging(false);
//     if (carouselRef.current) {
//       carouselRef.current.style.transition = 'transform 0.3s ease-out';
//     }
    
//     const movedBy = currentTranslate - prevTranslate;
//     const threshold = 50;
    
//     if (movedBy < -threshold) {
//       setCurrentIndex((prev) => Math.min(prev + 1, Math.ceil(categories.length / 2) - 1));
//     } else if (movedBy > threshold) {
//       setCurrentIndex((prev) => Math.max(prev - 1, 0));
//     }
    
//     setCurrentTranslate(0);
//     setPrevTranslate(0);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % Math.ceil(categories.length / 2));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + Math.ceil(categories.length / 2)) % Math.ceil(categories.length / 2));
//   };

//   return (
//     <div 
//       id="categories" 
//       className="relative py-16 font-serif bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/Background/Categories.jpg')" }} 
//       // 👆 place your image inside public/backgrounds/categories-bg.jpg
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-white/70"></div>

//       {/* Content */}
//       <div className="relative container mx-auto px-6 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl text-[#542018] mb-2 font-serif">
//             Find Your Perfect Match
//           </h2>
//           <h4 className="text-2xl md:text-2xl text-[#542018] mb-2 font-serif">
//             Shop by Category
//           </h4>
//         </div>
        
//         {/* Desktop Grid */}
//         <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8">
//           {categories.map((category, index) => (
//             <Link
//               key={category.id}
//               to={`/category/${category.id}`}
//               className="group cursor-pointer block"
//               style={{
//                 animationDelay: `${index * 200}ms`,
//                 animationDuration: '3s'
//               }}
//             >
//               <div className="relative overflow-hidden rounded-full mb-4 aspect-square bg-gradient-to-br from-amber-50 to-amber-100 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
//                 <img
//                   src={category.img}
//                   alt={category.name}
//                   className="w-full h-full object-cover scale-150 transition-all duration-1000 group-hover:scale-[1.65] group-hover:brightness-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
//               </div>
              
//               <div className="text-center">
//                 <h3 className="font-semibold text-[#542018] text-sm md:text-base group-hover:text-amber-600 transition-colors duration-500 transform group-hover:scale-105">
//                   {category.name}
//                 </h3>
//                 <p className="text-amber-600 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
//                   Explore →
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Carousel */}
//         <div className="md:hidden relative">
//           <div className="relative overflow-hidden">
//             <div 
//               ref={carouselRef}
//               className="flex transition-transform duration-300 ease-out"
//               style={{
//                 transform: `translateX(-${currentIndex * 100}%) translateX(${currentTranslate}px)`
//               }}
//               onMouseDown={dragStart}
//               onMouseMove={dragMove}
//               onMouseUp={dragEnd}
//               onMouseLeave={dragEnd}
//               onTouchStart={dragStart}
//               onTouchMove={dragMove}
//               onTouchEnd={dragEnd}
//             >
//               {Array.from({ length: Math.ceil(categories.length / 2) }, (_, slideIndex) => (
//                 <div key={slideIndex} className="w-full flex-shrink-0 px-2">
//                   <div className="grid grid-cols-2 gap-4">
//                     {categories.slice(slideIndex * 2, slideIndex * 2 + 2).map((category) => (
//                       <Link
//                         key={category.id}
//                         to={`/category/${category.id}`}
//                         className="group cursor-pointer block"
//                       >
//                         <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square  transform transition-all duration-500 active:scale-95">
//                           <img
//                             src={category.img}
//                             alt={category.name}
//                             className="w-full h-full object-cover scale-150 transition-all duration-700 group-active:scale-[1.65]"
//                             draggable={false}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent opacity-0 group-active:opacity-100 transition-all duration-300"></div>
//                         </div>
//                         <div className="text-center">
//                           <h3 className="font-semibold text-amber-800 text-sm group-active:text-amber-600 transition-colors duration-300">
//                             {category.name}
//                           </h3>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-amber-100 text-amber-600 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 z-10"
//             disabled={currentIndex === 0}
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
          
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-amber-100 text-amber-600 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 z-10"
//             disabled={currentIndex === Math.ceil(categories.length / 2) - 1}
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>

//           {/* Dot Indicators */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {Array.from({ length: Math.ceil(categories.length / 2) }, (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? 'bg-amber-600 w-8'
//                     : 'bg-amber-200 hover:bg-amber-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'ladies-rings', name: 'Ladies Rings', img: '/Categories/ladies.png' },
  { id: 'gents-rings', name: 'Gente Rings', img: '/Categories/ladies.png' },
  { id: 'earings', name: 'Earings', img: '/Categories/ladies.png' },
  { id: 'bangles-karas', name: 'Bangles | karas', img: '/Categories/ladies.png' },
  { id: 'chains', name: 'Chains', img: '/Categories/chains.png' },
  { id: 'bracelets', name: 'Bracelets', img: '/Categories/bracelet.png' },
  { id: 'mangalsutra', name: 'Mangalsutra', img: '/Categories/ladies.png' },
  { id: 'pendant-sets', name: 'Pendant Sets', img: '/Categories/ladies.png' },
  { id: 'pendants', name: 'Pendants', img: '/Categories/pendants.png' },
  { id: 'diamonds', name: 'Diamonds', img: '/Categories/diamonds.png' },
];

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const positionRef = useRef({
    isDragging: false,
    startX: 0,
    currentTranslate: 0,
    prevTranslate: 0,
    animationFrame: null,
  });

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!positionRef.current.isDragging) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPositionX = (event) =>
    event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;

  const setSliderPosition = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${positionRef.current.currentTranslate}px)`;
    }
  };

  const dragStart = (event) => {
    positionRef.current.isDragging = true;
    positionRef.current.startX = getPositionX(event);
    cancelAnimationFrame(positionRef.current.animationFrame);
    carouselRef.current.style.transition = 'none';
  };

  const dragMove = (event) => {
    if (!positionRef.current.isDragging) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - positionRef.current.startX;
    positionRef.current.currentTranslate =
      -currentIndex * carouselRef.current.offsetWidth + diff;
    positionRef.current.animationFrame = requestAnimationFrame(setSliderPosition);
  };

  const dragEnd = () => {
    positionRef.current.isDragging = false;
    cancelAnimationFrame(positionRef.current.animationFrame);
    const movedBy =
      positionRef.current.currentTranslate + currentIndex * carouselRef.current.offsetWidth;

    if (movedBy < -50 && currentIndex < Math.ceil(categories.length / 2) - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    carouselRef.current.style.transition = 'transform 0.3s ease-out';
    positionRef.current.currentTranslate = -currentIndex * carouselRef.current.offsetWidth;
    setSliderPosition();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(categories.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(categories.length / 2)) % Math.ceil(categories.length / 2));
  };

  // Update position on index change
  useEffect(() => {
    if (carouselRef.current) {
      positionRef.current.currentTranslate = -currentIndex * carouselRef.current.offsetWidth;
      carouselRef.current.style.transition = 'transform 0.3s ease-out';
      setSliderPosition();
    }
  }, [currentIndex]);

  return (
    <div
      id="categories"
      className="relative py-16 font-serif bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Background/Categories.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#542018] mb-2 font-serif">
            Find Your Perfect Match
          </h2>
          <h4 className="text-2xl md:text-2xl text-[#542018] mb-2 font-serif">
            Shop by Category
          </h4>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-full mb-4 aspect-square bg-gradient-to-br from-amber-50 to-amber-100 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 will-change-transform">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover scale-150 transition-transform duration-500 group-hover:scale-[1.65]"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-[#542018] text-sm md:text-base group-hover:text-amber-600 transition-colors duration-300 transform group-hover:scale-105">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex"
            onMouseDown={dragStart}
            onMouseMove={dragMove}
            onMouseUp={dragEnd}
            onMouseLeave={dragEnd}
            onTouchStart={dragStart}
            onTouchMove={dragMove}
            onTouchEnd={dragEnd}
          >
            {Array.from({ length: Math.ceil(categories.length / 2) }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                <div className="grid grid-cols-2 gap-4">
                  {categories.slice(slideIndex * 2, slideIndex * 2 + 2).map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="group cursor-pointer block"
                    >
                      <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square transform transition-transform duration-500 will-change-transform active:scale-95">
                        <img
                          src={category.img}
                          alt={category.name}
                          className="w-full h-full object-cover scale-150 transition-transform duration-500 group-active:scale-[1.65]"
                          draggable={false}
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-amber-800 text-sm group-active:text-amber-600 transition-colors duration-300">
                          {category.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-amber-100 text-amber-600 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 z-10"
            disabled={currentIndex === 0}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-amber-100 text-amber-600 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 z-10"
            disabled={currentIndex === Math.ceil(categories.length / 2) - 1}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(categories.length / 2) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-amber-600 w-8' : 'bg-amber-200 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

