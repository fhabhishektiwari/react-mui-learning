import React from 'react'
import { Box, Stack, Grid, Divider } from '@mui/material'
export const MuiGrid = () => {
    return (
        <>
            <Stack
                sx={{ border: '2px solid' }}
                direction='row'
                spacing={2}
                divider={<Divider orientation='vertical' flexItem />}

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
            {/* grid between 1 to 12 
            spacing={2}
            */}
            <Grid container my={4} rowSpacing={2} columnSpacing={2}>

                <Grid item xs={12}>
                    <Box bgcolor='primary.light' p={2}>Item 1</Box>
                </Grid>
                <Grid item xs={12}>
                    <Box bgcolor='primary.light' p={2}>Item 2</Box>
                </Grid>
                <Grid item xs={12}>
                    <Box bgcolor='primary.light' p={2}>Item 3</Box>

                </Grid>
                <Grid item xs={12}>
                    <Box bgcolor='primary.light' p={2}>Item 4</Box>
                </Grid>

            </Grid>
        </>
    )
}
