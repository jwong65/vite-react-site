import React from 'react'
import './privacy.css'

export default function Privacy() {
  return (
      <div className='page-wrapper'>
        <div className='privacy-box'>
          <div className='privacy-header'>Privacy Policy</div>
          <div className='privacy-subheader'>Last Updated: September 30, 2024</div>
        </div>
        <div className='privacy-text'>
          <div className='text-box-privacy'>
            This policy explains how Thunder Monetize, Inc. (“Thunder", "we" or “us”) collects, uses and discloses information about you when you interact with Digital Media Properties (defined below) that use our advertising technology platforms and related services to deliver you ads (collectively, the “Services”).
            This privacy policy does not govern (i) the collection and use of information about visitors to our website, or (ii) information collected in the course of our sales and marketing activities. Our privacy practices as to that information can be found <a href="https://www.magnite.com/legal/magnite-website-privacy-policy/" target="_blank" rel="noopener noreferrer" >here</a>.
            This policy also does not govern the collection, use and disclosure of information by our clients through their Digital Media Properties, the activities of other third parties we may work with, or any activities where we act as a service provider or processor to our clients rather than a data controller. 
            Those practices are governed by our clients' own privacy policies.
          </div>
          <div className='privacy-text-header'>About Us</div>
          <div className='text-box-privacy'>
            Thunder Monetize offers Services that connect buyers of advertising inventory (which we refer to as advertisers) with sellers of advertising inventory (which we refer to as publishers), providing such buyers with the opportunity to display an advertisement on a seller's Digital Media Property.
            In this policy, we refer to our buyers and sellers collectively as “Clients”.
            Our platform is used to deliver digital advertising inventory on websites and applications across Internet-connected devices and platforms, including mobile devices, computers and internet-connected TVs (which we collectively refer to as “Digital Media Properties”).
          </div>
          <div className='privacy-text-header'>How We Collect User Information</div>
          <div className='text-box-privacy'>
            We (and our service providers) use different technologies (collectively “Tracking Technologies”), including cookies and other similar technologies to collect information automatically from your device when you visit a Digital Media Property that uses our technology. 
            When doing so, we collect certain information about you and your device (collectively, “User Information”). User Information does not include information that directly identifies an individual, such as name, address, phone number, or email address. 
            However, the User Information we collect is considered “personal data” or “personal information” under applicable privacy and data protection laws.
            In particular, we collect information such as your IP address, cookie data, and other device identifiers, and may also assign new identifiers to your device or browser based on this data and other device-related information we collect as described in more detail <a href='https://www.magnite.com/legal/advertising-platform-privacy-policy/#table-1' target="_blank" rel="noopener noreferrer">here</a>. 
            These identifiers help us to recognize a particular device without knowing the identity of the user of that device.
            This helps us, our Clients, and our partners (such as third party advertising platforms) select appropriate advertisements to display to you.
          </div>
        </div>
      </div>
  )
}
