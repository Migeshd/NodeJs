const mongoose=require("mongoose")//mongoose helps to connect mongodb

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log("database connected")
})
.catch(error=>{console.log(error)})