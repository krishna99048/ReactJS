import React from 'react'
import Home from './Pages/Home'
import { Route , Routes } from 'react-router-dom'
import Product from './Pages/Product'
import NavBar from './Layout/NavBar'



const App = () => {
  return (
    <>
    <NavBar />
     <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/product/:id' element = {<Product />} />
     </Routes>

  
      
    </>
  )
}

export default App