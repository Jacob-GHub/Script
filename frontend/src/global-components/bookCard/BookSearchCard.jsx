import React from "react";

import './BookSearchCard.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
import TruncateTitle from "../TruncateTitle/TruncateTitle";


const BookSearchCard = (book) => {
    // Logging the values
    console.log("Rendering BookSearchCard"); // Check if this log appears
    console.log(book);
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        e.preventDefault();
        navigate(`/books/${book.id}`);
      };

    return (
        <div className="bookSearchCard">
            <a onClick={handleNavigation} className="handleNavigationCursorPointer">
            <TruncateTitle title={book.title} maxLength={20} />
             <div className='searchCardDropShadow'></div>
                <img className="bookSearchCover"src={book.cover_img} alt="bookCover" />
            </a>
        </div>
    );
};

export default BookSearchCard;
