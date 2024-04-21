import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import intro from './ThemeAssets/intro.mp4'
import ReactPlayer from 'react-player';
import { RingLoader } from 'react-spinners';
import { Grid, Typography } from '@mui/material';
import Preloader from '../../Components/Preloader';
import newlogo from '../../../Digital Card Assets/newlogo.png'
const LoadingScreen = () => {
    const { companyId } = useParams();
    var navigate=useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate(`/card/${companyId}`); // Navigate to the specified route after the delay
        }, 2600);
        return () => clearTimeout(timer);
      }, [navigate]);
  return (
    <Grid style={{backgroundColor:'#FFF',width:"100%",height:'790px',display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}>
    <img src={newlogo} width={300}/>
    <Preloader/>
    </Grid>
  )
}

export default LoadingScreen
