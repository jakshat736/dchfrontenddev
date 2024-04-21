import { Grid, Paper, IconButton } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import HelpIcon from '@mui/icons-material/Help';
import React from 'react';

export default function Lower() {
  return (
    <Grid>
      <Paper sx={{ borderTopLeftRadius: '20', borderTopRightRadius: '20',width:{xs:"100vw"},backgroundColor:'red' }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{ display: { md: 'none', xs: 'flex' }, justifyContent:'space-around' }}
          >
            <IconButton sx={{ margin: '4px' }}>
              <StoreIcon />
            </IconButton>
            <IconButton sx={{ margin: '4px' }}>
              <LoyaltyIcon />
            </IconButton>
            <IconButton sx={{ margin: '4px' }}>
              <FiberNewIcon />
            </IconButton>
            <IconButton sx={{ margin: '4px' }}>
              <HelpIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
