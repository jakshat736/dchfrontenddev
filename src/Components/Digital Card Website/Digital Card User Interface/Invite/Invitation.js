import { Grid } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Theme.css"
import { serverURL } from '../../../Services/NodeServices'
const Invitation = () => {
  const location = useLocation()
  const data = location.state.data
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
          src={`${serverURL}/images/${data.invitationVideo}`}
          type="video/mp4"
        />
      </video>
    </Grid>
  </Grid>
  
  )
}

export default Invitation
