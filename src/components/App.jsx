import { useState,useEffect } from 'react'
import  Tv from './Tv/Tv'
import Computer from './Computer/Computer';
import Phone from './Phone/Phone';
import { getAPI,postApi } from 'components/fetchAPI/fetchAPI';
// import modalPassword from 'components/ModalPassword/ModalPassword';

function App() {
  const [date, setDate] = useState({tv:null,phone:null,computer:null})
  // const [modal,setModal]=useState(false);


  async function getData(){
    console.log("getData")
     try {
      const data=await getAPI()
        setDate({
          tv:data.tv,
          phone:data.phone,
          computer:data.computer
        })
        console.log('app', data)
      } catch (error) {
        console.log(error.message)
      }
    }
  async function postData(device,newDate){
    try {
      const data=await getAPI();
      switch (device) {
        case "Tv":
          data.tv=newDate;  
          break;
        case "Computer":
          data.computer=newDate;  
          break;
        case "Phone":
          data.phone=newDate;  
          break;    
        default:
          break;
      }
      console.log('data postData', data)
      const res= await postApi(data);
      console.log('res', res)
    } catch (error) {
      
    }
  };
  useEffect(()=>{getData();},[])
   
  return (
    <>
    <Tv tvDate={date.tv} postData={postData}></Tv>
    <Computer compDate={date.computer} postData={postData}/>
    <Phone phoneDate={date.phone} postData={postData}/>
    </>
  )
}

export default App
