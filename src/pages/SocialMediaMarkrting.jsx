import React from 'react'
import SeoCom from '../components/services/socialmediamarketing/SeoCom'
import SeoMarquee from '../components/services/socialmediamarketing/SeoMarquee'
import OurServiceSeo from '../components/services/socialmediamarketing/OurServiceSeo'
import TurningStrategy from '../components/services/socialmediamarketing/TurningStrategy'
import Category from '../components/services/socialmediamarketing/Category'
import WhyChoose from '../components/services/socialmediamarketing/WhyChoose'
import SeoFaq from '../components/services/socialmediamarketing/SeoFaq'
import ContactUs from '../components/ContactUs'
import FooterSection from '../components/FooterSection'
export default function SocialMediaMarkrting() {
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
