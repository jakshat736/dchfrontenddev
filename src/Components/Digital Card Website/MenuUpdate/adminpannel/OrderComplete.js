import { Avatar, Button, Divider, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import img1 from "../assets/dch logooo.png";
import { PhotoCamera, WavingHandRounded, WhatsApp } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { postData, serverURL } from '../../../Services/NodeServices';
import Swal from 'sweetalert2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const OrderComplete1 = () => {
    const location=useLocation()
    const navigate=useNavigate()
    // const menuOrder=JSON.parse(window.localStorage.getItem('menuorder'))
    // const data=JSON.parse(menuOrder.dishes)
    const [menuOrder,setMenuOrder]=useState([])
    const [data,setData]=useState([])
    const menuId=location.state.menuId
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")
    const [call, setCall] = useState("")
    const [waiterCalled, setWaiterCalled] = useState("no")
      const [number, setNumber] = useState("")
      const [Image, setImage] = useState({
          fileName: "",
          bytes: "",
      });

      const checkStatus=async(id)=>{
        var formData=new FormData
        formData.append('_id',id)
        var response=await postData("order/checkStatus", formData, true)
        setStatus(response.orderStatus)

      }
      
      const checkOrder=()=>{
        const cart=JSON.parse(window.localStorage.getItem("menuorder"))
       
        if(cart==null){
        navigate(`/menu/${menuId}`)
          }else{
            setMenuOrder(cart)
            setData(JSON.parse(cart.dishes))
            checkStatus(cart._id)
          }
    
      }


    
      useEffect(()=>{
        checkOrder()
        
      },[])

  
    const totalPrice = data.reduce((total, item) => {
        return total + item.totalprice * item.quantity;
      }, 0);
      const fetchRestaurantData=async()=>{
        var formData=new FormData
        formData.append("menuId",menuId)
        
        const response=await postData('index/getRestaurantDetails',formData,true)
      
          if(response.status==true){
           
            setName(response.data.name)
            setNumber(response.data.number)
            setCall(response.data.call)
            setImage({fileName:`${serverURL}/images/${response.data.logo}`,bytes:""})
        }    
    }
    
      useEffect(() => {
        fetchRestaurantData()
        // Fetch data when the component mounts
      }, []);

      const updateOrderStatus=async()=>{
        var formdata = new FormData();
        formdata.append("_id", menuOrder._id);
        formdata.append("status", "served");
    
        
        const response = await postData("order/updateStatus", formdata, true);
       if(response.status==true){
        window.localStorage.removeItem("menuorder")
       navigate('/orderdelivered')
       }

      }
      const handleWaiter=async()=>{
        var formdata = new FormData();
        formdata.append("_id", menuOrder._id);
        formdata.append("waiterCalled", "yes");
    
        
        const response = await postData("index/updateWaiterCalled", formdata, true);
       if(response.status==true){
        setWaiterCalled("yes")
       }

      }
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Grid container spacing={2} sx={{ width: { xs: "100%", md: 400 } }}>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
                    <img src={img1} alt="Masala Grill" width={120} />

                </Grid>

                <Grid item xs={6} sx={{}}>
                    <Button variant="outlined" sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" }, mt: 2 }}><WhatsApp /> Live support</Button>
                </Grid>
                <Divider
                    sx={{
                        backgroundColor: 'black',
                        height: '1px',
                        width: '100%',
                        mt: 1
                    }}
                />
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography><FavoriteIcon sx={{ width: 20,mt:0.4 }} /></Typography>
                    <Typography sx={{ fontSize: 20, fontFamily: 'poppins', ml: 1 }}>Your Order Details !</Typography>

                </Grid>
                <Grid item xs={12}>

                    <Typography sx={{ fontSize: 12,textAlign:'left' }}>We have sent the order to Restaurant, if needed you can mention the below order ID to them.</Typography>

                </Grid>
                <Grid item xs={12}>

                    <Typography sx={{ fontSize: 12,textAlign:'left' }}>Order Id:</Typography>
                    <Typography sx={{ fontSize: 20,textAlign:'left' }}>{menuOrder._id}</Typography>

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
          <Typography sx={{ mt: 2 }}>Total: Rs:{totalPrice}</Typography>
          <Typography>SGST: ₹ {(totalPrice * 2.5)/100}</Typography>
      <Typography>CGST: ₹ {(totalPrice * 2.5)/100}</Typography>
      <Typography>Grand Total: ₹ {((totalPrice * 5)/100)+totalPrice}</Typography>
        </Grid>
        <Grid item xs={12} sx={{}}>
          <Button variant='contained' fullWidth    sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"},borderRadius:2}}>{status!="served"?<><AccessTimeFilledIcon/>Pending</>:<><CheckCircleIcon/>Delivered</>}</Button>
        </Grid>
        <Grid item xs={6} sx={{}}>
          <Button variant='outlined' fullWidth    sx={{bgcolor:"#fff",color:"black",borderColor:"black","&:hover":{ bgcolor:"#fff",color:"black",borderColor:"black"},borderRadius:2}} onClick={()=>handleWaiter()}>{waiterCalled!="yes"?<><WavingHandRounded/>Call Waiter</>:<><WavingHandRounded/>Waiter Called</>}</Button>
        </Grid>
        <Grid item xs={6} sx={{}}>
          <Button variant='outlined' fullWidth    sx={{bgcolor:"#fff",color:"black",borderColor:"black","&:hover":{ bgcolor:"#fff",color:"black",borderColor:"black"},borderRadius:2}} onClick={()=>{navigate(`/menu/${menuId}`)}}>Add More Item</Button>
        </Grid>
        <Grid item xs={12}>

                    <Typography sx={{ fontSize: 16,textAlign:'left' }}>Please call <b>{name}</b> <a href={`tel:${number}`} style={{textDecoration:'under-line',color:"black"}}>{number}</a> for any assistance.</Typography>

                </Grid>
        <Grid item xs={12}>

                    <Typography sx={{ fontSize: 16,textAlign:'left' }}>if your order is delivered, you can mark it as delivered to clear the order data from your session.</Typography>

                </Grid>
                <Grid item xs={12} sx={{}}>
          <Button variant='outlined' fullWidth    sx={{bgcolor:"#fff",color:"black",borderColor:"black","&:hover":{ bgcolor:"#fff",color:"black",borderColor:"black"},borderRadius:2}} onClick={()=>updateOrderStatus()}>Order Delivered</Button>
        </Grid>

            </Grid>
        </Grid>
    )
}

export default OrderComplete1
