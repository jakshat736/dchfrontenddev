import { Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../../Digital Card Assets/hexa_icon.png";
import demo1 from "../../Digital Card Assets/demo1.png";
import demo2 from "../../Digital Card Assets/demo2.png";
import demo3 from "../../Digital Card Assets/demo3.png";
import demo4 from "../../Digital Card Assets/demo4.png";
import pvccard from "../../Digital Card Assets/pvccard.png"
import metalcard from "../../Digital Card Assets/metalcard.png"
import woodencard from "../../Digital Card Assets/woodencard.png"
import mobilepops from "../../Digital Card Assets/mobilepops.png"
import nfctags from "../../Digital Card Assets/nfctags.png"
import keychains from "../../Digital Card Assets/keychain.png"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { getData, serverURL } from "../../../Services/NodeServices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const data=[
  {
    name:'Pvc Card',
    image:pvccard
  },
  {
    name:'Metal Card',
    image:metalcard
  },
  {
    name:'Wooden Card',
    image:woodencard
  },
  {
    name:'Mobile Pops',
    image:mobilepops
  },
  {
    name:'NFC Tags',
    image:nfctags
  },
  {
    name:'NFC Key Chains',
    image:keychains
  },
]


const Varieties = () => {
  const theme=useTheme()
  const navigate=useNavigate()
  const xs=useMediaQuery(theme.breakpoints.down('sm'))
  const sm=useMediaQuery(theme.breakpoints.down('md'))
  const [varietyData,setVarietyData]=useState([])
  const [hover, setHover] = useState("")

  const settings = {
    dots: false,
    slidesToShow:xs?1:sm?2:3,
    slidesToScroll: 1,
    infinite:true,
    speed:1000,
    autoplay:true
};

const fetchAllNewArrivals=async()=>{
  const response=await getData('products/displayNewArrival')
  setVarietyData(response.data.reverse())
}

useEffect(()=>{
  fetchAllNewArrivals()
},[])


const card = () => {
  return varietyData.map((item) => {
      return (
        <Grid sx={{ ml: 1, mr: 1,cursor:"pointer"  }} onClick={() => navigate(`/productscomponent/${item._id}`)} >

        <Paper elevation={6} sx={{ display: "flex", justifyContent: 'center', flexDirection: "column", width: '90%', alignItems: 'center', bgcolor: '#ffffff', boxShadow: ' 0 3px 10px #8c0c03' }}>

          <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center' }}>

            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center', position: 'relative' }}>
              <Grid sx={{ position: 'absolute', left: 16,bgcolor:'yellow',fontSize:20,padding:0.5 }}>
                New

              </Grid>
              

              <img src={hover == item.productName && item.images.length>1 ? `${serverURL}/images/${item.images[1]}`:`${serverURL}/images/${item.images[0]}` } width={'100%'} onMouseEnter={() => setHover(item.productName)} onMouseLeave={() => setHover('')} />
            </Grid>
            <Grid item xs={12} sx={{ height: 100 }}>
              <Typography textAlign={'center'} fontSize={15}>{item.productName}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ maxHeight: 100 }}>
              <Typography textAlign={'center'} fontSize={15} sx={{mt:-5,color:'darkgoldenrod',fontWeight:'bold'}}>₹{item.offerprice}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ maxHeight: 100 }}>
              <Typography textAlign={'center'} fontSize={15} sx={{mt:-5,color:'darkgoldenrod',textDecoration:'line-through'}}>₹{item.price}</Typography>
            </Grid>

          </Grid>

        </Paper>
      </Grid>

      );
  });
};
  return (
    <Grid
    
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: { xs: "2.5em", lg: "3.2em" },
            fontFamily: "OXANIUM",
            fontWeight: 700,
            textDecoration: "underline",
            color: "#ffffff",
            textAlign: "center",
            mt: { xs: "4vh", lg: "6vh" },
          }}
        >
          Unveiling the Digital Card Collection
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {" "}
        <Typography
          sx={{
            fontSize: { xs: "2em", lg: "2.4em" },
            fontFamily: "OXANIUM",
            fontWeight: 500,
            color: "#ffffff",
            textAlign: "center",
            mb: { xs: "4vh", lg: "4vh" },
            mt: { xs: "2vh", lg: "2vh" },
          }}
        >
          Materials that Elevate the Experience
        </Typography>
      </Grid>
      <Grid item xs={10} sx={{marginLeft:5,marginRight:5}}>
            <Slider {...settings}>{card()}</Slider>
        </Grid>
    </Grid>
  );
};

export default Varieties;
