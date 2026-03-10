import React from 'react'
import SeoCom from '../components/services/Seo/SeoCom'
import SeoMarquee from '../components/services/Seo/SeoMarquee'
import OurServiceSeo from '../components/services//Seo/OurServiceSeo'
import TurningStrategy from '../components/services/Seo/TurningStrategy'
import Category from '../components/services/Seo/Category'
import WhyChoose from '../components/services/Seo/WhyChoose'
import SeoFaq from '../components/services/Seo/SeoFaq'
import ContactUs from '../components/ContactUs'
import FooterSection from '../components/FooterSection'
function Seo() {
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

export default Seo
