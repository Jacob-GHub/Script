import React from "react";
import './BookSearchCard.css'
import { Link } from "react-router-dom";

const BookSearchCard = (book) => {
    // Logging the values
    console.log("Rendering BookSearchCard"); // Check if this log appears
    console.log(book);

    return (
        <div className="bookSearchCard">
             <div className='searchCardDropShadow'></div>
            <img className="bookSearchCover"src={book.cover_img} alt={"Book cover"} />
        </div>
    );
};

export default BookSearchCard;
