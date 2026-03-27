import React from 'react'
import ProductBar from '../Components/ProductBar'

import Hero from '../Components/Home/Hero'
import DetailsBar from '../Components/Home/DetailsBar'
import CategoryBar from '../Components/Home/CategoryBar'

const Home = () => {
  return (
    <>
        <Hero />
        <DetailsBar />
        <CategoryBar />
        <ProductBar />
    </>
  )
}

export default Home