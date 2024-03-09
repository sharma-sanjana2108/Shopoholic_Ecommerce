import React from 'react'
import coverpage1 from "../assets/coverpage1.png"
import newimg from "../assets/newimg.WEBP"
 
const HeroSection = () => {
  return (
    <>
        <img className='hero' src={coverpage1} alt="" />
        <img className='newimg' src={newimg} alt="" />
      
    </>
  )
}

export default HeroSection
