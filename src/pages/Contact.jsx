import React from 'react'
import contactImage from "../assets/contact_photo1.png"

import "./contact.css"

export default function Contact() {
  return (
    <div className='contact-page-wrapper'>
      <div className='contact-container'>
        <img src={contactImage} className='contact-background-image' />
        <div className='contact-text-overlay'>
          <h1 className='contact-main-heading'>
            Supercharge Your Growth
          </h1>
          <h3 className='contact-sub-heading'>
            Let's Talk
          </h3>
          <h3 className='contact-sub-heading2'>
            Whether you're a publisher looking to maximize revenue or an advertiser seeking premium inventory, Thunder Monetize is here to deliver results. Reach out and let’s make every millisecond count.
          </h3>
        </div>
      </div>
      Contact
    </div>
  )
}
