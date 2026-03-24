import React from 'react'
import HomePage from './Pages/HomePage'
import LogIn from './Pages/LogIn'
import {  Route , Routes} from 'react-router-dom'
import SideBar from './Layout/SideBar'

const App = () => {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LogIn />} />

      </Routes>
      
    </>
  )
}

export default App