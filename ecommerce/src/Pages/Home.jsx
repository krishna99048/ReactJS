import React from 'react'
import ProductBar from '../Components/ProductBar'

import Hero from '../Components/Home/Hero'
import DetailsBar from '../Components/Home/DetailsBar'
import CategoryBar from '../Components/Home/CategoryBar'
import Offer from '../Components/Home/Offer'
import DealBar from '../Components/Home/DealBar'
import DiscountBar from '../Components/Home/DiscountBar'
import Newsletter from '../Components/Home/NewsLatter'

const Home = () => {
  return (
    <>
        <Hero />
        <DetailsBar />
        <CategoryBar />
        <ProductBar />
        <Offer />
        <DealBar />
        <DiscountBar />
        <Newsletter />
    </>
  )
}

export default Home