
import { CalendarS} from './Tv.styled';
import React, { useState, useEffect } from 'react';
import './Tv.css';



 

 function Tv({tvDate,postData}) {
  const [date, setDate] = useState({today:new Date(),endDate:tvDate});
  const onChange = (newDate) => {
    setDate({...date,endDate:newDate});
    postData(newDate);
  };
  
useEffect(()=>{
  setDate(prevState=>({...prevState,endDate:tvDate}))
  },[tvDate])

  return (
    <div>
      <h1>Tv</h1>
      <CalendarS onChange={onChange} value={[date.today,date.endDate]} locale="en"/>
    </div>
  );
}

export default Tv;

