// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// // InstagramPosts-Slider.jsx
// // - Desktop: 4-in-a-row (lg+)
// // - Mobile: horizontal slider with swipe, arrows and dots
// // - All blockquotes are rendered once so Instagram's embed script processes them
// // - If embed doesn't load (blocked by adblock/CSP), a small "Open on Instagram" button is provided as a fallback

// export default function InstagramPosts({ posts: userPosts }) {
//   const defaultPosts = [
//     "https://www.instagram.com/reel/DN5mwJBkpfo/?utm_source=ig_embed&utm_campaign=loading",
//     "https://www.instagram.com/reel/DN5mwJBkpfo/?utm_source=ig_embed&utm_campaign=loading",
//     "https://www.instagram.com/reel/DN5mwJBkpfo/?utm_source=ig_embed&utm_campaign=loading",
//     "https://www.instagram.com/reel/DN5mwJBkpfo/?utm_source=ig_embed&utm_campaign=loading",
//   ];

//   const posts = userPosts && userPosts.length ? userPosts : defaultPosts;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideRefs = useRef([]);
//   const trackRef = useRef(null);
//   const [loaded, setLoaded] = useState(Array(posts.length).fill(false));

//   // Load Instagram embed script ONCE
//   useEffect(() => {
//     const SCRIPT_ID = "instagram-embed-script";

//     function processEmbeds() {
//       // call Instagram embed API if available
//       try {
//         window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process();
//       } catch (e) {
//         // ignore
//       }
//     }

//     if (!document.getElementById(SCRIPT_ID)) {
//       const s = document.createElement("script");
//       s.id = SCRIPT_ID;
//       s.src = "https://www.instagram.com/embed.js";
//       s.async = true;
//       s.onload = () => {
//         processEmbeds();
//         waitForIframes(8); // check for loaded embeds
//       };
//       s.onerror = () => {
//         // script failed to load (maybe blocked) — we'll keep fallbacks visible
//         waitForIframes(0);
//       };
//       document.body.appendChild(s);
//     } else {
//       processEmbeds();
//       waitForIframes(8);
//     }

//     // Check each slide for an iframe (instagram processed it)
//     function waitForIframes(attemptsLeft) {
//       setTimeout(() => {
//         const newLoaded = [...loaded];
//         slideRefs.current.forEach((el, i) => {
//           if (!newLoaded[i] && el) {
//             // processed IG embed usually injects an iframe under the blockquote
//             const hasIframe = !!el.querySelector("iframe");
//             if (hasIframe) newLoaded[i] = true;
//           }
//         });
//         setLoaded(newLoaded);

//         if (attemptsLeft > 0 && newLoaded.some((v) => !v)) {
//           waitForIframes(attemptsLeft - 1);
//         }
//       }, 450);
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const prev = () => setCurrentIndex((p) => Math.max(0, p - 1));
//   const next = () => setCurrentIndex((p) => Math.min(posts.length - 1, p + 1));

//   // handle drag (swipe)
//   const handleDragEnd = (event, info) => {
//     const offset = info.offset.x;
//     const velocity = info.velocity.x;

//     if (offset < -80 || velocity < -500) {
//       // swipe left → next
//       next();
//     } else if (offset > 80 || velocity > 500) {
//       // swipe right → prev
//       prev();
//     } else {
//       // not enough — snap back (by setting same index)
//       setCurrentIndex((i) => i);
//     }
//   };

//   return (
//     <section className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
//       {/* Desktop: 4 in a row */}
//       <div className="hidden lg:flex justify-center gap-6 max-w-6xl mx-auto">
//         {posts.map((url, i) => (
//           <blockquote
//             key={i}
//             className="instagram-media flex-shrink-0"
//             data-instgrm-permalink={url}
//             data-instgrm-version="14"
//             style={{
//               background: "#FFF",
//               border: 0,
//               borderRadius: "10px",
//               boxShadow: "0 0 1px rgba(0,0,0,0.12), 0 6px 22px rgba(0,0,0,0.08)",
//               margin: "auto",
//               maxWidth: "280px",
//               width: "280px",
//             }}
//           />
//         ))}
//       </div>

//       {/* Mobile slider */}
//       <div className="lg:hidden w-full max-w-md mx-auto">
//         {/* arrows */}
//         <button
//           onClick={prev}
//           aria-label="previous"
//           className="absolute left-3 top-1/2 z-20 -translate-y-1/2 bg-amber-800 hover:bg-amber-900 text-white rounded-full p-3 shadow-lg"
//           style={{ transform: "translateY(-50%)" }}
//         >
//           ‹
//         </button>

//         <button
//           onClick={next}
//           aria-label="next"
//           className="absolute right-3 top-1/2 z-20 -translate-y-1/2 bg-amber-800 hover:bg-amber-900 text-white rounded-full p-3 shadow-lg"
//           style={{ transform: "translateY(-50%)" }}
//         >
//           ›
//         </button>

