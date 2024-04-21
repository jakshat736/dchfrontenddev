import { Grid, Button, Divider, Typography, TextField, useTheme, useMediaQuery, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import img1 from "../Digital Card Assets/newlogo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, { useState, } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import OtpGenerator from "../Digital Card User Interface/ReviewTag/OtpGenerator";
import Swal from "sweetalert2";
import { postData } from "../../Services/NodeServices";

export default function VehicleNumber() {
  var theme = useTheme()
  //  var show=useMediaQuery(theme.breakpoints.up("sm"))
  var show = false
  var navigate = useNavigate()
  var location = useLocation()
  const data = location.state.data
  const [vehicleNumber, setVehicleNumber] = useState(data?.vehicleNumber || "")
  const [name, setName] = useState(data?.name || "")
  const [number, setNumber] = useState(data?.phone || "")
  const [vehicleType, setVehicleType] = useState(data?.vehicleType || "")
  const [otp, setOtp] = useState("")
  const [verified, setVerified] = useState()
  const [display,setDisplay]=useState(false)
  const handleopenotpdailog = async () => {
  
    if(number!='' && number?.toString().length==10){
    var otpval = OtpGenerator()
   
    setOtp(otpval)

    const apiUrl = `https://soft7.in/api/send?number=91${number}&type=text&message=Your Otp For Vehicle Tag By Digital Card Hub - ${otpval}&instance_id=65B92B5C6DD7D&access_token=65b928bbcea41`;
    const response=await postData('otp/api',{url:apiUrl})
    Swal.fire({
      text:"Otp Sent Successfully",
      timer:1000
  })
  setDisplay(true)
   
    }else{
        Swal.fire({
            text:"Enter the Number First",
            timer:1000
        })
    }
}

const handleOtp = (value) => {
  if (value.length == 4) {
      if (otp == value) {
          setVerified(true)
      } else {
          setVerified(false)
      }
  }
}

const handleSave=async()=>{
  if(verified){
    var formData=new FormData
    formData.append("_id",data?._id)
    formData.append("name",name)
    formData.append("phone",number)
    formData.append("vehicleType",vehicleType)
    formData.append("vehicleNumber",vehicleNumber)
    formData.append("status","Active")

    var res = await postData('vehicle/updateVehicleNumber',formData,true)
    if(res.status==='true'){
      Swal.fire({
        text:"Saved Successfully",
        timer:1000
    })
    navigate(-1)

    }
  }else if(data?.vehicleNumber===vehicleNumber ){
    navigate(-1)
  }
  else{
    Swal.fire({
      text:"First Verify Your Phone Number By OTP",
      timer:1000
  })
  }

}


  return (
    <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 2 }}>
      {show ? <Grid container spacing={2} sx={{ width: { xs: "100%" } }}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
          <img src={img1} alt="Masala Grill" width={120} />
        </Grid>
        <Divider
          sx={{
            height: '1px',
            width: '100%',
            mt: 5
          }}
        />
        <Grid item xs={12} sx={{ bgcolor: '#F3B419' }}>
          <Typography sx={{ color: 'black', fontWeight: "bold", fontSize: 22 }}>Please Open on the Mobile Phone or Tablet</Typography>
        </Grid>
      </Grid> : <Grid container spacing={2} sx={{ width: { xs: "100%", } }}>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "row" }}>
          <img src={img1} alt="Masala Grill" width={120} />
        </Grid>

        <Grid item xs={6} sx={{}}>
          <Button variant="contained" sx={{ backgroundColor: '#F3B419', "&:hover": { backgroundColor: '#F3B419' }, color: "#000" }}>
            <WhatsAppIcon />
            Live support
          </Button>
        </Grid>
        <Divider
          sx={{

            height: "1px",
            width: "100%",
            mt: 5,
          }}
        />
        <Grid item xs={12} sx={{ bgcolor: "#F3B419" }}>
          <Typography sx={{ color: "black", fontWeight: "bold", fontSize: 22 }}>
            Now orders shipping in 09 hrs 03 mins.{" "}
          </Typography>
          <Typography sx={{ color: "black", fontSize: 18 }}>
            use the code as *GIVEME20* to get 20% discount.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: "bold", fontSize: 22, mt: 3 }}>Please enter your complete Vehicle number plate like   'MP07MC7277'</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={vehicleType}
              label="Vehicle Type"
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <MenuItem value={"Four_Wheeler"}>Four Wheeler</MenuItem>
              <MenuItem value={"Two_Wheeler"}>Two Wheeler</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          fullWidth 
          id="outlined-basic" 
          label="Your Name" 
          variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField 
          onChange={(e) => setNumber(e.target.value)} 
          value={number} 
          fullWidth 
          id="outlined-basic" 
          label="Whatsapp Number" 
          variant="outlined" />
        </Grid>

        <Grid item xs={9}>
          <TextField 
          onChange={(e) => setVehicleNumber(e.target.value)}
          value={vehicleNumber}
          fullWidth 
          id="outlined-basic" 
          label="vehicle plate number" 
          variant="outlined" 
          />
        </Grid>
        <Grid item xs={3}>
          <Button 
          onClick={() => handleopenotpdailog()}
          variant="contained" 
          fullWidth 
          sx={{ backgroundColor: '#F3B419', 
          "&:hover": { backgroundColor: '#F3B419' } }} >
            <Typography sx={{ color: 'black', fontFamily: 'poppins', fontSize: 20 }}>
              Send Otp
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField 
         onChange={(event) => handleOtp(event.target.value)}
          fullWidth 
          id="outlined-basic" 
          label="Enter Otp" 
          variant="outlined" 
          sx={{display:display?"block":'none'}}/>
        </Grid>
        <Grid item xs={12}>
           OTP not received ? <a style={{ cursor: 'pointer' }} onClick={handleopenotpdailog}>Resend</a>
        </Grid>
        <Grid item xs={12}>
              {verified == true ? "Verified" : verified == false ? "Not Verified" : ""}
        </Grid>
        <Grid item xs={12}>
          <Button 
          onClick={() => handleSave()}
          variant="contained" 
          fullWidth 
          sx={{ backgroundColor: '#F3B419', 
          "&:hover": { backgroundColor: '#F3B419' } }} >
            <Typography sx={{ color: 'black', fontFamily: 'poppins', fontSize: 20 }}>
              Save
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ color: 'black', fontWeight: "bold", fontSize: 22 }}>If you need any help please</Typography>
          <Typography sx={{ color: 'black', fontSize: 18 }}>click here whatsApp live support.</Typography>
        </Grid>
      </Grid>}
    </Grid>
  );
}
