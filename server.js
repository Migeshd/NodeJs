const express = require('express')
const app = express()
require('dotenv').config()//after doing this we dont have to do the below const port = 5000, which i commented later
require('./connection')

const test = require("./routes/helo")//we can see what is in the test


// const port=5000// in the replacement of this i have written the below code
const port = process.env.PORT //if i have no env file then we have to write the above code where the port is defined here

    //we have 4 methods get,put,delete,update 

    app.get("/helo",(req,res)=>{
        res.send("my name is migesh ")

    })

    app.use("/sec",test)//why we r using use is because it has to connect somewhere to the router 

    // app.use("/products",productRouter)

app.listen((port),()=>{
    console.log(`Server started at port ${port}`)

})