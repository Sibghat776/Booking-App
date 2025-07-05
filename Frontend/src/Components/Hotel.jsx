import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Box, Button, Stack, Typography } from '@mui/material'
import "./Hotel.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from "./Footer"
import EmailList from "./EmailList"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CancelIcon from '@mui/icons-material/Cancel';

const Hotel = () => {
    let [slideNumber, setSlideNumber] = useState(0)
    let [open, setOpen] = useState(false)

    let handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(!open)
    }
    let handleOperation = (operation) => {
        let newSlideNumber;
        if (operation === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }
    return (
        <>
            <Navbar />
            <Header type="list" />
            <Box className="hotelContainer">
                {open &&
                    <Box className="slider">
                        <CancelIcon className='cancelIcon' onClick={() => setOpen(!open)} />
                        <ArrowCircleLeftIcon className='arrow' onClick={() => handleOperation("l")} />
                        <Box className="slideWrapper">
                            <img src={img[slideNumber].src} alt="" />
                        </Box>
                        <ArrowCircleRightIcon className='arrow' onClick={() => handleOperation("r")} />
                    </Box>
                }
                <Stack className='hotelMainStack'>
                    <Box className="hotelHead">
                        <Box className="hotelNames">
                            <Typography variant='h5' className='bold'>Grand Hotel</Typography>
                            <Typography className='flex justify-start items-center sm'> <LocationOnIcon className='sm' />Elton St 125 New York</Typography>
                            <Typography className='text-blue-700'>Excellent location - 500 meter from center</Typography>
                            <Typography className='text-green-600 bold'>Book a stay over $114 at this property and get a free airport taxi</Typography>
                        </Box>
                        <Button
                            variant="contained"
                            className="!bg-[#31572c] !text-white !font-semibold normal-case !text-sm"
                        >
                            Reserve or Book Now!
                        </Button>
                    </Box>
                    <Stack className="hotelImgStack">
                        {img.map((img, i) => (
                            <>
                                <img onClick={() => handleOpen(i)} className='cursor-pointer' src={img.src} alt="" />
                            </>
                        ))}
                    </Stack>
                    <Box className="hotelDesc">
                        <Box className="flex flex-col md:flex-row justify-between gap-3 py-10 rounded-lg w-full">
                            {/* LEFT SIDE - Description */}
                            <Box className="md:w-[70%] flex flex-col gap-6">
                                <Typography variant="h5" className="font-bold bold text-black mb-2">
                                    Stay in the heart of Krakow
                                </Typography>
                                <Typography variant="body2" className="text-sm text-gray-800 leading-relaxed">
                                    Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.
                                    The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with
                                    shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the
                                    apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Kraków–Balice,
                                    16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.
                                </Typography>
                            </Box>

                            {/* RIGHT SIDE - Offer Box */}
                            <Box className="bg-[#faffc9] h-[15rem] md:w-[30%] rounded-lg p-4 flex flex-col justify-between">
                                <Typography variant="h6" className="font-bold bold text-gray-800 mb-2">
                                    Perfect for a 9-night stay!
                                </Typography>
                                <Typography variant="body2" className="text-gray-700">
                                    Located in the real heart of Krakow, this property has an excellent location score of 9.8!
                                </Typography>
                                <Typography variant="h6" className="font-bold text-gray-900 mb-2">
                                    $945 <span className="text-sm font-normal">(9 nights)</span>
                                </Typography>
                                <Button
                                    variant="contained"
                                    className="!bg-[#31572c] !text-white !font-semibold normal-case !text-sm"
                                >
                                    Reserve or Book Now!
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <EmailList />
            <Footer />
        </>
    )
}

export default Hotel
let img = [
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116833-f96f224aabea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116764-cc30286da413?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116764-cc30286da413?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116764-f3526d29dae6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1723823036117-5431e3adefce?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]