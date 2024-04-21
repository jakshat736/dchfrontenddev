import React from 'react'
import { Grid, Typography } from "@mui/material";
import img1 from '../../assets/review.jpg'
import "./Review.css";
export default function Review() {
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
        <Grid item xs={10}    md={10} sx={{   overflow: "hidden", justifyContent: "center", alignItems: "center", display: "flex", width:'100%'  }} >
          <Grid class="review__imgBox">
            <img src={img1} style={{ width: "100%" }} />
              <Typography class="review__title">Go Touchless <br/> DISCOVER OUR New Products</Typography>
            <Typography sx={{position:'absolute',mt:8}} >Innovation Thorough Technology</Typography>
            
          </Grid>
        </Grid>
       
      </Grid>
    











    </Grid>
  )
}
