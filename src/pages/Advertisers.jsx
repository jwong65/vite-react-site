import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import "./advertisers.css"
import advertiserPhoto from "../assets/advertiser_photo1.png"
import advertiserPhoto2 from "../assets/advertiser_photo2.png"

export default function Advertisers() {
  return (
    <div className='advertiser-page-wrapper'>
      <div className='advertiser-hero-section-wrapper'>
        <div className='advertiser-hero-container'>
          <img src={advertiserPhoto} className='background-advertiser'/>
          <img src= {advertiserPhoto2} className='advertiser-floating-overlay' />
        </div>
        <div className='advertiser-text-overlay'>
          <h1 className='advertiser-main-heading'>
            Advertiser Solutions 
          </h1>
          <h3 className='advertiser-sub-heading'>
            Lightning-Fast <br/>
            Reach. <br />
            Precision Targeting.
          </h3>
          <h3 className='advertiser-sub-heading2'>
            Reach premium audiences with full transparency and precision. Thunder Monetize connects you to high-quality, brand-safe inventory while leveraging advanced optimization and fraud prevention tools to ensure every ad dollar drives real results.
          </h3>
          <Link to='/contact'>
            < Button type='primary'>Maximize Your Impact</Button>
          </Link>
        </div>
      </div>
      Advertisers
    </div>
  )
}
