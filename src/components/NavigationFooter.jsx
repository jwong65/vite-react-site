import React from 'react'
import { Link } from 'react-router-dom'

import './navigation_footer.css'
import companyLogo from "../assets/companyLogoSmall.svg"

export default function NavigationFooter() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
            <div className='logo-container-footer'>
              <img src={companyLogo} alt='Logo' className='logo'/>
            </div>
            <div className='company-name-footer'>
              Thunder Monetize
            </div>

        <div className='footer-links'>
          <div className='footer-links-column'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/publisher">For Publishers</Link></li>
              <li><Link to="/advertisers">For Advertisers</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to='/privacy'>Privacy Policy</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
