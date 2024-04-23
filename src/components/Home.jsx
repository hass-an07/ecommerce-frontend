import React from 'react'
import HeroImage from '../assets/Home/hero-image.png';

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <img src={HeroImage} className='w-full' alt="" />
      </div>
    </>
  )
}

export default Home
