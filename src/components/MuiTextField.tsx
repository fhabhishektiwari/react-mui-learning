import React,{useState} from 'react'
import {Stack,TextField,InputAdornment} from '@mui/material';
export const MuiTextField = () => {
    const [value,setValue]=useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Secondary small' size='small' color='secondary' />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form Input' required value={value} onChange={e=>setValue(e.target.value)} error={!value} helperText={!value?'Required':'Do not share your password with anyone'}/>
            <TextField label='Password' type='password' helperText='Do not share your password with anyone' size='small'/>
            <TextField label='Read Only' inputProps={{readOnly:true}} />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Ammout' InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label='Weight' InputProps={{
                endAdornment:<InputAdornment position='end'>Kg</InputAdornment>
            }}/>
        </Stack>
    </Stack>
  )
}
