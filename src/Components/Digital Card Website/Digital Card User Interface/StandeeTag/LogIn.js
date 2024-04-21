import { Box, Button, Grid, TextField, Typography,Container, useTheme, useMediaQuery, InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import logo from "../../Digital Card Assets/IndiaBuzz.png";
import bg from "../../Digital Card Assets/login_img.png";
import Navbar from '../Components/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { postData } from '../../../Services/NodeServices';
import Swal from 'sweetalert2';
import { confirmAlert } from 'react-confirm-alert'; // Import
import logo1 from '../../Digital Card Assets/dchlogo.png'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Visibility, VisibilityOff } from '@mui/icons-material';
export default function LogIn1() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation();
    const id=location.state.id
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [changeMessage, setChangeMessage] = useState("");
    const [newPassword,setNewPassword]=useState("")
    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const handleSubmit=async()=>{
        var formData = new FormData()
  
        formData.append('email',emailId.toLowerCase())
        formData.append('password',password)

        
        var result = await postData('customerLogin/chkLogin', formData, true)
      
       
        if (result.status) {
            window.localStorage.setItem("userId",result.data._id)
            var formData = new FormData()
            formData.append('tagId', id)
            formData.append('name', result.data.name)
            formData.append('email', emailId.toLowerCase())
            formData.append('phone', result.data.phone)
            formData.append('password', password)
    
    
            var response = await postData('standee/customerLogin', formData, true)
           
            if (response.status == 'true') {
                
                
                Swal.fire({
                    title: 'Successfully Logged In!',
                    imageUrl:logo1,
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    background:'#001e3c',
                    timer:1500,
                    width:500,
                    padding:15,
                    color:'#fff',
                    showConfirmButton:false,
                    
                  })
                navigate('/userdashboard')
                window.localStorage.setItem("User",true)
                window.localStorage.removeItem('data')
                window.localStorage.setItem("data",JSON.stringify(result.data))
            }else if(response.status=='exist'){
                Swal.fire({
                    title: 'You already have an Standee with this Email Id',
                    showDenyButton: true,
                    
                    confirmButtonText: 'Log In with another Email Id',
                    denyButtonText: `Sign Up for new Email Id`,
                    denyButtonColor:`green`,
                    confirmButtonColor:"#001E3C"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/standeelogin',{state:{id:id}})
                    } else if (result.isDenied) {
                        navigate('/standeesignup',{state:{tagId:id}})
                    }
                  })
               
            }
               
               
            }
        else {
                Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Fail to Login',
                        showConfirmButton: false,
                        timer: 1500
                })

        }
      
    }

    const handleClose=()=>{
        setOpen(false)
    }
    const handleClose1=()=>{
        setOpen1(false)
    }
    const handleCheck=async()=>{

        var formData = new FormData()
  
        formData.append('email',email.toLowerCase())
     

        
        var result = await postData('customerLogin/chkUser', formData, true)
        
        if(result.status=="exist"){
           
            setOpen1(true)
            setMessage("")
        }else{
            setOpen1(false)
            setMessage("User Not Found")
        }
    }

    const handleChange=async()=>{
        var formData = new FormData()

        formData.append('email', email.toLowerCase())
        formData.append('password', newPassword)


        var result = await postData('customerLogin/updatePassword', formData, true)
        console.log(result)
        if (result.status) {
            setChangeMessage("Password Changed Successfully")
        }
        else {
           setChangeMessage("Fail to Change")
        }
    }

    const dialogComponent = () => {
        return (
          <Dialog open={open} onClose={handleClose} >
            <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
              Change Password
            </DialogTitle>
            <DialogContent>
            <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                 width:"100%",
                 
                  overflow:"hidden"
                }}
              >
                
                <Grid item xs={10} sx={{display:"flex",justifyContent:"center",mt:2}}>
                    <TextField label="Your Registered Mail Id" value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth/>
                </Grid>
               
                <Grid item xs={12}>
                <Typography sx={{fontSize:20,textAlign:"center",color:"red"}}>{message}</Typography>
                </Grid>
                <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
                    <Button variant='contained' onClick={()=>handleCheck()}>Verify</Button>
                </Grid>

                <Grid item xs={10} sx={{display:open1?"flex":"none",justifyContent:"center",mt:2}}>
                    <TextField label="Enter New Password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} fullWidth/>
                </Grid>

                <Grid item xs={12} sx={{display:open1?"flex":"none",justifyContent:"center"}}>
                    <Button variant='contained' onClick={()=>handleChange()}>Change Password</Button>
                </Grid>
                <Grid item xs={12}>
                <Typography sx={{fontSize:20,textAlign:"center",color:"green"}}>{changeMessage}</Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        );
      };


    return (
        <Box sx={{ background: "#001E3C", width: "100vw", height: "100vh", overflowX: "hidden" }}>

            <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "5.5%", pt: "3%" }}>
                <Box sx={{ background: "#ffffff", p: 0, width: {xs:"100vw",md:"80vw"},borderRadius:{xs:"4%",md:"0%"}, mt: { xs: "22%", lg: "0%" } }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} lg={5} sx={{ p: { xs: "14% 5%", lg: "8% 5%" } }}>
                            <img src={logo} width={"20%"} style={{ display: mobile ? "block" : medium ? "block" : "none", margin: "auto" }} />
                            <Typography sx={{
                                fontSize: { xs: "1.5em", md: "2.6em", lg: "2.4em" },
                                fontWeight: 700,
                                fontFamily: "OXANIUM",
                                color: "#000000",
                                letterSpacing: "-0.2px",
                                mb: "2.5vh",
                                textAlign: "center"
                            }}>
                                Welcome Back
                            </Typography>
                            <Grid container spacing={2} sx={{ p: "8% 5%" }}>
                                <Grid item xs={12}>
                                    <TextField label="Email" type='email' fullWidth value={emailId} onChange={(event)=>setEmailId(event.target.value)}  />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Password"   type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                                        InputProps={{ // <-- This is where the toggle button is added.
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    )
  }} fullWidth value={password} onChange={(event)=>setPassword(event.target.value)}  />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        onClick={handleSubmit}
                                        sx={{
                                            background: "#001E3C",
                                            color: "#ffffff",
                                            p: "2% 10%",
                                            fontSize: { xs: "0.8em", md: "1.1em", lg: "1.2em" },
                                            fontWeight: 600,
                                            "&:hover": {
                                                background: "#023569",
                                                color: "#ffffff",
                                            }
                                        }}
                                    >
                                        Log in
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: "1%" }}>
                                    <Typography sx={{ fontSize:"0.8em",color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center" }}>
                                        Don't Remember Password?
                                    </Typography>
                                    &nbsp;&nbsp;
                                    <Typography onClick={() => setOpen(true)} sx={{fontSize:"0.8em", color: "#001E3C", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center", '&:hover': { color: "red" }, cursor: "pointer" }}>
                                        Forget Password
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: "1%" }}>
                                    <Typography sx={{ fontSize:"0.8em",color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center" }}>
                                        Don't have an account?
                                    </Typography>
                                    &nbsp;&nbsp;
                                    <Typography onClick={() => navigate('/standeesignup',{state:{tagId:id}})} sx={{fontSize:"0.8em", color: "#001E3C", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center", '&:hover': { color: "red" }, cursor: "pointer" }}>
                                        Sign up
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={7} sx={{ display: { xs: "none", md: "none", lg: "flex" }, flexDirection: "column", background: "#DFDFDF", pr: "2%" }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                mt: "2%"
                            }}>
                                <img src={logo} width={"20%"} />
                                <Typography sx={{ color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "left" }}>
                                    We've got tips and tools to keep your business
                                </Typography>
                                <Typography sx={{ color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "left" }}>
                                    growing while you're out of the office.
                                </Typography>
                            </Box>
                            <img src={bg} width={"60%"} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            {dialogComponent()}
        </Box>

    )
}
