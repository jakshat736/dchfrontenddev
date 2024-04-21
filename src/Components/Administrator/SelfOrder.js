import React, { useEffect, useState } from 'react'
import { Grid, Button, TextField, Avatar, useMediaQuery, useTheme, Typography, Checkbox, FormControl, InputLabel, Select } from '@mui/material'

import { getData, postData } from '../Services/NodeServices'
import DisplayAllSelfOrder from './DisplayAllSelfOrder';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

const SelfOrder = () => {


  const [getProductname, setProductname] = useState("");
  const [getNumber, setNumber] = useState("");
  const [getOrderDetails, setOrderDetails] = useState("");
  const [getTotalAmount, setTotalAmount] = useState("");
  const [getTrackingId, setTrackingId] = useState("");
  const [getGst, setGst] = useState("");
  const [getPayment, setPayment] = useState("");
  const [getAddress, setAddress] = useState("");
  const [data, setData] = useState([]);

  const fetchAllSelfOrders = async () => {
    const result = await getData("selforder/displayallselforders");
    // console.log(result);
    // alert(JSON.stringify(result.reverse()))
    setData(result.reverse());
   
  };
  
  useEffect(
    function () {
      fetchAllSelfOrders();
    },
    []
  );

  const handleSubmit = async () => {

    var formdata = new FormData

    formdata.append("productName", getProductname)
    formdata.append("orderDate", format(new Date(), 'dd-MM-yyyy'))
    formdata.append("number", getNumber)
    formdata.append("orderDetails", getOrderDetails)
    formdata.append("totalAmount", getTotalAmount)
    formdata.append("trackingId", getTrackingId)
    formdata.append("gstNo", getGst)
    formdata.append("payment", getPayment)
    formdata.append("address", getAddress)

    const response = await postData('/selforder/add', formdata, true)

    if (response.status) {
      Swal.fire({
        text: "Saved Successfully",
        timer: 1000,
        icon: 'success'
      })
      fetchAllSelfOrders()
    }

  }

  const handleClear=()=>{
    setProductname("")
    setNumber("")
    setOrderDetails("")
    setTotalAmount("")
    setTrackingId("")
    setGst("")
    setPayment("")
    setAddress("")

  }

  return (
    <Grid style={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
      <Grid container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid
            style={{
              fontSize: 32,
              fontVariant: "small-caps",
              fontWeight: "bolder",
              fontWeight: "bold",
              marginTop: 15,
            }}
          >
            Self Order Interface
          </Grid>

        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(event) => setProductname(event.target.value)}
            fullWidth
            label="Client Name"
            variant="outlined"
            value={getProductname}

          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(event) => setNumber(event.target.value)}
            fullWidth
            label="Number"
            variant="outlined"
            value={getNumber}

          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(event) => setOrderDetails(event.target.value)}
            fullWidth
            label="Order Details"
            variant="outlined"
            value={getOrderDetails}

          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={(event) => setTotalAmount(event.target.value)}
            fullWidth
            label="Total Amount"
            variant="outlined"
            value={getTotalAmount}

          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(event) => setTrackingId(event.target.value)}
            fullWidth
            label="Traking ID"
            variant="outlined"
            value={getTrackingId}

          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(event) => setGst(event.target.value.toUpperCase())}
            fullWidth
            label="GST Number"
            variant="outlined"
            value={getGst}
          />

        </Grid>


        <Grid item xs={4}>
          <TextField
            onChange={(event) => setPayment(event.target.value)}
            fullWidth
            label="Payment Received"
            variant="outlined"
            value={getPayment}


          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            onChange={(event) => setAddress(event.target.value)}
            fullWidth
            label="Shipping Address"
            variant="outlined"
            value={getAddress}
            multiline
            minRows={4}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => handleSubmit()}
            style={{ marginTop: 40 }}
            fullWidth
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Button

            style={{ marginTop: 40 }}
            fullWidth
            color="primary"
            variant="contained"
            onClick={() => handleClear()}
          >
            Clear
          </Button>
        </Grid>



      </Grid>
      <Grid >
        <DisplayAllSelfOrder data={data} onChange={()=>fetchAllSelfOrders()} />
      </Grid>
    </Grid>

  )
}

export default SelfOrder