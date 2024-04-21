import { Grid, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/mc.png'
import img2 from '../../assets/reze.png'
import img3 from '../../assets/stro.png'
import img4 from '../../assets/spark.png'
import img5 from '../../assets/alll.png'
function NameSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
  };

  return (
    <Grid sx={{overflow:'hidden'}}>
      <Typography sx={{textAlign:"center",fontSize:{xs:20,md:30},fontWeight:'bold'}}>
        Trusted by client worldwide
      </Typography>
      <Slider {...settings}>
        <Grid sx={{ml:{xs:50,sm:20,md:205}}}>
          <img src={img1} alt="Image 1" />
          </Grid>
        <Grid sx={{ml:{xs:50,sm:20,md:205}}}>
          <img src={img2} alt="Image 2" />
          </Grid>
        <Grid sx={{ml:{xs:50,sm:20,md:205}}}>
          <img src={img3} alt="Image 3" />
          </Grid>
        <Grid sx={{ml:{xs:50,sm:20,md:205}}}>
          <img src={img4} alt="Image 4" />
          </Grid>
          <Grid sx={{ml:{xs:50,sm:20,md:205}}}>
          <img src={img5} alt="Image 5" />
        </Grid>
      </Slider>
      </Grid>
  );
}

export default NameSlider;