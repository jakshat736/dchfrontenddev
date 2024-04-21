import { Grid, Button, Divider, Typography,TextField, useTheme, useMediaQuery } from "@mui/material";
import img1 from "../Digital Card Assets/newlogo.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


import React, { useState,  } from "react";
import { useNavigate } from "react-router-dom";


export default function Register() {
  var theme=useTheme()
  var show=useMediaQuery(theme.breakpoints.up("sm"))
    var navigate=useNavigate()

    const [otp,setOtp]  = useState("")
    
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
     </Grid>: <Grid container spacing={2} sx={{width:{xs:"100%",}}}>
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
           
            height: "1px",
            width: "100%",
            mt: 5,
          }}
        />
        <Grid item xs={12} sx={{ bgcolor: "#F3B419" }}>
          <Typography  sx={{ color: "black",fontWeight:"bold",fontSize:22 }}>
            {" "}
            New orders shipping in 09 hrs 03 mins.{" "}
          </Typography>
          <Typography sx={{ color: "black",fontSize:18 }}>
            use the code as *GIVEME20* to get 20% discount.
          </Typography>
        </Grid>
        <Grid item xs={12}>
         <Typography sx={{fontWeight:'bold',fontSize:25}}>Please enter your OTP here</Typography>
        </Grid>
        <Grid item xs={12}>
        <TextField onChange={(e)=>setOtp(e.target.value)} value={otp} fullWidth id="outlined-basic" label="Enter OTP" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#F3B419',"&:hover":{backgroundColor:'#F3B419' }}} onClick={()=>navigate('/cong')}>
  <Typography sx={{color:'black',fontFamily:'poppins',fontSize:25}}>Register DCH tag</Typography>
</Button>
        </Grid>

        
       <Grid item xs={12}>
        <Typography sx={{display:'flex',cursor:'pointer',fontSize:23}} onClick={()=>navigate('/verifynumber')}><ArrowBackIcon fontSize="large" /> Previous step</Typography>
        </Grid> 
        
        <Grid item xs={12}>
<Typography sx={{ color: "black",fontWeight:"bold",fontSize:22 }}>If you need any help please</Typography>
<Typography sx={{ color: "black",fontSize:18 }}>click here whatsApp live support.</Typography>
 </Grid>
        
        
        
        </Grid>  }






    </Grid>
  )
}
