import React,{useState} from 'react';
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,FormHelperText} from '@mui/material';

export const MuiRadioButton = () => {
    const [value, setValue] = useState('')
    console.log({value})
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }
  return (
    <Box width={250} margin={12}>
        <FormControl error>
            <FormLabel>
                Year of Experience
            </FormLabel>
            <RadioGroup
            name='job-experience-group'
            aria-labelledby='job-experience-group-label'
            value={value}
            onChange={handleChange}
            row
            >
                <FormControlLabel control={<Radio size='medium' color='success'/>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio size='small' color='secondary'/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio size='small' color='error'/>} label='6-10' value='6-10'/>
            </RadioGroup>
            <FormHelperText>Select Your Experience</FormHelperText>
        </FormControl>
    </Box>
  )
}
