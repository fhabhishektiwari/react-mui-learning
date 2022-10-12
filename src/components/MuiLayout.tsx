import React from 'react'
import { Box } from '@mui/material'
export const MuiLayout = () => {
    return (
        <>
        {/* p={2} means 2*8=16px
            sx is used for styling
        */}
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
        </>
    )
}
