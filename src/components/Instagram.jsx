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
  disabled={currentIndex === 0}
  className="absolute left-1 top-1/2 z-20 -translate-y-1/2 
             text-black rounded-full w-10 h-10 flex 
             items-center justify-center text-2xl
             disabled:opacity-40"
>
  ‹
</button>

<button
  onClick={next}
  aria-label="next"
  disabled={currentIndex === posts.length - 1}
  className="absolute right-1 top-1/2 z-20 -translate-y-1/2 
             text-black rounded-full w-10 h-10 flex 
             items-center justify-center text-2xl
             disabled:opacity-40"
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

