import React from 'react'
import { Link } from 'react-router-dom'

import './navigation_footer.css'

export default function NavigationFooter() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
        <Link to="/" className='brand-section'>
            <div className='logo-container'>
              <img src='/thunder_monetize_logo.svg' alt='Logo' className='logo'/>
            </div>
            <div className='company-name'>
              Thunder Monetize
            </div>
          </Link>
        </div>
        NavigationFooter
    </div>
  )
}
