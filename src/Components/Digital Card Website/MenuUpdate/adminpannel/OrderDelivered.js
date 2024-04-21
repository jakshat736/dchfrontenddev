import React from 'react'
import { Button, Divider, Grid, Typography } from '@mui/material'
import { WhatsApp } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import img1 from "../assets/dch logooo.png";

const OrderDelivered = () => {
  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Grid container spacing={2} sx={{ width: { xs: "100%", md: 400 } }}>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
                    <img src={img1} alt="Masala Grill" width={120} />

                </Grid>

                <Grid item xs={6} sx={{}}>
                    <Button variant="outlined" sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" }, mt: 2 }}><WhatsApp /> Live support</Button>
                </Grid>
                <Divider
                    sx={{
                        backgroundColor: 'black',
                        height: '1px',
                        width: '100%',
                        mt: 1
                    }}
                />
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography><FavoriteIcon sx={{ width: 20,mt:0.4 }} /></Typography>
                    <Typography sx={{ fontSize: 20, fontFamily: 'poppins', ml: 1 }}>Thank You !</Typography>

                </Grid>
                <Grid item xs={12}>

                    <Typography sx={{ fontSize: 16,textAlign:'left' }}><b style={{fontSize:18}}>Order Completed</b>{" "}
Your Order is completed. please do let us know for any issues.<a href={"tel:8889430333"} style={{color:"black"}}> Contact us</a>

{" "}<b style={{fontSize:18}}>Thank you so much.</b></Typography>

                </Grid>
               
         
        
        
      

            </Grid>
        </Grid>

  )
}

export default OrderDelivered
