import { Grid, Typography, Button, Divider } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VerifiedIcon from "@mui/icons-material/Verified";
import img1 from "../assets/dch logooo.png";

import React from 'react'
import { useNavigate } from "react-router-dom";

import { useLocation } from 'react-router-dom';

export default function OrderDetail() {
  var navigate = useNavigate()
  const location = useLocation()
 

  const fullData = JSON.parse(location.state.data)
  const data = JSON.parse(fullData.dishes)
  // alert(JSON.stringify(fullData))
  // alert(JSON.stringify(fullData.orderDetail))

  const totalPrice = data.reduce((total, item) => {
    return total + item.totalprice * item.quantity;
  }, 0);


  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} sx={{ width: 500 }}>

        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
          <img src={img1} alt="Masala Grill" width={120} />


        </Grid>
        <Grid item xs={6} sx={{}}>
          <Button variant="outlined"     sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"},mt:2}}><WhatsAppIcon />Live support</Button>
        </Grid>
        <Divider
          sx={{
            backgroundColor: 'black',
            height: '1px',
            width: '100%',

          }}
        />

        <Grid item xs={12}>
          <Typography sx={{ fontSize: 28, textAlign: 'left' }}>Order Details</Typography>
        </Grid>

        {data.map((item) => (
          <>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "row" }}>
              <Typography>
                {item.type == "full" ? "Full" : item.type == "half" ? "Half" : ""}
              </Typography>
              <Typography>-{item.name} X {item.quantity}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>
                {item.type == "full" ? `Rs:${item.fullPrice}` : item.type == "half" ? `Rs:${item.halfPrice}` : ""}
              </Typography>

            </Grid>
            <Grid item xs={3}>
              <Typography>
                {item.type == "full" ? `Rs:${item.fullPrice * item.quantity}` : item.type == "half" ? `Rs:${item.halfPrice * item.quantity}` : ""}
              </Typography>

            </Grid>

          </>
        ))}
        <Grid item xs={12}>
          <Typography sx={{ mt: 5 }}>Total: Rs:{totalPrice}</Typography>
          <Typography>SGST: ₹ {(totalPrice * 2.5)/100}</Typography>
      <Typography>CGST: ₹ {(totalPrice * 2.5)/100}</Typography>
      <Typography>Grand Total: ₹ {((totalPrice * 5)/100)+totalPrice}</Typography>
        </Grid>

      
        <Grid item xs={12}>
          <Typography sx={{ display: 'flex' }}><LocalPhoneIcon />{fullData.phone}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ textAlign: 'left' }}>Table Serve #{fullData.Number}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            sx={{ display: "flex", textAlign: "end", bgcolor: 'blue', textAlign: 'left' }}
          >
            {data.status === "Served" ? (
              <VerifiedIcon />
            ) : (
              <AccessTimeFilledIcon />
            )}
            {data.status}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ textAlign: 'left', fontSize: 23 }}>Print Invoice Now.</Typography>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => navigate('/PrintRecipt', { state: { data: JSON.stringify(fullData) } })}
          >
            Print Invoice
          </Button>
        </Grid>









      </Grid>






    </Grid>
  )
}
