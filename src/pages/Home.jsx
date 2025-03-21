import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/home_photo1.svg'

import { Button } from 'antd'

import "./home.css"

export default function Home() {
  return (
    <div className='page-wrapper'>
    <div className='home-container'>
        <img src={backgroundImage} className='background-image' />
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
    </div>
  )
}
