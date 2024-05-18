
import { CalendarS} from './Computer.styled';
import React, { useState, useEffect } from 'react';
import './Computer.css';



 

 function Computer({compDate,postData}) {
  const [date, setDate] = useState({today:new Date(),endDate:compDate});
  function onChange (newDate) {
    const password=prompt("Enter password");
    if (password!==false && password==="gaw") {
      setDate({...date,endDate:newDate});
      postData("Computer",newDate);
      
    } else {
      alert("You entered wrong password")
    }
  };
  
useEffect(()=>{
  setDate(prevState=>({...prevState,endDate:compDate}))
  },[compDate])

  return (
    <div>
      <h1>Computer</h1>
      <CalendarS onChange={onChange} value={[date.today,date.endDate]} locale="en"/>
    </div>
  );
}

export default Computer;

