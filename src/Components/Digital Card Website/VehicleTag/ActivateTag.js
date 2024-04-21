import { Grid ,Button,Divider, Typography, useTheme, useMediaQuery} from '@mui/material'
import img1 from "../Digital Card Assets/newlogo.png";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import React from 'react'
import { useNavigate } from "react-router-dom";
export default function ActivateTag() {
  var theme=useTheme()
  //  var show=useMediaQuery(theme.breakpoints.up("sm"))
   var show=false
  var navigate=useNavigate()
  return (
    <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:2}}>
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
     </Grid>: <Grid container spacing={2} sx={{width:{xs:"100%"}}}>
     <Grid item xs={6} sx={{display:'flex',flexDirection:'row',}}>
     <img src={img1} alt="Masala Grill" width={120} />
       
</Grid>

<Grid item xs={6} >
<Button variant="contained" sx={{ backgroundColor: '#F3B419',"&:hover":{backgroundColor:'#F3B419' },color:"#000"}}><WhatsAppIcon/>Live support</Button>
</Grid>
<Divider
          sx={{
           
            height: '1px',
            width: '100%',
            mt:5
          }}
        />
    <Grid item xs={12} sx={{bgcolor:'#F3B419'}}>
   <Typography sx={{color:'black',fontWeight:"bold",fontSize:22}}> Now orders shipping in 09 hrs 03 mins. </Typography>
   <Typography sx={{color:'black',fontSize:18}}>use the code as *GIVEME20* to get 20% discount.</Typography>
    </Grid>
    <Grid item xs={12}>
    <Typography sx={{color:'black',fontWeight:"bold",fontSize:22}}>You are about to activate the tags.</Typography>
    <Typography sx={{color:'black',fontSize:18}}>Please do activate all your tags as all of them are unique you
    can change these detail later from your accounts Enter your 
    vehicle plate number and phone number in next step.</Typography>

    </Grid>
    <Grid item xs={12}>
    <Button variant="contained" fullWidth sx={{ backgroundColor: '#F3B419',"&:hover":{backgroundColor:'#F3B419' }}} onClick={()=>navigate('/vehiclenumber')}>
  <Typography sx={{color:'black',fontFamily:'poppins',fontSize:25}}>ACTIVATE TAG</Typography>
</Button>
 </Grid>
 <Grid item xs={12}>
<Typography sx={{color:'black',fontWeight:"bold",fontSize:22}}>If you need any help please</Typography>
<Typography sx={{color:'black',fontSize:18}}>Click here whatsApp live support.</Typography>
 </Grid>
     </Grid>

}
    </Grid>
  )
}
