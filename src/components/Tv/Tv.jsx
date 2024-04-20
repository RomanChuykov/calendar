
import { CalendarS} from './Tv.styled';
import React, { useState } from 'react';
// import Calendar from 'react-calendar';
import './Tv.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import en from 'date-fns/locale/uk'; // Импортируем нужную локаль

function Tv() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h1>Tv</h1>
      <CalendarS onChange={onChange} value={[date,new Date(2024, 4, 15)]} locale="en"/>
    </div>
  );
}

export default Tv;