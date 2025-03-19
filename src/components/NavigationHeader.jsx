import React from 'react'
import './NavigationHeader.css'
import { Tabs, Button } from 'antd'

import { useNavigate, useLocation } from 'react-router-dom'
export default function NavigationHeader() {

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleTabChange = (key) =>{
    navigate(key)
  }

  const handleContactClick = () => {
    navigate('/contact');
  }


  return (
    <header className='navigation-header'>
      <div className='brand-section'>
        <div className='logo-container'>
          <img src='/thunder_monetize_logo.svg' alt='Logo' className=''/>
        </div>
        <div className='company-name'>
          Thunder Monetize
        </div>
      </div>
      <div className='nav-tabs-container'>
        <Tabs
          className = 'navigation-tabs'
          activeKey={currentPath}
          onChange={handleTabChange}
        >
          <Tabs.TabPane tab="Solutions" key="/" />
          <Tabs.TabPane tab="For Publishers" key="/publisher" />
          <Tabs.TabPane tab="For Advertisers" key="/" />
          <Tabs.TabPane tab="About" key="/" />
          
        </Tabs>
        
        <Button type='primary' className='contact-button' onClick={handleContactClick}>
              Contact Us
        </Button>
      </div>
    </header>
   )
}
