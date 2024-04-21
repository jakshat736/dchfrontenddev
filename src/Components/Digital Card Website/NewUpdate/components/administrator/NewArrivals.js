import React, { createRef, useState } from "react";
import Slider from "react-slick";
// import { serverURL } from "../../services/serverServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Grid, Typography, Paper, useMediaQuery } from "@mui/material";
import img1 from '../../assets/a1.jpg'

import { useTheme } from "@mui/material";
import { getData, serverURL } from "../../../../Services/NodeServices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const imageStyles = {
  width: '80%', // Adjust the width as needed (e.g., '80%' for 80% of the original size).
  objectFit: 'cover', // You can adjust the object-fit property as needed.

};

export default function NewArrivals() {
  const theme = useTheme();
  const navigate=useNavigate()
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [hover, setHover] = useState("")

  const [data,setData]=useState([])

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: matches ? 4 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <KeyboardArrowRightIcon style={{ color: 'black' }} />,
    prevArrow: <KeyboardArrowLeftIcon style={{ color: 'black' }} />,
    pauseOnHover: false
  };

  const fetchAllNewArrivals=async()=>{
    const response=await getData('products/displayNewArrival')
    setData(response.data.reverse())
  }

  useEffect(()=>{
    fetchAllNewArrivals()
  },[])

  const handleProduct=(item)=>{
      navigate(`/product/${item._id}`)
  }




  return (

    <Grid sx={{ backgroundColor: 'pink', padding: 2, width: '100%', overflow: 'hidden', ml: { xs: 5, md: 10 }, mr: { xs: 5, md: 14 } }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>NewArrivals</h1>

      <Slider {...settings}>
        {
          data.map((item) => {
            return (


              <Grid sx={{ ml: 1, mr: 1,cursor:"pointer"  }}  onClick={()=>handleProduct(item)}>

                <Paper elevation={6} sx={{ display: "flex", justifyContent: 'center', flexDirection: "column", width: '90%', alignItems: 'center', bgcolor: '#ffffff', boxShadow: ' 0 3px 10px #8c0c03' }}>

                  <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center' }}>

                    <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center', position: 'relative' }}>
                      <Grid sx={{ position: 'absolute', left: 16,bgcolor:'yellow',fontSize:20,padding:0.5 }}>
                        New

                      </Grid>
                      <Grid sx={{ position: 'absolute', right: 5 }} >
                        <img src={img1} width={40} />
                      </Grid>

                      <img src={hover == item.productName ?`${serverURL}/images/${item.images[0]}` : `${serverURL}/images/${item.images[1]}`} width={'100%'} onMouseEnter={() => setHover(item.productName)} onMouseLeave={() => setHover('')} />
                    </Grid>
                    <Grid item xs={12} sx={{ height: 100 }}>
                      <Typography textAlign={'center'} fontSize={15}>{item.productName}</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ maxHeight: 100 }}>
                      <Typography textAlign={'center'} fontSize={15} sx={{mt:-5,color:'darkgoldenrod',textDecoration:'line-through'}}>₹{item.price}</Typography>
                    </Grid>

                  </Grid>

                </Paper>
              </Grid>

            )
          })
        }
      </Slider>
    </Grid>

  )

}
