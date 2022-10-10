import React from 'react'
import {Typography} from '@mui/material'
const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading </Typography>
        <Typography variant='h2'>h2 Heading </Typography>
        <Typography variant='h3'>h3 Heading </Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading </Typography>
        <Typography variant='h5'>h5 Heading </Typography>
        <Typography variant='h6'>h6 Heading </Typography>
        <Typography variant='subtitle1'>sub title 1 </Typography>
        <Typography variant='subtitle2'>sub title 2 </Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda deleniti nemo molestias saepe, dicta reprehenderit voluptas ducimus quod voluptatibus, voluptatum officiis quibusdam soluta sit quam similique! Modi, magnam accusantium? </Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti enim porro, quibusdam vero adipisci quo quis debitis perspiciatis dolorem voluptas praesentium, quidem neque quasi laborum officiis ea nam eveniet sed!</Typography>

    </div>
  )
}

export default MuiTypography
