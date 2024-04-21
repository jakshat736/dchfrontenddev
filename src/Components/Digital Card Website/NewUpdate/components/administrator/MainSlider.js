import React, { useEffect, useState } from "react";

import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import { Grid } from "@mui/material";
import Slider from 'react-slick';
function MainSlider() {
  
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow:1 ,
    slidesToScroll: 1,
    autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      
  };

  

  return (
    <Grid sx={{overflow:'hidden',width:'100%',height:'95vh'}}>
    
      <Slider {...settings} >
        <Slider1 />

        <Slider2 />

        <Slider3 />
     
      </Slider>
    </Grid>
  );
}

export default MainSlider;
