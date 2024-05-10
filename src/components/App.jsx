import { useState,useEffect } from 'react'
import  Tv from './Tv/Tv'
import { getAPI,postApi } from 'components/fetchAPI/fetchAPI';
import modalPassword from 'components/ModalPassword/ModalPassword';
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
   
      
      
      useEffect(()=>{getData();},[])
   
  return (
    <>
     <Tv tvDate={date.tv} postData={postData}></Tv>
    </>
  )
}

export default App
