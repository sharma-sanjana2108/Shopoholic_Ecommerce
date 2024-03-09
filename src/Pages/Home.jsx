import React, { useEffect } from 'react'
import ProductContainer from '../Components/ProductContainer'
import SecondPart from '../Components/SecondPart'
import HeroSection from '../Components/HeroSection'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const {user} = useSelector((state) => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    if(!user) {
      navigate("/login")
    }  
  }, [user])

  
  return (
    <>
    <HeroSection/>
    <SecondPart/>
    <ProductContainer/>
      
    </>
  )
}

export default Home;
