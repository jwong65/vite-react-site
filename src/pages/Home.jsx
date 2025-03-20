import React from 'react'
import backgroundImage from '../assets/home_photo1.svg'

import "./home.css"

export default function Home() {
  return (
    <div className='home-container'>
        <img src={backgroundImage} className='background-image' />
        <div className='text-overlay-1'>
            <h1 className='main-heading'>
                Precision. Scale. <br/>
                Performance.
            </h1>
            <h3 className='sub-heading'>Because every millisecond counts.</h3>
            <h3 className='sub-heading2'>Maximize revenue with real-time bidding, premium demand, and AI-driven optimization—built for publishers, trusted by advertisers.</h3>
        </div>
    </div>
  )
}
