import React from 'react'
import SearchForm from '../../global-components/searchForm/searchForm'
import BookList from '../../books-components/BookList/BookList'



const Books = () => {
  return (
    <div className='booksPage'>
      <SearchForm/>
      <BookList/>
    </div>
  )
}

export default Books
