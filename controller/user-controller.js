const User = require("../Model/userSchema")


 const userSignup = async (req,res)=>{
     try{
         const exist =  await User.findOne({username:req.body.username})
         if(exist){
            return res.status(401).json("User already exists")
         }
          const user = req.body;
          const newUser = new User(user);
          await newUser.save();
          res.status(201).json("User is  successfully registerd")
     }catch(error){
         console.log('Error',error.message);
     }
   
}
  const userLoginIn = async (req,res) => {
   try{
        let user = await  User.findOne({username: req.body.username,password: req.body.password}) 
        if(user){
            return res.status(200).json(`${req.body.username} login succesfully`)
         
        }else{
           return res.status(401).json("Invalid login data")
        }
   }catch(error){
       console.log("Error:",error.message)
   }
}

module.exports = {userSignup,userLoginIn}