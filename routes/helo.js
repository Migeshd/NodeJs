const express = require("express") // it is required all the time
const { hellofunction } = require("../controllers/HeloController")
const router = express.Router() //this helps in routing

// router.get("/helo",(req,res)=>{
    // res.json("Some product list");//here the json file is sent
    // res.send("Some product list");
// })

//this below code will give u the id for that we have to use ":id"
// router.get("/:id",(req,res)=>{
//     const id = req.params.id;
//     res.json(`Single product ${id}`);
// })

router.get("/hello1",hellofunction) 

module.exports=router // all the works carried out on this page are exported by this 
