import { useState,useEffect } from 'react'
import  Tv from './Tv/Tv'
import { getAPI } from './fetchAPI/fetchAPI'

function App() {
  const [date, setDate] = useState({tv:null,phone:null,computer:null})
  
  async function getData(){
    console.log("getData")
     try {
      const data=await getAPI()
      // setDate(prevState=>({
        // ...prevState,
        // }))
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
   
      
      
      useEffect(()=>{getData();},[])
   
  return (
    <>
     <Tv tvDate={date.tv}></Tv>
    </>
  )
}

export default App
