import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './navigation_footer.css'
import brandLight from "../assets/HorizontalLight.svg"

export default function NavigationFooter() {
  const location = useLocation();

  const handleLinkClick = (e, path) =>{
    if (location.pathname === path){
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })  
    }
  }

  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
            <Link to="/" onClick={(e)=> handleLinkClick(e, '/')} className='brand-section-footer'>
              <div className='logo-container-footer'>
                <img src={brandLight} alt='Logo'/>
              </div>
            </Link>

        <div className='footer-links'>
          <div className='footer-links-column'>
            <ul>
              <li><Link to="/" onClick={(e)=>handleLinkClick(e, '/')}>Home</Link></li>
              <li><Link to="/publisher" onClick={(e)=>handleLinkClick(e, '/publisher')}>For Publishers</Link></li>
              <li><Link to="/advertisers" onClick={(e)=> handleLinkClick(e,'/advertisers')}>For Advertisers</Link></li>
              <li><Link to="/about" onClick={(e)=> handleLinkClick(e, '/about')}>About</Link></li>
              <li><Link to='/privacy' onClick={(e)=> handleLinkClick(e,'/privacy')}>Privacy Policy</Link></li>
              <li><Link to='/contact' onClick={(e)=>handleLinkClick(e,'/contact')}>Contact</Link></li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
