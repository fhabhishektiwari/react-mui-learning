import { Skeleton, Stack, Box, Avatar, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
    return (
        <>
            {/*<Stack spacing={1} width={250}>
        <Skeleton variant='text' sx={{ fontSize: '1rem' }}/>
        <Skeleton variant='circular' width={50} height={50} animation='wave'/>
        <Skeleton variant='rectangular' width={250} height={100} animation={false}/>
        <Skeleton variant='rounded' width={250} height={100}/>
    </Stack>*/}

            <Box sx={{ width: '250px' }}>
                {
                    loading ? (
                        <Skeleton variant='rectangular' width={256} height={144} animation='wave' />
                    ) : (
                        <img src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='skeleton image' width={256} height={144} />
                    )
                }
                <Stack spacing={1} sx={{width:'100%',marginTop:'12px'}} direction='row'>
                {
                    loading?(
                        <Skeleton variant='circular' width={40} height={40} animation='wave'/>
                    ):(
                        <Avatar>V</Avatar>
                    )
                }
                <Stack sx={{width:'80%'}}>
                    {
                        loading?(
                            <>
                                <Typography variant='body1'>
                                    <Skeleton variant='text' width='100%' animation='wave'/>
                                </Typography>
                                <Typography variant='body2'>
                                    <Skeleton variant='text' width='100%' animation='wave'/>
                                </Typography>
                            </>
                        ):(
                            <>
                                <Typography variant='body1'>React Mui Tut</Typography>
                            </>
                        )
                    }
                </Stack>
                </Stack>
            </Box>
        </>

    )
}
