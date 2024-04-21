import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../Digital Card Assets/newlogo.png'
import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AnchorTemporaryDrawer from './LoginDrawer';
const CardHome = () => {


  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(960));
  const navigate = useNavigate();






  return (
    <Grid sx={{ display: "flex", justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ display: 'block', width: 450 }}>
        <Grid item xs={12} sx={{ backgroundColor: '#F3B419', borderBottomLeftRadius: '50%', borderBottomRightRadius: "50%", paddingBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img style={{ height: 180, width: 180, }} src={logo} />

          </div>



        </Grid>
        <Grid item xs={12} class='welcome' sx={{ display: "flex", justifyContent: 'center', fontSize: 60, marginBottom: 3, color: '#000' }}>
          Welcome
        </Grid>
        <Grid item xs={12} class={tablet ? 'activate' : 'activate1'} sx={{ display: "flex", justifyContent: 'center', textAlign: "center", backgroundColor: '#F3B419', borderRadius: 2, paddingBottom: "16px", color: 'black', fontSize: { xs: 55, md: 34 } }}>
          Activate your Busniess Cards here !
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }} >
          <AnchorTemporaryDrawer />
          {/* <Button variant='contained' onClick={() => navigate('/digitalcardlogin', { state: { goahead: false } })} sx={{ fontSize: 25, backgroundColor: '#F3B419', marginTop: 3, color: "black", "&:hover": { backgroundColor: '#F3B419' } }}><Typography class='font'>Log In</Typography></Button> */}
        </Grid>
        {/* <Grid item xs={12} class='font1' sx={{ display: "flex", justifyContent: 'center', fontSize: 32, marginBottom: 2, marginTop: 2, color: '#000' }}>
          Don't have an account ?
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
          <Button variant='contained' onClick={() => navigate('/digitalcardsignup')} sx={{ fontSize: 20, backgroundColor: '#F3B419', color: "black", "&:hover": { backgroundColor: '#F3B419' } }}><Typography class='font'>Create Now</Typography></Button>
        </Grid> */}

      </Grid>
    </Grid>
  )
}

export default CardHome
