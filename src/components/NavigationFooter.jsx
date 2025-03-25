import React from 'react'
import { Link } from 'react-router-dom'

import './navigation_footer.css'
import companyLogo from "../assets/companyLogoSmall.svg"

export default function NavigationFooter() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
        <Link to="/" className='brand-section-footer'>
            <div className='logo-container-footer'>
              <img src={companyLogo} alt='Logo' className='logo'/>
            </div>
            <div className='company-name-footer'>
              Thunder Monetize
            </div>
        </Link>

        <div className='footer-links'>
          <div className='footer-links-column'>
            <ul>
              <li>Home</li>
              <li>For Publishers</li>
              <li>For Advertisers</li>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
