const express=require('express');
const fs=require('fs');
const file=express();
const port=5000;

app.use(express.json())

app.post('/updateData',(req,res)=>{
    const newData=req.body;
    updateDataInJSONFile(newData);
    res.send('Дані оновлено')
});

function updateDataInJSONFile(newData){

    const fileContent=fs.readFileSync('data.json')
    const data=JSON.parse(fileContent);

    for(const key in newData){
        if (newData.hasOwnProperty)
    }
}