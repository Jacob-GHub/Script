import React from 'react'
import './reviewCard.css'

const ReviewCard = ({colorboxColor}) => {
  return (
    <div className='reviewCard'>
      <div className="colorbox" style={{ backgroundColor: colorboxColor }}></div> 
      <div className="container">
        <img src="../../assets/thestranger.jpg" alt="theStranger" className="bookCover" /> 
        <div className="textContainer">
            <div className="user">
                <img src="../../assets/pfp.png" alt="" className='profilePic'/>
                <p className="username">RandUser12242 said</p>
            </div>
            <p className="review">This book is cool This book is coolThis book is coolThis book is coolThis book is coolThis book is cool is coolThis book is cool is coolThis book is cool is coolThis book is cool is coolThis book is cool</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
