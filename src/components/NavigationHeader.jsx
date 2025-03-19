import React from 'react'

import './NavigationHeader.css'
import { Button } from 'antd'

export default function NavigationHeader() {
  return (
    <header className='navigation-header'>
      <nav>
        <ul>
          <ul> <a href='/'>Home</a> </ul>
          <ul> <a href='/about'>About</a></ul>
          <ul> <Button type='primary'>Contact Us</Button></ul>
        </ul>
      </nav>
    </header>
  )
}
