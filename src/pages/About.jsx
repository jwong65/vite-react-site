import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import aboutImage from "../assets/about_photo1.png"
import aboutImage1 from "../assets/about_photo22.png"
import aboutImage2 from "../assets/about_photo3.png"
import companyLogo from "../assets/companyLogoWhite.svg"
import companyLogoBlack from "../assets/companyLogoBlack.svg"
import "./about.css"

import { SafetyOutlined, StarOutlined, RobotOutlined, ApiOutlined } from '@ant-design/icons';

export default function About() {
  return (
    <div className='about-page-wrapper'>
      <div className='about-hero-section-wrapper'>
        <div className='about-container'>
          <img src={aboutImage} className='about-background-image' />
          <div className='about-text-overlay'>
            <h1 className='about-main-heading'>About Thunder Monetize</h1>
            <h3 className='about-sub-heading'>
              Powering The Future <br/> 
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
          <div className='about-content-container'>
            <div className='about-left-content'>
                <div className='text-box'>
                  <StarOutlined className='feature-icon' />
                  <div className='text-content'>
                    <div className='tab-heading'>Premium connections</div> 
                    <p>
                      We link top publishers and advertisers, ensuring higher fill rates and stronger eCPMs.
                    </p>
                </div>
              </div>
              <div className='text-box'>
                <SafetyOutlined className='feature-icon' />
                <div className='text-content'>
                  <div className='tab-heading'>Unmatched transparency & safety</div>  
                  <p>
                    Fully OMSDK, app-ads.txt, and sellers.json compliant, with industry-leading fraud prevention.
                  </p>
                </div>
              </div>
            </div>
            <div className='about-center-graphic'>
              <img src={aboutImage1} alt="Center Graphic" />
            </div>
            <div className='about-right-content'>
              <div className='text-box'>
                <RobotOutlined className='feature-icon' />
                <div className='text-content'>
                  <div className='tab-heading'>AI-driven optimization</div>
                  <p>
                    Proprietary traffic shaping and post-bid AI maximize revenue on every impression.
                  </p>
                </div>
              </div>
              <div className='text-box'>
                <ApiOutlined className='feature-icon' />
                <div className='text-content'>
                  <div className='tab-heading'>Seamless integration</div>
                  <p>
                    Designed for SDK networks, SSPs, DSPs, and direct publishers with effortless implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-banner-section-wrapper'>
        <div className='about-banner-container'>
          <img src={aboutImage2} alt="About Image 2" />
          <div className='about-banner-content'>
            <div className='about-banner-text-box1'>
              <h3 className='banner-heading'>Our Mission</h3>
              <p>To redefine programmatic advertising by delivering lightning-fast, transparent, and intelligent monetization solutions that empower publishers and advertisers to achieve unmatched performance and profitability.</p>
            </div>
            <div className='about-banner-logo'>
              <img src={companyLogo} alt='Thunder Monetize Logo' />
            </div>
            <div className='about-banner-text-box2'>
              <h3 className='banner-heading'>Our Vision</h3>
              <p>A digital ecosystem where every impression counts, every bid is optimized, and every partner thrives—backed by the most advanced AI-driven technology and a relentless pursuit of innovation.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about-section-bottom-wrapper'>
        <div className='bottom-about-container'>
          <div className='logo-container'>
            <img src={companyLogoBlack} alt='Thunder Monetize Logo' />
          </div>
          <div className='about-footer-text'>
            <div className='about-footer-heading'>Maximize Impact with Thunder.</div>
            <div className='about-footer-subtext'>Join the world's leading advertisers in a faster, safer, and more transparent ecosystem. Let’s get started.</div>
          </div>
          <Link to='/contact'>
            <Button type='primary'>Supercharge Your Campaigns</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
