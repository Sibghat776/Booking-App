import { Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Lists from './Components/Lists.jsx'
import Hotel from './Components/Hotel.jsx'
import Login from './Components/Login.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/hotels' element={<Lists />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
