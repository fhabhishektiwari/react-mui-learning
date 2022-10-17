import React from 'react';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'

import { MuiDateRangePicker } from './components/MuiDateRangePicker';
import {MiuTabs} from './components/MiuTabs';

function App() {
  return (

    <div className=''>
      <MiuTabs/>
    </div>
  );
}

export default App;
