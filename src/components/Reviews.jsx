// import React, { useState } from "react";
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
//   const itemsPerPage = 4;

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
//     <div className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2
//             className="text-4xl md:text-5xl font-bold mb-6 font-sans"
//             style={{ color: "#542018" }}
//           >
//             Customer Reviews
//           </h2>
//           <p
//             className="text-lg max-w-3xl mx-auto"
//             style={{ color: "#542018" }}
//           >
//             What our valued customers say about their experience with RatnaLaya
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           {/* Cards wrapper with sliding animation */}
//           <div
//             key={index} // ensures re-render for animation
//             className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-transform duration-700 ease-in-out ${
//               direction === "next"
//                 ? "animate-slideLeft"
//                 : "animate-slideRight"
//             }`}
//           >
//             {data.slice(index, index + itemsPerPage).map((r, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 bg-[#542018] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
//                     {r.name.charAt(0)}
//                   </div>
//                   <div>
//                     <div
//                       className="font-semibold text-lg"
//                       style={{ color: "#542018" }}
//                     >
//                       {r.name}
//                     </div>
//                     <div className="flex text-yellow-500 text-sm">
//                       {Array.from({ length: r.rating }, (_, i) => (
//                         <svg
//                           key={i}
//                           className="w-4 h-4 fill-current"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <blockquote
//                   className="italic text-lg leading-relaxed"
//                   style={{ color: "#542018" }}
//                 >
//                   "{r.text}"
//                 </blockquote>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons below */}
//           <div className="flex justify-center gap-4 mt-10">
//             <button
//               onClick={prev}
//               className="bg-[#542018] text-white p-3 rounded-full shadow-md hover:bg-[#6e2a22] transition"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </button>
//             <button
//               onClick={next}
//               className="bg-[#542018] text-white p-3 rounded-full shadow-md hover:bg-[#6e2a22] transition"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tailwind keyframes for slide animation */}
//       <style>
//         {`
//           @keyframes slideLeft {
//             from { transform: translateX(50px); opacity: 0; }
//             to { transform: translateX(0); opacity: 1; }
//           }
//           @keyframes slideRight {
//             from { transform: translateX(-50px); opacity: 0; }
//             to { transform: translateX(0); opacity: 1; }
//           }
//           .animate-slideLeft { animation: slideLeft 0.6s ease; }
//           .animate-slideRight { animation: slideRight 0.6s ease; }
//         `}
//       </style>
//     </div>
//   );
// }

// import React, { useState } from "react";
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

//   // Show 2 on small screens, 4 on medium+
//   const itemsPerPage = window.innerWidth < 640 ? 2 : 4;

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
//     <div className="py-20 bg-gradient-to-b from-white to-gray-50 font-serif">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2
//             className="text-4xl md:text-5xl font-bold mb-6 "
//             style={{ color: "#542018" }}
//           >
//             Customer Reviews
//           </h2>
//           <p
//             className="text-lg max-w-3xl mx-auto"
//             style={{ color: "#542018" }}
//           >
//             What our valued customers say about their experience with Sethi jewel
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           {/* Cards wrapper with sliding animation */}
//           <div
//             key={index}
//             className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-transform duration-700 ease-in-out ${
//               direction === "next"
//                 ? "animate-slideLeft"
//                 : "animate-slideRight"
//             }`}
//           >
//             {data.slice(index, index + itemsPerPage).map((r, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 bg-[#542018] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
//                     {r.name.charAt(0)}
//                   </div>
//                   <div>
//                     <div
//                       className="font-semibold text-lg"
//                       style={{ color: "#542018" }}
//                     >
//                       {r.name}
//                     </div>
//                     <div className="flex text-yellow-500 text-sm">
//                       {Array.from({ length: r.rating }, (_, i) => (
//                         <svg
//                           key={i}
//                           className="w-4 h-4 fill-current"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <blockquote
//                   className="italic text-lg leading-relaxed"
//                   style={{ color: "#542018" }}
//                 >
//                   "{r.text}"
//                 </blockquote>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-center gap-4 mt-10">
//             <button
//               onClick={prev}
//               className="bg-[#542018] text-white p-3 rounded-full shadow-md hover:bg-[#6e2a22] transition"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </button>
//             <button
//               onClick={next}
//               className="bg-[#542018] text-white p-3 rounded-full shadow-md hover:bg-[#6e2a22] transition"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tailwind keyframes */}
//       <style>
//         {`
//           @keyframes slideLeft {
//             from { transform: translateX(50px); opacity: 0; }
//             to { transform: translateX(0); opacity: 1; }
//           }
//           @keyframes slideRight {
//             from { transform: translateX(-50px); opacity: 0; }
//             to { transform: translateX(0); opacity: 1; }
//           }
//           .animate-slideLeft { animation: slideLeft 0.6s ease; }
//           .animate-slideRight { animation: slideRight 0.6s ease; }
//         `}
//       </style>
//     </div>
//   );
// }

import React, { useState } from "react";
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

  // Show 2 on small screens, 4 on medium+
  const itemsPerPage = window.innerWidth < 640 ? 2 : 4;

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
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/Background/Categories.jpg')" }} // 👈 place this image in public/backgrounds/
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 font-serif">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ color: "#542018" }}
          >
            Customer Reviews
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "#542018" }}
          >
            What our valued customers say about their experience with Sethi jewel
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards wrapper with sliding animation */}
          <div
            key={index}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-transform duration-700 ease-in-out ${
              direction === "next" ? "animate-slideLeft" : "animate-slideRight"
            }`}
          >
            {data.slice(index, index + itemsPerPage).map((r, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#542018] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-lg"
                      style={{ color: "#542018" }}
                    >
                      {r.name}
                    </div>
                    <div className="flex text-yellow-500 text-sm">
                      {Array.from({ length: r.rating }, (_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote
                  className="italic text-lg leading-relaxed"
                  style={{ color: "#542018" }}
                >
                  "{r.text}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="bg-[#542018] text-white p-3 rounded-full shadow-md hover:bg-[#6e2a22] transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="bg-[#542018] text-white p-3 rounded-full shadow-md hover:bg-[#6e2a22] transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind keyframes */}
      <style>
        {`
          @keyframes slideLeft {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideRight {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slideLeft { animation: slideLeft 0.6s ease; }
          .animate-slideRight { animation: slideRight 0.6s ease; }
        `}
      </style>
    </div>
  );
}
