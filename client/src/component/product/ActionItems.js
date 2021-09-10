import React from 'react'
import {Box, Button,makeStyles} from "@material-ui/core"
import clsx from 'clsx'
import {ShoppingCart} from '@material-ui/icons';
import {FlashOn} from '@material-ui/icons';
import {addToCart} from '../../redux/actions/CartAction';
import { useDispatch } from 'react-redux';
import { useHistory} from "react-router-dom"

const useStyle = makeStyles({
     leftContainer:{
         padding:'40px 0px 0px 40px'
         
     },
     image:{
         padding:"15px 20px",
         width:"300px",
         border:"1px solid  #f0f0f0"
     },
     button:{
         height:40,
         width:"42%",
         borderRadius:2
     },
     addtoCart:{
       background:"#ff9f00",
       color:"#fff",
       marginRight:10
     },
     buyBtn:{
         color:"#fff",
         background:"#fb641b"
     }
})


const ActionItems = ({ product }) => {
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();

    const addItemToCart = () =>{
        dispatch(addToCart(product.id));
        history.push("/cart");
    }
    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image}/> <br/>
            <Button onClick={()=>addItemToCart()} variant="contained" className={clsx(classes.button,classes.addtoCart)}><ShoppingCart/> Add to Cart</Button>
            <Button  variant="contained" className={clsx(classes.button,classes.buyBtn)}><FlashOn/>Buy Now</Button>
        </Box>
    )
}

export default ActionItems
