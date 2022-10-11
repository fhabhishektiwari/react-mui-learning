import React,{useState} from 'react'
import {Stack,Rating} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
    const [rating,setRating]=useState<number|null>(2)
    console.log({rating})
    const handleChange=(_event:React.ChangeEvent<{}>,newValue: number|null)=>{
        setRating(newValue)
    }
  return (
    <Stack marginTop={12}>
        <Rating value={rating} onChange={handleChange} precision={0.5} />
        <Rating value={rating} onChange={handleChange} precision={0.5} icon={<FavoriteIcon fontSize='inherit' color='error'/>} emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} readOnly highlightSelectedOnly/>
    </Stack>
  )
}
