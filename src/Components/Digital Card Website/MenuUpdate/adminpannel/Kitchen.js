import { Grid ,Typography,Button,Divider,TextField,IconButton,handleImage,Avatar, FormControl, InputLabel, Select, MenuItem, Icon} from '@mui/material'
import img1 from "../assets/dch logooo.png";
import FavoriteIcon from '@mui/icons-material/Favorite';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useEffect, useState,  } from "react";
import { getData, postData, serverURL } from "../../../Services/NodeServices";

import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Cancel } from '@mui/icons-material';
export default function Kitchen() {
  const location =useLocation()
  const navigate =useNavigate()
  const menuId=location.state.menuId
  
   

  const [fullData,setFullData]  = useState([])
  const [expandedData,setExpandedData]  = useState([])
 
  const [Name,setName]  = useState("")
  const [Phone,setPhone]  = useState("")
  const [Chief,setChief]  = useState("")
  const [Table,setTable]  = useState("Serve On Table")
  const [Number,setNumber]  = useState("")
  const [showOrder,setShowOrder]=useState(false)
  const [order,setOrder]=useState([])
  const checkCart=()=>{
    const cart=JSON.parse(window.localStorage.getItem("menucart"))
   
    if(cart!=null){
    if(cart.length!=0){
      setFullData(cart)
      setExpandedData(cart.reduce((acc, item) => {
        if (item.full && item.full > 0) {
          acc.push({ ...item, quantity: item.full, totalprice: item.fullPrice,type:"full" });
        }
        if (item.half && item.half > 0) {
          acc.push({ ...item, quantity: item.half, totalprice: item.halfPrice,type:"half" });
        }
        return acc;
      }, []))
    }}else{
      navigate(`/menu/${menuId}`)
    }

  }

  useEffect(()=>{
    checkCart()
  },[])
  

  const totalPrice = expandedData.reduce((total, item) => {
    return total + item.totalprice * item.quantity;
  }, 0);



  const checkOrder=()=>{
     let order1=JSON.parse(window.localStorage.getItem("menuorder"))
   
    if(order1!=null){
    if(order1.length!=0){
      setOrder(order1)
      setShowOrder(true)
    }}

  }

  useEffect(()=>{
    checkOrder()
  },[])
  
  
  
  const handleSubmit = async () => {
   if(Name!="" && Phone!=""){ var menuorderdata = new FormData;
    menuorderdata.append("menuId",menuId)
    menuorderdata.append("name",Name)
    menuorderdata.append("phone",Phone)
    menuorderdata.append("message",Chief)
    menuorderdata.append("table",Table)
    menuorderdata.append("Number",Number)
    menuorderdata.append("totalPrice",totalPrice)
    menuorderdata.append("dishes",JSON.stringify(expandedData))
const response = await postData("index/menuorder", menuorderdata, true);

if(response.status==true){
  Swal.fire({
    text:"Order Sent to kitchen",
    icon:"success",
    timer:1000
  })
  window.localStorage.setItem("menuorder",JSON.stringify(response.data))
  window.localStorage.removeItem("menucart")
  navigate('/menucheckout',{state:{menuId:menuId}})
  
}else{
  Swal.fire({
    text:"failed to send",
    icon:"error",
    timer:1000
  })
}
   
}else{
  Swal.fire({
    text:"Fill All the fields"
  })
}




  }
  
  const handleUpdate = async () => {

    const dishesData=[...JSON.parse(order.dishes),...expandedData]
   
   if(Name!="" && Phone!=""){ 
    var menuorderdata = new FormData;
    menuorderdata.append("_id",order._id)
    menuorderdata.append("name",Name)
    menuorderdata.append("phone",Phone)
    menuorderdata.append("message",Chief)
   
    menuorderdata.append("totalPrice",parseInt(order.totalPrice)+parseInt(totalPrice))
    menuorderdata.append("dishes",JSON.stringify(dishesData))
const response = await postData("index/updatemenuorder", menuorderdata, true);

if(response.status==true){
  Swal.fire({
    text:"Order Updated to kitchen",
    icon:"success",
    timer:1000
  })
  window.localStorage.setItem("menuorder",JSON.stringify(response.data))
  window.localStorage.removeItem("menucart")
  navigate('/menucheckout',{state:{menuId:menuId}})
  
}else{
  Swal.fire({
    text:"failed to send",
    icon:"error",
    timer:1000
  })
}
   
}else{
  Swal.fire({
    text:"Fill All the fields"
  })
}




  }

  const handleChange = (event) => {
    setTable(event.target.value);
  };

  const handleDelete=(index)=>{
    const newArray = [...expandedData];
    // Remove the item at the specified index using splice
  
    if(newArray[index].type=='full'){
      const itemToDeleteFull = fullData.findIndex((item) => item._id === newArray[index]._id);
      
      const updated=[...fullData]

      updated[itemToDeleteFull]={...updated[itemToDeleteFull],full:0}
      console.log(updated)
      setFullData(updated)
      window.localStorage.setItem("menucart",JSON.stringify(updated))
      console.log(window.localStorage.getItem("menucart"))
    }
    if(newArray[index].type=='half'){
      const itemToDeleteFull = fullData.findIndex((item) => item._id === newArray[index]._id);
      
      const updated=[...fullData]

      updated[itemToDeleteFull]={...updated[itemToDeleteFull],full:0}
      console.log(updated)
      setFullData(updated)
      window.localStorage.setItem("menucart",JSON.stringify(updated))
    }
    newArray.splice(index, 1);
    // Update the state with the new array
    setExpandedData(newArray);
    
    
  }

  return (
    <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <Grid container spacing={2} sx={{width:450}}>
        <Grid item xs={6} sx={{display:'flex',flexDirection:'row',}}>
     <img src={img1} alt="Masala Grill" width={120} />
       
</Grid>

<Grid item xs={6} sx={{}}>
<Button variant="outlined" sx={{bgcolor:'yellow',mt:2}}><WhatsAppIcon/>Live support</Button>
</Grid>
<Divider
          sx={{
            backgroundColor: 'black',
            height: '1px',
            width: '100%',
            mt:1
          }}
        />
    <Grid item xs={12} sx={{display:'flex',flexDirection:'row'}}>
        <Typography><FavoriteIcon sx={{width:20,}}/></Typography>
        <Typography sx={{fontSize:20,fontFamily:'poppins',ml:1}}>Thank You!</Typography>
     
        </Grid>    
        <Grid item xs={12} sx={{}}>
        <Typography sx={{textAlign:'left'}}>Please check your cart and you can pay after adding your </Typography>
        <Typography sx={{textAlign:'left'}}>shipping details</Typography>
        </Grid>

        <Grid item xs={5} sx={{display:'flex'}}>
         <Typography>Dish Name</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography>dish price</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography> total price</Typography>
        </Grid>
        <Grid item xs={1}>
      
        </Grid>

        {expandedData.map((item,index) => (
        <>
          <Grid item xs={1} sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>
          {index+1}
      </Typography>
           
          </Grid>
          <Grid item xs={5} sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>
        {item.type=="full" ? "Full" : item.type=="half" ? "Half" : ""}
      </Typography>
            <Typography>-{item.name} X {item.quantity}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              {item.type=="full" ? `Rs:${item.fullPrice}` :item.type=="half" ? `Rs:${item.halfPrice}` : ""}
            </Typography>
            
          </Grid>
          <Grid item xs={3}>
            <Typography>
              {item.type=="full" ? `Rs:${item.fullPrice*item.quantity}` :item.type=="half" ? `Rs:${item.halfPrice * item.quantity}` : ""}
            </Typography>
            
            
          </Grid>
          <Grid item xs={1}>
              <IconButton sx={{mt:-1}} onClick={()=>handleDelete(index)}><Cancel/></IconButton>
          </Grid>
          
        </>
      ))}
      <Grid item xs={12}>
      <Typography sx={{ mt: 5 }}>Total: ₹ {totalPrice}</Typography>
      <Typography>SGST: ₹ {(totalPrice * 2.5)/100}</Typography>
      <Typography>CGST: ₹ {(totalPrice * 2.5)/100}</Typography>
      <Typography>Grand Total: ₹ {((totalPrice * 5)/100)+totalPrice}</Typography>
{/* <Typography>CGST: ₹ {(data.dish1price + data.dish2price)*data.cgst}</Typography> */}
      </Grid>
    {showOrder==true?<>
        <Grid item xs={6}>
        <TextField onChange={(e)=>setName(e.target.value)} value={Name} id="outlined-basic" label="Name" variant="outlined" />

        </Grid>
        <Grid item xs={6}>
        <TextField onChange={(e)=>setPhone(e.target.value)} value={Phone} id="outlined-basic" label="Phone*" variant="outlined" />

        </Grid>
        <Grid item xs={12}>

        <TextField onChange={(e)=>setChief(e.target.value)} value={Chief} fullWidth label="Any message for the chef?" id="fullWidth" />
        </Grid>
       
<Grid item xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
 
 <Button sx={{bgcolor:'black'}} onClick={handleUpdate} fullWidth variant="contained" disableElevation>
  <Typography sx={{color:'yellow'}}>Update the order</Typography>
</Button>

</Grid>
</>:<> <Grid item xs={6}>
        <TextField onChange={(e)=>setName(e.target.value)} value={Name} id="outlined-basic" label="Name" variant="outlined" />

        </Grid>
        <Grid item xs={6}>
        <TextField onChange={(e)=>setPhone(e.target.value)} value={Phone} id="outlined-basic" label="Phone*" variant="outlined" />

        </Grid>
        <Grid item xs={12}>

        <TextField onChange={(e)=>setChief(e.target.value)} value={Chief} fullWidth label="Any message for the chef?" id="fullWidth" />
        </Grid>
        <Grid item xs={12}>

        <FormControl fullWidth>
      
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Table}
          onChange={handleChange}
        >
          <MenuItem value={"Serve On Table"} >Serve On Table</MenuItem>
          <MenuItem value={"Home Delivery"}>Home Delivery</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12}>

<TextField onChange={(e)=>setNumber(e.target.value)} value={Number} fullWidth label="Table Number" id="fullWidth" />
</Grid>
<Grid item xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
 
 <Button sx={{bgcolor:'black'}} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
  <Typography sx={{color:'yellow'}}>Send to Kitchen</Typography>
</Button>

</Grid></>}
        </Grid>
       
    </Grid>
  )
}
