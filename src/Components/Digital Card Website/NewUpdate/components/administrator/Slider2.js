import React, { useEffect,forwardRef } from "react";
import { Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // Include AOS CSS
import img from "../../assets/Standeeee Baneer Image.png";
const Slider2 = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const animate = () => {
    // Implement your animation logic for Slider1 here
    AOS.init();
    console.log("Slider1 animation triggered");
  };
  return (
    <Grid
      sx={{
        backgroundImage:
          "linear-gradient(to right,rgba(43,112,67,255),rgba(57,178,145,255))",
        height: "87vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            color: "white",
            fontFamily: "poppins",
            fontSize: {xs:35,md:50},
            textAlign: "center",
            mr: { xs: 0, md: -15 },
            fontWeight:'bold'
          }}
        >
          The new way to get positive google reviews from customers
          <Typography sx={{ fontSize: 30, color: "white" }}>
            Get more google reviews from satisfied customers! for more reach
            visibilty & sales!
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={img}
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ width: "70%" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
});

export default Slider2;
