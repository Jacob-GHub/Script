import React from "react";

import './BookSearchCard.css'
import { Link } from "react-router-dom";
import TruncateTitle from "../TruncateTitle/TruncateTitle";


const BookSearchCard = (book) => {
    // Logging the values
    console.log("Rendering BookSearchCard"); // Check if this log appears
    console.log(book);

    return (
        <div className="bookSearchCard">
            <TruncateTitle title={book.title} maxLength={20} />
             <div className='searchCardDropShadow'></div>
            <img className="bookSearchCover"src={book.cover_img} alt="/hungergames.png" />
        </div>
    );
};

export default BookSearchCard;
