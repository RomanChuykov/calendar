
import { CalendarS} from './Tv.styled';
import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
import './Tv.css';
// import { registerLocale, setDefaultLocale } from 'react-datepicker';
// import en from 'date-fns/locale/uk'; // Импортируем нужную локаль
  //  import axios from 'axios';
 import { getAPI,postApi } from 'components/fetchAPI/fetchAPI';

 

 function Tv({tvDate}) {
  const [date, setDate] = useState({today:new Date(),endDate:tvDate});
console.log('date', date)
console.log('tvDate', tvDate)
  const onChange = (newDate) => {
    setDate({...date,endDate:newDate});
    postData(newDate);
  
    console.log('newDate', newDate)
  };
  
  
async function postData(newDate){
  try {
    const data=await getAPI()
    // data.tv=date.endDate;
    data.tv=newDate;  
    console.log('data postData', data)
    const res= await postApi(data);
    console.log('res', res)
  } catch (error) {
    
  }
};

useEffect(()=>{

  setDate(prevState=>({...prevState,endDate:tvDate}))
},[tvDate])
// useEffect(()=>{postData()},[date])

  return (
    <div>
      <h1>Tv</h1>
      <CalendarS onChange={onChange} value={[date.today,date.endDate]} locale="en"/>
    </div>
  );
}

export default Tv;

