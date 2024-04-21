import { TextField, Grid, Button, Avatar, Typography } from "@mui/material";
import { getData, postData } from "../Services/NodeServices";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import DisplayAllCategory from "./DisplayAllCategory";


const PaymentLink = () => {
    const navigate = useNavigate();

  // CATEGORY VARIABLES
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  function generateRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }
  
  // Function to generate a random 8-character alphanumeric string
  function generateRandomString() {
    let randomString = '';
    for (let i = 0; i < 8; i++) {
      randomString += generateRandomCharacter();
    }
    return randomString;
  }
  
  const handleClick=async()=>{
    var amount=price*100
        let randomString = generateRandomString();
   
        const requestBody ={
            "merchantId": "DIGITALCARDONLINE",
            "merchantTransactionId": `${randomString}`,
            "merchantUserId": "MUID123",
            "amount": `${amount}`,
            "redirectUrl": `https://wa.me/9754430333?text=Payment Done.this is transaction id ${randomString}`,
            "redirectMode": "POST",
            "callbackUrl": `https://wa.me/9754430333?text=hey`,
            "mobileNumber": "8889430333",
            "paymentInstrument": {
              "type": "PAY_PAGE"
            }
          }
       const response=await postData('api/proxy',requestBody)
       console.log("bodyyyyyy",response)
       setLink(response.data.instrumentResponse.redirectInfo.url)
    //    window.open(`${response.data.instrumentResponse.redirectInfo.url}`)
  }
 
  const handleCopy=()=>{
   

    // Copy the text inside the text field
   navigator.clipboard.writeText(link);
 
   
   }
  


  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
    <div
      style={{
        borderRadius: 30,
        width: "100%",
        height: "50%",
        background: "white ",
        padding: "30px",
        marginTop: "5%",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontVariant: "small-caps",
              fontWeight: "bolder",
              fontWeight: "bold",
            }}
          >
            {" "}
            Payment Link Generate
          </div>
          
        </Grid>
        <Grid sx={{ mt: 4 }} item xs={12}>
          <TextField
            onChange={(event) => setPrice(event.target.value)}
            value={price}
            label="Amount"
            fullWidth
          />
        </Grid>
        


        
        <Grid item xs={6}>
          <Button
            onClick={handleClick}
            style={{ marginTop: 40 }}
            fullWidth
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} >
          <Typography sx={{ textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{link}</Typography>
        </Grid>
       {link && <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX:"30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleCopy()}>Copy</Button>
          </Grid>}
        
      </Grid>
    </div>
  </div>
  )
}

export default PaymentLink
