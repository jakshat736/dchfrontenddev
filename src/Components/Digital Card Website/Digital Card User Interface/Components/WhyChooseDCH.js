import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import img from "../../Digital Card Assets/why_choose.png";
import { Parallax } from 'react-scroll-parallax';


export default function WhyChooseDCH() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const tablet = useMediaQuery(theme.breakpoints.down(960));
   
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            {mobile?<Parallax speed={-5} translateX={['0px', '0px']}
  scale={[0.75, 1]} easing='easeInOut'>
            <img src={img} width={mobile?"100%":tablet?"100%":""} />
        </Parallax>:<Parallax speed={-15} translateX={['0px', '0px']}
  scale={[0.75, 1]} easing='easeInOut'>
            <img src={img} width={mobile?"100%":tablet?"100%":""} />
        </Parallax>}
        </Box>
    )
}
