
import { CalendarS} from './Phone.styled';
import React, { useState, useEffect } from 'react';
import './Phone.css';



 

 function Phone({phoneDate,postData}) {
  const [date, setDate] = useState({today:new Date(),endDate:phoneDate});
  function onChange (newDate) {
    const password=prompt("Enter password");
    if (password!==false && password==="gaw") {
      setDate({...date,endDate:newDate});
      postData("Phone",newDate);
    } else {
      alert("You entered wrong password")
    }
  };
  
useEffect(()=>{
  setDate(prevState=>({...prevState,endDate:phoneDate}))
  },[phoneDate])

  return (
    <div>
      <h1>Phone</h1>
      <CalendarS onChange={onChange} value={[date.today,date.endDate]} locale="en"/>
    </div>
  );
}

export default Phone;

