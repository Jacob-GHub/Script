import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="script">
          <h1 className="scriptText">
            Script
          </h1>
          <p className="scriptBio">
            The World's Leading Book Connection Service
          </p>
        </div>
        <div className="company">
          <h1 className="companyText">
            Company
          </h1>
          <div className="companyContainer">
          <a href="" className="aboutUsText">About us</a>
          <a href="" className="something">Guide</a>
          </div>
        </div>
        <div className="getInContact">
          <h1 className="getInContactText">
            Get in contact
          </h1>
          <p className="contactText">
            scriptemailaddress@gmail.com
          </p>
        </div>
    </div>
  )
}

export default Footer
