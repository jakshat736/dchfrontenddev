import React from 'react'
import { Grid,Typography,Paper } from '@mui/material'


export const CardComponent = () => {
  return (
    <Grid item xs={10} md={3.5} sm={5} sx={{display: "flex", justifyContent: 'center',mt:10}}>
    <Paper elevation={6} sx={{ display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: 'center',bgcolor:'#ff4757',boxShadow:' 0 3px 10px #8c0c03' }}>
       <Grid container spacing={2} sx={{display:"flex",justifyContent:'center'}}>
            
           <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center',position:'relative'}}>
           <Grid sx={{position:'absolute',left:20}}>
            new
            
            </Grid>
            <Grid sx={{position:'absolute',right:5 }}>
            <img src="/assets/kl.png"  width={100} />
            </Grid>
            
               <img src="/assets/sd.jpg" width={'100%'}/>
           </Grid>
           <Grid item xs={12} sx={{height:100,color:'white'}}>
               <Typography textAlign={'center'}  fontSize={15}> Online shop NFC Tag Action Button</Typography>
           </Grid>
           
       </Grid>
       
   </Paper>  
</Grid>
  )
}
