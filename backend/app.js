const express = require('express');
const cors = require('cors');
const conenctDb = require('./db/db');
const router = require('./routes/albumRouter');
const app=express()
conenctDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/",router)
app.listen(4000,()=>{
    console.log("running");
    
})