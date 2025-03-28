import React from 'react'

import "./advertisers.css"
import advertiserPhoto from "../assets/advertiser_photo1.png"
import advertiserPhoto2 from "../assets/advertiser_photo2.png"

export default function Advertisers() {
  return (
    <div className='advertiser-page-wrapper'>
      <div className='advertiser-hero-section-wrapper'>
        <div className='advertiser-hero-container'></div>
        <img src={advertiserPhoto} className='background-advertiser'/>
        <img src= {advertiserPhoto2} className='advertiser-floating-overlay' />
      </div>
      Advertisers
    </div>
  )
}
