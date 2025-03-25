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
        </div>
        NavigationFooter
    </div>
  )
}
