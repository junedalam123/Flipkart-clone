import { Box, Button, Card, makeStyles,Typography } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import GroupButtons from './GroupButtons'

const useStyle = makeStyles({
    component:{
          display:"flex",
          borderRadius:0,
          borderTop:"1px solid  #f0f0f0"

    },
    leftcomponent:{
        margin:20,
        display:'flex',
        flexDirection:"column"

    },
    rightcomponent:{
        marginTop:20
    },
    smallText:{
        fontSize:14
    },
    greyTextColor:{
        color:"#878787"
    },
    price:{
        fontSize:18,
        fontWeight:600
    },
    image:{
        height:110,
        width:110
    },
    remove:{
        margin:"20px 0px 20px 0px",
        fontSize:14
    }
})

const CartItem = ({ item,removeItemFromcart }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const classes = useStyle();
     


    return (
        <Card className={classes.component}>
            <Box className={classes.leftcomponent}>
                  <img src={item.url} className={classes.image}/>
                  <GroupButtons/>
            </Box>
            <Box className={classes.rightcomponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography  className={clsx(classes.smallText,classes.greyTextColor)}style={{marginTop:10}}>seller ComNet
                <span><img src={fassured} style={{width:50,marginLeft:10}}/></span>
                </Typography>
                <Typography style={{margin:"20px 0"}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹{item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{color:"#388E3C"}}>{item.price.discount}</span>
                </Typography>
                <Button  className={classes.remove} onClick={()=>removeItemFromcart(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem
