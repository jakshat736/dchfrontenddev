import { Grid, Button, Divider, Typography,TextField, useTheme, useMediaQuery } from "@mui/material";
import img1 from "../Digital Card Assets/newlogo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'

export default function Cong() {
  var theme=useTheme()
  var show=useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <Grid  sx={{ display: "flex", justifyContent: "center", alignItems: "center",mt:2 }}>
     {show?<Grid container spacing={2} sx={{width:{xs:"100%"}}}>
     <Grid item xs={6} sx={{display:'flex',flexDirection:'row',}}>
     <img src={img1} alt="Masala Grill" width={120} />
       
</Grid>


<Divider
          sx={{
           
            height: '1px',
            width: '100%',
            mt:5
          }}
        />
    <Grid item xs={12} sx={{bgcolor:'#F3B419'}}>
   <Typography sx={{color:'black',fontWeight:"bold",fontSize:22}}>Please Open on the Mobile Phone or Tablet</Typography>
    </Grid>
     </Grid>:<Grid container spacing={2} sx={{width:{xs:"100%",}}}>
     <Grid item xs={6} sx={{ display: "flex", flexDirection: "row" }}>
          <img src={img1} alt="Masala Grill" width={120} />
        </Grid>

        <Grid item xs={6} sx={{}}>
        <Button variant="contained" sx={{ backgroundColor: '#F3B419',"&:hover":{backgroundColor:'#F3B419' },color:"#000"}}>
            <WhatsAppIcon />
            Live support
          </Button>
        </Grid>
        <Divider
          sx={{          
            width: "100%",
            mt: 5,
          }}
        />
        <Grid item xs={12} sx={{ bgcolor: "#F3B419" }}>
          <Typography sx={{ color: "black",fontWeight:"bold",fontSize:22 }}>
            {" "}
            Now orders shipping in 09 hrs 03 mins.{" "}
          </Typography>
          <Typography sx={{ color: "black",fontSize:18 }}>
            use the code as *GIVEME20* to get 20% discount.
          </Typography>
        </Grid>
        <Grid item xs={12} >
        
        <Typography sx={{display:'flex',fontWeight:'bold',fontSize:28,justifyContent:"center",}}>Congratulations <FavoriteIcon fontSize="large"/></Typography>
         <Typography sx={{display:'flex',fontWeight:'bold',fontSize:22,justifyContent:"center"}}>Your vehicle has DCH now.</Typography>
        </Grid>
        <Grid item xs={12}>
     <Typography sx={{display:'flex',fontSize:18}}>We have enabled the calling feature of your tag you can login and manage your tags.</Typography>
        </Grid>

        <Grid item xs={12}>
         <Typography sx={{display:'flex',fontWeight:'bold'}}>Do you want to enable calling masking ?</Typography>
        </Grid>

        <Grid item xs={12}>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#F3B419',"&:hover":{backgroundColor:'#F3B419' }}}>
  <Typography sx={{color:'black',fontFamily:'poppins',fontSize:25}}>Enable Call Masking</Typography>
</Button>
        </Grid>
        <Divider
          sx={{
            background:"black",
            height: "1px",
            width: "100%",
            mt:5,
          }}
        />
        <Grid item xs={12}>
        <Typography sx={{display:'flex',fontSize:18}}>Hey please share us with your friends and family. Click on the button below to share on Facebook.</Typography>
        </Grid>
         
        <Grid item xs={12}>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#F3B419',"&:hover":{backgroundColor:'#F3B419' }}}>
  <Typography sx={{color:'black',fontFamily:'poppins',fontSize:25}}>Facebook Share</Typography>
</Button>
        </Grid>

     </Grid>}

    </Grid>
  )
}
