import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import aboutImage from "../assets/about_photo1.png"
import aboutImage1 from "../assets/about_photo2.png"
import "./about.css"

export default function About() {
  return (
    <div className='about-page-wrapper'>
      <div className='about-hero-section-wrapper'>
        <div className='about-container'>
          <img src={aboutImage} className='about-background-image' />
          <div className='about-text-overlay'>
            <h1 className='about-main-heading'>About Thunder Monetize</h1>
            <h3 className='about-sub-heading'>
              Pondering The Future <br/> 
              of Digital <br/>
              Advertising
            </h3>
            <h3 className='about-sub-heading2'>
              At Thunder Monetize, we move fast, think bold, and deliver results. Built for publishers and advertisers who refuse to settle, we provide high-performance monetization solutions that maximize revenue, transparency, and efficiency at every step.
            </h3>
            <Link to='/contact'>
              <Button type='primary'>Maximize Your Impact</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='about-content-section-wrapper'>
        <div className='about-content-section'>
          <div className='about-content-header-container'>
            <div className='content-header'>The Thunder Monetize</div>
            <div className='content-sub-header'>Advantage</div>
          </div>
          <div className='about-left-content'>

          </div>
          <div className='about-center-graphic'>
            <img src={aboutImage1} alt="Center Graphic" />
          </div>
          <div className='about-right-content'>

          </div>
        </div>
      </div>
      About
    </div>
  )
}
