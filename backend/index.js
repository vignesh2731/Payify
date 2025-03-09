const express=require('express');
const router = require('./routes/index');
const cors=require('cors');
const app=new express();
app.use(cors());
app.use(express.json());
app.use("/api/v1",router);
app.listen(3000,(req,res)=>{
    console.log("Listening to port 3000");
})