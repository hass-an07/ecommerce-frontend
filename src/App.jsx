import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
