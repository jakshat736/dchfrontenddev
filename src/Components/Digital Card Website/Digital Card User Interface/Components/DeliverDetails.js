import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Box,Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { postData } from '../../../Services/NodeServices';
import Footer from './Footer';
import Navbar from './Navbar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import bg from "../../Digital Card Assets/footer.png";
import Swal from 'sweetalert2';
import { format } from 'date-fns';

const useStyles = makeStyles({
    a: {
        color: "#bd147c",
        fontWeight: 700,
    },
    loginText: {
        letterSpacing: 1,
        wordSpacing: 2,
    },
    boxRow: {
      
    },
});

export default function DeliverDetails(props) {
    const classes = useStyles();
    const location = useLocation()
    const navigate = useNavigate()
    const User=window.localStorage.getItem("UserNumber")==null?'': window.localStorage.getItem("UserNumber")
    // const UserEmail=window.localStorage.getItem("UserEmail")==null?'': window.localStorage.getItem("UserEmail")
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const matches1 = useMediaQuery(theme.breakpoints.down(480));
    const [name,setName]=useState('')
    const [UserEmail,setUserEmail]=useState('')
    const [address,setAddress]=useState('')
    const [pincode,setPincode]=useState('')
    const [city,setCity]=useState('')
    const [district,setDistrict]=useState('')
    const [state,setState]=useState('')
    const [number,setNumber]=useState(User)
    const [cartProducts, setCartProducts] = useState([])
  
    const func = async (User) => {
      var formdata = new FormData();
      formdata.append("mobile", User);
      var response = await postData("cart/getAllProducts", formdata, true);
      if(response){
      setCartProducts(response.products)
      console.log(response.products)
      }
  
  }
  
  
  React.useEffect(() => {
      func(User)
  }, [])
  
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
      
      // Generate a random string
     

   
      const handlePay= async(price) => {
        if(name!="" && address!="" && pincode!="")
        {
            const newDate = new Date();
                 const date=format(newDate, 'dd-MM-yyyy')
                 
            var formData=new FormData
            formData.append("name",name)
            formData.append("email",UserEmail)
            formData.append("phone",number)
            formData.append("date",date)
            formData.append("fullAddress",address+" "+pincode)
          
            formData.append("products",JSON.stringify(cartProducts))
            const result=await postData('orders/addOrderDetails',formData,true)
            console.log("hdj",result.data._id)
            
        var amount=price*100
        let randomString = generateRandomString();
   
        const requestBody ={
            "merchantId": "DIGITALCARDONLINE",
            "merchantTransactionId": `${result.data._id}`,
            "merchantUserId": "MUID123",
            "amount": `${amount}`,
            "redirectUrl": `https://digitalcardhub.in/#/orderComplete/${result.data._id}`,
            "redirectMode": "POST",
            "callbackUrl": `https://digitalcardhub.in/#/orderComplete/${result.data._id}`,
            "mobileNumber": "8889430333",
            "paymentInstrument": {
              "type": "PAY_PAGE"
            }
          }
       const response=await postData('api/proxy',requestBody)
       console.log("bodyyyyyy",response)
       
       window.open(`${response.data.instrumentResponse.redirectInfo.url}`)
       }else{
        Swal.fire({
            title:"First fill all the fields"
        })
       }
      
      };
    const item = {
        id: "43287ghy32te7234",
        productname: "Silver Diamond Necklace",
        price: "84000",
        offerprice: "72000",
        picture: "diamondnecklace1.png",
        quantity: 1
    }

    const handleOrderSummary = () => {
        return (
            <Box style={{ marginLeft: 20 }}>
                <Paper
                    elevation={1}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        width: matches?"80%":matches1 ? "100%" : "90%",
                        padding: matches1 ? 1 : 5,
                        borderRadius: matches1 ? 1 : 2,
                        backgroundColor: "#f2f2f2",
                    }}
                >
                    <Typography
                        style={{
                            color: "#001E3C",
                            fontSize: matches1 ? 16 : 24,
                        }}
                    >
                        ORDER SUMMARY
                    </Typography>
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
              
                    >
                        <Typography sx={{ fontSize: matches1 ? 10 : 20,color:'#001E3C' }}>
                            Sub total
                        </Typography>
                        <Typography sx={{ fontSize: matches1 ? 10 : 20,color:'#001E3C' }}>
                            ₹{location.state.subTotal}
                        </Typography>
                    </Box>
                    <Box
                        style={{  display: "flex",
                        flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                     
                    >
                        <Typography sx={{ fontSize: matches1 ? 10 : 20,color:'green' }}>
                             Discount
                        </Typography>
                        <Typography sx={{ fontSize: matches1 ? 10 : 20,color:'green' }}>
                            - ₹{location.state.discount}
                        </Typography>
                    </Box>
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                      
                    >
                        <Typography sx={{ fontSize: matches1 ? 10 : 20 }}>
                            Delivery Charges
                        </Typography>
                        <Typography sx={{ fontSize: matches1 ? 10 : 20 }}>FREE</Typography>
                    </Box>
                    <Box
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "row",
                    }}
                    
                >
                    <Typography
                        style={{
                            color: "",
                            fontSize: matches1 ? 14 : 20,
                            fontWeight: 600,
                        }}
                    >
                        Total
                    </Typography>
                    <Typography
                        style={{
                            color: "",
                            fontSize: matches1 ? 14 : 20,
                            fontWeight: 600
                        }}
                    >
                        ₹{Math.ceil(location.state.subTotal - location.state.discount)}{" "}
                    </Typography>
                </Box>

                <Box
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "row",
                    }}
                    
                >
                    <Typography
                        style={{
                            color: "",
                            fontSize: matches1 ? 14 : 20,
                            fontWeight: 600,
                        }}
                    >
                        Estimated Tax
                    </Typography>
                    <Typography
                        style={{
                            color: "",
                            fontSize: matches1 ? 14 : 20,
                            fontWeight: 600
                        }}
                    >
                        ₹{Math.ceil(((location.state.subTotal - location.state.discount)*18)/100)}{" "}
                    </Typography>
                </Box>
                <Box
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "row",
                    }}
                    
                >
                    <Typography
                        style={{
                            color: "",
                            fontSize: matches1 ? 14 : 20,
                            fontWeight: 600,
                        }}
                    >
                        Total (incl of all taxes)
                    </Typography>
                    <Typography
                        style={{
                            color: "",
                            fontSize: matches1 ? 14 : 20,
                            fontWeight: 600
                        }}
                    >
                        ₹{Math.ceil((location.state.subTotal - location.state.discount)+(((location.state.subTotal - location.state.discount)*18)/100))}{" "}
                    </Typography>
                </Box>
                </Paper>
            </Box>
        );
    };
   

   const addressFields=()=>{ 
    return (
        <div style={{marginTop:15}}>
            <Typography sx={{
                color: "#fff",
                fontWeight:"bold",
                fontSize: matches1 ? 26 : 30,
                textAlign: "center",
                marginBottom: matches ? 2 : matches1 ? 2 : 8,
                marginLeft: matches ? 0 : matches1 ? 1 : 0
            }}>
                DELIVERY CHARGES
            </Typography>
            <Grid sx={{ my: matches1?1:5,display:'flex',justifyContent:'center' }} container spacing={2}>
                <Grid item xs={11} md={11} lg={6} >
                    <Paper>
                    <Grid sx={{ padding:5 }} container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <TextField label={"Enter Name"} value={name} onChange={(e)=>setName(e.target.value)} fullWidth />
                        </Grid>
                       
                         <Grid item xs={12} lg={6}>
                            <TextField label={"Address"} value={address} onChange={(e)=>setAddress(e.target.value)} fullWidth />
                        </Grid>
                        <Grid item xs={6} lg={4}>
                            <TextField label={"Pincode"} value={pincode} onChange={(e)=>setPincode(e.target.value)} fullWidth />
                        </Grid>
                      
                        
                        <Grid item xs={9} lg={6}>
                            <TextField value={number} onChange={(e)=>setNumber(e.target.value)} label={"Recipient's Number"} fullWidth />
                        </Grid>
                       
                        <Grid item xs={12}  >
                            <Button
                                fullWidth
                                style={{
                                    backgroundColor: "#001E3C",
                                    color: "#ffffff",
                                    fontSize: matches1 ? 14 : 15,
                                   
                                }}
                                 onClick={()=>handlePay(location.state.totalPrice)}
                                                           >
                                Proceed To Payment
                            </Button>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
                <Grid sx={{ ml:{xs:-5,md:0}}} item xs={11} md={11} lg={5}>
                    {handleOrderSummary()}
                </Grid>
            </Grid>
        </div>)
   }



   return (
    <>
      <Grid container spacing={2} sx={{ bgcolor: "#001E3C" }}>

        <Navbar />
        <Grid item xs={12} sx={{ mt: 15 }}>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: 'whitesmoke', height: 150, }}>
              <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 30 },opacity: 0.8, m: 1 }}>Shopping Cart</Typography>
              <ArrowRightAltIcon sx={{ fontSize: { xs: 20, sm: 22, md: 30 }, opacity: 0.8 }} />
              <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 30 },  fontWeight: 'bold', m: 1 }} >Check Out</Typography>
              <ArrowRightAltIcon sx={{ fontSize: { xs: 20, sm: 22, md: 30 }, opacity: 0.8 }} />
              <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 30 }, opacity: 0.8, m: 1 }}>Order Complete</Typography>
            </Grid>
            <Grid item xs={12}>
          <Grid container spacing={2} style={{marginTop:2}}>
            <Grid item xs={12} lg={12} style={{ padding: 20,display:'flex',justifyContent:'center' }}>
              {addressFields()}
            </Grid>
           
          </Grid>
        </Grid>
          </Grid>

        </Grid>

        <Box sx={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover" }}>
          <Footer />
        </Box>
      </Grid>
    </>
  );
    
}
