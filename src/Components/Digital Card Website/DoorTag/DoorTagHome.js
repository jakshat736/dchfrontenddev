import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { postData,getData } from '../../Services/NodeServices';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import newlogo from '../Digital Card Assets/newlogo.png'
import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import './sign.css'
import Preloader from '../Digital Card User Interface/Components/Preloader';
import DoorEdgeDrawer from './LoginDrawer';
const DoorTagHome = () => {

  const {id}=useParams();
  
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));
  const[result,setResult]=useState('')
  const[display,setDisplay]=useState('none')
  const navigate=useNavigate();
  const [loadingAnimation,setLoadingAnimation]=useState(true)

  const checkTagId=async()=>{
    setLoadingAnimation(true)
    const formData=new FormData;
    formData.append("tagId",id)
    const response=await postData('door/chkTagId',formData,true)
    console.log(response)
    setResult(response.status)
    if(response.status=='false'){
        setLoadingAnimation(false)
      setDisplay('block')
    }
    else{
      
        if(response.data.status=='Active' && response.data.address!=''){
            setLoadingAnimation(false)
            navigate('/scanqr',{state:{data:response?.data}})
           
        }else{
            setLoadingAnimation(false)
          navigate('/digitalcardlogin')
        }
    }
    setLoadingAnimation(false)
  }

  useEffect(()=>{
   checkTagId()
  },[])
  



  return (

    <>{loadingAnimation==true?
           
        <Grid style={{backgroundColor:'#FFF',width:"100%",height:'790px',display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}>
<img src={newlogo} width={300}/>
<Preloader/>
</Grid>
            :
    <Grid sx={{display:"flex",justifyContent:'center'}}>
    <Grid container spacing={2} sx={{display:display,width:450}}>
    <Grid item xs={12} sx={{backgroundColor:'#F3B419',borderBottomLeftRadius:'50%',borderBottomRightRadius:"50%",paddingBottom:10}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style= {{height:180 , width:180,}} src={newlogo}/>
               
            </div>
            
           

        </Grid>
        <Grid item xs={12} class="welcome" sx={{display:"flex",justifyContent:'center',fontSize:60,marginBottom:3,color:'#000'}}>
                Welcome
            </Grid>
        <Grid item xs={12} class={tablet?'activate':'activate1'} sx={{display:"flex",justifyContent:'center',textAlign:"center",backgroundColor:'#F3B419',borderRadius:2,paddingBottom:"16px",color:'black', fontSize:{xs:55,md:34}}}>
                Activate your Door Tag here !
            </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:'center'}} >
            <DoorEdgeDrawer tagId={id}/>
            </Grid>
      

    </Grid>
    </Grid>}
    </>
  )
}

export default DoorTagHome
