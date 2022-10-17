import React, { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker, TimePicker,DateTimePicker } from '@mui/x-date-pickers'
// import { Dayjs } from 'dayjs';

export const MuiDatePicker = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectDateTime,setSelectDateTime]=useState<Date |null>(null);
  console.log({ value:value && value.toLocaleDateString() })
  console.log({ selectedTime:selectedTime && selectedTime.toLocaleTimeString()})
  console.log({selectDateTime:selectDateTime && selectDateTime.toLocaleString()})

  return (
    <Stack spacing={4} sx={{ width: '250px', margin: 12 }}>
      <DatePicker
        label='Date Picker'
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />

      <TimePicker
        label='Time Picker'
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
      <DateTimePicker
        label='Date Time Picker'
        value={selectDateTime}
        onChange={(newValue) => setSelectDateTime(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  )
}
