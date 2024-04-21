import React, { useState } from 'react'
import { Grid, Button, Typography,TextField, useTheme, useMediaQuery,Divider } from "@mui/material";
import img1 from "../Digital Card Assets/newlogo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { postData } from '../../Services/NodeServices';


export const MessageSend = () => {
    var theme=useTheme()
    const navigate=useNavigate()
    // var show=useMediaQuery(theme.breakpoints.up("sm"))
    var show=false
    const location=useLocation()
    const data=location.state.data
    const messageArray=location.state.messageArray
    const message=messageArray.join(".*%0a*")
    const [vehicleNumber,setVehicleNumber]=useState('')
    const handleSubmit=async() => {
        if(data?.vehicleNumber.slice(-4)===vehicleNumber)
        {
            const apiUrl = `https://soft7.in/api/send?number=91${data?.phone}&type=text&message=Your Message From Digital Vehicle Tag - Vehicle Number: *${data?.vehicleNumber?.toUpperCase()}*%0a*${message}*&instance_id=65B92B5C6DD7D&access_token=65b928bbcea41`;
          const response=await postData('otp/api',{url:apiUrl})
          Swal.fire({
            title : "Message Send Successfully.Keep Helping Others",
            icon: "Success",
            timer: 1000,
            showConfirmButton: false,
        })
        }else{
            Swal.fire({
                title : "Wrong Vehicle Number",
                icon: "error",
                timer: 1000,
                showConfirmButton: false,
            })
        }
    }
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
     </Grid>:  <Grid container spacing={2} sx={{width:{xs:"100%",}}}>
         <Grid item xs={6} sx={{display:'flex',flexDirection:'row',}}>
         <img src={img1} alt="Masala Grill" width={120} />
           
    </Grid>
    <Grid item xs={6} sx={{}}>
    <Button variant="contained" sx={{bgcolor:'#F3B419',"&:hover":{backgroundColor:'#F3B419' },color:"#000",mt:2}}><WhatsAppIcon/>Live support</Button>
    </Grid>
    <Grid item xs={10} sx={{fontSize:25,marginTop:2,fontWeight:"bold"}}>
        Please Verify the number plate of the vehicle !!
    </Grid>
    <Grid item xs={10} sx={{fontSize:18,marginTop:2,marginBottom:2,fontWeight:"bold"}}>
        Please Enter the last 4 digit number of the vehicle.
    </Grid>
<Grid item xs={12} sx={{display:'flex',alignItems:"center",mb:5}}>
    <Typography sx={{mt:2,fontSize:18,fontWeight:"bold"}}>{data?.vehicleNumber.slice(0,-4).toUpperCase()+"####"}</Typography>

<TextField sx={{ml:3}}  color="warning" id="standard-basic" label="Enter 4 digit number" variant="standard" onChange={(e)=>setVehicleNumber(e.target.value)}/>
</Grid>
<Grid item xs={6}>
    <Button onClick ={()=>navigate(-1)} variant="outlined" fullWidth sx={{ backgroundColor: '#F3B419',"&:hover":{backgroundColor:'#F3B419' }}} >
  <Typography  sx={{color:'black',fontFamily:'poppins',fontSize:20}}>Back</Typography>
</Button>
</Grid>
    <Grid item xs={6}>
    <Button onClick ={()=>handleSubmit()} variant="contained" fullWidth sx={{ backgroundColor: '#F3B419',"&:hover":{backgroundColor:'#F3B419' }}} >
  <Typography  sx={{color:'black',fontFamily:'poppins',fontSize:20}}>Submit</Typography>
</Button>
</Grid>

    
        </Grid>}
    </Grid>
    )
}
