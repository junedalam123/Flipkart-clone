import axios from "axios";

  const url = "http://localhost:5000" 

 export const authecticateSignup = async (user) => {
   
    try{
       return await axios.post(`${url}/signup`,user) 
      
    }catch(error){
        console.log("error while calling signup api")
    }
}

export const authenticationLogin = async (user)=>{
  try{
    console.log('sfgdfkjs')
    return await axios.post(`${url}/login`,user) 
  }catch(error){
      console.log("error while calling signup api")
  }
}