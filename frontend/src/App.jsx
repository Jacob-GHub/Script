import React from 'react'
import Navbar from './home-components/Navbar/Navbar'
import Home from './pages/Home'
import Books from './pages/Books/Books'
import { AppProvider } from './storeContext/context'
import { Route,Routes } from 'react-router-dom'
import BookList from './books-components/BookList/BookList'

const App = () => {
  return (
    <div className='app'>
      <AppProvider>
        <Navbar/>
        <Routes>
          < Route path = '/' element={<Home/>}/>
          < Route path = '/books' element={<Books/>}/>
          < Route path = 'book' element = {<BookList/>}/>
        </Routes>
      </AppProvider>
    </div>
  )
}

export default App
