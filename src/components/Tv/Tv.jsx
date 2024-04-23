
import { CalendarS} from './Tv.styled';
import React, { useState } from 'react';
// import Calendar from 'react-calendar';
import './Tv.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import en from 'date-fns/locale/uk'; // Импортируем нужную локаль

const express=require('express');
const fs=require('fs');
const file=express();
const port=5000;

file.use(express.json())


function Tv() {
  const [date, setDate] = useState({today:new Date(),endDate:new Date()});

  const onChange = (newDate) => {
    setDate({...date,endDate:newDate});
  };

  return (
    <div>
      <h1>Tv</h1>
      <CalendarS onChange={onChange} value={[date.today,date.endDate]} locale="en"/>
    </div>
  );
}

export default Tv;