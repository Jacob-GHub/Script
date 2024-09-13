import React from "react";
import { Link } from "react-router-dom";

const BookSearchCard = (book) => {
    // Logging the values
    console.log("Rendering BookSearchCard"); // Check if this log appears
    console.log(book);

    return (
        <div className="bookCard">
            <img src={book.cover_img} alt={"Book cover"} />
        </div>
    );
};

export default BookSearchCard;
