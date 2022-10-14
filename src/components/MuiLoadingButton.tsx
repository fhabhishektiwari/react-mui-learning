import { Stack } from '@mui/material'
import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save'


export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined'>Submit</LoadingButton>

        <LoadingButton variant='outlined' loadingIndicator='Loading...'>Fetch Data</LoadingButton>
        <LoadingButton loading variant='outlined' loadingIndicator='Loading...'>Fetch Data</LoadingButton>
        <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>Save</LoadingButton>
        <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>Save</LoadingButton>



    </Stack>
  )
}
