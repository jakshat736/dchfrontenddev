import React, { useState } from 'react'
import { Grid, Button, Typography, TextField, useTheme, useMediaQuery, Divider } from "@mui/material";
import img1 from "../Digital Card Assets/newlogo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { yellow } from '@mui/material/colors';
import { useLocation, useNavigate } from "react-router-dom";
export default function ScanQr() {
  var theme = useTheme()
  // var show = useMediaQuery(theme.breakpoints.up("sm"))
  var show=false
  const location=useLocation()
  var data=location.state.data
  var navigate = useNavigate()
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (label) => {
    if (checkedItems.includes(label)) {
      setCheckedItems(checkedItems.filter(item => item !== label));
    } else {
      setCheckedItems([...checkedItems, label]);
    }
  };
  return (

    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
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
      </Grid> : <Grid container spacing={2} sx={{ width: { xs: "100%" } }}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
          <img src={img1} alt="Masala Grill" width={120} />

        </Grid>
        <Grid item xs={6} sx={{}}>
          <Button variant="outlined" sx={{ bgcolor: '#F3B419', color: "#000", mt: 2 }}><WhatsAppIcon />Live support</Button>
        </Grid>
        <Grid item xs={10} sx={{ fontSize: 25, marginTop: 2, fontWeight: "bold" }}>
          Contact vehicle owner !!!
        </Grid>
        <Grid item xs={12} sx={{ fontSize: 16, marginTop: 0, fontWeight: "bold" }}>
          Please select the reason why you contact the owner.
        </Grid>

        <Grid item xs={12} sx={{ fontSize: 25, marginTop: 1 }}>

          <FormGroup>
            <FormControlLabel control={<Checkbox
              sx={{
                color: '#F3B419',
                '&.Mui-checked': {
                  color: "#F3B419"
                },
              }}
            />} label="Keys in your vehicle" onChange={() => handleCheckboxChange('There are Keys in your vehicle')}/>
            <FormControlLabel control={<Checkbox sx={{
              color: '#F3B419',
              '&.Mui-checked': {
                color: "#F3B419"
              },
            }} />} label="Broken Lights" onChange={() => handleCheckboxChange('Your Lights are broken')} />
            <FormControlLabel control={<Checkbox sx={{
              color: '#F3B419',
              '&.Mui-checked': {
                color: "#F3B419"
              },
            }} />} label="Your vehicle is in no parking" onChange={() => handleCheckboxChange('Your vehicle is in no parking')}/>
            <FormControlLabel control={<Checkbox sx={{
              color: '#F3B419',
              '&.Mui-checked': {
                color: "#F3B419"
              },
            }} />} label="Your vehicle is towed" onChange={() => handleCheckboxChange('Your vehicle is towed')}/>
            <FormControlLabel control={<Checkbox sx={{
              color: '#F3B419',
              '&.Mui-checked': {
                color: "#F3B419"
              },
            }} />} label="Hitting" onChange={() => handleCheckboxChange('Your Vehicle is Hit by someone')}/>
            <FormControlLabel control={<Checkbox sx={{
              color: '#F3B419',
              '&.Mui-checked': {
                color: "#F3B419"
              },
            }} />} label="Something Wrong in our vehicle" onChange={() => handleCheckboxChange('Something Wrong in Your vehicle')}/>


          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={() => navigate('/MessageSend',{state:{data:data,messageArray:checkedItems}})} variant="contained" fullWidth style={{ backgroundColor: '#F3B419' }} >
            <Typography sx={{ color: 'black', fontFamily: 'poppins', fontSize: 20 }}>Continue</Typography>
          </Button>

        </Grid>


      </Grid>}


    </Grid>





  )
}

