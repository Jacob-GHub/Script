import React from 'react'
import Header from '../home-components/Header/Header'
import Body from '../home-components/Body/Body'
import Footer from '../home-components/Footer/Footer'
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default Home
