import React from 'react'
import './Books.css'
import SearchForm from '../../global-components/searchForm/searchForm'
import BookList from '../../books-components/BookList/BookList'



const Books = () => {
  return (
    <div className='booksPage'>
      <div className="booksHeaderContainer">
        <h1 className="bookPageHeader">
        Discover our catalog of books to discuss
        </h1>
        <p className="booksPageSubHeader">
        Access thousands of books in the unique, extensive catalog to find high-quality books for every interest.
        </p>
      </div>
      <SearchForm/>
      <BookList/>
    </div>
  )
}

export default Books
