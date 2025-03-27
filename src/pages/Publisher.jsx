import React from 'react'
import publisherImage from "../assets/publisher_photo1.png"
import publisherImage1 from "../assets/publisher_photo2.png"

import { Button } from 'antd'
import { Link } from 'react-router-dom'

import "./publisher.css"

export default function Publisher() {
  return (
    <div className='publisher-page-wrapper'>
      <div className = 'publisher-hero-section-wrapper'>
        <div className='publisher-hero-container'>
          <img src={publisherImage} className='background-publisher' />
          <img src={publisherImage1} className='publisher-floating-overlay' />
          <div className='publisher-text-overlay'>
            <h1 className='publisher-main-heading'>
              Publisher Solutions
            </h1>
            <h3 className='publisher-sub-heading'>
              Maximize Revenue. <br/>
              Minimize Hassle.
            </h3>
            <h3 className='publisher-sub-heading2'>
            Your inventory deserves top-tier demand and real-time optimizations that work as fast as your users.
            Thunder Monetize delivers powerful monetization solutions, AI-driven yield optimization, and premium ad formats to maximize every impression—so you earn more with zero wasted potential.
            </h3>
            <Link to='/contact'>
              < Button type='primary'>Supercharge Your Growth Today</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='publisher-container-2-wrapper'>
        <div className='publisher-container-2'>
          <img src='/thunder_monetize_logo.svg' alt='Company Logo' className='company-logo'/>
          <div className='publisher-text-overlay-2'>
            We're not just another ad exchange—we're your <span className='underline-text'>profitability partner</span>.
            With cutting-edge traffic shaping, seamless integrations, and premium advertiser demand, we <span className='highlight-text'>ensure higher fill rates</span>, <span className='highlight-text'>increased eCPMs</span>, and <span className='highlight-text'>smarter monetization at scale</span>.
          </div>
        </div>
      </div>
      <div className='publisher-container-3-wrapper'>
        <div className='publisher-container-3'>
          <div className='container-3-header'>Monetization</div>
          <div className='container-3-subheader'>Solutions</div>
          <div className='container-3-text'>
            Monetize every impression with Header Bidding, OpenRTB, and PreBid integrations that ensure fair competition and maximum yield. 
            Our real-time bidding engine connects you with top DSPs, SSPS, and direct advertisers, unlocking premium demand at top dollar.
          </div>
          <div className=''></div>
          <div className='left-content'>

          </div>
          <div className='right-content'></div>

        </div>
      </div>
      Publisher
    </div>
  )
}
