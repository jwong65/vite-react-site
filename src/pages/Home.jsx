import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/home_photo1.jpg'
import overlayImage from "../assets/home_photo2.jpg"
import graphicImage1 from "../assets/graphic1.png"
import graphicImage2 from "../assets/graphic2.png"
import companyLogoWhite from "../assets/companyLogoWhite.svg"

import appLovinLogo from "../assets/partnericons/AppLovin_Full.svg"
import inMobiLogo from "../assets/partnericons/InMobi-Logo.svg"
import ironSourceLogo from "../assets/partnericons/IronSource_Logo.svg"
import sovrnLogo from "../assets/partnericons/sovrn-logo.svg"
import magniteLogo from "../assets/partnericons/magniteLogo.svg"
import unityLogo from "../assets/partnericons/Unity_2021.svg"
import yieldLogo from "../assets/partnericons/yieldmo.svg"
import mintegralLogo from "../assets/partnericons/mtgLogo.svg"
import epsilonLogo from "../assets/partnericons/Epsilon-Logo 1.svg"
import verveLogo from "../assets/partnericons/verve-logo 1.svg"

import { Button } from 'antd'
import { BulbOutlined, RobotOutlined,FileAddOutlined, TrophyOutlined, AimOutlined, SafetyOutlined } from '@ant-design/icons'

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
                <div className='button-container'>
                <Link to='/contact'>
                    < Button>Supercharge Your Growth Today</Button>
                </Link>
                </div>
            </div>
        </div>
    <div className='home-container-2-wrapper'>
        <div className ='home-container-2'>
            <img src="/thunder_monetize_logo.svg" alt='Company Logo' className='company-logo'/>
            <div className = 'text-overlay-2'>
            At Thunder Monetize, we power publishers and advertisers with <span className='underline-text'>cutting-edge monetization solutions</span>, delivering <span className='highlight-text'>premium inventory</span>, <span className='highlight-text'>transparency</span>, and <span className='highlight-text'>AI-driven optimization</span> to <span className='underline-text'>maximize every opportunity</span>.
            </div>
        </div>
    </div>
    <div className='home-container-3-wrapper advertiser-section'>
    <div className='home-container-3'>
        <div className='left-content-home'>
            <div className='text-container-left'>
                <h1 className='main-heading'>Solutions for</h1>
                <h3 className='sub-heading'>Publishers</h3>
            </div>
            <div className='text-box-home'>
                <BulbOutlined className='feature-icon' />
                <div className='text-content'>
                    <h2 className='tab-heading'>Smarter Monetization</h2>
                    <p>Header bidding, OpenRTB, and proprietary traffic shaping to drive maximum yield.</p>
                </div>
            </div>
            <div className='text-box-home'>
                <RobotOutlined className='feature-icon' />
                <div className='text-content'>
                    <h2 className='tab-heading'>ai-driven revenue optimization</h2>
                    <p>Advanced post-bid data analysis ensures higher fill rates and efficiency.</p>
                </div>
            </div>
            <div className='text-box-home'>
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
        <div className='right-content-home'>
            <img src={graphicImage1}   />
        </div>
    </div>
    </div>
    <div className='home-container-3-wrapper publisher-section'>
    <div className='home-container-3'>
        <div className='left-content-home'>
            <img src={graphicImage2} />
        </div>
        <div className='right-content-home'>
        <div className='text-container-left'>
                <h1 className='main-heading'>Solutions for</h1>
                <h3 className='sub-heading'>Advertisers</h3>
        </div>
            <div className='text-box-home'>
                <TrophyOutlined className='feature-icon'/>
                <div className='text-content'>
                    <h2 className='tab-heading'>Access to premium supply</h2>
                    <p>Unparalleled reach across top SDK networks and direct publishers.</p>
                </div>
            </div>
            <div className='text-box-home'>
                <AimOutlined className='feature-icon' />
                <div className='text-content'>
                    <h2 className='tab-heading'>Performance-Driven Targeting</h2>
                    <p>Advanced optimization ensures efficient spend and higher ROI.</p>
                </div>
            </div>
            <div className='text-box-home'>
                <SafetyOutlined className='feature-icon' />
                <div className='text-content'>
                    <h2 className='tab-heading'>Brand-Safe & Transparent</h2>
                    <p>Fully OMSDK, app-ads.txt, sellers.json compliant with industry-leading fraud prevention</p>
                </div>
            </div>
            <Link to="/advertisers">
                <Button type='primary' className='redirect'>Learn More</Button> 
            </Link>
        </div>
    </div>
    </div>
    <div className='section-wrapper'>
        <div className='partners-container'>
            <h1 className='main-heading-partners'>Some of Our</h1>
            <h3 className='sub-heading-partners'>Partners</h3>
            <div className='partners-grid'>
                <img src={appLovinLogo} alt='AppLovin' className='partner-logo-home' />
                <img src={verveLogo} alt="VerveGroup" className='partner-logo-home' />
                <img src={inMobiLogo} alt='InMobi' className='partner-logo-home' />
                <img src={ironSourceLogo} alt='IronSource' className='partner-logo-home' />
                <img src={sovrnLogo} alt='Sovrn' className='partner-logo-home' />
                <img src={magniteLogo} alt='Magnite' className='partner-logo-home' />
                <img src={unityLogo} alt='Unity' className='partner-logo-home' />
                <img src={yieldLogo} alt='Yieldmo' className='partner-logo-home' />
                <img src={mintegralLogo} alt='Mintegral' className='partner-logo-home' />
                <img src={epsilonLogo} alt='Epislon' className='partner-logo-home' />
            </div>
        </div>
    </div>
    <div className='section-wrapper-bottom'>
        <div className='home-container-4'>
            <div className='logo-container'>
                <img src={companyLogoWhite} alt='Logo' className='blue-logo' />
            </div>
            <div className='footer-heading'>Join the Thunder.</div>
            <div className='footer-subtext'>Elevate your monetization</div>
            <Link to='/contact'>
                <Button type='primary'>Unlock Your Revenue Potential</Button>
            </Link>
        </div>
    </div>
    </div>
  )
}
