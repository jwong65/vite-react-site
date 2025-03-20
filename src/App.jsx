import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import NavigationHeader from './components/NavigationHeader'
import Home from './pages/Home'
import Publisher from './pages/Publisher'
import Advertisers from './pages/Advertisers'
import About from './pages/About'
import './App.css'
function App() {

  return (
    <Router>
      <div className='App'>
        <div className='centered-container'>
          <NavigationHeader />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/publisher' element={<Publisher />} />
              <Route path='/advertisers' element={<Advertisers />} />
              <Route path= '/about' element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
