import { Grid, Typography, Divider, Button, Paper } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VerifiedIcon from "@mui/icons-material/Verified";
import React, { useEffect, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { getData, postData, serverURL } from "../../../Services/NodeServices";

import img1 from "../assets/dch logooo.png";

import { useLocation, useNavigate } from "react-router-dom";
export default function ViewOrder() {
  const location=useLocation()
  const menuId=location.state.menuId
  const [showCard, setShowCard] = useState(false);
  const [showData, setShowData] = useState([]);

  
  const navigate=useNavigate()

  const handleChange = async (val,id) =>{
   
    var formdata = new FormData();
    formdata.append("_id", id);
    formdata.append("status", val);

    
    const response = await postData("order/updateStatus", formdata, true);
   if(response.status==true){
    fetchData()
   }
    // alert(response.data.id);

  };
  
  const handleClick = () => {
    if(showCard!=true){
        setShowCard(true)
    }

   
  };
  const handleShow = () => {
    
    let data1=showData.filter(item=>{
        return item.status!="served"
    })
   
    setShowData(data1)
    if(showCard!=true){
        setShowCard(true)
    }
  };
  const fetchData = async () => {
    const formData=new FormData
    formData.append("menuId",menuId)
    const result = await postData("index/menudata",formData,true);
    setShowData(result.data.reverse()); // Update the data state with the fetched data
     setShowCard(true)
    console.log("result", result.data);
  };
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const Card = () => {
    return (
      <Grid container spacing={2}>
        {showData.map((item) => (
          
          <Grid item xs={12} sx={{ m: 1, cursor: "pointer", }} >
            <Paper
              sx={{
                width: 400,
                
                backgroundColor: item.status === "served" ? "white" : "red",
              }}
            >
              <Grid container spacing={2} sx={{}}>
                <Grid item xs={2}>
                  <Typography>{item.no}</Typography>
                </Grid>
                <Grid
                  item
                  xs={5}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                >
                  <Typography sx={{mr:4}}>{item._id}</Typography>
                  <Typography>{item.name} *******{item.phone.slice(-4)}</Typography>
                  <Typography>Rs:{item.totalPrice}</Typography>
                  {/* <Typography>RS:{item.orderDetails[0].dish1price+item.orderDetails[0].dish2price}</Typography> */}
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ height: "25px", width: "150px", m: 1 }}
                    onClick={()=>navigate('/orderdetail',{state:{data:JSON.stringify(item)}})}
                  >
                    ViewOrderdetail 
                  </Button>
                  <Typography sx={{mr:0}}>Calling Waiter:{item.waiterCalled}</Typography>
                </Grid>

                <Grid item xs={5}>
                  <Typography
                    sx={{ display: "flex", textAlign: "end" }}
                  >
                    {item.status === "Served" ? (
                      <VerifiedIcon />
                    ) : (
                      <AccessTimeFilledIcon />
                    )}
                    {item.status}
                  </Typography>

                  <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Status </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={item.status}
        onChange={(e)=>handleChange(e.target.value,item._id)}
      >
        <FormControlLabel value="order placed" control={<Radio />} label="order placed" />
        <FormControlLabel value="food preparing" control={<Radio />} label="food preparing" />
        <FormControlLabel value="served" control={<Radio />} label="served" />
        
      </RadioGroup>
    </FormControl>


                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Grid
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid container spacing={2} sx={{ width: 400,ml:{xs:1,md:0} }}>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "row" }}>
     <img src={img1} alt="Masala Grill" width={120} />
          
        </Grid>
        <Grid item xs={6} sx={{}}>
          <Button variant="outlined" sx={{ bgcolor: "yellow", mt:0.5 }}>
            <WhatsAppIcon />
            Live support
          </Button>
        </Grid>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            m:1 
          }}
        />
        <Grid item xs={12}>
        <Typography sx={{fontSize: 20 }}>
            Orders !
          </Typography>
        </Grid>

        <Grid item xs={3}>
          
          
          <Button
            onClick={() => navigate(`/menudashboard/${menuId}`)}
            variant="outlined"
            color="inherit"
          >
            Back
          </Button>
        
        </Grid>
        <Grid item xs={6}>
          
          
          <Button
            onClick={() => fetchData()}
            variant="outlined"
            color="inherit"
          >
            All Orders
          </Button>
        
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => handleShow()}
           
            variant="outlined"
            color="inherit"
          >
            Pending
          </Button>
        </Grid>

        <Grid item xs={12}>
          {showCard && <Card />}
        </Grid>
      </Grid>
    </Grid>
  );
}
