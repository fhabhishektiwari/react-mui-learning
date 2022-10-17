import React from 'react';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import { MuiDatePicker } from './components/MuiDatePicker';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className=''>
      <MuiDatePicker/>
    </div>
    </LocalizationProvider>
  );
}

export default App;
