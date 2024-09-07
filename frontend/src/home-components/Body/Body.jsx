import React from 'react'
import './Body.css'
import ReviewCard from '../../global-components/reviewCard/reviewCard'
import ClubCard from '../../global-components/clubCard/clubCard'
import BookCard from '../../global-components/bookCard/BookCard'

const Body = () => {
  return (
    <div className='body'>
      <div className='trendingReviews'>
        <h1 className="trendingReviewsText">Trending Reviews</h1>
        <div className="reviewCards">
          <ReviewCard colorboxColor="#FFDA40" className="review1"/>
          <ReviewCard colorboxColor="#FF6137" className="review2"/>
          <ReviewCard colorboxColor="#22AEFF" className="review3"/>
        </div>
      </div>
      <div className="featuredClubs">
        <h1 className="featuredClubsText">Featured Clubs</h1>
        <div className="clubCards">
          <ClubCard clubCardColor="#FF6137"/>
          <ClubCard clubCardColor="#22AEFF"/>
          <ClubCard clubCardColor="#FFDA40"/>    
        </div>
        <button className="viewMoreClubs">Discover More</button>
      </div>
      <div className="findABook">
        <h1 className="findABookText">
          Find a book you love
        </h1>
        <div className="bookContainer">
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        </div>
        <button className="viewAllBooks">View All</button>
      </div>
      {/* <div className="faq">
        
      </div> */}
    </div>

  )
}

export default Body
