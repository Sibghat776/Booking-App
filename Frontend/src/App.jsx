import { useState } from 'react'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom"
import Lists from './Components/Lists.jsx'
import Hotel from './Components/Hotel.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/hotels' element={<Lists />} />
        <Route path='/hotels/:id' element={<Hotel />} />
      </Routes>
    </>
  )
}

export default App
