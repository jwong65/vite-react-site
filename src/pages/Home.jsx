import React from 'react'
import { Card } from  'antd'
import backgroundImage from '../assets/home_photo1.svg'

import "./home.css"

export default function Home() {
  return (
    <div className='home-container'>
        <img src={backgroundImage} className='background-image' />
        <div className='text-section'>
            Hello
        </div>
    </div>
  )
}
