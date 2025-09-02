import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const JewelryHeroCarousel = () => {
  const slides = [
    "Carousel/1.jpg",
    "Carousel/2.jpg",
  ];

  return (
    <div className="w-full h-full md:h-[80vh] relative">

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Jewelry ${idx + 1}`}
              className="w-full h-auto md:h-full object-contain md:object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-6"></div>
      </Swiper>

      <style>{`
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
