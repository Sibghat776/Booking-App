import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import "./list.css"
import { format } from 'date-fns'

const Lists = () => {
    let location = useLocation()

    let [destination, setDestination] = useState(location.state.destination)

    let [date, setDate] = useState(location.state.date)

    let [options, setOptions] = useState(location.state.options)

    return (
        <>
            <Navbar />
            <Header type="list" />
            <Stack className='mainStackList'>
                <Box className="searchBox">
                    <Typography variant='h4' className='searchListHeading px-1'>Search</Typography>
                    <Box>
                        <Typography variant='P' className='font-bold px-2'>Destination</Typography>
                        <input
                            className='destinationInput'
                            placeholder={location ? location.state.destination : "Destination"}
                            value={location?.state?.destination} />
                    </Box>
                    <Box>
                        <Typography variant='P' className='font-bold px-2'>Check-in-Date</Typography>
                        <Box className="bg-[white] text-[#132a13] p-2 rounded-lg">
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                        </Box>
                    </Box>
                    <Box className="px-2">
                        <Typography variant='P' className='font-bold'>Options</Typography>
                        <Stack flexDirection={'column'} gap={"0.02rem"}>
                            <Box className="flex justify-between items-center">
                                <Typography variant='p'>Min Price</Typography>
                                <input type='number' className='bg-white text-center text-black p-1 rounded m-1 w-[20%]' />
                            </Box>
                            <Box className="flex justify-between items-center">
                                <Typography variant='p'>Max Price</Typography>
                                <input type='number' className='bg-white text-center text-black p-1 rounded m-1 w-[20%]' />
                            </Box>
                            <Box className="flex justify-between items-center">
                                <Typography variant='p'>Adult</Typography>
                                <input type='number' placeholder={options.adult} className='bg-white text-center text-black p-1 rounded m-1 w-[20%]' />
                            </Box>
                            <Box className="flex justify-between items-center">
                                <Typography variant='p'>Children</Typography>
                                <input type='number' placeholder={options.children} className='bg-white text-center text-black p-1 rounded m-1 w-[20%]' />
                            </Box>
                            <Box className="flex justify-between items-center">
                                <Typography variant='p'>Room</Typography>
                                <input type='number' placeholder={options.room} className='bg-white text-center text-black p-1 rounded m-1 w-[20%]' />
                            </Box>
                        </Stack>
                    </Box>
                    <Button variant='contained' className="searchBtnist">Search</Button>
                </Box>
                <Box className="searchItemBox">
                    <Box className="relative mb-2 bg-white flex flex-col md:flex-row rounded-xl shadow-2xl gap-4 w-full p-4">

                        {/* Rating Box — Fixed at Card's Top-Right Corner */}
                        <Box className="absolute top-4 right-4 flex items-center gap-2 z-10">
                            <Typography className="text-sm text-gray-800 font-medium bold1">Excellent</Typography>
                            <Box className="bg-[#132a13] text-white text-xs font-bold px-2 py-[2px] rounded-lg shadow">
                                8.9
                            </Box>
                        </Box>

                        {/* Image Section */}
                        <img
                            src="https://images.pexels.com/photos/19790158/pexels-photo-19790158.jpeg"
                            alt="Tower Street Apartments"
                            className="w-full md:w-[200px] h-[200px] object-cover rounded-md"
                        />

                        {/* Center Content */}
                        <Box className="flex flex-col justify-around w-full mt-2 md:mt-0">
                            {/* Title */}
                            <Typography className="text-[#132a13] lsTitle font-extrabold text-xl md:text-2xl hover:underline cursor-pointer tracking-wide leading-tight mb-2">
                                Tower Street Apartments
                            </Typography>

                            {/* Distance */}
                            <Typography className="text-sm bold text-gray-700">500m from center</Typography>

                            {/* Taxi Badge */}
                            <Box className="bg-green-600 bold pad text-white text-xs px-2 py-[2px] w-fit mt-1 rounded">
                                Free airport taxi
                            </Box>

                            {/* Room Type */}
                            <Typography className="text-sm font-semibold mt-2">
                                Studio Apartment with Air conditioning
                            </Typography>

                            {/* Room Info */}
                            <Typography className="text-sm small text-gray-700">
                                Entire studio • 1 bathroom • 21m² • 1 full bed
                            </Typography>

                            {/* Cancellation Policy */}
                            <Typography className="text-sm bold font-bold text-green-700 mt-2">
                                Free cancellation
                            </Typography>
                            <Typography className="text-sm text-green-700">
                                You can cancel later, so lock in this great price today!
                            </Typography>
                        </Box>

                        {/* Price + CTA Button */}
                        <Box className="flex flex-col justify-end items-end min-w-fit text-right mt-4 md:mt-0">
                            <Typography className="text-2xl bold font-extrabold text-gray-800">$123</Typography>
                            <Typography className="text-xs bold text-gray-500 font-semibold mb-1">
                                Includes taxes and fees
                            </Typography>
                            <Button
                                variant="contained"
                                className="!bg-[#0071c2] !text-[white] !font-semibold normal-case !text-sm px-4 py-1 shadow"
                            >
                                See availability
                            </Button>
                        </Box>
                    </Box>
                    <Box className="relative mb-2 bg-white flex flex-col md:flex-row rounded-xl shadow-2xl gap-4 w-full p-4">

                        {/* Rating Box — Fixed at Card's Top-Right Corner */}
                        <Box className="absolute top-4 right-4 flex items-center gap-2 z-10">
                            <Typography className="text-sm text-gray-800 font-medium bold1">Excellent</Typography>
                            <Box className="bg-[#132a13] text-white text-xs font-bold px-2 py-[2px] rounded-lg shadow">
                                8.9
                            </Box>
                        </Box>

                        {/* Image Section */}
                        <img
                            src="https://images.pexels.com/photos/19790158/pexels-photo-19790158.jpeg"
                            alt="Tower Street Apartments"
                            className="w-full md:w-[200px] h-[200px] object-cover rounded-md"
                        />

                        {/* Center Content */}
                        <Box className="flex flex-col justify-around w-full mt-2 md:mt-0">
                            {/* Title */}
                            <Typography className="text-[#132a13] lsTitle font-extrabold text-xl md:text-2xl hover:underline cursor-pointer tracking-wide leading-tight mb-2">
                                Tower Street Apartments
                            </Typography>

                            {/* Distance */}
                            <Typography className="text-sm bold text-gray-700">500m from center</Typography>

                            {/* Taxi Badge */}
                            <Box className="bg-green-600 bold pad text-white text-xs px-2 py-[2px] w-fit mt-1 rounded">
                                Free airport taxi
                            </Box>

                            {/* Room Type */}
                            <Typography className="text-sm font-semibold mt-2">
                                Studio Apartment with Air conditioning
                            </Typography>

                            {/* Room Info */}
                            <Typography className="text-sm small text-gray-700">
                                Entire studio • 1 bathroom • 21m² • 1 full bed
                            </Typography>

                            {/* Cancellation Policy */}
                            <Typography className="text-sm bold font-bold text-green-700 mt-2">
                                Free cancellation
                            </Typography>
                            <Typography className="text-sm text-green-700">
                                You can cancel later, so lock in this great price today!
                            </Typography>
                        </Box>

                        {/* Price + CTA Button */}
                        <Box className="flex flex-col justify-end items-end min-w-fit text-right mt-4 md:mt-0">
                            <Typography className="text-2xl bold font-extrabold text-gray-800">$123</Typography>
                            <Typography className="text-xs bold text-gray-500 font-semibold mb-1">
                                Includes taxes and fees
                            </Typography>
                            <Button
                                variant="contained"
                                className="!bg-[#0071c2] !text-[white] !font-semibold normal-case !text-sm px-4 py-1 shadow"
                            >
                                See availability
                            </Button>
                        </Box>
                    </Box>
                    <Box className="relative mb-2 bg-white flex flex-col md:flex-row rounded-xl shadow-2xl gap-4 w-full p-4">

                        {/* Rating Box — Fixed at Card's Top-Right Corner */}
                        <Box className="absolute top-4 right-4 flex items-center gap-2 z-10">
                            <Typography className="text-sm text-gray-800 font-medium bold1">Excellent</Typography>
                            <Box className="bg-[#132a13] text-white text-xs font-bold px-2 py-[2px] rounded-lg shadow">
                                8.9
                            </Box>
                        </Box>

                        {/* Image Section */}
                        <img
                            src="https://images.pexels.com/photos/19790158/pexels-photo-19790158.jpeg"
                            alt="Tower Street Apartments"
                            className="w-full md:w-[200px] h-[200px] object-cover rounded-md"
                        />

                        {/* Center Content */}
                        <Box className="flex flex-col justify-around w-full mt-2 md:mt-0">
                            {/* Title */}
                            <Typography className="text-[#132a13] lsTitle font-extrabold text-xl md:text-2xl hover:underline cursor-pointer tracking-wide leading-tight mb-2">
                                Tower Street Apartments
                            </Typography>

                            {/* Distance */}
                            <Typography className="text-sm bold text-gray-700">500m from center</Typography>

                            {/* Taxi Badge */}
                            <Box className="bg-green-600 bold pad text-white text-xs px-2 py-[2px] w-fit mt-1 rounded">
                                Free airport taxi
                            </Box>

                            {/* Room Type */}
                            <Typography className="text-sm font-semibold mt-2">
                                Studio Apartment with Air conditioning
                            </Typography>

                            {/* Room Info */}
                            <Typography className="text-sm small text-gray-700">
                                Entire studio • 1 bathroom • 21m² • 1 full bed
                            </Typography>

                            {/* Cancellation Policy */}
                            <Typography className="text-sm bold font-bold text-green-700 mt-2">
                                Free cancellation
                            </Typography>
                            <Typography className="text-sm text-green-700">
                                You can cancel later, so lock in this great price today!
                            </Typography>
                        </Box>

                        {/* Price + CTA Button */}
                        <Box className="flex flex-col justify-end items-end min-w-fit text-right mt-4 md:mt-0">
                            <Typography className="text-2xl bold font-extrabold text-gray-800">$123</Typography>
                            <Typography className="text-xs bold text-gray-500 font-semibold mb-1">
                                Includes taxes and fees
                            </Typography>
                            <Button
                                variant="contained"
                                className="!bg-[#0071c2] !text-[white] !font-semibold normal-case !text-sm px-4 py-1 shadow"
                            >
                                See availability
                            </Button>
                        </Box>
                    </Box>
                    <Box className="relative mb-2 bg-white flex flex-col md:flex-row rounded-xl shadow-2xl gap-4 w-full p-4">

                        {/* Rating Box — Fixed at Card's Top-Right Corner */}
                        <Box className="absolute top-4 right-4 flex items-center gap-2 z-10">
                            <Typography className="text-sm text-gray-800 font-medium bold1">Excellent</Typography>
                            <Box className="bg-[#132a13] text-white text-xs font-bold px-2 py-[2px] rounded-lg shadow">
                                8.9
                            </Box>
                        </Box>

                        {/* Image Section */}
                        <img
                            src="https://images.pexels.com/photos/19790158/pexels-photo-19790158.jpeg"
                            alt="Tower Street Apartments"
                            className="w-full md:w-[200px] h-[200px] object-cover rounded-md"
                        />

                        {/* Center Content */}
                        <Box className="flex flex-col justify-around w-full mt-2 md:mt-0">
                            {/* Title */}
                            <Typography className="text-[#132a13] lsTitle font-extrabold text-xl md:text-2xl hover:underline cursor-pointer tracking-wide leading-tight mb-2">
                                Tower Street Apartments
                            </Typography>

                            {/* Distance */}
                            <Typography className="text-sm bold text-gray-700">500m from center</Typography>

                            {/* Taxi Badge */}
                            <Box className="bg-green-600 bold pad text-white text-xs px-2 py-[2px] w-fit mt-1 rounded">
                                Free airport taxi
                            </Box>

                            {/* Room Type */}
                            <Typography className="text-sm font-semibold mt-2">
                                Studio Apartment with Air conditioning
                            </Typography>

                            {/* Room Info */}
                            <Typography className="text-sm small text-gray-700">
                                Entire studio • 1 bathroom • 21m² • 1 full bed
                            </Typography>

                            {/* Cancellation Policy */}
                            <Typography className="text-sm bold font-bold text-green-700 mt-2">
                                Free cancellation
                            </Typography>
                            <Typography className="text-sm text-green-700">
                                You can cancel later, so lock in this great price today!
                            </Typography>
                        </Box>

                        {/* Price + CTA Button */}
                        <Box className="flex flex-col justify-end items-end min-w-fit text-right mt-4 md:mt-0">
                            <Typography className="text-2xl bold font-extrabold text-gray-800">$123</Typography>
                            <Typography className="text-xs bold text-gray-500 font-semibold mb-1">
                                Includes taxes and fees
                            </Typography>
                            <Button
                                variant="contained"
                                className="!bg-[#0071c2] !text-[white] !font-semibold normal-case !text-sm px-4 py-1 shadow"
                            >
                                See availability
                            </Button>
                        </Box>
                    </Box>
                    <Box className="relative mb-2 bg-white flex flex-col md:flex-row rounded-xl shadow-2xl gap-4 w-full p-4">

                        {/* Rating Box — Fixed at Card's Top-Right Corner */}
                        <Box className="absolute top-4 right-4 flex items-center gap-2 z-10">
                            <Typography className="text-sm text-gray-800 font-medium bold1">Excellent</Typography>
                            <Box className="bg-[#132a13] text-white text-xs font-bold px-2 py-[2px] rounded-lg shadow">
                                8.9
                            </Box>
                        </Box>

                        {/* Image Section */}
                        <img
                            src="https://images.pexels.com/photos/19790158/pexels-photo-19790158.jpeg"
                            alt="Tower Street Apartments"
                            className="w-full md:w-[200px] h-[200px] object-cover rounded-md"
                        />

                        {/* Center Content */}
                        <Box className="flex flex-col justify-around w-full mt-2 md:mt-0">
                            {/* Title */}
                            <Typography className="text-[#132a13] lsTitle font-extrabold text-xl md:text-2xl hover:underline cursor-pointer tracking-wide leading-tight mb-2">
                                Tower Street Apartments
                            </Typography>

                            {/* Distance */}
                            <Typography className="text-sm bold text-gray-700">500m from center</Typography>

                            {/* Taxi Badge */}
                            <Box className="bg-green-600 bold pad text-white text-xs px-2 py-[2px] w-fit mt-1 rounded">
                                Free airport taxi
                            </Box>

                            {/* Room Type */}
                            <Typography className="text-sm font-semibold mt-2">
                                Studio Apartment with Air conditioning
                            </Typography>

                            {/* Room Info */}
                            <Typography className="text-sm small text-gray-700">
                                Entire studio • 1 bathroom • 21m² • 1 full bed
                            </Typography>

                            {/* Cancellation Policy */}
                            <Typography className="text-sm bold font-bold text-green-700 mt-2">
                                Free cancellation
                            </Typography>
                            <Typography className="text-sm text-green-700">
                                You can cancel later, so lock in this great price today!
                            </Typography>
                        </Box>

                        {/* Price + CTA Button */}
                        <Box className="flex flex-col justify-end items-end min-w-fit text-right mt-4 md:mt-0">
                            <Typography className="text-2xl bold font-extrabold text-gray-800">$123</Typography>
                            <Typography className="text-xs bold text-gray-500 font-semibold mb-1">
                                Includes taxes and fees
                            </Typography>
                            <Button
                                variant="contained"
                                className="!bg-[#0071c2] !text-[white] !font-semibold normal-case !text-sm px-4 py-1 shadow"
                            >
                                See availability
                            </Button>
                        </Box>
                    </Box>
                    <Box className="relative mb-2 bg-white flex flex-col md:flex-row rounded-xl shadow-2xl gap-4 w-full p-4">

                        {/* Rating Box — Fixed at Card's Top-Right Corner */}
                        <Box className="absolute top-4 right-4 flex items-center gap-2 z-10">
                            <Typography className="text-sm text-gray-800 font-medium bold1">Excellent</Typography>
                            <Box className="bg-[#132a13] text-white text-xs font-bold px-2 py-[2px] rounded-lg shadow">
                                8.9
                            </Box>
                        </Box>

                        {/* Image Section */}
                        <img
                            src="https://images.pexels.com/photos/19790158/pexels-photo-19790158.jpeg"
                            alt="Tower Street Apartments"
                            className="w-full md:w-[200px] h-[200px] object-cover rounded-md"
                        />

                        {/* Center Content */}
                        <Box className="flex flex-col justify-around w-full mt-2 md:mt-0">
                            {/* Title */}
                            <Typography className="text-[#132a13] lsTitle font-extrabold text-xl md:text-2xl hover:underline cursor-pointer tracking-wide leading-tight mb-2">
                                Tower Street Apartments
                            </Typography>

                            {/* Distance */}
                            <Typography className="text-sm bold text-gray-700">500m from center</Typography>

                            {/* Taxi Badge */}
                            <Box className="bg-green-600 bold pad text-white text-xs px-2 py-[2px] w-fit mt-1 rounded">
                                Free airport taxi
                            </Box>

                            {/* Room Type */}
                            <Typography className="text-sm font-semibold mt-2">
                                Studio Apartment with Air conditioning
                            </Typography>

                            {/* Room Info */}
                            <Typography className="text-sm small text-gray-700">
                                Entire studio • 1 bathroom • 21m² • 1 full bed
                            </Typography>

                            {/* Cancellation Policy */}
                            <Typography className="text-sm bold font-bold text-green-700 mt-2">
                                Free cancellation
                            </Typography>
                            <Typography className="text-sm text-green-700">
                                You can cancel later, so lock in this great price today!
                            </Typography>
                        </Box>

                        {/* Price + CTA Button */}
                        <Box className="flex flex-col justify-end items-end min-w-fit text-right mt-4 md:mt-0">
                            <Typography className="text-2xl bold font-extrabold text-gray-800">$123</Typography>
                            <Typography className="text-xs bold text-gray-500 font-semibold mb-1">
                                Includes taxes and fees
                            </Typography>
                            <Button
                                variant="contained"
                                className="!bg-[#0071c2] !text-[white] !font-semibold normal-case !text-sm px-4 py-1 shadow"
                            >
                                See availability
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}

export default Lists