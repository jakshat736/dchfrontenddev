import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import bg from "../../Digital Card Assets/3.png";
import Play from "../../Digital Card Assets/Play.jpg";
import { useNavigate } from "react-router-dom";
// import vid from "../../Digital Card Assets/Hero-vid-1.gif";
import sideimg from "../../Digital Card Assets/hero_img.png";
import './slider.css';
import Aos from "aos";
import 'aos/dist/aos.css'
import obj from '../../Digital Card Assets/tire.obj'
const First = () => {
 
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down(1100));
    const navigate = useNavigate();
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom left,#80ffe5,#ffffff,#ffffff)`,
                                    display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height:'100vh'
            }}
        >
            <Grid container spacing={2} >
                <Grid item xs={12}>
f
                </Grid>
                           </Grid>
        </Box>
    );
}

export default First
