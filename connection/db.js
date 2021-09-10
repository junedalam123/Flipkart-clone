const mongoose = require("mongoose")
const url = "mongodb+srv://technicaljuned:12345@cluster0.6vp1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection is successful")
}).catch((error)=>{
    console.log("connection is failed" + error)
})

