
// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const data = [
//   { name: "Anita", text: "Beautiful design and fast delivery. The quality exceeded my expectations!", rating: 5 },
//   { name: "Rahul", text: "High quality craftsmanship, definitely worth the price. Will order again.", rating: 5 },
//   { name: "Sana", text: "Lovely packaging and exquisite jewelry. Perfect for gifting.", rating: 5 },
//   { name: "Vikram", text: "Amazing customer service and premium quality.", rating: 5 },
//   { name: "Priya", text: "The ring I bought was stunning. Got so many compliments!", rating: 5 },
//   { name: "Arjun", text: "Excellent finishing and durable jewelry.", rating: 5 },
//   { name: "Meera", text: "Quick delivery and outstanding product quality.", rating: 5 },
//   { name: "Rohit", text: "Loved the craftsmanship. Will definitely recommend to friends.", rating: 5 },
// ];

// export default function Reviews() {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState("next");
//   const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4);

//   useEffect(() => {
//     const handleResize = () => {
//       setItemsPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const prev = () => {
//     setDirection("prev");
//     setIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - itemsPerPage : prevIndex - itemsPerPage
//     );
//   };

//   const next = () => {
//     setDirection("next");
//     setIndex((prevIndex) =>
//       prevIndex + itemsPerPage >= data.length ? 0 : prevIndex + itemsPerPage
//     );
//   };

//   return (
//     <div
//       id="reviews"
//       className="relative py-20 bg-cover bg-center"
//       style={{ backgroundImage: "url('/Background/Categories.jpg')" }}
//     >
//       {/* Overlay with gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-[#f8e9d8]/80"></div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-4 font-serif">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl mb-4 font-bold text-[#542018] tracking-wide">
//             Customer Reviews
//           </h2>
//           <p className="text-lg max-w-2xl mx-auto text-[#542018]/80">
//             Hear what our valued customers say about their jewelry experience.
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           <div
//             key={index}
//             className={`grid gap-8 transition-all duration-700 ${
//               direction === "next" ? "animate-fadeLeft" : "animate-fadeRight"
//             } grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
//           >
//             {data.slice(index, index + itemsPerPage).map((r, i) => (
//               <div
//                 key={i}
//                 className="backdrop-blur-md bg-white/70 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#542018]/10"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 bg-gradient-to-br from-[#542018] to-[#81432d] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
//                     {r.name.charAt(0)}
//                   </div>
//                   <div>
//                     <div className="font-semibold text-lg text-[#542018]">
//                       {r.name}
//                     </div>
//                     <div className="flex text-yellow-500 text-sm">
//                       {Array.from({ length: r.rating }, (_, i) => (
//                         <svg
//                           key={i}
//                           className="w-4 h-4 fill-current animate-pulse-slow"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <blockquote className="italic text-[#542018]/90 text-lg leading-relaxed">
//                   "{r.text}"
//                 </blockquote>
//               </div>
//             ))}
//           </div>

//           {/* Navigation */}
//           <div className="flex justify-center gap-6 mt-12">
//             <button
//               onClick={prev}
//               className="p-4 rounded-full border-2 border-[#542018] text-[#542018] hover:bg-[#542018] hover:text-white transition-all duration-500 shadow-md"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </button>
//             <button
//               onClick={next}
//               className="p-4 rounded-full border-2 border-[#542018] text-[#542018] hover:bg-[#542018] hover:text-white transition-all duration-500 shadow-md"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes fadeLeft {
//             from { transform: translateX(40px); opacity: 0; }
//             to { transform: translateX(0); opacity: 1; }
//           }
//           @keyframes fadeRight {
//             from { transform: translateX(-40px); opacity: 0; }
//             to { transform: translateX(0); opacity: 1; }
//           }
//           .animate-fadeLeft { animation: fadeLeft 0.7s ease; }
//           .animate-fadeRight { animation: fadeRight 0.7s ease; }
//           @keyframes pulse-slow {
//             0%, 100% { transform: scale(1); opacity: 1; }
//             50% { transform: scale(1.1); opacity: 0.9; }
//           }
//           .animate-pulse-slow { animation: pulse-slow 2s infinite; }
//         `}
//       </style>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  { name: "Anita", text: "Beautiful design and fast delivery. The quality exceeded my expectations!", rating: 5 },
  { name: "Rahul", text: "High quality craftsmanship, definitely worth the price. Will order again.", rating: 5 },
  { name: "Sana", text: "Lovely packaging and exquisite jewelry. Perfect for gifting.", rating: 5 },
  { name: "Vikram", text: "Amazing customer service and premium quality.", rating: 5 },
  { name: "Priya", text: "The ring I bought was stunning. Got so many compliments!", rating: 5 },
  { name: "Arjun", text: "Excellent finishing and durable jewelry.", rating: 5 },
  { name: "Meera", text: "Quick delivery and outstanding product quality.", rating: 5 },
  { name: "Rohit", text: "Loved the craftsmanship. Will definitely recommend to friends.", rating: 5 },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => {
    setDirection("prev");
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const next = () => {
    setDirection("next");
    setIndex((prevIndex) =>
      prevIndex + itemsPerPage >= data.length ? 0 : prevIndex + itemsPerPage
    );
  };

  return (
    <div
      id="reviews"
      className="relative py-16 sm:py-20 bg-cover bg-center"
      // style={{ backgroundImage: "url('/Background/Categories.jpg')" }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-[#f8e9d8]/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 font-serif">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl mb-3 sm:mb-4 font-bold text-[#542018] tracking-wide">
            Customer Reviews
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#542018]/80">
            Hear what our valued customers say about their jewelry experience.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            key={index}
            className={`grid gap-6 sm:gap-8 transition-all duration-700 ${
              direction === "next" ? "animate-fadeLeft" : "animate-fadeRight"
            } grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center`}
          >
            {data.slice(index, index + itemsPerPage).map((r, i) => (
              <div
                key={i}
                className="backdrop-blur-md bg-white/70 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#542018]/10 w-72 h-72 sm:w-auto sm:h-auto flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#542018] to-[#81432d] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 sm:mr-4 shadow-md">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-base sm:text-lg text-[#542018]">
                        {r.name}
                      </div>
                      <div className="flex text-yellow-500 text-xs sm:text-sm">
                        {Array.from({ length: r.rating }, (_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 fill-current animate-pulse-slow"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-[#542018]/90 text-sm sm:text-lg leading-relaxed">
                    "{r.text}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-10 sm:mt-12">
            <button
              onClick={prev}
              className="p-3 sm:p-4 rounded-full border-2 border-[#542018] text-[#542018] hover:bg-[#542018] hover:text-white transition-all duration-500 shadow-md"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={next}
              className="p-3 sm:p-4 rounded-full border-2 border-[#542018] text-[#542018] hover:bg-[#542018] hover:text-white transition-all duration-500 shadow-md"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeLeft {
            from { transform: translateX(40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeRight {
            from { transform: translateX(-40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-fadeLeft { animation: fadeLeft 0.7s ease; }
          .animate-fadeRight { animation: fadeRight 0.7s ease; }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.9; }
          }
          .animate-pulse-slow { animation: pulse-slow 2s infinite; }
        `}
      </style>
    </div>
  );
}
