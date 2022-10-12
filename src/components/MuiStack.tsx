import React from 'react'
import {Box,Stack,Divider} from '@mui/material'
export const MuiStack = () => {
  return (
    <Stack
        sx={{border:'2px solid'}}
        direction='row'
        spacing={2}
        divider={<Divider orientation='vertical' flexItem/>}
    
    >
        {/* direction='row,column,row-reverse,column-reverse' */}
            <Box sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                height: '200px',
                width: '200px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'secondary.light'
                }
            }}>MuiLayout</Box>
            <Box display='flex' height='200px' width='200px' p={2} bgcolor='success.light'></Box>
        </Stack>
  )
}
