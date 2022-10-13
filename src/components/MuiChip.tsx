import React,{useState} from 'react'
import {Stack,Chip,Avatar} from '@mui/material'
import { Face } from '@mui/icons-material'
export const MuiChip = () => {
    const [chips,setChips]=useState(['click 1','click 2','click 3'])
    const handleDelete=(chipToDelete:string)=>{
        setChips(chips=>chips.filter(chip=>chip !== chipToDelete))
    }
  return (
    <Stack direction='row' spacing={1} m={5}>
        <Chip label='Chip' color='primary' size='small'/>
        <Chip label='Chip outlined' color='secondary' size='small' variant='outlined'/>
        <Chip label='Chip outlined' color='success' size='small' variant='outlined' avatar={<Avatar>A</Avatar>}/>
        <Chip label='Chip' color='primary' size='small' icon={<Face/>}/>
        <Chip label='Click' color='success' size='small' onClick={()=>alert("Clicked")}/>
        <Chip label='Delete' color='error' size='small' onClick={()=>alert("Clicked")} onDelete={()=>alert("Delete Called")}/>
        {
            chips.map(chip=>(
                <Chip key={chip} color='error' size='small' label={chip} onDelete={()=>{
                    handleDelete(chip)
                }}/>
            ))
        }
    </Stack>
  )
}
