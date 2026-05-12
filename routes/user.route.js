const express=require('express')
const route=express.Router()
const {deleteDAta,putData,getUser,postData,getUserId}=require('../controllers/user.controler')

route.get('/users',getUser)
route.get('/users/:id',getUserId)
route.post('/add',postData)
route.delete('/delete/:id',deleteDAta)
route.put('/put/:id',putData)
module.exports=route