import { Box, makeStyles, Typography,Button } from '@material-ui/core'
import React from 'react'
import {useHistory} from "react-router-dom"



const useStyle = makeStyles({
     component:{
       margin:"110px 140px",
       width:"80%",
       background:"#fff",
       height:"65vh"
     },
     image:{
         width:200
     },
     container:{
         textAlign:"center",
         paddingTop:70,
         '& > *':{
            marginTop:10,
         }
     },
     button:{
         marginTop:20,
         padding:"9px 50px",
         background:"blue",
         color:"white",
         borderRadius:2,
         fontSize:14

     },
     middleText:{
         fontSize:15
     }
})

const EmptyCart = () => {
    const classes = useStyle();
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
   const history = useHistory();

      const addItems = ()=>{
         history.push("/")      
      }
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={emptycarturl} className={classes.image}/>
                <Typography>Your cart is empty</Typography>
                <Typography className={classes.middleText}>Add Items to it now</Typography>
                <Button variant="contained" className={classes.button} onClick={()=>{addItems()}}>shop now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart
