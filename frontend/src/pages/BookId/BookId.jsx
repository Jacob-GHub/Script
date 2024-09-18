import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookId = () => {
  const { id } = useParams(); // Get the book id from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await response.json();
        setBook(data); // Store the book details in state
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]); // Fetch new book details when the id changes

  return (
    <div>
      {book ? (
        <h2>Book Title: {book.title}</h2> // Display the book title
      ) : (
        <p>Loading...</p> // Show a loading message while fetching
      )}
    </div>
  );
};

export default BookId;