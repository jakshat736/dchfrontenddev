import React, { useEffect } from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import SearchIcon from "@mui/icons-material/Search";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomePageDrawer from "./HomePageDrawer";
import MainSlider from "./MainSlider";
import img1 from "../../assets/go.png";
import img2 from "../../assets/in.jpg";
import img3 from "../../assets/io.png";
import img4 from "../../assets/ha.png";
import img5 from "../../assets/ch.png";
import img6 from "../../assets/ne.png";
import img7 from "../../assets/jf.png";
import img8 from "../../assets/sa.png";
import img9 from "../../assets/kk.png";
import './home.css'




import Header from "./Header";

import NameSlider from "./NameSlider";
import ImageComponent from "./ImageComponent";
import NewArrivals from "./NewArrivals";
import BigImage from "./BigImage";
import Review from "./Review";
import Slider4 from "./Slider4";
import Text from "./Text";






// Import other assets
import Grid from "@mui/material/Grid";
import Footer from "./Footer";
import ThreeImage from "./ThreeImage";
import { ArrowUpward, CurrencyRupeeSharp, Facebook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Lower from "./Lower";
import Navbar from "./Navbar";

export default function Home() {
  const theme = useTheme();
  const navigate=useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showGoToTopButton, setShowGoToTopButton] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      // Show the button when scrolling down
      setShowGoToTopButton(true);
    } else {
      // Hide the button when at the top
      setShowGoToTopButton(false);
    }
  };
  return (
    <div >
       
       {showGoToTopButton && (
        <IconButton
          sx={{
            bgcolor: "white",
            position: "fixed",
            bottom: "70px",
            right: "10px",
            zIndex: 1,
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUpward />
        </IconButton>
      )}
       <Grid  sx={{position:'fixed',bottom:0,zIndex:1}}>
        <Lower/>
      </Grid>
      <Box>

        <Header />
        <Navbar/>
        
      </Box>
      <Grid container sx={{ mt: { xs: 0, md: 0 } }}>
        <MainSlider />
      </Grid>
      <Grid container sx={{ mt: -2 }}>
        <NameSlider />
      </Grid>
      <Grid container sx={{ mt: 2 }}>
        <ImageComponent />
      </Grid>
      <Grid container sx={{ mt: 10 }}>
        <NewArrivals />
      </Grid>
      <Grid container sx={{ mt: 2 }}>
        <Review />
      </Grid>
      <Grid container sx={{ mt: 2 }}>
        <ThreeImage />
      </Grid>

      <Grid container sx={{ mt: 1 }}>
        <BigImage />
      </Grid>
      <Grid container sx={{ mt: 10 }}>
        <Text />
      </Grid>
      <Grid container sx={{ mt: 10 }}>
        <Slider4 />
      </Grid>
      <Grid container sx={{ mt: 10 }}>
        <Footer />
      </Grid>

      {/* Add Grid components for other sections as needed */}
    </div>
  );
}




