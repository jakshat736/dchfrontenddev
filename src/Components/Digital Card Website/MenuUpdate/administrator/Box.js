import React from "react";
import { Grid, Typography ,TextField,InputAdornment, Button} from "@mui/material";
import img1 from '../assets/a1.jpg';
import PhoneIcon from "@mui/icons-material/Phone";
import Company from "./Company";
import '../administrator/box.css'

export default function Box({name,number,image,call}) {
  return (
    <>
    <Company />
    <div className="container" style={{ border: '2px solid #ffde00', padding: '9px', }}>
      <Grid container spacing={1}>
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image} alt="Masala Grill" width={100} />
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{ fontSize: '20px', color: 'black' }}>{name}</Typography>
          <Typography sx={{ fontSize: '10px' }}>At {name}, we are passionate about serving the finest Indian</Typography>
          <Typography sx={{ fontSize: '10px' }}> cuisine. Our flavors...</Typography>
          <Button sx={{display:call=="able"?"block":"none", fontSize: '20px',m:1,bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"} }} href={`tel:+91${number}`} variant='contained'>+91 {number}</Button>
          
        </Grid>
      </Grid>
    </div>
  </>
  
  
  

  );
}
