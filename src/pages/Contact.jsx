import React from 'react'
import YourVision from '../components/ContactComponents/YourVision'
import ContactUs from '../components/ContactUs'
import Location1 from '../components/AboutUsComponents/Location1'

import FooterSection from '../components/FooterSection';

function Contact() {
  return (
    <div className='bg-white'>
    <YourVision/>
    <ContactUs/>
    <Location1/>
    <FooterSection/>
    </div>
  )
}

export default Contact
