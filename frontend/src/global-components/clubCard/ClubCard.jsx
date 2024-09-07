import React from 'react'
import './clubCard.css'

const ClubCard = ({clubCardColor}) => {
  return (
    <div style={{ backgroundColor: clubCardColor }} className='clubCard'>
      <img src="../../assets/indieclub.png" alt="club" className="clubImg" />
      <div className="clubInfo">
        <div className="clubTextContainer">
            <p className="clubTitle">Indie Club Joine Now</p>
            <p className="clubDescription">
                Weekly Classic Indie book picks and reviews.ic Indie book picks and reviews.ic Indie book
            </p>
        </div>
        <button className="viewBtn">
            View
        </button>
      </div>
    </div>
  )
}

export default ClubCard
