import React,{useState} from 'react'
import {Dialog,DialogContent,makeStyles,Box, Typography,TextField, Button} from "@material-ui/core"
import {authecticateSignup,authenticationLogin} from "../../service/api"



const useStyle = makeStyles({
   component:{
       height:"75vh",
       width:"500px"

   },
   image:{
       backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
       height:"57vh",
       width:"200px",
       backgroundRepeat:"no-repeat",
       backgroundColor:"#2874f0",
       backgroundPosition:"center 85%",
       padding:"35px 25px ",
       '& > *':{
           color:"#ffffff",
           fontWeight:"bold"
       }
    },
    login:{
        padding:" 20px 30px",
        display:"flex",
        flex:1,
        flexDirection:"column",
        '& > *':{
            marginTop:12
        }
    },
    text:{
        color:"#878787",
        fontSize:12,
        textAlign:"center"
    },
    loginbtn:{
        textTransform:"none",
        background:"#FB641B",
        color:"#FFFFFF"
    },
    RequestBtn:{
        background:"#FFFFFF",
        color:"blue",
        borderRadius:2,
        boxshadow:"0 2px 4px 0 rgba(0,0,0,20%)"
    },
    createtext:{
        textAlign:"center",
        color:"#2872f0",
        fontSize:14,
        marginTop:"auto",
        fontWeight:600,
        cursor:"pointer"
    },
    error:{
        color:"red",
        fontSize:10
    }

})

const initialValue = {
    login:{
        view:"login",
        heading:"Login",
        subHeading:"Get access to your  Orders, Wishlist and Recommendations"
    },
    signup:{
        view:"signup",
        heading:"Looks like you new here ",
        subHeading:"Signup with your mobile number to get started"
    }
}

const signupInitialValue = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const LoginInitialValue = {
    username:'',
    password:''
}
const Login = ({open,setOpen,setAccount}) => {
   const classes = useStyle();
   const [account, setaccount] = useState(initialValue.login)
   const [signup, setsignup] = useState(signupInitialValue);
   const [Login, setLogin] = useState(LoginInitialValue)
    const [error,setError] = useState(false)

    const handleClose = ()=>{
        setOpen(false)
        setaccount(initialValue.login)
    }

    const toggleAccount = ()=>{
        setaccount(initialValue.signup)
    }    
    const signupUser = async () => {
         let response = await authecticateSignup(signup);
         if(!response){
            setError(true) 
            return
         }
         handleClose();  
         setAccount(signup.username)
    }
    
    const loginUser = async () => {
        let response = await authenticationLogin(Login); 
        if(!response) return;
        
            handleClose();
            setAccount(Login.username)
        
    }

    const onInputChange =(e)=>{
        setsignup({...signup,[e.target.name]:e.target.value});
        console.log(signup)
    }

     const onValueChange = (e) => {
         setLogin({...Login, [e.target.name]: e.target.value});
         console.log(Login)
     }
    

    return (
        
        <Dialog open={open} onClose={handleClose}>
              <DialogContent className={classes.component}>
                 <Box style={{display:"flex"}}> 
                  <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop:"20px"}}>{account.subHeading}</Typography>
                  </Box>
                  {
                      account.view === 'login'?
                  
                  <Box className={classes.login}>
                       <TextField  onChange={(e)=>{onValueChange(e)}} name="username" label="Enter Email/mobile"/>
                       <TextField  onChange={(e)=>{onValueChange(e)}} name="password" label="Enter your password"/>
                       { error && <Typography className={classes.error}>Invalid login details </Typography>}
                       <Typography className={classes.text}>By containing, you tp Flikpcart's terms use and private policy</Typography>
                       <Button variant="contained"  onClick={()=>{loginUser()}}className={classes.loginbtn}>Login</Button>
                       <Typography  className={classes.text}  style={{textAlign:"center"}}>OR</Typography>
                       <Button variant="contained" className={classes.RequestBtn}> Request OTP</Button>
                       <Typography onClick={()=>{toggleAccount()}} className={classes.createtext}>Now to Flipcart? create an account</Typography>
                   </Box>
                  :
                  <Box className={classes.login}>
                  <TextField onChange={(e)=>{onInputChange(e)}} name="firstname" label="Enter  FirstName"/>
                  <TextField onChange={(e)=>{onInputChange(e)}} name="lastname" label="Enter  LastName"/>    
                  <TextField onChange={(e)=>{onInputChange(e)}} name="username" label="Enter Username"/>
                  <TextField onChange={(e)=>{onInputChange(e)}} name="email" label="Enter   Email"/>
                  <TextField onChange={(e)=>{onInputChange(e)}} name="password" label="Enter  password"/>
                  <TextField onChange={(e)=>{onInputChange(e)}} name="phone" label="Enter Mobile No"/>
                  <Button variant="contained" onClick={()=>signupUser()} className={classes.loginbtn}>Signup</Button>
                  
              </Box> 
              } 
                 </Box> 
             </DialogContent>
        </Dialog>
    )
}

export default Login
