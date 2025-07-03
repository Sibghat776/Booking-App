import { useState } from 'react'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom"
import Lists from './Components/Lists.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/hotels' element={<Lists />} />
      </Routes>
    </>
  )
}

export default App
