import React from 'react'
import {Stack,Badge} from '@mui/material'
import { Mail } from '@mui/icons-material'
export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row' m={5}>
        <Badge badgeContent={5} color='primary'>
            <Mail/>
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
            <Mail/>
        </Badge>
        <Badge badgeContent={100} color='secondary'>
            <Mail/>
        </Badge>
        <Badge badgeContent={100} color='secondary' max={999}>
            <Mail/>
        </Badge>
        <Badge variant='dot' color='secondary'>
            <Mail/>
        </Badge>
        <Badge variant='dot' color='secondary' invisible={true}>
            <Mail/>
        </Badge>
    </Stack>
  )
}
