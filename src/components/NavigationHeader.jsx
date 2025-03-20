import React from 'react'
import './navigation_header.css'
import { Tabs, Button } from 'antd'

import { useNavigate, useLocation, Link } from 'react-router-dom'
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

  const tabItems = [
    {
      key: '/',
      label: 'Solutions'
    },
    {
      key: '/publisher',
      label: 'For Publishers'
    },
    {
      key: '/advertisers',
      label: 'For Advertisers'
    },
    {
      key: '/about',
      label: 'About'
    }
  ]

  return (
    <div className='header-wrapper'>
      <div className='header-container'>  
        <header className='navigation-header'>
          <Link to="/" className='brand-section'>
            <div className='logo-container'>
              <img src='/thunder_monetize_logo.svg' alt='Logo' className='logo'/>
            </div>
            <div className='company-name'>
              Thunder Monetize
            </div>
          </Link>
          <div className='nav-tabs-container'>
            <Tabs
              className = 'navigation-tabs'
              activeKey={currentPath}
              onChange={handleTabChange}
              items ={tabItems}
            />
            <Button type='primary' className='contact-button' onClick={handleContactClick}>
                  Contact Us
            </Button>
          </div>
        </header>
      </div>
    </div>
   )
}
