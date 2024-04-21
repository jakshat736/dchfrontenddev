import { Grid, Typography } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import React from 'react'
import { WhatsApp } from '@mui/icons-material';

export default function Header() {
  return (
    <Grid sx={{zIndex:2}}>
      <Grid container spacing={2}>

        <Grid item xs={12} sx={{ bgcolor: '#ffa502', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


          <Typography sx={{ ml: 0, display: { xs: 'none', md: 'block' }, color: 'white' }}>(₹)-INR</Typography>
          <Typography sx={{ ml: { xs: 0, md: 7 }, color: 'white', fontSize: { xs: 14, md: 20 } }}>FALL SALE! Save 30% with Code: FALL30</Typography>
          <IconButton
            href="https://www.facebook.com/digitalcardhub.in"
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ ml: { xs: 0, md: 5 }, display: { xs: 'block' } }}
          >
            <FacebookIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            href='https://www.instagram.com/digitalcardhub.in/'
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ ml: -2, display: { xs: 'block' } }}
          >
            <InstagramIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            href='https://wa.link/kwsa4v'
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ ml: -2, display: { xs: 'block' } }}
          >
            <WhatsApp sx={{ color: 'white' }} />
          </IconButton>


          <Typography sx={{ ml: 3, color: 'white', display: { xs: 'none', md: 'block' }, fontSize: { md: 18 } }}>+91 88894 30333</Typography>














        </Grid>







      </Grid>






    </Grid>
  )
}
