import React,{useState,useEffect} from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'


const useStyle = makeStyles({
   component:{
       width:"30%",
       background:"#fff",
       marginLeft:15
   },
   header:{
       padding:"16px 24px",
       borderBottom:"1px solid #f0f0f0"
   },
   container:{
       padding:"15px",
       '& > *':{
           marginTop:"20px"
       }
   },
   greyTextColor:{
     color:"#878787",
   },
   price:{
       float:'right'
   },
   totalAmount:{
       fontSize:18,
       fontWeight:600,
       borderTop:"1px  dashed #e0e0e0",
       padding:"20px 0",
       borderBottom:'1px dashed #e0e0e0'
   }
})

const TotalView = ({ cartItems }) => {
    const classes = useStyle();

    const [price, setprice] = useState(0)
    const [discount, setdiscount] = useState(0)

    useEffect(() => {
       TotalAmount();
    },[cartItems])

    const TotalAmount = ()=>{
        let price=0,discount=0;
        cartItems.map(item=>{
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost)
        })
          setprice(price);
          setdiscount(discount);
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.header}>
                <Typography className={classes.greyTextColor}>PRICE DETAIL</Typography>
            </Box>
            <Box className={classes.container}>
            <Typography>Price ({cartItems.length} Items)<span className={classes.price}>₹ {price}</span></Typography>
            <Typography>Discount <span className={classes.price}>-₹ {discount}</span></Typography>
            <Typography>Delivery Charge<span className={classes.price}> ₹ 40</span></Typography>
            <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹ {price - discount +40}</span></Typography>
            <Typography style={{color:"green"}}>You will save  ₹ {discount - 40 } on this order</Typography>
            </Box>
        </Box>
    )
}

export default TotalView

