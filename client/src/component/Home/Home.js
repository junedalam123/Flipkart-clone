import React,{useEffect} from 'react'
import { Box } from '@material-ui/core'
//component
import Banner from './Banner'
import NavBar from './NavBar'
import MidSection from "./MIdSection"
import { makeStyles } from '@material-ui/styles'
import Slide from "./Slide"

//import { products} from '../../constants/Data';
import { useSelector,useDispatch } from 'react-redux'
import { getProducts as listProducts  } from '../../redux/actions/ProductActions'

const useStyle = makeStyles({
    component:{
        padding:10,
        background:'#f2f2f2'
    },
    rightwrapper:{
        background:"white",
        padding:5,
        margin:'12px 0px 0px 10px'
    }
})
const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
      
      const {products} = useSelector(state => state.getProducts)
      
      const dispatch = useDispatch()
      useEffect(() => {
         dispatch(listProducts())
      },[dispatch])

    return (
        <>
            <NavBar/> 
            <Box className={classes.component}>
               <Banner/> 
                  <Box style={{display:"flex"}}>
                       <Box style={{width:"80%"}}>
                          <Slide
                            timer={true}
                            title="Deal of the day"
                            products={products}
                          /> 
                       </Box>
                       <Box className={classes.rightwrapper}>
                           <img src={ adURL} style={{width:"250px"}}/>
                       </Box>     
                  </Box> 
            </Box>
            <MidSection/>
            <Slide timer={false}  title="Discount for you" products={products} /> 
            <Slide timer={false}  title="Suggestiond Items" products={products}/> 
            <Slide timer={false}  title="Top Selection" products={products}/>
            <Slide timer={false}  title="Recommended Items" products={products}/> 
            <Slide timer={false}  title="Bestseller" products={products}/>  
        </>
    )
}

export default Home
