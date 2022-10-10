import React,{useState} from 'react'
import { Stack, Button,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log({formats,})
    const handleFormatChange=(_event:React.MouseEvent<HTMLElement>,updatedFormats:string | null)=>{
        setFormats(updatedFormats)
    }


    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant='text' href='https://www.google.com/'>Text</Button>
                <Button variant='contained'>Contened</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text' color='primary'>Primary</Button>
                <Button variant='text' color='secondary'>Secondary</Button>
                <Button variant='text' color='error'>Error</Button>
                <Button variant='text' color='warning'>Warning</Button>
                <Button variant='text' color='info'>Info</Button>
                <Button variant='text' color='success'>Success</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='info'>Info</Button>
                <Button variant='outlined' color='success'>Success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='large'>Large</Button>
                <Button variant='contained' size='medium'>Medium</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small' startIcon={<SendIcon/>} disableRipple onClick={()=>alert("clicked!")}>Send</Button>
                <Button variant='contained' size='large' disableElevation endIcon={<SendIcon/>}>Send</Button>
                <IconButton aria-label='send' color='error' size='small'>
                    <SendIcon/>
                </IconButton>
            </Stack>

            <Stack spacing={2} direction='row'>
                <ButtonGroup variant='outlined'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                </Stack>
                <Stack spacing={2} direction='row'>
                <ButtonGroup variant='contained'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                </Stack>
                <Stack spacing={2} direction='row'>
                <ButtonGroup variant='text' orientation='vertical' color='secondary' size='small'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                </Stack>
                <Stack spacing={2} direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' color='secondary' size='small' aria-label="alignment button group">
                    <Button onClick={()=>alert("One Clicked")}>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                {/* exclusive means selected one at a time */}
                <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} size='small' color='success' orientation='vertical' exclusive>
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label='italic'>
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value="underline" aria-label='underline'>
                        <FormatUnderlinedIcon/>
                    </ToggleButton>

                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
