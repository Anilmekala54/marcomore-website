import React from 'react'
import AwardWinning from "../components/AwardWinning";
import MarcamorCreatives from "../components/MarcamorCreatives";
import Clients from '../components/Clients';
import FeaturedWork from '../components/FeaturedWork';
import Industries from '../components/Industries';
import Fqa from '../components/Fqa';
import VisitInsights from '../components/VisitInsights';

import Trending from '../components/Trending';
import FeaturedSection from '../components/FeaturedSection';
import BreakingNews from '../components/BreakingNews';
import FooterSection from '../components/FooterSection';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
function HeroSection() {
  return (
    <div>
      <AwardWinning/>
      <MarcamorCreatives/>
      <Clients/>
      <FeaturedWork/>
      <Industries/>
      <Fqa/>
      <VisitInsights/>
      
      <Trending/>
      <FeaturedSection/>
      <BreakingNews/>
      <Testimonials/>
      <ContactUs/>
      <FooterSection/>
      
    </div>
  )
}

export default HeroSection
