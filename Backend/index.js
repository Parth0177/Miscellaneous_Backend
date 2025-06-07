const express= require('express');
const app= express();
const PORT=8080;

app.get('/register',(req,res)=>{
  console.log("Accepted");
  let {username,password}= req.query;
  res.send(`Registration Successful GET Request, Welcome ${username}!`);
  
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/register',(req,res)=>{
  let {username,password}= req.body;
  res.send(`Registration Successful POST Request, hi ${username}! `);

  
})




app.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
  
})