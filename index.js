const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("./connection/db")
const dotenv = require('dotenv')
const defaultData = require("./default")
const bodyParser = require("body-parser")
const cors = require("cors")
const Routes = require("./routes/routes")

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/",Routes);

dotenv.config();


app.listen(PORT,()=>{
   console.log(`your server is running  port ${PORT}`)
})

//defaluat data to database
defaultData();