import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import "./advertisers.css"
import advertiserPhoto from "../assets/advertiser_photo1.png"
import advertiserPhoto2 from "../assets/advertiser_photo2.png"
import advertiserPhoto3 from "../assets/advertiser_photo3.png"
import advertiserPhoto4 from "../assets/advertiser_photo4.png"
import advertiserPhoto5 from "../assets/advertiser_photo5.png"

import {StarOutlined, StopOutlined, AreaChartOutlined} from '@ant-design/icons'

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
      <div className='advertiser-container-3-wrapper'>
        <div className='advertiser-container-3'>
          <div className='container-3-header'>Advertising</div>
          <div className='container-3-subheader'>Solutions</div>
          <div className='container-3-text'>
            Unlock access to high-quality, transparent inventory that drives real results. Thunder Monetize connects you with top-tier supply, advanced targeting, and cutting-edge fraud prevention to ensure every ad placement is optimized for performance, brand safety, and measurable success.
          </div>
        </div>
      </div>
      <div className='advertiser-container-3-wrapper'>
        <div className='advertiser-content-3'>
          <div className='left-content-advertiser'>
            <div className='advertiser-text-content'>
                <StarOutlined className='feature-icon'/>
                <div className='text-container'>
                  <div className='container-3-tab-heading'>Inventory Quality & Transparency</div>
                  <p>We're committed to 100% transparency and top-tier compliance. Every impression you buy is fully verified, compliant with OMSDK (viewability measurement), app-ads.txt, and sellers.json, and sourced exclusively from the best SDK vendors in the industry.</p>
                </div>
            </div>
          </div>
          <div className='right-content-advertiser'>
              <img src={advertiserPhoto3} alt='Advertiser Photo' className='advertiser-content-image'/>
          </div>
        </div>
      </div>
      <div className='advertiser-container-3-wrapper'>
        <div className='advertiser-content-3'>
          <div className='left-content-advertiser'>
            <img src={advertiserPhoto4} alt='Advertiser Photo' className='advertiser-content-image'/>
          </div>
          <div className='right-content-advertiser'>
            <div className='advertiser-text-content'>
                <StopOutlined className='feature-icon'/>
                <div className='text-container'>
                  <div className='container-3-tab-heading'>Fraud Prevention & Brand Safety</div>
                  <p>We don't just fight fraud—we stay ahead of it. Our proprietary fraud prevention and brand safety processes ensure a clean, brand-safe environment. That’s why our supply consistently leads in quality—as verified by case studies from top demand partners.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='advertiser-container-3-wrapper'>
        <div className='advertiser-content-3'>
          <div className='left-content-advertiser'>
            <div className='advertiser-text-content'>
              <div className='text-container'>
                <AreaChartOutlined className='feature-icon'/>
                <div className='container-3-tab-heading'>Targeting & Performance Optimization</div>
                <p>We shape traffic in real-time, ensuring your ads land in front of the most engaged users. AI-driven insights, post-bid data analysis, and granular targeting tools give you full control over your campaign performance.</p>
              </div>
            </div>
          </div>
          <div className='right-content-advertiser'>
            <img src={advertiserPhoto5} alt='Advertiser Photo' className='advertiser-content-image'/>
          </div>
        </div>
      </div>
      <div className='advertiser-container-3-wrapper'>
        <div className='advertiser-content-3'>
          <div className='partners-grid'>
            
          </div>

        </div>
      </div>
    </div>
  )
}
