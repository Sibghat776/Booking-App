import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const EmailList = () => {
    return (
        <>
            <Stack padding={"2rem"} color={"#132a13"} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} width={"100%"} bgcolor={"#ecf39e"}>
                <Box>
                    <Typography textAlign={"center"} fontWeight={"bolder"} variant='h5'>Save time, save money</Typography>
                    <Typography textAlign={"center"} padding={"0px 0px 1.4rem 0px"} fontWeight={"bolder"} variant='h6'>Sign up and we'll send the best deals for you</Typography>
                    <Stack flexDirection={'row'} justifyContent={'start'} alignItems={'center'} >
                        <TextField placeholder='Your email' style={{marginRight: "1%", width: "100%", backgroundColor: "white", color: "black" }} variant='outlined' />
                        <Button variant='contained' style={{ padding: "1rem 1.4rem", backgroundColor: "#31572c", fontWeight: "bold" }}>Subscribe</Button>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default EmailList