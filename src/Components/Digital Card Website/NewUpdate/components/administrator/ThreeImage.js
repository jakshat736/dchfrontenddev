import { Grid, Typography } from "@mui/material";
import "./ThreeImage.css"
import React from "react";
import img1 from '../../assets/menu.png'
import img2 from '../../assets/fbc.png'
import img3 from '../../assets/folde.png'


export default function ThreeImage() {
  return (
    <Grid sx={{mt:1,width:'100%'}}>
       <Grid   container spacing={2} sx={{  display: "flex",  flexDirection: "row",justifyContent: "center",alignItems: "center", mt: 1,}} >
       <Grid
  item
  xs={10}
  md={3.5}
  className="three"
  sx={{
    backgroundColor: '#FFD700',
    
    
    height: "300px", // Set a fixed height to make it square
    aspectRatio: 7, // Maintain aspect ratio
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: "10px", ml:3
  }}
>
  <Grid class="three__imgBox" >
    <img src={img3} style={{ width: "110%" }} />
    <Typography  class="three__title">Communicate Better <br /> MORE WhatsApp Contacts</Typography>
    <Typography class="three__content">get more inquiries with Whatsapp Business cards and stickers</Typography>
  </Grid>
</Grid>

        <Grid item xs={10} md={3.5}   className="three"  sx={{
    backgroundColor:'#4267B2',
    opacity: 0.9,
    
    height: "300px", // Set a fixed height to make it square
    aspectRatio: 7, // Maintain aspect ratio
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: "10px",
    ml:3
  }}
   >
          <Grid class="three__imgBox">
            <img src={img2} style={{ width: "110%" }} />
            <Typography class="three__title" >Get Followed <br/> MORE Facebook Fans</Typography>
            <Typography class="three__content" >get more fans on Facebook with Follow  cards and stickers  </Typography>
          
          </Grid>
        </Grid>
        <Grid item xs={10} md={3.5}className="three"sx={{  opacity: 0.9,
          backgroundImage:
          "linear-gradient(to right,rgba(237,99,197),rgba(247, 119, 55))",
   
    height: "300px", // Set a fixed height to make it square
    aspectRatio: 7, // Maintain aspect ratio
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: "10px",
    ml:3
  }} >
          <Grid class="three__imgBox">
            <img src={img1} style={{ width: "60%" }} />
            <Typography class="three__title">Get Your Digital Menu Now</Typography>
            <Typography class="three__content">Experience the Future of Dining: Our Digital Menu is Here!</Typography>
             

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}