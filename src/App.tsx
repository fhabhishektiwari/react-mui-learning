import React from 'react';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'

import { MuiDateRangePicker } from './components/MuiDateRangePicker';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: 'Check-in', end: 'Check-out' }}>
    <div className=''>
      <MuiDateRangePicker/>
    </div>
    </LocalizationProvider>
  );
}

export default App;
