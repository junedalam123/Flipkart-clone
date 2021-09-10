import { Box, makeStyles, Table, TableBody, TableRow, Typography,TableCell } from '@material-ui/core';
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getProductsDeatails } from "../../redux/actions/ProductActions"
import clsx from 'clsx'
import { LocalOffer as Badge } from '@material-ui/icons';
import ActionItems from "../product/ActionItems";



const useStyle = makeStyles({
    component: {
        margin: 55,
    },
    container: {
        margin: "0px 80px",
        background: "#fff",
        display: "flex"
    },
    rightcontainer: {
        marginTop: 50,
        '& > * ': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        varticalAlign:"baseline",
        '& > * ':{
            fontSize:14,
            marginTop:10 ,       
        }
    },
    greyTextColor: {
        color: "#787878"
    },
    price: {
        fontSize: 28
    },
    badge:{
        fontSize:16,
        marginRight:10,
        color:"#00cc00"
    }
    
})


const DetailView = ({ match }) => {
    const classes = useStyle();
    const { product } = useSelector(state => state.getProductsDeatails);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    
    const data =  new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsDeatails(match.params.id))

    }, [dispatch])
    return (
        <Box className={classes.component}>
            {product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box style={{ minWidth: "40%" }}>
                        <ActionItems product={product}/>
                    </Box>
                    <Box className={classes.rightcontainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
                            8 Rating & 1 Review
                            <span><img src={fassured} style={{ width: "77px", marginLeft: "20px" }} /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹ {product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}>₹ <strike>{product.price.mrp}</strike></span>   &nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3c' }}>{product.price.discount} off</span>   &nbsp;&nbsp;&nbsp;
                        </Typography>
                        <Typography style={{fontWeight:"bold"}}> Available offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge}/> Special PriceGet 10% off (price include of discount) </Typography>
                            <Typography><Badge className={classes.badge}/> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                            <Typography><Badge className={classes.badge}/> Bank Offer20% off on first FlipKart pay Later order of ₹500 and above </Typography>
                            <Typography><Badge className={classes.badge}/> Combo OfferBuy 2 items save %5;Buy or more save 10%See all Product</Typography>
                        </Box>
                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                    <TableCell style={{fontWeight:"bold"}}>{data.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText} >
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{color:"#2874f0"}}>SuperComNet</span>
                                        <Typography>GST - invoi Available</Typography>
                                        <Typography> 14 Days Return Policy</Typography>
                                        <Typography>View more seller starting from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <img src={sellerURL} style={{width:"390px"}} />   
                                     </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Discription</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            }
        </Box>

    )
}

export default DetailView