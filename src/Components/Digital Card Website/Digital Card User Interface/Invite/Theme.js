import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { serverURL } from '../../../Services/NodeServices'
import "./Theme.css"
import { useNavigate } from 'react-router-dom'
const Theme = ({data}) => {

    const navigate=useNavigate()
    console.log("Akshat",data.coverVideo)
    const handleView=()=>{
        navigate('/invitation',{state:{data:data}})
    }
   
   
    const handleDownload=()=>{
        const anchor = document.createElement('a');
        anchor.href = `${serverURL}/images/${data.invitationVideo}`;
        anchor.download = data.invitationVideo || 'video.mp4';
        anchor.click();  
    }
  return (
    <Grid
  container
  
  spacing={0}
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    overflow: "hidden",
  }}
>
  <Grid
    item
    xs={12}
    md={4}  // Set the desired width for medium screens
    sx={{
      width: "100%",
      height: "100vh",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <video
    
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <source
        src={`${serverURL}/images/${data.coverVideo}`}
        type="video/mp4"
      />
    </video>
    <Grid
      container
      
      sx={{

        position: "absolute",
       
        height: "100%",
        width: "100%",
        display:"flex",
        flexDirection:"column",
        top:650,
        alignItems:"center"
      }}
    >
      <Button
        variant="contained"
        onClick={() => handleView()}
        sx={{
          m: 1,
          fontSize: 12,
          bgcolor: "#f3b419",
          color: "black",
          width:"40%"
        }}
      >
        Play
      </Button>
      <Button
        variant="contained"
        onClick={() => handleDownload()}
        sx={{
          m: 1,
          fontSize: 12,
          bgcolor: "#f3b419",
          color: "black",
          width:"40%"
        }}
      >
        Download Invitation
      </Button>
    </Grid>
  </Grid>
</Grid>

  
  )
}

export default Theme
