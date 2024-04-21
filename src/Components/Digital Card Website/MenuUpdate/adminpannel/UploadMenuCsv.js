import { Grid, Typography, Divider, Button, Paper } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import img1 from "../assets/dch logooo.png";

import React from 'react'

export default function UploadMenuCsv() {
  return (
    <Grid  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid container spacing={2} sx={{ width: 500 }}>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "row" }}>
     <img src={img1} alt="Masala Grill" width={120} />
         
        </Grid>
        <Grid item xs={6} sx={{}}>
          <Button variant="outlined" sx={{ bgcolor: "yellow", mt: 2 }}>
            <WhatsAppIcon />
            Live support
          </Button>
        </Grid>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            width: "100%",
          }}
        />

        <Grid item xs={12}>
         <Typography sx={{textAlign:'left',fontSize:30}}>Upload Menu By CSV,</Typography>
        </Grid> 
        <Grid item xs={12}>
         <Typography sx={{textAlign:'left',}}>Better use this feature in computer and download this csv<br/> format and upload your menu</Typography>
        </Grid>
         <Grid item xs={12}>
         <Button
            variant="outlined"
            color="inherit"
            fullWidth
            sx={{borderRadius:50}}
          >
            Download Format
          </Button>
         </Grid>

         <Grid item xs={12} sx={{display:'flex',flexDirection:'row',}}>
         <Button href="#text-buttons">Choose file</Button>
         <Typography sx={{m:1}}>no file selected</Typography>
         </Grid>

         <Grid item xs={12}>
         <Button
            variant="outlined"
            color="inherit"
            fullWidth
            sx={{borderRadius:20,bgcolor:'black',color:'yellow'}}
          >
            Upload
          </Button>
         </Grid>








        </Grid>
    </Grid>
  )
}
