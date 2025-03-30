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
      </div>
      <div className='advertiser-container-2-wrapper'>
        <div className='advertiser-container-2'>
          <img src='/thunder_monetize_logo.svg' alt='company logo' className='company-logo' />
          <div className='advertiser-text-overlay-2'>
            Tap into <span className='underline-text'>premium</span>, <span className='underline-text'>high-quality inventory</span> with unmatched scale across key global markets. Our proprietary solutions ensure <span className='highlight-text'>seamless measurement</span>, <span className='highlight-text'>optimized bidding</span>, and <span className='highlight-text'>reliable tracking</span>—so your campaigns <span className='underline-text'>deliver results</span>, not just impressions.
          </div>
        </div>
      </div>
      Advertisers
    </div>
  )
}
