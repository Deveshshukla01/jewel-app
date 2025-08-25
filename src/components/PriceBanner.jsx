
// import React, { useEffect, useState } from 'react'
// import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

// export default function PriceBanner() {
//   const [text, setText] = useState('Gold Price: ₹1000 | Silver Price: ₹650')

//   useEffect(() => {
//     async function fetchBanner() {
//       try {
//         const resp = await databases.listDocuments(
//           DATABASE_ID,
//           COLLECTIONS.banner,
//           [],
//           100
//         )
//         if (resp.total > 0) {
//           setText(resp.documents[0].text || text)
//           console.log('Banner loaded:', resp.documents[0].text)
//         }
//       } catch (err) {
//         console.error('Banner fetch error', err)
//       }
//     }
//     fetchBanner()

//     const interval = setInterval(fetchBanner, 300000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="bg-[#ebcc78] py-2 overflow-hidden relative font-serif">
//       {/* Shimmer effect overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="font-semibold text-center bounce-in">
//           <div className="flex items-center justify-center space-x-4">
            
//             <span className="text-[#542018] text-lg">{text}</span>
//             {/* <span className="hidden sm:inline text-[#542018]">•</span>
//             <span className="hidden sm:inline text-[#542018]">Updated daily</span>
//             <span className="hidden md:inline text-[#542018]">•</span>
//             <span className="hidden md:inline text-[#542018]">
//               Free shipping on orders above ₹5000
//             </span> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// import React, { useEffect, useState } from 'react'
// import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

// export default function PriceBanner() {
//   const [text, setText] = useState('Gold Price: ₹1000 | Silver Price: ₹650')

//   useEffect(() => {
//     async function fetchBanner() {
//       try {
//         const resp = await databases.listDocuments(
//           DATABASE_ID,
//           COLLECTIONS.banner,
//           [],
//           100
//         )
//         if (resp.total > 0) {
//           setText(resp.documents[0].text || text)
//           console.log('Banner loaded:', resp.documents[0].text)
//         }
//       } catch (err) {
//         console.error('Banner fetch error', err)
//       }
//     }
//     fetchBanner()

//     const interval = setInterval(fetchBanner, 300000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="bg-[#ebcc78] py-2 overflow-hidden relative font-serif">
//       {/* shimmer overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

//       <div className="relative z-10">
//         {/* scrolling container */}
//         <div className="whitespace-nowrap overflow-hidden">
//           <div className="inline-block animate-marquee px-4">
//             <span className="text-[#542018] text-lg font-semibold">{text}</span>
//             <span className="mx-8 text-[#542018] text-lg font-semibold">{text}</span>
//             <span className="mx-8 text-[#542018] text-lg font-semibold">{text}</span>
//             <span className="mx-8 text-[#542018] text-lg font-semibold">{text}</span>
//             <span className="mx-8 text-[#542018] text-lg font-semibold">{text}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// import React, { useEffect, useState } from 'react'
// import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

// export default function PriceBanner() {
//   const [text, setText] = useState('Gold Price: ₹1000 | Silver Price: ₹650')

//   useEffect(() => {
//     async function fetchBanner() {
//       try {
//         const resp = await databases.listDocuments(
//           DATABASE_ID,
//           COLLECTIONS.banner,
//           [],
//           100
//         )
//         if (resp.total > 0) {
//           setText(resp.documents[0].text || text)
//           console.log('Banner loaded:', resp.documents[0].text)
//         }
//       } catch (err) {
//         console.error('Banner fetch error', err)
//       }
//     }
//     fetchBanner()

//     const interval = setInterval(fetchBanner, 300000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="bg-[#ebcc78] py-2 overflow-hidden relative font-serif">
//       {/* shimmer overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

//       {/* marquee wrapper */}
//       <div className="relative z-10 flex overflow-hidden">
//         {/* First scrolling row */}
//         <div className="flex animate-marquee space-x-24">
//           <span className="text-[#542018] text-lg font-semibold">{text}</span>
//           <span className="text-[#542018] text-lg font-semibold">{text}</span>
//           <span className="text-[#542018] text-lg font-semibold">{text}</span>
//         </div>
        
//         {/* Second scrolling row (follows behind) */}
//         <div className="flex animate-marquee2 space-x-24" aria-hidden="true">
//           <span className="text-[#542018] text-lg font-semibold">{text}</span>
//           <span className="text-[#542018] text-lg font-semibold">{text}</span>
//           <span className="text-[#542018] text-lg font-semibold">{text}</span>
//         </div>
//       </div>
//     </div>
//   )
// }


// import React, { useEffect, useState } from 'react'
// import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

// export default function PriceBanner() {
//   const [text, setText] = useState('Gold Price: ₹1000 | Silver Price: ₹650')

//   useEffect(() => {
//     async function fetchBanner() {
//       try {
//         const resp = await databases.listDocuments(
//           DATABASE_ID,
//           COLLECTIONS.banner,
//           [],
//           100
//         )
//         if (resp.total > 0) {
//           setText(resp.documents[0].text || text)
//         }
//       } catch (err) {
//         console.error('Banner fetch error', err)
//       }
//     }
//     fetchBanner()
//     const interval = setInterval(fetchBanner, 300000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="bg-[#ebcc78] py-2 overflow-hidden relative font-serif">
//       {/* shimmer overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

//       {/* marquee wrapper */}
//       <div className="relative z-10 flex overflow-hidden">
//         {/* First row */}
//         <div className="flex animate-marquee min-w-full whitespace-nowrap">
//           {[...Array(4)].map((_, i) => (
//             <span
//               key={i}
//               className="text-[#542018] text-sm sm:text-lg font-semibold px-8"
//             >
//               {text}
//             </span>
//           ))}
//         </div>

//         {/* Second row */}
//         <div
//           className="flex animate-marquee2 min-w-full whitespace-nowrap"
//           aria-hidden="true"
//         >
//           {[...Array(4)].map((_, i) => (
//             <span
//               key={i}
//               className="text-[#542018] text-sm sm:text-lg font-semibold px-8"
//             >
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/config'

export default function PriceBanner() {
  const [text, setText] = useState('Gold Price: ₹1000 | Silver Price: ₹650')

  useEffect(() => {
    async function fetchBanner() {
      try {
        const resp = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.banner
        )
        if (resp.total > 0) {
          setText(resp.documents[0].text || text)
        }
      } catch (err) {
        console.error('Banner fetch error', err)
      }
    }
    fetchBanner()
    const interval = setInterval(fetchBanner, 300000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#ebcc78] py-2 overflow-hidden relative font-serif">
      {/* shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

      {/* marquee wrapper */}
      <div className="relative z-10 flex whitespace-nowrap">
        {/* First loop */}
        <div className="flex animate-marquee">
          <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
            {text}
          </span>
          <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
            {text}
          </span>
          <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
            {text}
          </span>
        </div>

        {/* Second loop (delayed start, prevents overlap) */}
        <div className="flex animate-marquee delay-[10s]">
          <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
            {text}
          </span>
          <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
            {text}
          </span>
          <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
            {text}
          </span>
        </div>
      </div>
    </div>
  )
}