//         {/* viewport */}
//         <div className="overflow-hidden relative">
//           <motion.div
//             ref={trackRef}
//             className="flex"
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.2}
//             onDragEnd={handleDragEnd}
//             animate={{ x: `-${currentIndex * 100}%` }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             {posts.map((url, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (slideRefs.current[i] = el)}
//                 className="flex-shrink-0 w-full flex justify-center p-3 relative"
//                 style={{ minWidth: "100%" }}
//               >
//                 <blockquote
//                   className="instagram-media"
//                   data-instgrm-permalink={url}
//                   data-instgrm-version="14"
//                   style={{
//                     background: "#FFF",
//                     border: 0,
//                     borderRadius: "10px",
//                     boxShadow:
//                       "0 0 1px rgba(0,0,0,0.12), 0 6px 22px rgba(0,0,0,0.08)",
//                     margin: "auto",
//                     width: "100%",
//                     maxWidth: "380px",
//                   }}
//                 />

//                 {/* fallback / action overlay */}
//                 <a
//                   href={url}
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded"
//                 >
//                   Open on Instagram
//                 </a>

//                 {/* small loading indicator if embed not detected after a while */}
//                 {!loaded[i] && (
//                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                     <div className="bg-white/80 px-3 py-2 rounded shadow">Loading…</div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* dots */}
//         <div className="flex justify-center gap-2 mt-4">
//           {posts.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentIndex(i)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 i === currentIndex ? "bg-amber-800" : "bg-amber-300"
//               }`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function InstagramPosts({ posts: userPosts }) {
  const defaultPosts = [
    "https://www.instagram.com/reel/DM-sz4Yv008/?igsh=MXFpdXhqcGUwZzkxYg==",
    "https://www.instagram.com/reel/DNni0boyHi2/?igsh=MWFud3l6d3hjYTRyMA==",
    "https://www.instagram.com/reel/DLcvw-lyCQC/?igsh=ZmR3NTlkN2M2aHE5",
    "https://www.instagram.com/reel/DNLJAUJyKCn/?igsh=MTBydWw5YmFueGJqbA==",
  ];

  const posts = userPosts && userPosts.length ? userPosts : defaultPosts;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]);
  const trackRef = useRef(null);
  const [loaded, setLoaded] = useState(Array(posts.length).fill(false));

  useEffect(() => {
    const SCRIPT_ID = "instagram-embed-script";

    function processEmbeds() {
      try {
        window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process();
      } catch (e) {}
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      s.onload = () => {
        processEmbeds();
        waitForIframes(8);
      };
      s.onerror = () => waitForIframes(0);
      document.body.appendChild(s);
    } else {
      processEmbeds();
      waitForIframes(8);
    }

    function waitForIframes(attemptsLeft) {
      setTimeout(() => {
        const newLoaded = [...loaded];
        slideRefs.current.forEach((el, i) => {
          if (!newLoaded[i] && el) {
            const hasIframe = !!el.querySelector("iframe");
            if (hasIframe) newLoaded[i] = true;
          }
        });
        setLoaded(newLoaded);
        if (attemptsLeft > 0 && newLoaded.some((v) => !v)) {
          waitForIframes(attemptsLeft - 1);
        }
      }, 450);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = () => setCurrentIndex((p) => Math.max(0, p - 1));
  const next = () => setCurrentIndex((p) => Math.min(posts.length - 1, p + 1));

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -80 || velocity < -500) next();
    else if (offset > 80 || velocity > 500) prev();
    else setCurrentIndex((i) => i);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      {/* Desktop: 4 in a row */}
      <div className="hidden lg:flex justify-center gap-6 max-w-6xl mx-auto">
        {posts.map((url, i) => (
          <blockquote
            key={i}
            className="instagram-media flex-shrink-0"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "10px",
              boxShadow: "0 0 1px rgba(0,0,0,0.12), 0 6px 22px rgba(0,0,0,0.08)",
              margin: "auto",
              maxWidth: "280px",
              width: "280px",
            }}
          />
        ))}
      </div>

      {/* Mobile slider */}
      <div className="lg:hidden w-full max-w-md mx-auto relative">
        {/* arrows */}
        <button
          onClick={prev}
          aria-label="previous"
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 border-2 border-[#542018] text-[#542018] bg-transparent rounded-full p-3 shadow-md transition-colors hover:bg-[#542018] hover:text-white"
          style={{ transform: "translateY(-50%)" }}
        >
          ‹
        </button>

        <button
          onClick={next}
          aria-label="next"
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 border-2 border-[#542018] text-[#542018] bg-transparent rounded-full p-3 shadow-md transition-colors hover:bg-[#542018] hover:text-white"
          style={{ transform: "translateY(-50%)" }}
        >
          ›
        </button>

        {/* viewport */}
        <div className="overflow-hidden relative">
          <motion.div
            ref={trackRef}
            className="flex"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {posts.map((url, i) => (
              <div
                key={i}
                ref={(el) => (slideRefs.current[i] = el)}
                className="flex-shrink-0 w-full flex justify-center p-3 relative"
                style={{ minWidth: "100%" }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "10px",
                    boxShadow:
                      "0 0 1px rgba(0,0,0,0.12), 0 6px 22px rgba(0,0,0,0.08)",
                    margin: "auto",
                    width: "100%",
                    maxWidth: "380px",
                  }}
                />
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded"
                >
                  Open on Instagram
                </a>
                {!loaded[i] && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/80 px-3 py-2 rounded shadow">
                      Loading…
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-4">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentIndex ? "bg-[#542018]" : "bg-[#ebcc78]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

