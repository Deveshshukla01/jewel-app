import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Google logo

const data = [
  {
    name: "Hardayal singh",
    text: "The best jewellers in town.Beautiful exquisite jewellery at reasonable prices. The owners and staff are very professional, courteous and polite in their conduct. The ambience is very pleasant.Great value for money.",
    rating: 5,
    image: "/avatars/1.png",
  },
  {
    name: "Nandita Sachdeva",
    text: "This is the most trusted jewellery store. Uncle and the entire staff are extremely warm, kind, and knowledgeable. I’ve known them all my life, and my family has been buying jewellery from them for over 30 years. Truly grateful for their service. Highly recommend them!",
    rating: 5,
    image: "/avatars/2.png",
  },
  {
    name: "Aditya Singh",
    text: "Love the family vibe here. Sethi Jewellers is run by a close-knit team and they treat you the same way which is like one of their own. Thoughtful suggestions, clean workmanship, and quick service. Easiest five stars!",
    rating: 5,
    image: "/avatars/3.png",
  },
  {
    name: "Ishant sharma",
    text: "The designs are elegant and unique, and the staff were polite, patient, and really helpful. The store has a warm, welcoming vibe and you can see the care in both the craftsmanship and service. Highly recommend!",
    rating: 5,
    image: "/avatars/ishant.png",
  },
  {
    name: "Bir transport co.",
    text: "With many years of experience ,they have earned a strong reputation for their long standing trustworthiness, innovative designs ,fair dealing/transparency and exceptional customer service.",
    rating: 5,
    image: "/avatars/bir.png",
  },
  {
    name: "Abhinav Sharda",
    text: "I love their Silver Jewllery collection. Great designs, super service and the rates are also reasonable. I noticed their gold rate was also much lesser than other jewellers, say 3-4 percent lesser. Must visit.",
    rating: 5,
    image: "/avatars/abh.png",
  },
  {
    name: "Girish Attri",
    text: "Highly recommend this upstanding family business. They offer very competitive rates and have curated a wonderful collection. On top of that, it's always a pleasure to interact with the Sethis",
    rating: 5,
    image: "/avatars/girish.png",
  },
  {
    name: "Kiran Bansal",
    text: "It's always a wonderful experience shopping here. They've been my go-to jewellers since 35 years now and I wholeheartedly trust them with the quality and durability of their designs",
    rating: 5,
    image: "/avatars/kiran.png",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => {
    if (index > 0) setIndex((prevIndex) => prevIndex - itemsPerPage);
  };

  const next = () => {
    if (index + itemsPerPage < data.length)
      setIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  return (
    <div className="relative py-16 sm:py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 font-serif">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl mb-3 sm:mb-4 font-bold text-[#542018] tracking-wide">
            Customer Reviews
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className={`grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center transition-all duration-700`}
          >
            {data.slice(index, index + itemsPerPage).map((r, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md border border-gray-200 w-72 sm:w-auto flex flex-col items-center text-center justify-between transition hover:shadow-lg"
              >
                {/* Top section */}
                <div className="flex flex-col items-center">
                  {/* Profile Image */}
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4"
                  />

                  {/* Rating */}
                  <div className="flex mb-2">
                    {Array.from({ length: r.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Google Logo */}
                  <div className="mb-3">
                    <FcGoogle className="w-6 h-6" />
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-gray-700 italic">
                    "{r.text}"
                  </p>
                </div>

                {/* Footer (locked name) */}
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg mt-6">
                  {r.name}
                </h4>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-10 sm:mt-12">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`p-3 sm:p-4 rounded-full border-2 transition-all duration-500 shadow-md ${
                index === 0
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-[#542018] text-[#542018] hover:bg-[#542018] hover:text-white"
              }`}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={next}
              disabled={index + itemsPerPage >= data.length}
              className={`p-3 sm:p-4 rounded-full border-2 transition-all duration-500 shadow-md ${
                index + itemsPerPage >= data.length
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-[#542018] text-[#542018] hover:bg-[#542018] hover:text-white"
              }`}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
