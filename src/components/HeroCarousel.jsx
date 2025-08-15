import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Exquisite Brilliance',
    subtitle: 'NEW COLLECTION',
    description: 'Discover our latest collection of handcrafted jewelry',
    buttonText: 'EXPLORE NOW'
  },
  {
    image: 'https://images.pexels.com/photos/1191677/pexels-photo-1191677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Timeless Elegance',
    subtitle: 'PREMIUM DESIGNS',
    description: 'Crafted with precision and adorned with finest gems',
    buttonText: 'SHOP NOW'
  },
  {
    image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Diamond Collection',
    subtitle: 'LUXURY REDEFINED',
    description: 'Experience the brilliance of our diamond jewelry',
    buttonText: 'VIEW COLLECTION'
  }
]

export default function HeroCarousel(){
  return (
    <div className="relative">
      <Swiper 
        spaceBetween={0} 
        slidesPerView={1} 
        loop={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet hero-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active hero-bullet-active'
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="hero-swiper"
      >
        {slides.map((slide, idx)=> (
          <SwiperSlide key={idx}>
            <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
              <img 
                src={slide.image} 
                alt={`slide-${idx}`} 
                className="object-cover w-full h-full scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl text-white">
                    <div className="text-sm font-semibold tracking-[0.2em] text-purple-300 mb-4 uppercase">
                      {slide.subtitle}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed font-light">
                      {slide.description}
                    </p>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}