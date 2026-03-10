import React from 'react'
import SeoCom from '../components/services/emailmarketing/SeoCom'
import SeoMarquee from '../components/services/emailmarketing/SeoMarquee'
import OurServiceSeo from '../components/services/emailmarketing/OurServiceSeo'
import TurningStrategy from '../components/services/emailmarketing/TurningStrategy'
import Category from '../components/services/emailmarketing/Category'
import WhyChoose from "../components/services/emailmarketing/WhyChoose"
import SeoFaq from "../components/services/emailmarketing/SeoFaq"
import ContactUs from '../components/ContactUs'
import FooterSection from "../components/FooterSection"

function EmailMarketing() {
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

export default EmailMarketing
