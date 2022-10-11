import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'
export const MuiSelect = () => {
    // const [country, setCountry] = useState('')
    // console.log(country);
    const [countries,setCountries]=useState<string[]>([])
    console.log({countries})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setCountry(event.target.value as string)
        const value=event.target.value;
        setCountries(typeof value==='string'?value.split(','):value)
    }

    return (
        <Box width='250px' margin={5}>
            <TextField
             label='Select Country'
             select
            //  value={country}
            value={countries}
             onChange={handleChange}
             fullWidth
             size='small'
             SelectProps={{
                multiple:true
             }}
             color='secondary'
             helperText='Please select the countries name'
             >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='RS'>RUSSIA</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='UA'>UAE</MenuItem>
            </TextField>
        </Box>
    )
}
