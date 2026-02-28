import React from 'react'
import WeareMorcamore from '../components/AboutUsComponents/WeareMorcamore'
import Deliver from '../components/AboutUsComponents/Deliver'
import AwardAndCertification from '../components/AboutUsComponents/AwardAndCertification'
import SeniorTeam from '../components/AboutUsComponents/SeniorTeam'
import Location from '../components/AboutUsComponents/Location'
import Clients from '../components/Clients'
import Services from '../components/AboutUsComponents/Services'
import VisitInsights from '../components/VisitInsights'

import Trending from '../components/Trending';
import FeaturedSection from '../components/FeaturedSection';
import BreakingNews from '../components/BreakingNews';
import FooterSection from '../components/FooterSection';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';


function About() {
  return (
    <div className=' bg-[#000000] text-white'>
   <WeareMorcamore/>
      <Deliver/>
      <AwardAndCertification/>
      <SeniorTeam/>
      <Location/>
      <Clients/>
      <Services/>
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

export default About
