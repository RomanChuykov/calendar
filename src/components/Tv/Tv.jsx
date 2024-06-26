
import { CalendarS} from './Tv.styled';
import React, { useState, useEffect } from 'react';
import './Tv.css';



 

 function Tv({tvDate,postData}) {
  const [date, setDate] = useState({today:new Date(),endDate:tvDate});
  function onChange (newDate) {
    const password=prompt("Enter password");
    if (password!==false && password==="gaw") {
      setDate({...date,endDate:newDate});
      postData("Tv",newDate);
      
    } else {
      alert("You entered wrong password")
    }
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

