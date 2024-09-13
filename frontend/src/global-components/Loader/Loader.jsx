import React from 'react'
import './Loader.css'
import LoadImg from '/loadImg.png'

const Loader = () => {
  return (
    <div className='loader'>
      <img src={LoadImg} alt="loader" />
    </div>
  )
}

export default Loader