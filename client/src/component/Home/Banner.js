import React from 'react'
import Carousel from "react-material-ui-carousel"
import { bannerData } from '../../constants/Data'
import { makeStyles } from '@material-ui/core'

 const useStyle = makeStyles({
      image:{
          width:"100%",
          height:"280px"
      },
      Carousel:{
          marginTop:10
      }
 })
const Banner = () => {
    const classes = useStyle()
    return (
        <Carousel
            autoplay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style:{
                    background:'white',
                    color:"#494949",
                    borderRadius:0,
                    margin:0
                }
            }}
            className={classes.Carousel}
        >
        {
            bannerData.map( (image) =>( 
               <img src={image} className={classes.image}/>
            ))
        }
    </Carousel>
    )
}

export default Banner
