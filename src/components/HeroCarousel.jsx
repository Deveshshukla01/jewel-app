import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const slides = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg'
]

export default function HeroCarousel(){
  return (
    <div className="container mx-auto px-4 py-6">
      <Swiper spaceBetween={10} slidesPerView={1} loop autoplay>
        {slides.map((s, idx)=> (
          <SwiperSlide key={idx}>
            <div className="h-64 md:h-96 rounded overflow-hidden bg-gray-200 flex items-center justify-center">
              <img src={s} alt={`slide-${idx}`} className="object-cover w-full h-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}