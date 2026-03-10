import React from 'react'
import SeoCom from '../components/services/influencermarketing/SeoCom'
import SeoMarquee from '../components/services/influencermarketing/SeoMarquee'
import OurServiceSeo from '../components/services/influencermarketing/OurServiceSeo'
import TurningStrategy from '../components/services/influencermarketing/TurningStrategy'
import Category from '../components/services/influencermarketing/Category'
import WhyChoose from '../components/services/influencermarketing/WhyChoose'
import SeoFaq from '../components/services/influencermarketing/SeoFaq'
import ContactUs from '../components/ContactUs'
import FooterSection from '../components/FooterSection'
function InfluencerMarketing() {
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

export default InfluencerMarketing
