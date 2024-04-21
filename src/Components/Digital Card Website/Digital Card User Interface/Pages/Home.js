import { Box, Container, Divider, Grid } from '@mui/material';
import React, { useRef } from 'react';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import Freedom from '../Components/Freedom';
import HowItWorks from '../Components/HowItWorks';
import DigCardECom from '../Components/DigCardECom';
import SampleDCard from '../Components/SampleDCard';
import Footer from '../Components/Footer';
import bg from "../../Digital Card Assets/footer.png";
import ServiceWeOffer from '../Components/ServiceWeOffer';
import Features from '../Components/Features';
import DCSlider from '../Components/DCSlider';
import WhyChooseDCH from '../Components/WhyChooseDCH';
import Categories from '../Components/Categories';
import Varieties from '../Components/Varieties';
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import Lower from '../Components/Lower';
import { CompanySlider } from '../Components/CompanySlider';
import Header from '../../NewUpdate/components/administrator/Header';
export default function Home() {
    const sectionRef = useRef(null);

    

    const parentFunction = () => {
        var section = document.getElementById("mySection");
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    useEffect(() => {
        Aos.init();
    }, [])

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [])
    
    return (
        <Box sx={{ background: "#001E3C", overflowX: "hidden" }}>
            <Grid sx={{ position: 'fixed', bottom: 0, zIndex: 2 }}>
                <Lower callParentFunction={parentFunction}/>
            </Grid>
           
            <Navbar />
            <Container maxWidth={"xl"}>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">

                    <Hero />
                </div>
                <Freedom />
                <DigCardECom />
                <CompanySlider/>
                <WhyChooseDCH />
                
                <br /><br />
                <div id="mySection" ref={sectionRef}>
                <Varieties />
                </div>
                <Categories />
                <DCSlider />
                <br /><br /><br />
                <ServiceWeOffer />
                <br />
                <HowItWorks />
                <br />
                <Features />

            </Container>
            
            <Box sx={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover",mt:5 }}>
                <Footer />
            </Box>
        </Box>
    )
}
