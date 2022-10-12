import React from 'react'
import { Stack, ImageList, ImageListItem,Box,ImageListItemBar } from '@mui/material'

export const MuiImageList = () => {
    return (
        <Stack spacing={4}>
            <ImageList cols={3} sx={{width:500,height:450}} rowHeight={164}>
                {itemData.map(item => (
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                        <ImageListItemBar title={item.title}/>
                    </ImageListItem>

                ))}
            </ImageList>
            <ImageList variant='woven' cols={3} sx={{width:500,height:450}} gap={8}>
                {itemData.map(item => (
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                    </ImageListItem>
                ))}
            </ImageList>
            <Box sx={{width:500,height:450,overflowY:'scroll'}}>
            <ImageList variant='masonry' cols={3}  gap={8}>
                {itemData.map(item => (
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=264&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                    </ImageListItem>
                ))}
            </ImageList>
            </Box>
        </Stack>
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Salad'
    },
    {
        img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Fruits'
    },
    {
        img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Fruits, salad and gray bowls'
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1661311944974-b5d24554c2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Pine-Apple'
    },
    {
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Salad'
    },
    {
        img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Fruits'
    },
    {
        img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Fruits, salad and gray bowls'
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1661311944974-b5d24554c2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Pine-Apple'
    },
    {
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Salad'
    },
    {
        img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Fruits'
    },
    {
        img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Fruits, salad and gray bowls'
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1661311944974-b5d24554c2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Pine-Apple'
    },{
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Salad'
    },
    {
        img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Fruits'
    },
    {
        img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Fruits, salad and gray bowls'
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1661311944974-b5d24554c2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Pine-Apple'
    },{
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Salad'
    },
    {
        img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Fruits'
    },
    {
        img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Fruits, salad and gray bowls'
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1661311944974-b5d24554c2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Pine-Apple'
    },{
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Salad'
    },
    {
        img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Fruits'
    },
    {
        img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Fruits, salad and gray bowls'
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1661311944974-b5d24554c2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Pine-Apple'
    },
]
