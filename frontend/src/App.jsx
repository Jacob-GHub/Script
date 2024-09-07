import React from 'react'
import Navbar from './home-components/Navbar/Navbar'
import Home from './pages/Home'
import Books from './pages/Books/Books'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        < Route path = '/' element={<Home/>}/>
        < Route path = '/books' element={<Books/>}/>
      </Routes>
    </div>
  )
}

export default App
