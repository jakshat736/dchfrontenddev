import React, { useRef, useState, } from 'react';
import {
    Box,
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './companyslider.css'
import img1 from '../../Digital Card Assets/1.jpg'
import img2 from '../../Digital Card Assets/2.jpg'
import img3 from '../../Digital Card Assets/3.jpg'
import img4 from '../../Digital Card Assets/4.jpg'
import img5 from '../../Digital Card Assets/5.jpg'
import img6 from '../../Digital Card Assets/6.jpg'
import img7 from '../../Digital Card Assets/7.jpg'
import img8 from '../../Digital Card Assets/8.jpg'
import img9 from '../../Digital Card Assets/9.jpg'
import img10 from '../../Digital Card Assets/10.jpg'
import img11 from '../../Digital Card Assets/11.jpg'
import img12 from '../../Digital Card Assets/12.jpg'
import img13 from '../../Digital Card Assets/13.jpg'
import img14 from '../../Digital Card Assets/14.jpg'
import img15 from '../../Digital Card Assets/15.jpg'
import img16 from '../../Digital Card Assets/16.jpg'
import img17 from '../../Digital Card Assets/17.jpg'
import img18 from '../../Digital Card Assets/18.jpg'
import img19 from '../../Digital Card Assets/19.jpg'
import img20 from '../../Digital Card Assets/20.jpg'
import img21 from '../../Digital Card Assets/21.jpg'
import img22 from '../../Digital Card Assets/22.jpg'
import img23 from '../../Digital Card Assets/23.jpg'
import img24 from '../../Digital Card Assets/24.jpg'

import img26 from '../../Digital Card Assets/26.jpg'
import img27 from '../../Digital Card Assets/27.jpg'
import img28 from '../../Digital Card Assets/28.jpg'
import img29 from '../../Digital Card Assets/29.jpg'

import img31 from '../../Digital Card Assets/31.jpg'
import img32 from '../../Digital Card Assets/32.jpg'
import img33 from '../../Digital Card Assets/33.jpg'
import img34 from '../../Digital Card Assets/34.jpg'
import img35 from '../../Digital Card Assets/35.jpg'
import img36 from '../../Digital Card Assets/36.jpg'
import img37 from '../../Digital Card Assets/37.jpg'
import { tr } from 'date-fns/locale';
export const CompanySlider = () => {
    const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

    const [swiperRef, setSwiperRef] = useState(null);

    const [slides, setSlides] = useState([
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img:img4
        },
        {
            img:img5
        },
        {
            img:img6
        },
        {
            img:img7
        },
        {
            img:img8
        },
        {
            img:img9
        },
        {
            img:img10
        },
        {
            img:img11
        },
        {
            img:img12
        },
        {
            img:img13
        },
        {
            img:img14
        },
        {
            img:img15
        },
        {
            img:img16
        },
        {
            img:img17
        },
        {
            img:img18
        },
        {
            img:img19
        },
        {
            img:img20
        },
        {
            img:img21
        },
        {
            img:img22
        },
        {
            img:img23
        },
        {
            img:img24
        },
       
        {
            img:img26
        },
        {
            img:img27
        },
        {
            img:img28
        },
        {
            img:img29
        },
       
        {
            img:img31
        },
        {
            img:img32
        },
        {
            img:img33
        },
        {
            img:img34
        },
        {
            img:img35
        },
        {
            img:img36
        },
        {
            img:img37
        },
       
       
    ]);
    return (
        <div> 
             <Grid  sx={{fontSize:38,fontWeight:"bold",color:"#fff",textAlign:'center',mt:8}}>
                Used by 100+ businesses !
                <Typography sx={{mt:1,fontSize:20}}>Trusted by over 100+ businesses, our NFC cards offer seamless and secure solutions for diverse applications.</Typography>
                </Grid>
        
            <Swiper
            modules={[Virtual, Navigation, Pagination, Autoplay]}
            onSwiper={setSwiperRef}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={mobile==true?1:3}
           
        
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,

            }}
            spaceBetween={30}
            className="swiper1"
            
            navigation={true}
          
        >
            {slides.map((item, index) => (
                <SwiperSlide key={item}  className="swiper-slide1">
                    <img src={item.img} style={{ objectFit: 'cover' }} />
                </SwiperSlide>
            ))}
        </Swiper></div>
    )
}
