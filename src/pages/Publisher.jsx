import React from 'react'
import publisherImage from "../assets/publisher_photo1.png"

export default function Publisher() {
  return (
    <div className='publisher-container'>
      <div className='publisher-hero-container'>
        <img src={publisherImage} className='background-publisher' />

      </div>
      Publisher
    </div>
  )
}
