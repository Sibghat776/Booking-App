import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const Lists = () => {
    let location = useLocation()
    console.log(location)
    return (
        <>
            <Navbar />
            <Header type="list" />
        </>
    )
}

export default Lists