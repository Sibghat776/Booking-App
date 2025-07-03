import { Box, Button, Chip, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import React from 'react'

const FeaturedProperties = () => {
    return (
        <>

            <ImageList
                sx={{ width: "100%", height: 400, margin: "2rem 0px" }}
                cols={4}
                gap={0}
                rowHeight={380}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ gap: "0.2rem", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                        <Box className="w-full px-2 h-full overflow-hidden rounded-2xl">
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full p-0 object-cover"
                            />
                        </Box>
                        <Typography
                            variant="h6"
                            className="browseProperty text-start font-semibold"
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            className="text-lg text-gray-600"
                        >
                            {item.property}
                        </Typography>
                        <Typography
                            variant="body2"
                            className="text-lg text-gray-600"
                        >
                            {item.price}
                        </Typography>
                        <Stack flexDirection={'row'} alignItems={'center'} gap={"0.3rem"}>
                            <Chip label={item.rating} style={{ margin: "0.4rem 0px", height: "1.3rem", backgroundColor: "#132a13", color: "#ecf39e", width: "20%", borderRadius: "2px" }} />
                            <Typography variant='p'>{item.tag}</Typography>
                        </Stack>
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}

export default FeaturedProperties

const itemData = [
    {
        img: 'https://images.pexels.com/photos/7512038/pexels-photo-7512038.jpeg',
        title: 'Apart Hotel',
        property: "233 Properties",
        price: "Starting from $2135",
        rating: "8.9",
        tag: "Excellent"
    },
    {
        img: 'https://images.pexels.com/photos/7512038/pexels-photo-7512038.jpeg',
        title: 'Appartment',
        property: "233 Properties",
        price: "Starting from $2135",
        rating: "8.9",
        tag: "Excellent"
    },
    {
        img: 'https://images.pexels.com/photos/7512038/pexels-photo-7512038.jpeg',
        title: 'Resorts',
        property: "233 Properties",
        price: "Starting from $2135",
        rating: "8.9",
        tag: "Excellent"
    },
    {
        img: 'https://images.pexels.com/photos/7512038/pexels-photo-7512038.jpeg',
        title: 'Villas',
        property: "233 Properties",
        price: "Starting from $2135",
        rating: "8.9",
        tag: "Excellent"
    }
];
