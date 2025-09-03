
// import React, { useEffect, useState } from "react";
// import { databases, DATABASE_ID, COLLECTIONS } from "../appwrite/config";

// export default function PriceBanner() {
//   const [text, setText] = useState("Gold Price: ₹1000 | Silver Price: ₹650");

//   useEffect(() => {
//     async function fetchBanner() {
//       try {
//         const resp = await databases.listDocuments(
//           DATABASE_ID,
//           COLLECTIONS.banner
//         );
//         if (resp.total > 0) {
//           setText(resp.documents[0].text || text);
//         }
//       } catch (err) {
//         console.error("Banner fetch error", err);
//       }
//     }
//     fetchBanner();
//     const interval = setInterval(fetchBanner, 300000);
//     return () => clearInterval(interval);
//   }, []);

//   // Utility: repeat text based on screen size
//   const renderSpans = (count) =>
//     [...Array(count)].map((_, i) => (
//       <span
//         key={i}
//         className="text-[#542018] text-sm sm:text-lg font-semibold px-8 flex-shrink-0 min-w-full"
//       >
//         {text}
//       </span>
//     ));

//   return (
//     <div className="bg-[#ebcc78] py-2 overflow-hidden relative font-serif mb-2">
//       {/* shimmer overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

//       {/* marquee wrapper */}
//       <div className="relative z-10 flex whitespace-nowrap">
//         {/* First loop */}
//         <div className="flex animate-marquee">
//           {/* mobile → 1 span, laptop/tablet → 2 spans */}
//           <div className="block sm:hidden">{renderSpans(1)}</div>
//           <div className="hidden sm:flex">{renderSpans(2)}</div>
//         </div>

//         {/* Second loop (delayed start) */}
//         <div className="flex animate-marquee animation-delay-20s">
//           <div className="block sm:hidden">{renderSpans(1)}</div>
//           <div className="hidden sm:flex">{renderSpans(2)}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
import { databases, DATABASE_ID, COLLECTIONS } from "../appwrite/config";

export default function PriceBanner() {
  const [text, setText] = useState(
    "Gold Price: ₹1000 | Silver Price: ₹650"
  );
  const marqueeRef = useRef(null);

  useEffect(() => {
    async function fetchBanner() {
      try {
        const resp = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.banner
        );
        if (resp.total > 0) {
          setText(resp.documents[0].text || text);
        }
      } catch (err) {
        console.error("Banner fetch error", err);
      }
    }
    fetchBanner();
    const interval = setInterval(fetchBanner, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#ebcc78] py-2 overflow-hidden relative font-serif mb-2">
      {/* shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

      {/* marquee wrapper */}
      <div
        ref={marqueeRef}
        className="relative z-10 flex whitespace-nowrap w-max animate-marquee"
      >
        {/* Copy 1 */}
        <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
          {text}
        </span>
        {/* Copy 2 (duplicate) */}
        <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
          {text}
        </span>
      </div>
    </div>
  );
}
