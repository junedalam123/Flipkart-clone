const mongoose = require("mongoose")

const userSchema = new  mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        min:3,
        max:20
    },
    lastname:{
        type:String,
        required:true,
        min:3,
        max:20 
    },
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    }
})

const user = new mongoose.model("user",userSchema)

module.exports = user