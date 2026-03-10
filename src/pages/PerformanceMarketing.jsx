import React from 'react'
import PerCom from '../components/services/perfamancemarketing/SeoCom'
import SeoMarquee from '../components/services/perfamancemarketing/SeoMarquee'
import OurServiceSeo from '../components/services/perfamancemarketing/OurServiceSeo'
import TurningStrategy from '../components/services/perfamancemarketing/TurningStrategy'
import Category from '../components/services/perfamancemarketing/Category'
import WhyChoose from '../components/services/perfamancemarketing/WhyChoose'
import SeoFaq from '../components/services/perfamancemarketing/SeoFaq'
import ContactUs from '../components/ContactUs'
import FooterSection from '../components/FooterSection'
function PerformanceMarketing() {
  return (
    <div>
      <PerCom/>
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

export default PerformanceMarketing
