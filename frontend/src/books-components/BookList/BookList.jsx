import React from 'react'
import { useGlobalContext } from '../../storeContext/context'
import "./BookList.css"
import Loader from '../../global-components/Loader/Loader';
import BookSearchCard from '../../global-components/bookCard/BookSearchCard';

const defaultCoverImg = "../../assets/dune.png"; // Replace with your default image path

const BookList = () => {
    const { books, loading, resultTitle } = useGlobalContext();

    const booksWithCovers = books.map((singleBook) => ({
        ...singleBook,
        id: (singleBook.id).replace("/works/", ""),
        cover_img: singleBook.cover_id 
            ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` 
            : defaultCoverImg
    }));
    console.log("Books with covers:", booksWithCovers);
    if (loading) return <Loader />

    return (
        <section className="bookList">
            <div className="bookListContainer">
                <div className="section-title">
                    <h2>{resultTitle}</h2>
                </div>
                <div className="bookListContentGrid">
              {
              booksWithCovers.slice(0, 30).map((item, index) => {
                return (
                  <BookSearchCard key={index}{...item}/>
                )
              })
            }
            </div>
            </div>
        </section>
    );
};

export default BookList;
