import { Grid } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/speak.png'
import img2 from '../../assets/arro.png'
import img3 from '../../assets/tv.png'
import img4 from '../../assets/google.png'

function Slider4() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow:4 ,
    slidesToScroll: 1,
    autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear"
  };

  return (
    <Grid sx={{overflow:'hidden',ml:{xs:2,md:10}}}>
      
      <Slider {...settings} >
        <Grid >
          <img src={img1} alt="Image 1" />
          </Grid>
        <Grid >
          <img src={img2} alt="Image 2" />
          </Grid>
        <Grid >
          <img src={img3} alt="Image 3" />
          </Grid>
        <Grid >
          <img src={img4} alt="Image 4" />
          </Grid>
          <Grid >
          <img src={img1} alt="Image 1" />
          </Grid>
          <Grid >
          <img src={img4} alt="Image 4" />
          </Grid>
      </Slider>
      </Grid>
  );
}

export default Slider4;