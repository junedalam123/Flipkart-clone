import React,{useState,useContext} from 'react'
import {Box, Button,makeStyles, Typography,Badge} from "@material-ui/core"
import {ShoppingCart} from '@material-ui/icons';
import {NavLink} from 'react-router-dom'
import LoginDialog from "../Login/Login";
import {LoginContext} from "../../context/ContextProvider"
import Profile from './Profile';
import {useSelector} from "react-redux"
const useStyle = makeStyles({
    login:{
         background:"white",
         color:"#2874f0",
         textTransform:"none",
         borderRadius:2,
         padding:" 5px 40px",
         Boxshadow:'none'
    },
    wrapper:{
        margin:" 0 7% 0 auto",
        display:"flex",
        '& > *':{
            marginRight:50,
            fontSize:14,
            alignItem:"center",
            textDecoration:"none",
            color:"white"
        }
    },
    container:{
        display:"flex"
    }
})

const HeaderButton = () => {
    const classes = useStyle();
     const [open, setOpen] = useState(false)
     const {account,setAccount} =  useContext(LoginContext)

     const { cartItems } = useSelector(state => state.cart)

     const openLoginDialog = ()=>{
        setOpen(true);
        
     }
    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
              <NavLink to="/"><Button  variant="contained" onClick={()=>openLoginDialog()}className={classes.login}>Login</Button></NavLink>
            }
             <Typography style={{marginTop:"5px"}}>More</Typography>
            <NavLink to="/cart" className={classes.container}>
            <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCart/>
            </Badge>
               <Typography style={{marginLeft:"10px"}}>Cart</Typography>
            </NavLink>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
       
    )
}

export default HeaderButton;
