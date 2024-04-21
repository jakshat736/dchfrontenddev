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
  import React, { useState } from "react";
  import Navbar from "./UserComponents/Navbar";
  import Footer from "./UserComponents/Footer";
  import WhatsAppIcon from "@mui/icons-material/WhatsApp";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import BorderColorIcon from "@mui/icons-material/BorderColor";
  import { useLocation, useNavigate } from "react-router-dom";
  import { getData, postData } from "../../../Services/NodeServices";
  import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
  import { AddToHomeScreen } from "@mui/icons-material";
  import Dialog from "@mui/material/Dialog";
  import DialogActions from "@mui/material/DialogActions";
  import DialogContent from "@mui/material/DialogContent";
  import DialogContentText from "@mui/material/DialogContentText";
  import DialogTitle from "@mui/material/DialogTitle";
  import Swal from "sweetalert2";
  import { useEffect } from "react";
  import Switch from '@mui/material/Switch';
  const Dashboard = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));
    const location = useLocation();
    const [data,setData]=useState(location.state.data)
    const [link,setLink]=useState(location.state.data.link)
   
    const handleSave=async()=>{
       
        const formData=new FormData;
        formData.append('tagId',data.tagId);
        formData.append('link',link);
        const response=await postData('review/updateLink',formData,true);
        if(response.status){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Link Succesfully Saved',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Fail to Login',
                showConfirmButton: false,
                timer: 1500
            })

        }
        

    }
   
  
    return (
      <Grid>
        <Navbar />
        <Grid container spacing={2}>
        <Grid
            xs={12}
            item
            sx={{
              mt: "5vh",
              mb: "4vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
        <Paper
              elevation={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 600,
                borderRadius: 4,
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: mobile ? "100%" : tablet ? "70%" : "100%",
                  margin: 1,
                }}
              >
                <Grid item xs={12}>
                    <Typography textAlign={'center'} fontWeight={700} fontSize={20}>Add Google Review Link</Typography>
                </Grid>
                <Grid item xs={10} sx={{display:"flex",justifyContent:"center"}}>
                    <TextField label="Google Review Link" value={link} onChange={(e)=>setLink(e.target.value)} fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
                    <Button variant='contained' onClick={()=>handleSave()}>Save</Button>
                </Grid>


              </Grid>
              </Paper>
</Grid>
        </Grid>
             
              <Footer />
      </Grid>
    );
  };
  
  export default Dashboard;
  