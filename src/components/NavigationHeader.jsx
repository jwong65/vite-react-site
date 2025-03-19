import React from 'react'
import './NavigationHeader.css'
import { Button } from 'antd'

import { useNavigate, useLocation, Link } from 'react-router-dom'

export default function NavigationHeader() {
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
      <nav className='nav-links'>
        <ul>
          <ul> <a href='/'>Solutions</a> </ul>
          <ul> <a href='/publisher'>For Publishers</a></ul>
          <ul> <a href='/'>For Advertisers</a></ul>
          <ul> <a href='/'>About Us</a></ul>
          <ul> <Button type='primary'>Contact Us</Button></ul>
        </ul>
      </nav>
    </header>
   )
}
