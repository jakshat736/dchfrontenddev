import React from "react";
import img1 from "../assets/dch logooo.png";

import { Grid, Typography } from "@mui/material";

export default function Company(props) {
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid black",
        borderTop: "1px solid black",
        padding: { xs: "10px", sm: "15px", md: "5px" },
        marginTop: "2px",
        display:'flex',
        justifyContent:'center'
      }}
    >
      
     <img src={img1} alt="Masala Grill" width={120} />
        

     
    </Grid>
  );
}
