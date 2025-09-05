import React, { useEffect, useState } from "react";
import { databases, DATABASE_ID, COLLECTIONS } from "../appwrite/config";

export default function PriceBanner() {
  const [text, setText] = useState("Gold Price: ₹1000 | Silver Price: ₹650");

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

      {/* marquee track */}
      <div className="relative z-10 flex w-max animate-marquee">
        <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
          {text}
        </span>
        <span className="text-[#542018] text-sm sm:text-lg font-semibold px-8">
          {text}
        </span>
      </div>
    </div>
  );
}
