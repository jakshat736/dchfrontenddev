import { Grid, Typography } from "@mui/material";
import "./ImageComponent.css";
import React from "react";
import img1 from '../../assets/jk.png'
import img2 from '../../assets/ki.png'

export default function ImageComponent() {
  return (
    <Grid sx={{mt:1}}>
      <Grid container spacing={2}  sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
        }}>
        <Grid
          item
          xs={11}
          sx={{textAlign:'center'}}
        >
          <Typography sx={{fontSize:{xs:20,md:30},fontWeight:'bold'}}>It´s never been easier </Typography>
          
        </Grid>
        <Grid
          item
          xs={11}
          sx={{textAlign:'center'}}
        >
          <Typography sx={{fontSize:{xs:20,md:30},fontWeight:'bold'}}>
            to get new followers and positive reviews on google.{" "}
          </Typography>
          <br />
        </Grid>

        <Grid
          item
          xs={11}
          sx={{textAlign:'center'}}
        >
          We at truzzer are long-standing experts in gaining fans and followers,
          as well as generating online and Google reviews, and we help you with
          simple <br /> and understandable solutions to quickly get more and
          better reviews from your customers, to gain more followers and to make
          your customers the
          <br />
        </Grid>
        <Grid
          item
          xs={11}
          sx={{textAlign:'center'}}
        >
          most influential marketing tool you have ever had! The result? More
          customers and more sales!
        </Grid>
        <Grid
          item
          xs={12}
          sx={{textAlign:'center'}}
        >
          #Grow_with_us
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          className="glassBox"
          sx={{
            backgroundImage:
              "linear-gradient(to right,rgba(43,112,67,255),rgba(57,178,145,255))",
            height: "70vh",
            
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Grid class="glassBox__imgBox">
            <img src={img1} style={{ width: "40%" }} />
            <Typography class="glassBox__title" >BETTER REVIEWS <br/> MORE GOOGLE REVIEWS</Typography>
            <Typography textAlign={'center'} >get more reviews on google with review cards and stickers and many </Typography>
            <Typography textAlign={'center'}>more products!</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className="glassBox"
          sx={{
            backgroundImage:
              "linear-gradient(to right,rgba(237,99,197),rgba(247, 119, 55))",
              mt:{xs:1,md:0},
              ml:{xs:0,md:1},
            height: "70vh",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Grid class="glassBox__imgBox">
            <img src={img2} style={{ width: "45%" }} />
            <Typography class="glassBox__title" >INFLUENCED <br/>More Instagram <br/> FOLLOWERS</Typography>
            <Typography textAlign={'center'}>simply turn customers into instagram followers-e.g. with business </Typography>
             <Typography textAlign={'center'}>cards and instagram stickers.</Typography>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
