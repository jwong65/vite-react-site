import React from 'react'
import publisherImage from "../assets/publisher_photo1.png"
import publisherImage1 from "../assets/publisher_photo2.png"
import publisherImage2 from "../assets/publisher_photo3.png"
import publisherImage3 from "../assets/publisher_photo4.png"

import { Button } from 'antd'
import {LineChartOutlined, TrophyOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'

import magniteLogo from "../assets/partnericons/magniteLogo.svg"
import sovrnLogo from "../assets/partnericons/sovrn-logo.svg"
import inMobiLogo from "../assets/partnericons/InMobi-Logo.svg"
import yieldmoLogo from "../assets/partnericons/yieldmo.svg"
import epsilonLogo from "../assets/partnericons/Epsilon-Logo 1.svg"
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
          <div className='container-3-header-publisher'>Monetization</div>
          <div className='container-3-subheader-publisher'>Solutions</div>
          <div className='container-3-text-publisher'>
            Monetize every impression with Header Bidding, OpenRTB, and PreBid integrations that ensure fair competition and maximum yield. Our real-time bidding engine connects you with top DSPs, SSPS, and direct advertisers, unlocking premium demand at top dollar.
          </div>
        </div>
      </div>
      <div className='publisher-container-3-wrapper'>
        <div className='publisher-content-3'>
          <div className='left-content'>
            <div className='text-box'>
              <LineChartOutlined className='feature-icon' />
              <div className='text-content'>
                      <h2 className='tab-heading'>Revenue optimization</h2>
                      <p>
                      More than just an ad server—our proprietary traffic-shaping algorithms fine-tune every auction to drive maximum efficiency and return. 
                      </p>
                      <p>
                      With AI-powered post-bid analysis, we continually optimize yield strategies to extract the highest value from your traffic.
                      </p>
              </div>
            </div>
          </div>
          <div className='right-content'>
           <img src={publisherImage2} alt='publisherImage2' className='publisher-image' />
          </div>
        </div>
      </div>
      <div className='publisher-container-3-wrapper'>
        <div className='publisher-content-3'>
          <div className='left-content'>
            <img src={publisherImage3} alt='publisherImage3' className='publisher-image' />
          </div>
          <div className='right-content'>
            <div className='text-box'>
                <TrophyOutlined className='feature-icon' />
                <div className='text-content'>
                        <h2 className='tab-heading'>premium ad formats</h2>
                        <p>
                          Engage users without compromising experience. 
                        </p>
                        <p>
                        Choose from high-performing ad formats designed for maximum engagement and revenue potential:
                        </p>
                        <ul className='content-list'>
                          <li>Interstitials (Display/Video)</li>
                          <li>Rewarded Ads (Display/Video)</li>
                          <li>Banners & MREC</li>
                          <li>Native Ads</li>
                        </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='partner-wrapper'>
        <div className='bottom-content'>
          <div className='partners-grid'>
            <img src={magniteLogo} alt='Magnite' className='partner-logo' />
            <img src={sovrnLogo} alt='Sovrn' className='partner-logo' />
            <img src={inMobiLogo} alt='InMobi' className='partner-logo' />
            <img src={yieldmoLogo} alt='Yieldmo' className='partner-logo' />
            <img src={epsilonLogo} alt='Epislon' className='partner-logo' />                                
          </div>
        </div>
      </div>
    </div>
  )
}
