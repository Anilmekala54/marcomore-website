import React from 'react'

import SeoCom from '../components/services/affiliatemarketing/SeoCom'
import SeoMarquee from '../components/services/affiliatemarketing/SeoMarquee'
import OurServiceSeo from '../components/services/affiliatemarketing/TurningStrategy'
import TurningStrategy from '../components/services/affiliatemarketing/TurningStrategy'
import Category from '../components/services/affiliatemarketing/Category'
import WhyChoose from '../components/services/affiliatemarketing/WhyChoose'
import SeoFaq from '../components/services/affiliatemarketing/SeoFaq'
import ContactUs from '../components/ContactUs'
import FooterSection from '../components/FooterSection'

function Affiliatemarketing() {
  return (
    <div>
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

export default Affiliatemarketing
