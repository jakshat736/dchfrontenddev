import { Grid, Button, Divider, Typography,TextField, useTheme, useMediaQuery } from "@mui/material";
import img1 from "../Digital Card Assets/newlogo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InputAdornment from '@mui/material/InputAdornment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState,  } from "react";
import { useNavigate } from "react-router-dom";



export default function VerifyNumber() {
  var theme=useTheme()
 //  var show=useMediaQuery(theme.breakpoints.up("sm"))
 var show=false
    var navigate=useNavigate()

    const [name,setName]  = useState("")
    const [india,SetIndia]  = useState("")
    const [number,SetNumber]  = useState("")


 



  return (
    <Grid    sx={{ display: "flex", justifyContent: "center", alignItems: "center",mt:2}}>
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
          <Typography sx={{ color: "black",fontWeight:"bold",fontSize:22 }}>
            {" "}
            Now orders shipping in 09 hrs 03 mins.{" "}
          </Typography>
          <Typography sx={{ color: "black",fontSize:18 }}>
            use the code as *GIVEME20* to get 20% discount
          </Typography>
        </Grid>
       <Grid item xs={12}>
      <Typography sx={{ color: "black",fontWeight:"bold",fontSize:22 }}>We need your phone number to send you notifications about your vehicle. </Typography>
      </Grid>

      <Grid item xs={12}>
        <TextField onChange={(e)=>setName(e.target.value)} value={name} fullWidth id="outlined-basic" label="Your Name" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField onChange={(e)=>SetIndia(e.target.value)} value={india} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             India(+91)
            </InputAdornment>
          ),
        }}
        variant="outlined"
      
 fullWidth id="outlined-basic" label="Mobile Number"  />
         
        </Grid>
        <Grid item xs={6}>
        <TextField onChange={(e)=>SetNumber(e.target.value)} value={number} fullWidth id="outlined-basic" label="Mobile Number" variant="outlined" />
        </Grid>

        <Grid item xs={12}>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#F3B419',"&:hover":{backgroundColor:'#F3B419' }}} onClick={()=>navigate('/register')}>
  <Typography sx={{color:'black',fontFamily:'poppins',fontSize:25}}>Verify Mobile</Typography>
</Button>
        </Grid>

       <Grid item xs={12}>
        <Typography sx={{display:'flex',cursor:'pointer',fontSize:23}} onClick={()=>navigate('/vehiclenumber')}><ArrowBackIcon fontSize="large" /> Previous step</Typography>
        </Grid> 

        <Grid item xs={12}>
<Typography sx={{ color: "black",fontWeight:"bold",fontSize:22 }}>If you need any help please</Typography>
<Typography sx={{ color: "black",fontSize:18 }}>click here whatsApp live support.</Typography>
 </Grid>




    </Grid>
}



    </Grid>
  )
}
