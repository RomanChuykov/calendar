
import { CalendarS} from './Tv.styled';
import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
import './Tv.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import en from 'date-fns/locale/uk'; // Импортируем нужную локаль
   import axios from 'axios';
 import { getAPI } from 'components/fetchAPI/fetchAPI';

 

 function Tv() {
  const [date, setDate] = useState({today:new Date(),endDate:new Date()});

  const onChange = (newDate) => {
    setDate({...date,endDate:newDate});
    
  
    console.log('newDate', newDate)
  };
  
  async function getData(){
    console.log("getData")
     try {
      const data=await getAPI()
      console.log('data', data.tv)
      setDate(prevState=>({
      ...prevState,endDate:data.tv
      }))
    } catch (error) {
      console.log(error.message)
    }
   }
useEffect(()=>{getData();},[])

  return (
    <div>
      <h1>Tv</h1>
      <CalendarS onChange={onChange} value={[date.today,date.endDate]} locale="en"/>
    </div>
  );
}

export default Tv;
/*()

{
  tv:25.06.2004,
  phone:25.06.2024,
  computer:25.06.2024
}


*/