import React,{useRef,useEffect, useReducer} from 'react'
import {useNavigate} from 'react-router-dom'
import './SearchForm.css'
import { useGlobalContext } from '../../storeContext/context'

const SearchForm = () => {
  const {setSearchTerm,setResultTitle}= useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(()=> searchText.current.focus(), []);
  const handleSubmit = (e) =>{
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0) {
      // setSearchTerm("the lost world");
      setResultTitle("Please enter something ...");
    }
    else{
      setSearchTerm(searchText.current.value);
      // navigate("/book")
    }
   
  };
  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit} className="searchForm">
        <div className="searchFormContainer">
          <img src="../../assets/searchIcon.png" alt="" className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for a book"
            ref={searchText}
          />
        </div>
        <button type="submit" className="submitSearch">
          Search
        </button>
  </form>
</div>
  )
}

export default SearchForm
