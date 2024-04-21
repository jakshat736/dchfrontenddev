import { Grid, Paper, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import React, { useState } from 'react';


export default function Selectqy() {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Grid container spacing={2} sx={{width:450}}>
   {/* <Paper sx={{width: 500, backgroundColor: 'white',paddingBottom:15,mt:10}}>
    <Typography sx={{mt:3,mr:30,fontFamily:'poppins',fontSize:20,width:200}}>chicken kanti</Typography>
    <Typography sx={{mt:3,mr:40,fontFamily:'poppins',fontSize:20,width:200}}>Full portion ₹ 400</Typography>
    <Grid sx={{display:'flex',flexDirection:'row',mt:5,ml:2}}>
    <button onClick={decrement} style={{width:50,borderRadius:'10%'}} >-</button>
    <TextField sx={{ width: 150, ml: 2 }} variant="outlined" type="number"value={count} InputProps={{ inputProps: { min: 0 } }} disabled />
   <button  onClick={increment} style={{marginLeft:10,width:50,borderRadius:'10%'}}>+</button>
      </Grid>
   </Paper> */}
   {/* <Paper sx={{width: 500, backgroundColor: 'white',paddingBottom:10,}}>
    <Typography sx={{mt:3,mr:40,fontFamily:'poppins',fontSize:20,width:200}}>Half portion ₹ 250</Typography>
    <Grid sx={{display:'flex',flexDirection:'row',mt:5,ml:2}}>
    <button onClick={decrement} style={{width:50,borderRadius:'10%'}} >-</button>
    <TextField sx={{ width: 150, ml: 2 }} variant="outlined" type="number"value={count} InputProps={{ inputProps: { min: 0 } }} disabled />
   <button  onClick={increment} style={{marginLeft:10,width:50,borderRadius:'10%'}}>+</button>
   

      </Grid>
      <Grid sx={{mt:10,ml:2}}>
      <button  style={{width:50,height:50,borderRadius:'10%',}}>Close</button>
      </Grid>
   </Paper> */}



 

    </Grid>
</Grid>
  
  )
}
