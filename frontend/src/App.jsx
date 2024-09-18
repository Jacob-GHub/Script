import React from 'react'
import Navbar from './home-components/Navbar/Navbar'
import Home from './pages/Home'
import Books from './pages/Books/Books'
import { AppProvider } from './storeContext/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookList from './books-components/BookList/BookList'
import BookId from './pages/BookId/BookId'
import BookSearchCard from './global-components/bookCard/BookSearchCard'

const App = () => {
  return (
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/books/:id" element={<BookId />} />
        </Routes>
      </AppProvider>
  );
};

export default App
