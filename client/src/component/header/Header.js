import React from 'react'
import {AppBar,Toolbar,makeStyles,Typography,Box,withStyles} from "@material-ui/core";
import { NavLink} from 'react-router-dom';
//component
import  Searchbar from "./Searchbar" 
import HeaderButton  from './HeaderButton';

const useStyle = makeStyles({
     header:{
           background:"#2874f0",
           height: 55
     },
     logo:{
          width:75
     },
     subURL:{
         width:12,
         marginLeft:5,
         height:10
     },
     container:{
         display:"flex"
     },
     component:{
         marginLeft:"13%",
         lineHeight:"0",
         textDecoration:"none",
         color:"white"
     },
     subHeading:{
         fontSize:13,
         fontStyle:"italic"
     }
})

const ToolBar = withStyles({
    root:{
        minHeight:55
    }
})(Toolbar)

 const Header = () => {
     const classes = useStyle();
     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <>
           <AppBar className={classes.header}>
               <ToolBar>
                   <NavLink to="/" className={classes.component}>
                       <img src={logoURL} className={classes.logo}  alt="logoimg"/>
                      <Box className={classes.container}> 
                       <Typography className={classes.subHeading}>Explore<Box component="span" style={{color:'#ffe500'}}>Plus</Box> </Typography>
                       <img src={subURL} className={classes.subURL} alt="sublogoimg"/>
                      </Box>
                    </NavLink>  
                    <Searchbar/> 
                    <HeaderButton/>
               </ToolBar>
           </AppBar>
        
        </>
    )
}


export default Header