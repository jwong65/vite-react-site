import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationHeader from './components/NavigationHeader'
import NavigationFooter from './components/NavigationFooter'
import Home from './pages/Home'
import Publisher from './pages/Publisher'
import Advertisers from './pages/Advertisers'
import About from './pages/About'
import Contact from './pages/Contact'

import { Layout } from 'antd'
const { Content } =  Layout
function App() {

  return (
    <Router>
      <Layout className='app-layout'>
        <div className='App'>
          <NavigationHeader />
          <Content className='app-content' style={{paddingBottom:0}} >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/publisher' element={<Publisher />} />
              <Route path='/advertisers' element={<Advertisers />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Content>
        </div>
          <NavigationFooter />
      </Layout>
    </Router>
  )
}

export default App
