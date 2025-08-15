import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

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
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet hero-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active hero-bullet-active'
        }}
        modules={[Autoplay, Pagination]}
        className="hero-swiper"
      >
        {slides.map((slide, idx)=> (
          <SwiperSlide key={idx}>
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <img 
                src={slide.image} 
                alt={`slide-${idx}`} 
                className="object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-purple-800/50 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl text-white">
                    <div className="text-sm font-medium tracking-wider text-cream-200 mb-2">
                      {slide.subtitle}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-cream-100 leading-relaxed">
                      {slide.description}
                    </p>
                    <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-cream-100 transition-all duration-300 transform hover:scale-105 elegant-shadow-lg">
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