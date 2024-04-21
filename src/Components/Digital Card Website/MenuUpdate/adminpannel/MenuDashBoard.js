import React, { useEffect, useState } from 'react'
import { Grid,Typography,Button,Divider } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import PhotoSizeSelectLargeIcon from '@mui/icons-material/PhotoSizeSelectLarge';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import img1 from "../assets/dch logooo.png";

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { useNavigate, useParams } from "react-router-dom";
import { postData } from '../../../Services/NodeServices';
import { PhoneEnabled } from '@mui/icons-material';
import Swal from 'sweetalert2';
export default function MenuDashBoard() {
  var navigate=useNavigate()
  const {menuId}=useParams()
  const [call,setCall]=useState("")
    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };
      
      useEffect(()=>{

      })

      const fetchData=async()=>{
        var formData=new FormData
        formData.append("menuId",menuId)
        const response=await postData('index/getRestaurantDetails',formData,true)
        if(response.data.restaurantName==""){
           navigate('/restaurantdetails',{state:{menuId:menuId}})
        }else{
          setCall(response.data.call)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const handleCall=async()=>{
      var formData=new FormData
      formData.append("menuId",menuId)
      formData.append("call",call=="able"?"disable":"able")
      const response=await postData('index/call',formData,true)
      if(response.status==true){
        Swal.fire({
          text:"Updated",
          timer:1000
        })
        fetchData()
      }
    }
      
  return (
    <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     
     <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',alignItems:'center',width:{xs:"100%",md:400},}}>
      <Grid item xs={6} sx={{display:'flex',flexDirection:'row',}}>
     <img src={img1} alt="Masala Grill" width={120} />
        
    
</Grid>

<Grid item xs={6} sx={{}}>
<Button variant="outlined" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}><WhatsAppIcon/>Live support</Button>
</Grid>
<Divider
          sx={{
            backgroundColor: 'black',
            height: '1px',
            width: '100%',
            
          }}
        />
     <Grid item xs={12}>
        <Typography sx={{fontFamily:'poppins',fontSize:25,display:'flex',flexDirection:'row',}}>Your tags, Your control !</Typography>
     </Grid>
     <Grid item xs={12}>
     <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}>
        <ListItemText onClick={()=>navigate('/ViewOrder',{state:{menuId:menuId}})} primary="View Orders" />
        <NotificationsIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText  onClick={()=>navigate('/AddMenu',{state:{menuId:menuId}})} primary="Add Menu Items" />
        <SoupKitchenIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <ListItem button>
        <ListItemText onClick={()=>navigate('/Allmenu',{state:{menuId:menuId}})} primary="Edit Menu Items" />
        <EditNoteIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText onClick={()=>navigate(`/menus/${menuId}`)} primary="View menu" />
        <MenuOpenIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Edit Restaurant Details" onClick={()=>navigate('/restaurantdetails',{state:{menuId:menuId}})} />
        <BlurCircularIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      
      {call=="able"? <ListItem button onClick={()=>handleCall()}>
     <ListItemText primary="Disable Calls." />
        <PhoneDisabledIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>:<ListItem button onClick={()=>handleCall()}>
     <ListItemText primary="Enable Calls." />
        <PhoneEnabled sx={{mr:{xs:5,md:0}}}/>
      </ListItem>}
      <Divider />
      {/* <ListItem button>
        <ListItemText primary="Enable order from home" />
        <PlayArrowIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Pause The Menu" />
        <PauseIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button>
  <ListItemText
    primary={
      <div>
        <span style={{ fontSize: '14px' }}>Add more QRs</span>
        <br />
        <span style={{ fontSize: '10px' }}>Scan the QR you want to attach to the </span>
        <br />
        <span style={{ fontSize: '10px' }}>Menu.</span>
      </div>
    }
  />
  <DashboardCustomizeIcon sx={{mr:{xs:5,md:0}}}/>
</ListItem> */}
      <Divider />
    </List>
     </Grid>
     <Grid item xs={12}>
     <Button variant="contained" disableElevation sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}>
     <WhatsAppIcon  sx={{mr:{xs:5,md:0}}}/> Share Business on WhatsApp
    </Button>
     </Grid>
      











     </Grid>












    </Grid>
  )
}
