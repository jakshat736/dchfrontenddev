import React, { useEffect,forwardRef } from "react";
import { Grid, Typography } from "@mui/material";
import AOS from "aos";
import img from "../../assets/Circle Phone Tag Png banner Image.png";
import "aos/dist/aos.css"; // Include AOS CSS
const Slider3 = forwardRef((props, ref) => {
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
          "linear-gradient(to right, rgba(247, 119, 55),rgba(237,99,197))",
        height: "87vh",
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
            fontSize: {xs:40,md:50},
            textAlign: "center",
            mr: { xs: 0, md: -15 },
          }}
        >
          NFC ACTION BUTTONS
          <Typography sx={{ fontSize: 30, color: "white" }}>
            #GOTOUCHLESS
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
            mt: { xs: 0, md: 8 },
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

export default Slider3;
