import React from 'react'
import { Stack, Alert, AlertTitle,Button} from '@mui/material'
import { Check } from '@mui/icons-material'
export const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity='error'>This is an error Alert</Alert>
            <Alert severity='warning'>This is a Warnign Alert</Alert>
            <Alert severity='info'>This is an Info Alert</Alert>
            <Alert severity='success'>This is a success Alert</Alert>

            <Alert variant='outlined' severity='error'>This is an error Alert</Alert>
            <Alert variant='outlined' severity='warning'>This is a Warnign Alert</Alert>
            <Alert variant='outlined' severity='info'>This is an Info Alert</Alert>
            <Alert variant='outlined' severity='success'>This is a success Alert</Alert>

            <Alert variant='filled' severity='error'>This is an error Alert</Alert>
            <Alert variant='filled' severity='warning'>This is a Warnign Alert</Alert>
            <Alert variant='filled' severity='info'>This is an Info Alert</Alert>
            <Alert variant='filled' severity='success'>This is a success Alert</Alert>

            <Alert variant='filled' severity='error' onClose={()=>alert("Close Clicked")}>
                <AlertTitle>Error</AlertTitle>
                This is an error Alert</Alert>
            <Alert variant='filled' severity='warning' onClose={()=>alert("Close Clicked")}>
                <AlertTitle>Warning</AlertTitle>

                This is a Warnign Alert</Alert>
            <Alert variant='filled' severity='info' action={
                <Button color='inherit' size='small'>Undo</Button>
            }>
                <AlertTitle>Info</AlertTitle>

                This is an Info Alert</Alert>
            <Alert variant='filled' severity='success' icon={<Check fontSize='inherit'/>} onClose={()=>alert("Close Clicked")}>
                <AlertTitle>Success</AlertTitle>
                This is a success Alert</Alert>

        </Stack>
    )
}
