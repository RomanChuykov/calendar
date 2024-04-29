import axios from "axios";

axios.defaults.baseURL='http://localhost:5000/data'

export async function getAPI(){
    
        const response=  await axios.get('');
        const data=response.data;
        return data;
     
};