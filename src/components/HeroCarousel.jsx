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
            <div className="h-64 md:h-96 rounded-2xl overflow-hidden bg-cream-200 flex items-center justify-center elegant-shadow-lg relative">
              <img src={s} alt={`slide-${idx}`} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Exquisite Jewelry</h2>
                <p className="text-lg opacity-90">Crafted with love and precision</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}