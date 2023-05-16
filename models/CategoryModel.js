const mongoose=require("mongoose")
const { hellofunction } = require("../controllers/HeloController")

const categorySchema = new mongoose.schema({//we can see obj creation
    category_name : {
        type:String,
        required:true,
        trim:true //it is used to remove the unnecessary space created while writing sth (the space is clicked in the front of the text)
    }
},{timestamps:true})