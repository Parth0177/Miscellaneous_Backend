const express= require('express');
const app= express();
const PORT=8080;

app.get('/register',(req,res)=>{
  console.log("Accepted");
  res.send("Registration Successful GET Request");
  
})

app.post('/register',(req,res)=>{
  res.send("Registration Successful POST Request");
})




app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
  
})