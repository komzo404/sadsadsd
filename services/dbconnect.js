const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const dbConnect=async(req,res)=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Bazaga ulandi'))
    .catch(err => console.log('Xatolik:', err))
}
module.exports=dbConnect