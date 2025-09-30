
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import PriceBanner from "../components/PriceBanner";
import HeroCarousel from "../components/HeroCarousel";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import TrustBadges from "../components/Featured";
import CareGuides from "../components/PDF";
import About from "../components/AboutUs";
import FloatingWhatsApp from "../components/Whatsapp";
import InstagramPosts from "../components/Instagram";
import VideoWithPopup from "../components/Carousel-Mid";

export default function Home() {
  const location = useLocation();

  // ✅ Auto-scroll to section when hash is present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay ensures components are rendered
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <PriceBanner />
      <HeroCarousel />

      {/* 🔑 Attach matching ids for quick links */}
      <div id="aboutus">
        <About />
      </div>

      <TrustBadges />

      <div id="categories">
        <Categories />
      </div>

      <VideoWithPopup />

      <div id="featured">
        <FeaturedProducts />
      </div>

      <CareGuides />
      <InstagramPosts />
      <Reviews />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
