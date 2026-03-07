import React from 'react'
import Header from '../components/WorkComponents/Header'
import CaseStudies from '../components/WorkComponents/CaseStudies'
import MoreFeaturedWork from '../components/WorkComponents/MoreFeaturedWork'
import Clients from '../components/Clients'
import Trending from '../components/Trending'
import BreakingNews from '../components/BreakingNews'
import ContactUs from '../components/ContactUs'
import FooterSection from '../components/FooterSection';

function Work() {
  return (
    <div>
      <Header/>
      <CaseStudies/>
      <MoreFeaturedWork/>
      <Clients/>
     <div className='mt-20 bg-[#fff9f6]'>
       <Trending/>
       
     </div>
     <BreakingNews/>
     <ContactUs/>
     <FooterSection/>
    </div>
  )
}

export default Work
