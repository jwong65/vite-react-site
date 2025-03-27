import React from 'react'
import aboutImage from "../assets/about_photo1.png"
export default function About() {
  return (
    <div className='about-page-wrapper'>
      <div className='about-hero-section-wrapper'>
        <div className='about-hero-container'>
          <img src={aboutImage} className='about-background-image' />
        </div>
      </div>
      About
    </div>
  )
}
