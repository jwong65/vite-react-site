import React, {useState, useEffect} from 'react'
import './navigation_header.css'
import { Tabs, Button, Dropdown } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useNavigate, useLocation, Link } from 'react-router-dom'
export default function NavigationHeader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 834)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleTabChange = (key) =>{
      navigate(key)
  }

  const handleContactClick = () => {
    navigate('/contact');
  }

  const dropdownClassName = isMobile ? 'mobile-full-width-dropdown' : '';


  useEffect(()=>{
    const handleResize = ()=>{
      setIsMobile(window.innerWidth <= 834)
    }
    window.addEventListener('resize', handleResize)
    return ()=> window.removeEventListener('resize', handleResize)
  })
  const tabItems = [
    {
      key: '/',
      label: 'Solutions'
    },
    {
      key: '/publisher',
      label: 'For Publishers'
    },
    {
      key: '/advertisers',
      label: 'For Advertisers'
    },
    {
      key: '/about',
      label: 'About'
    }
  ]

  return (
    <div className='header-wrapper'>
      <div className='header-container'>  
        <header className='navigation-header'>
        {isMobile && (
            // Mobile View (less than 834 pixels)
            <Dropdown
            menu={{
              items:[
                ...tabItems,
                {
                  key:'/contact',
                  label: 'Contact Us'
                }
              ].map(item=>({
                key: item.key,
                label: item.label,
                onClick: ()=> navigate(item.key)
              }))
            }}
            trigger={['click']}
            placement='bottom'
            overlayClassName={dropdownClassName}
            getPopupContainer={()=> document.querySelector('.header-wrapper')}
            open={mobileMenuOpen}
            onOpenChange = {setMobileMenuOpen}
          >
          <div className='mobile-menu'>
              <Button 
                type='text'
                icon={mobileMenuOpen ?<CloseOutlined /> : <MenuOutlined />}
                className='hamburger-button'
              />
            </div>
          </Dropdown>
          )
        }
          <Link to="/" className='brand-section'>
            <div className='logo-container'>
              <img src='/thunder_monetize_logo.svg' alt='Logo' className='logo'/>
            </div>
            <div className='company-name'>
              Thunder Monetize
            </div>
          </Link>

          {isMobile ? (
            // Mobile View (less than 834 pixels)
            <></>
          ):(
            // Desktop View
            <div className='nav-tabs-container'>
                      <Tabs
                        className = 'navigation-tabs'
                        activeKey={currentPath}
                        onChange={handleTabChange}
                        items ={tabItems}
                      />
                      <Button type='primary' className='contact-button' onClick={handleContactClick}>
                            Contact Us
                      </Button>
                    </div>
          )}
        </header>
      </div>
    </div>



  )
}