import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Box, Typography, Button, Divider } from '@material-ui/core';
import Countdown from "react-countdown"
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
  image: {
    height: 150
  },
  component: {
    marginTop: 12,
    background: "#FFFFFF"
  },
  deal: {
    padding: "15px 20px",
    display: "flex"
  },
  dealtext: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "25px",
    marginRight: 25
  },
  timer: {
    color: "#2f2f2f",
    marginLeft: 10,
    display: "flex",
    alignItems: "center"
  },
  button: {
    marginLeft: "auto",
    background: "#2874f0",
    color: "white",
    padding: "8px 20px",
    fontSize: 13,
    fontWeight: 500,

  },
  text: {
    fontSize: 14,
    marginTop: 5
  },
  wrapper: {
    padding: "38px 15px"
  }
})

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }

};

const Slide = ({ timer, title, products }) => {
  const classes = useStyle();
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }) => {
    return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>;
  }
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealtext}>{title}</Typography>
        {
          timer &&
          <>
            <img src={timerURL} style={{ width: "17px" }} />
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
            <Button varient="contained" color="primary" className={classes.button}>View All</Button>
          </>
        }
      </Box>
      <Divider />
      <Carousel responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {
          products.map((product) => (
            <Link to={`product/${product.id}`} style={{textDecoration:"none"}}>
              <Box textAlign="center" className={classes.wrapper}>
                <img src={product.url} className={classes.image} />
                <Typography className={classes.text} style={{ fontWeight: '600', color: "#212121" }}>{product.title.shortTitle}</Typography>
                <Typography className={classes.text} style={{ fontSize: "15px", color: "green" }}>{product.discount}</Typography>
                <Typography className={classes.text} style={{ color: "#212121", opacity: 0.6 }}>{product.tagline}</Typography>
              </Box>
            </Link>
          ))

        }
      </Carousel>
    </Box>
  )
}

export default Slide
