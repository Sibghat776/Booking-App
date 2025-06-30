import react from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import HotelIcon from '@mui/icons-material/Hotel';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import FlightIcon from '@mui/icons-material/Flight';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from "@mui/material"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import TextField from '@mui/material/TextField';
import { Calendar, DateRangePicker } from 'react-date-range';
import React, { useState } from 'react';
import { addDays } from 'date-fns';
import { format } from 'date-fns';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Header() {
    let [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <div className='max-w-screen bg-[#132a13] mx-auto px-16 pt-2'>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
                className='w-auto pt-4'
            >
                <Item style={{ backgroundColor: "transparent", borderRadius: "20px", color: "#F7FFF4", border: "1px solid #F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><HotelIcon style={{ fontSize: "1.2rem" }} />Stays</Item>
                <Item style={{ backgroundColor: "transparent", boxShadow: "none", color: "#F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><FlightIcon style={{ fontSize: "1.2rem" }} />Flights</Item>
                <Item style={{ backgroundColor: "transparent", boxShadow: "none", color: "#F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><TimeToLeaveIcon style={{ fontSize: "1.2rem" }} />Car rentals</Item>
                <Item style={{ backgroundColor: "transparent", boxShadow: "none", color: "#F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><HotelIcon style={{ fontSize: "1.2rem" }} />Attractions</Item>
                <Item style={{ backgroundColor: "transparent", boxShadow: "none", color: "#F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><LocalTaxiIcon style={{ fontSize: "1.2rem" }} />Airport Taxi</Item>
            </Stack>

            <Typography variant="h3" color='#F7FFF4' paddingY={"10px"} component="h2">
                A lifetime of discount? It's Genius.
            </Typography>

            <Typography variant="p" color='#F7FFF4' paddingBottom={"10px"} component="p">
                Get rewarded fro your travels - unlock instant savings of 10% or more with a free Sibghat booking account.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#31572c", margin: "35px 0px" }}>Sign in / Register</Button>


            <Stack direction="row" className='bg-[#ecf39e] top-10 relative w-auto items-center justify-center p-1 py-2 border-[#90a955] border-4' spacing={2}>
                <Item style={{ display: "flex", justifyContent: "center", width: "30%", fontSize: "1.01rem", boxShadow: "none", height: "100%", color: "#132a13", alignItems: "center", gap: "16px", backgroundColor: "transparent" }}><HotelIcon /><TextField variant='standard' className='border-none' placeholder='Where are you going?' /></Item>
                <Item className='relative' style={{ backgroundColor: "transparent", width: "30%", fontSize: "1.01rem", boxShadow: "none", height: "100%", color: "#132a13", cursor: "pointer" }} onClick={() => { setOpenDate(!openDate) }}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                    {openDate && <DateRangePicker
                        className='dateRange'
                        onChange={item => setDate([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        ranges={date}
                    />}
                </Item>
                <Item style={{ position: "relative", backgroundColor: "transparent", fontSize: "1.01rem",cursor: "pointer", width: "30%", boxShadow: "none", height: "100%", color: "#132a13" }}>2 Adults 2 Children 1 room</Item>
                <Box>
                    <Stack className='absolute bottom-[-40px] right-0' direction={'row'} justifyContent={'center'} alignItems={'center'} gap={"10px"}>
                    <Button variant="contained" style={{ backgroundColor: "#132a13" }}>+</Button>
                    <Typography>1</Typography>
                    <Button variant="contained" style={{ backgroundColor: "#132a13" }}>+</Button>
                </Stack>
                    <Stack className='absolute bottom-[-40px] right-0' direction={'row'} justifyContent={'center'} alignItems={'center'} gap={"10px"}>
                    <Button variant="contained" style={{ backgroundColor: "#132a13" }}>+</Button>
                    <Typography>0</Typography>
                    <Button variant="contained" style={{ backgroundColor: "#132a13" }}>+</Button>
                </Stack>
                    <Stack className='absolute bottom-[-40px] right-0' direction={'row'} justifyContent={'center'} alignItems={'center'} gap={"10px"}>
                    <Button variant="contained" style={{ backgroundColor: "#132a13" }}>+</Button>
                    <Typography>1</Typography>
                    <Button variant="contained" style={{ backgroundColor: "#132a13" }}>+</Button>
                </Stack>
                </Box>
                <Button variant="contained" color="success" style={{ marginRight: "19px" }}>Success</Button>
            </Stack>
        </div>
    );
}
