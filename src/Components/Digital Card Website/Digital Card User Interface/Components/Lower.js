import { Grid, Paper, IconButton, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import HelpIcon from '@mui/icons-material/Help';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Lower(props) {
  const navigate=useNavigate()
  const handleButtonClick = () => {
    // Call the parent function passed as a prop
    // if (props.callParentFunction) {
    //   props.callParentFunction();
    // }

    navigate('/allproducts')

    // Other logic in the Lower component
  };
  return (
    <Grid>
      <Paper sx={{ borderTopLeftRadius: '20', borderTopRightRadius: '20',width:{xs:"100vw"},backgroundColor:'white' }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{ display: { md: 'none', xs: 'flex' }, justifyContent:'space-around' }}
          >
            <IconButton sx={{display:"flex",flexDirection:'column'}} onClick={()=>navigate('/shop')}>
              <StoreIcon />
              <Typography>Shop</Typography>
            </IconButton >
            <IconButton sx={{display:"flex",flexDirection:'column'}} onClick={handleButtonClick}>
              <LoyaltyIcon />
              <Typography>Sale</Typography>
            </IconButton >
            <IconButton sx={{display:"flex",flexDirection:'column'}} onClick={handleButtonClick}>
              <FiberNewIcon />
              <Typography>New</Typography>
            </IconButton>
            <IconButton sx={{display:"flex",flexDirection:'column'}} href='https://youtu.be/dfj0V7aHbCM?si=ED7JFPvgDEAJ4kYX'>
              <HelpIcon />
              <Typography>Help</Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
