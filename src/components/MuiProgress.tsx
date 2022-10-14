import React from 'react'
import {Stack,CircularProgress,LinearProgress} from '@mui/material'
export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress/>
        <CircularProgress color='success'/>
        <CircularProgress color='error' variant='determinate' value={60}/>

        <LinearProgress/>
        <LinearProgress color='success'/>
        <LinearProgress color='error' variant='determinate' value={60}/>


    </Stack>
  )
}
