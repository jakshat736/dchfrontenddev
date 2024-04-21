import React from 'react'
import { Grid, Typography } from "@mui/material";
import img1 from '../../assets/hik.png'
import "./Review.css";
export default function BigImage() {
  return (
    <Grid sx={{width:'100%',ml:2}}>
     
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Grid item xs={10}    md={10} sx={{ backgroundImage:'linear-gradient(to right,rgba(237,99,197),rgba(247, 119, 55))',   overflow: "hidden", justifyContent: "center", alignItems: "center", display: "flex", width:'100%'  }} >
          <Grid class="review__imgBox">
            <img src={img1} style={{ width: "100%" }} />
            <Typography class="review__title" >To Go <br/> DISCOVER OUR BUSINESS CARDS</Typography>
            <Typography  >CONNECTED ANY TIME ANY WHERE</Typography>
            
          </Grid>
        </Grid>
       
      </Grid>
    











    </Grid>
  )
}
