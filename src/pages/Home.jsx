import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/home_photo1.jpg'
import overlayImage from "../assets/home_photo2.jpg"
import graphicImage1 from "../assets/graphic1.png"

import { Button } from 'antd'
import { BulbOutlined, RobotOutlined,FileAddOutlined } from '@ant-design/icons'

import "./home.css"

export default function Home() {
  return (
    <div className='page-wrapper'>
    <div className='home-container'>
        <img src={backgroundImage} className='background-image' />
        <img src={overlayImage} className='floating-overlay-image' />
        <div className='text-overlay-1'>
            <h1 className='main-heading'>
                Precision. Scale. <br/>
                Performance.
            </h1>
            <h3 className='sub-heading'>Because every millisecond counts.</h3>
            <h3 className='sub-heading2'>Maximize revenue with real-time bidding, premium demand, and AI-driven optimization—built for publishers, trusted by advertisers.</h3>
            <Link to='/contact'>
                < Button>Supercharge Your Growth Today</Button>
            </Link>
        </div>
    </div>
    <div className ='home-container-2'>
        <img src="/thunder_monetize_logo.svg" alt='Company Logo' className='company-logo'/>
        <div className = 'text-overlay-2'>
        At Thunder Monetize, we power publishers and advertisers with <span className='underline-text'>cutting-edge monetization solutions</span>, delivering <span className='highlight-text'>premium inventory</span>, <span className='highlight-text'>transparency</span>, and <span className='highlight-text'>AI-driven optimization</span> to <span className='underline-text'>maximize every opportunity</span>.
        </div>
    </div>
    <div className='home-container-3'>
        <div className='left-content'>
            <div className='text-container-left'>
                <h1 className='main-heading'>Solutions for</h1>
                <h3 className='sub-heading'>Publishers</h3>
            </div>
            <div className='text-box'>
                <BulbOutlined className='feature-icon' />
                <div className='text-content'>
                    <h2 className='tab-heading'>Smarter Monetization</h2>
                    <p>Header bidding, OpenRTB, and proprietary traffic shaping to drive maximum yield.</p>
                </div>
            </div>
            <div className='text-box'>
                <RobotOutlined className='feature-icon' />
                <div className='text-content'>
                    <h2 className='tab-heading'>ai-driven revenue optimization</h2>
                    <p>Advanced post-bid data analysis ensures higher fill rates and efficiency.</p>
                </div>
            </div>
            <div className='text-box'>
                <FileAddOutlined className='feature-icon'/>
                <div className='text-content'>
                    <h2 className='tab-heading'>Flexible ad formats</h2>
                    <p>Interstitial, Rewarded, Banner, MREC, and Native to optimize user engagement.</p>
                </div>
            </div>
            <Link to="/publisher">
                <Button type='primary' className='redirect'>Learn More</Button> 
            </Link>
        </div>
        <div className='right-content'>
            <img src={graphicImage1}  />
        </div>

    </div>
    </div>
  )
}
