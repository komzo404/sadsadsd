const express=require('express')
const dotenv=require('dotenv')
const route=require('./routes/user.route.js')
dotenv.config()
const app=express()
const dbConnect=require('./services/dbconnect.js')
app.use(express.json())
app.use('',route)

dbConnect()
app.listen(3001,()=>{
    console.log('Backend 3001-portda ishladi');
})




