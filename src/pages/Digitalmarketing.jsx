import React from 'react'
import SeoCom from '../components/services/digitalmarketing/SeoCom'
import SeoMarquee from '../components/services/digitalmarketing/SeoMarquee'
import OurServiceSeo from '../components/services/digitalmarketing/OurServiceSeo'
import TurningStrategy from '../components/services/digitalmarketing/TurningStrategy'
import Category from '../components/services/digitalmarketing/Category'
import WhyChoose from '../components/services/digitalmarketing/WhyChoose'
import SeoFaq from '../components/services/digitalmarketing/SeoFaq'
import ContactUs from '../components/ContactUs'
import FooterSection from '../components/FooterSection'

function Digitalmarketing() {
  return (
    <div className='bg-black '>
       
      <SeoCom/>
      <SeoMarquee/>
      <OurServiceSeo/>
      <TurningStrategy/>
      <Category/>
      <WhyChoose/>
      <SeoFaq/>
      <ContactUs/>
      <FooterSection/>
    </div>
  )
}

export default Digitalmarketing
