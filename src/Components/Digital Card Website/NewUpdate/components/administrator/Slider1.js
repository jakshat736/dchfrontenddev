import React, { useEffect,forwardRef } from "react";
import { Grid, Typography } from "@mui/material";
import AOS from "aos";
import img from "../../assets/Card Image Banner.png";
import "aos/dist/aos.css"; // Include AOS CSS
const Slider1 = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const animate = () => {
    // Implement your animation logic for Slider1 here
    AOS.init();
    console.log("Slider1 animation triggered");
  };
  animate()
  return (
    <Grid
      sx={{
        backgroundImage:
          "linear-gradient(to right,rgba(237,99,197),rgba(247, 119, 55))",
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
            fontSize: {xs:35,md:50},
            fontWeight:'bold',
            textAlign: "center",
            mr: { xs: 0, md: -15 },
          }}
        >
          Simply turn Customers <br />
          into Instagram Followers
          <Typography style={{ marginTop: 10, fontSize: 30 }}>
            {" "}
            Bind your customers with our
            <br /> Instagram stickers, cards and much more!
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
            mt:{xs:-5,md:0}
          }}
        >
          <img
            src={img}
            data-aos="fade-down-left"
            data-aos-duration="1000"
            width={"100%"}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            color: "black",
            fontFamily: "poppins",
            fontSize: 30,
            textAlign: "center",
            mr: { xs: 0, md: -20 },
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
});

export default Slider1;
