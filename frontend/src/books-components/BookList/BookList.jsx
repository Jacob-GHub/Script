import React from 'react'
import { useGlobalContext } from '../../storeContext/context'
import "./BookList.css"
import Loader from '../../global-components/Loader/Loader';
import BookSearchCard from '../../global-components/bookCard/BookSearchCard';

const defaultCoverImg = "/defaultBookCover.jpg"; // Replace with your default image path

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
    // if (loading) return <Loader />

    return (
        <section className="bookList">
            <div className="bookListContainer">
              <h2 className='section-title'>{resultTitle}</h2>
                <div className="bookListContentGrid">
                  {
                  booksWithCovers.slice(0, 20).map((item, index) => {
                    return (
                      <div className="bookCoverContainer">
                        <BookSearchCard key={index}{...item}/>
                      </div>
                    )
                  })
                }
                </div>
                <button>fedwnediwendiwnir</button>
            </div>
        </section>
    );
};

export default BookList;
