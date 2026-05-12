const express=require('express')
const {deleteDAta,putData,getUser,postData,getUserId}=require('./controllers/user.controler')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const dbConnect=require('./services/dbconnect.js')
app.use(express.json())
app.get('/users',getUser)
app.get('/users/:id',getUserId)
app.post('/add',postData)
app.delete('/delete/:id',deleteDAta)
app.put('/put/:id',putData)

dbConnect()

app.listen(3001,()=>{
    console.log('Backend 3001-portda ishladi');
})




