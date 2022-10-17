import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';

export const MuiDateRangePicker = () => {
    const [value, setValue] = useState<DateRange<Date>>([null, null])
    console.log({value:value && value.toLocaleString()})
    return (
        <Box width={500}>
            <DateRangePicker
                startText='Check-in'
                endText='check-out'
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(startProps,endProps)=>(
                    <>
                        <TextField {...startProps}/>
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps}/>
                    </>
                )}
            />
        </Box>
    )
}
