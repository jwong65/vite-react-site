import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationHeader from './components/NavigationHeader'
import Home from './pages/Home'
import Publisher from './pages/Publisher'
import Advertisers from './pages/Advertisers'
import About from './pages/About'
import './App.css'


import { Layout } from 'antd'
const {Header, Content, Footer} =  Layout
function App() {

  return (
    <Router>
      <Layout className='app-layout'>
        <div className='App'>
          <Header className='app-header'tyle={{ padding: 0, background: 'transparent' }}>
            <NavigationHeader />
          </Header>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/publisher' element={<Publisher />} />
              <Route path='/advertisers' element={<Advertisers />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </main>
        </div>
      </Layout>
    </Router>
  )
}

export default App
