import React from 'react'
import Navbar from '../components/Navbar'
import PriceBanner from '../components/PriceBanner'
import HeroCarousel from '../components/HeroCarousel'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Navbar />
      <PriceBanner />
      <HeroCarousel />
      <Categories />
      <FeaturedProducts />
      <Reviews />
      <Footer />
    </div>
  )
}