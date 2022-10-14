import React,{useState} from 'react'
import {Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from '@mui/material'
export const MuiDialog = () => {
    const [open,setOpen]=useState(false)
    console.log({open})
    const handleClose=()=>{
        setOpen(false)
    }
  return (
    <>
        <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
        <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description' open={open} onClose={handleClose}>
            <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
            <DialogContent>
                <DialogContentText id='dialog-description'>Are you sure you want to submit the test? You will not be able to edit after submitting</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} autoFocus>Submit</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}
