import React from 'react'

import './NavigationHeader.css'
import { Button } from 'antd'

export default function NavigationHeader() {
  return (
    <header className='navigation-header'>
      <div className='logo-container'>
        <img src='/Layer_1.svg' alt='Logo' className=''/>
      </div>
      <nav className='nav-links'>
        <ul>
          <ul> <a href='/'>Solutions</a> </ul>
          <ul> <a href='/'>For Publishers</a></ul>
          <ul> <a href='/'>For Advertisers</a></ul>
          <ul> <a href='/'>About Us</a></ul>
          <ul> <Button type='primary'>Contact Us</Button></ul>
        </ul>
      </nav>
    </header>
   )
}
