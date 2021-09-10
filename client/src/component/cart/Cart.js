import { Box, makeStyles, Typography,Button } from "@material-ui/core"
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux"
import CartItem from "./CartItem"
import {removeFromCart} from "../../redux/actions/CartAction"
import EmptyCart from "./EmptyCart"
import TotalView from "./TotalView"


const useStyle = makeStyles({
    component: {
        marginTop: 55,
        padding: '30px 135px',
        display:"flex",
        
    },
    leftComponent: {
        width: "67%",
    },
    header: {
        padding: "15px 24px",
        background: "#fff"
    },
    placeholder:{
      background:"#fb641b",
      color:"#fff",
      borderRadius:2,
      width:"250px",
      height:"40px",
      display:"flex",
      marginLeft:"auto"
    },
    bottom:{
        padding:"16px 22px",
        background:"#fff",
        borderTop:"1px solid #f0f0f0",
        boxShadow:"0px  1px 2px 0 rgba(0,0,0,.2)"
    }
})

const Cart = () => {
    const classes = useStyle();
    const { cartItems } = useSelector(state => state.cart);
    
    const disptach = useDispatch();

    useEffect(() => {
        console.log(cartItems);
    })


    const removeItemFromcart = (id) =>{
        disptach(removeFromCart(id));
    }
    return (
        <>
            {
                cartItems.length ?
                    <Box className={classes.component}>
                        <Box className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>My Cart ({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} removeItemFromcart={removeItemFromcart}/>
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button variant="contained" className={classes.placeholder}>Place Order</Button>
                            </Box>
                        </Box>
                            <TotalView cartItems={cartItems}/>
                        
                    </Box>
                    : <EmptyCart/>
            }
        </>
    )
}

export default Cart
