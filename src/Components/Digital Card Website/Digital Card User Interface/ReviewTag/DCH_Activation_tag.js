import { Button, Grid } from '@mui/material'
import React from 'react'
import logo from './dchlogo.f93dc62b4342707dd324 (1).png'


export default function DCH_Activation_tag() {
  return (
    <Grid sx={{display:"flex",justifyContent:'center'}}>
    <Grid container spacing={2} sx={{width:450}}>
        <Grid item xs={12} sx={{backgroundColor:'#001D3B',borderBottomLeftRadius:'50%',borderBottomRightRadius:"50%"}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style= {{height:300 , width:300,}} src={logo}/>
               
            </div>
            
           

        </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:'center',fontSize:60,marginBottom:3,color:'#001D3B'}}>
                Welcome
            </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:'center',textAlign:"center",backgroundColor:'#001D3B',paddingBottom:"16px",color:'white', fontSize:{xs:55,md:40}}}>
                Activate your tags here !
            </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:'center'}}>
               <Button variant='contained'  onClick={()=>navigate('/reviewlogin',{state:{id:id}})} sx={{fontSize:25 , backgroundColor:'#001D3B',marginTop:3, "&:hover":{backgroundColor:'#001D3B'}}}>Log in </Button> 
            </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:'center',fontSize:32,marginBottom:2,marginTop:5,color:'#001D3B'}}>
                Don't have an account ?
            </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:'center'}}>
               <Button variant='contained' onClick={()=>navigate('/reviewsignup',{state:{tagId:id}})} sx={{fontSize:20 , backgroundColor:'#001D3B', "&:hover":{backgroundColor:'#001D3B'}}}>Create new </Button> 
            </Grid>

    </Grid>
    </Grid>
  )
}
