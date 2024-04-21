import { Grid, Typography, Paper, Button, Box, Divider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getData } from "../../../Services/NodeServices";
import { useParams } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ErrorIcon from '@mui/icons-material/Error';
import { postData } from "../../../Services/NodeServices";
import bg from "../../Digital Card Assets/footer.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Swal from "sweetalert2";
import { SessionContext } from "../../../Services/SessionContext";
const OrderComplete = () => {
    const { tmid } = useParams();
  const navigate=useNavigate()
  const [result, setResult] = useState();
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState(0);
  const [orderDetail,setOrderDetail]=useState()
  const { cart, setCart } = useContext(SessionContext);
  const User = window.localStorage.getItem("UserNumber") == null ? window.localStorage.getItem("UserMail") : window.localStorage.getItem("UserNumber")
  
  const cardId = window.localStorage.getItem("CardId");
   
  const check=async()=>{
    var formData=new FormData
    formData.append("_id",tmid)
    var response=await postData("orders/getOrderDetails",formData,true)
    setOrderDetail(response.data)
  }
 

  const handleCheck = async () => {
    const response = await getData(`/check-status?tmid=${tmid}`);
    console.log("bodyyyyyy", response);
    setResult(response);
    setStatus(response.code);
    
    setAmount((response.data.amount)/100+500);
    

    if(response.code == "PAYMENT_SUCCESS"){

      var formData=new FormData();
      formData.append("_id",tmid)
      formData.append("payment","Success")
      formData.append("status","Ordered Successfully")

      const res=await postData('orders/updatePayment',formData,true)

      const formData1=new FormData
      formData1.append("mobile",User)
      var response1=await postData('cart/cartsdelete',formData1,true)

          
    }else if(response.code == "PAYMENT_PENDING"){
      var formData=new FormData();
      formData.append("_id",tmid)
      formData.append("payment","Pending")
      const res=await postData('orders/updatePayment',formData,true)
      Swal.fire({
        
        icon: 'error',
        title: 'Your Payment is Pending Wait For Some Time',
        showConfirmButton: false,
        timer: 2000
      })
     navigate('/cart')       
    }else{
      var formData=new FormData();
      formData.append("_id",tmid)
      formData.append("payment","Failed")
      const res=await postData('orders/updatePayment',formData,true)
      Swal.fire({
        
        icon: 'error',
        title: 'Your Payment is failed Try Again',
        showConfirmButton: false,
        timer: 2000
      })
       navigate('/cart')

    }


    
  };
  useEffect(() => {
    handleCheck();
    check()
  }, []);

 

  return (
    <>
    <Grid container spacing={2} sx={{ bgcolor: "#001E3C" }}>

      <Navbar />
      <Grid item xs={12} sx={{ mt: 15 }}>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: 'whitesmoke', height: 150, }}>
            <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 30 },opacity: 0.8, m: 1 }}>Shopping Cart</Typography>
            <ArrowRightAltIcon sx={{ fontSize: { xs: 20, sm: 22, md: 30 }, opacity: 0.8 }} />
            <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 30 },opacity: 0.8, m: 1 }} >Check Out</Typography>
            <ArrowRightAltIcon sx={{ fontSize: { xs: 20, sm: 22, md: 30 }, opacity: 0.8 }} />
            <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 30 }, fontWeight: 'bold', m: 1 }}>Order Complete</Typography>
          </Grid>
          <Grid item xs={12}>
        <Grid container spacing={2} style={{marginTop:2,marginBottom:5,display:'flex',justifyContent:'center'}}>
          <Grid item xs={10} lg={10} style={{ padding: 20,display:'flex',justifyContent:'center',backgroundImage: `url('${bg}')`, backgroundSize: "cover",borderRadius:5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sx={{color:"green",fontSize:35,display:'flex'}}>
                    <CheckCircleOutlineIcon sx={{mt:0.3,fontSize:35}} /> Order placed, Thank You!
                  </Grid>
                  <Grid item xs={12} sx={{display:'flex',fontSize:20}}>
                    Confirmation will be sent to your email
                  </Grid>
                  <Grid item xs={12} sx={{display:'flex',flexDirection:{xs:"column",md:"row"},fontSize:20}}>
                    {orderDetail && <Typography sx={{fontWeight:'bold'}}>&nbsp;Shipping to {orderDetail.name}</Typography> }
                    {orderDetail && <Typography >&nbsp;Shipping to {orderDetail.fullAddress}</Typography> }
                  </Grid>
                  
                 

                </Grid>
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

export default OrderComplete
