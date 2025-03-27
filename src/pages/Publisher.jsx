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
      Publisher
    </div>
  )
}
