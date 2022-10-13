import React from 'react'
import {Stack,Avatar,AvatarGroup} from '@mui/material'

export const MuiAvatar = () => {
  return (
    <Stack spacing={4} m={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor:'success.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'primary.main'}}>CK</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup max={3}>
            <Avatar sx={{bgcolor:'success.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'primary.main'}}>CK</Avatar>
            <Avatar src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='jane deo'/>
            <Avatar src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='natasha'/>
            </AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup>
            <Avatar sx={{bgcolor:'success.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'primary.main'}}>CK</Avatar>
            <Avatar variant='square' src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='jane deo'/>
            <Avatar variant='rounded' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='natasha'/>
            </AvatarGroup>
        </Stack>
    </Stack>
  )
}
