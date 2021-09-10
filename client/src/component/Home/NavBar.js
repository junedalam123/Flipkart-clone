import React from 'react'
import { navData } from '../../constants/Data'
import {Box, Typography} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'



const useStyle = makeStyles(theme => ({
    component:{
         display:"flex",
         margin:"60px 130px 0 130px",
         justifyContent:"space-between",
         overflowX:"Overlay",
        
    },
    container:{
         textAlign:"center"
    },
    image:{
        width:64
    },text:{
       fontSize:14,
       fontWeight:"bold"
    }
}));

const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(data=>(
                    <Box className={classes.container}>
                       <img src={data.url} className={classes.image}/>
                       <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            } 
        </Box>
        
    )
}

export default NavBar
