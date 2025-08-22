import React from 'react'
import Navbar from '../components/Navbar'
import PriceBanner from '../components/PriceBanner'
import HeroCarousel from '../components/HeroCarousel'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import TrustBadges from '../components/Featured'
import CareGuides from '../components/PDF'
import Carousel from '../components/Carousel-Mid'
import About from '../components/AboutUs'
import FloatingWhatsApp from '../components/Whatsapp'


export default function Home(){
  return (
    <div>
      <Navbar />

      <PriceBanner />
      <HeroCarousel />
      <About/>
      <TrustBadges/>
      <Categories />
      <Carousel/>
      <FeaturedProducts />
      <CareGuides/>
      <Reviews />
      <FloatingWhatsApp/>
      <Footer />
    </div>
  )
}