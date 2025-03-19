import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import NavigationHeader from './components/NavigationHeader'
import Home from './pages/Home'
import './App.css'
import Publisher from './pages/Publisher'

function App() {

  return (
    <Router>
      <div className='App'>
        <NavigationHeader />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/publisher' element={<Publisher />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
