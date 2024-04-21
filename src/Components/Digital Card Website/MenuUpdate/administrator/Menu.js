

import React, { useEffect, useState } from "react";
import {
  Grid,
  InputAdornment,
  TextField,
  IconButton,
  Typography,
  Switch,
  Avatar,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FloatingMenu from "./FloatingMenu";
import img1 from "../assets/nv.jpg";
import img2 from "../assets/green.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Selectqy from "../adminpannel/Selectqy";
import Box from "./Box";
import { getData, postData, serverURL } from "../../../Services/NodeServices";
import Swal from "sweetalert2";
import './menu.css'
import { useNavigate, useParams } from "react-router-dom";

export default function Menu() {
  const {menuId}=useParams()
  var navigate=useNavigate()
  

  const [searchQuery, setSearchQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [button1, setButton1] = useState("block");
  const [button2, setButton2] = useState("none");
  const [showViewCart, setShowViewCart] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  // const [value, setValue] = useState(1);
  const [cart, setCart] = useState(Array(0).fill(null));
  const [datafood, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
 
  const [price, setPrice] = useState("");
  const [keywords, setKeywords] = useState("");
  const [Halfprice, setHalfprice] = useState("");
  const [dish, setDish] = useState();

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("")
  const [call, setCall] = useState("")
    const [number, setNumber] = useState("")
    const [Image, setImage] = useState({
        fileName: "",
        bytes: "",
    });

  const checkCart=()=>{
    const cart=JSON.parse(window.localStorage.getItem("menucart"))
   
    if(cart!=null){
    if(cart.length!=0){
      setCart(cart)
      setShowViewCart(true)
    }}

  }
  const checkOrder=()=>{
    const cart=JSON.parse(window.localStorage.getItem("menuorder"))
   
    if(cart!=null){
    if(cart.length!=0){
      
      setShowOrder(true)
    }}

  }

  useEffect(()=>{
    checkOrder()
    checkCart()
  },[])

  const handleClose = () => {
    setCount(0)
    setCount1(0)
    setDish()
    setOpen(false);
  };
  const increment = (item) => {
     setCount((prevCount) => prevCount + 1);

     let data = cart.map((item1) => {
      if (item1._id === item._id) {
        return { ...item1, full: item1.full + 1 };
      }else{

      return item1;}
    });
     
    window.localStorage.setItem("menucart",JSON.stringify(data))
    setCart(data);
    Swal.fire({
      
      text: "Cart has been Saved!",
      icon: "success",
      timer:1000
    });
    setShowViewCart(true)
   
  };

  const decrement = (item) => {
    if (count > 0) {
      setCount(count - 1);
    }
    let data = cart.map((item1) => {
      if (item1._id === item._id) {
        return { ...item1, full: item1.full - 1 };
      }

      return item1;
    });
    
    setCart(data);
    Swal.fire({
      
      text: "Cart has been Saved!",
      icon: "success",
      timer:1000
    });
    const co = data.reduce((sum, item) => sum + item.full+item.half, 0);


    if (co == 0) {
      setShowViewCart(false);
    }
  };
  const incrementt = (item) => {
    setCount1(count1 + 1);
    let data = cart.map((item1) => {
      if (item1._id === item._id) {
        return { ...item1, half: item1.half + 1 };
      }

      return item1;
    });
    window.localStorage.setItem("menucart",JSON.stringify(data))
    setCart(data);
    Swal.fire({
      
      text: "Cart has been Saved!",
      icon: "success",
      timer:1000
    });
    
      setShowViewCart(true);
    
  };

  const decrementt = (item) => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
    let data = cart.map((item1) => {
      if (item1._id === item._id) {
        return { ...item1, half: item1.half - 1 };
      }

      return item1;
    });
    
    setCart(data);
    Swal.fire({
      
      text: "Cart has been Saved!",
      icon: "success",
      timer:1000
    });
    const co = data.reduce((sum, item) => sum + item.full+item.half, 0);


    if (co == 0) {
      setShowViewCart(false);
    }
  };

  const handleSearchChange = (event) => {
    setKeywords(event.target.value);
   
  };

  const handleVegSwitchChange = () => {
    setVegOnly(!vegOnly);
  };

  const handleNonVegSwitchChange = () => {
    setNonVegOnly(!nonVegOnly);
  };
  const handleOpen = (item,index) => {
    setDish(item);
    const itemIndex = cart.findIndex((item1) => item1._id === item._id);
   
   if(itemIndex===-1) {const data = {
     index: index,
     _id: item._id,
     name:item.dish,
     fullPrice:item.price,
     halfPrice:item.Halfprice,
     full:0,
     half:0
   };

   setCart([...cart, ...Array(1).fill(data)]);}


    // setCart([...cart,])
    setSelectedProducts((prevSelected) => [...prevSelected, index]);
  
    setOpen(true);
  };

  const handleClick = (index, cartValue, item) => {
    // alert(index,cartValue)

    const data = {
      index: index,
      _id: item._id,
      name:item.dish,
      full:cartValue,
      half:0,
      fullPrice:item.price,
      halfPrice:item.Halfprice 
      
    };

    setCart([...cart, ...Array(1).fill(data)]);

    // setCart([...cart,])
    setSelectedProducts((prevSelected) => [...prevSelected, index]);
    setButton1("none");
    setButton2("block");
    setShowViewCart(true);
  };

  const FetchProductByKeywords = async () => {

    var formData=new FormData
    formData.append("menuId",menuId)
    formData.append("keywords",keywords)
    var result = await postData('index/search',formData,true)
    setData(result.data)
    console.log(result.data)
}

  const fetchData = async () => {
    var formData=new FormData
    formData.append('menuId',menuId)
    const result = await postData("index/getDataById",formData,true);
    setData(result.data); // Update the data state with the fetched data
    console.log("result", result.data);
  };

  const fetchRestaurantData=async()=>{
    var formData=new FormData
    formData.append("menuId",menuId)
    const response=await postData('index/getRestaurantDetails',formData,true)
  
      if(response.status==true){
       
        setName(response.data.restaurantName)
        setNumber(response.data.number)
        setCall(response.data.call)
        setImage({fileName:`${serverURL}/images/${response.data.logo}`,bytes:""})
    }    
}

  useEffect(() => {
    fetchRestaurantData()
    fetchData(); // Fetch data when the component mounts
  }, []);

  const handleRemove = (index) => {
    // Create a copy of the cart state
    let updatedCart = cart.map((item) => {
      if (item.index === index) {
        // If item quantity is 1, remove the item
        if (item.full === 1) {
          // Filter out the item from cart
          setCart((prevCart) =>
            prevCart.filter((item) => item.index !== index)
          );
          // Filter out the item from selectedProducts
          setSelectedProducts((prevSelected) =>
            prevSelected.filter((item) => item !== index)
          );
          // Return null or undefined to remove the item from updatedCart
          return null;
        } else {
          // Decrease the quantity if it's greater than 1
          return { ...item, full: item.full - 1 };
        }
      }
      // Leave other items unchanged
      return item;
    });

    // Remove any null or undefined entries (items with quantity 1)
    updatedCart = updatedCart.filter(
      (item) => item !== null && item !== undefined
    );

    const co = updatedCart.reduce((sum, item) => sum + item.full, 0);


    if (co == 0) {
      setShowViewCart(false);
    }
    setCart(updatedCart);
  };

  // const handleRemove = (index) => {
  //   // let data=[...cart]
  //   // data[index]
  //   let data=cart.map((item)=>{
  //     if(item.index===index){

  //       if(item.cart==1){

  //         setCart((prevSelected) =>
  //   prevSelected.filter((item) => item.index !== index)
  // );
  //         setSelectedProducts((prevSelected) =>
  //   prevSelected.filter((item) => item !== index)
  // );
  //       }else{
  //         return {...item,cart:item.cart-1};
  //       }

  //     }

  //     return item;
  //    })

  //   setCart(data)
  // };

  const handleAdd = (index) => {
    // alert(JSON.stringify(cart))
    let data = cart.map((item) => {
      if (item.index === index) {
        return { ...item, full: item.full + 1 };
      }

      return item;
    });
    setCart(data);
  };

  useEffect(() => {}, [cart, selectedProducts]);

  const DialogComponent = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{zIndex:0}}
      >
        
        <DialogContent>
         {dish && ( <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
             
              <Paper
                sx={{ width: 500, backgroundColor: "white", paddingBottom: 10 }}
              >
                 <Typography
                  sx={{
                    mt: 3,
                    fontFamily: "poppins",
                    fontSize: 20,
                    width: 200,
                  }}
                >
                  {dish.dish}
                </Typography>
                 <Typography
                  sx={{
                    mt: 3,
                    fontFamily: "poppins",
                    fontSize: 20,
                    width: 200,
                  }}
                >
                  Full portion ₹ {dish.price}
                </Typography>
                <Grid sx={{ display: "flex", flexDirection: "row", mt: 5 }}>
                  <button
                    onClick={()=>decrement(dish)}
                    style={{ width: 50, borderRadius: "10%" }}
                  >
                    -
                  </button>
                  <TextField
                    sx={{ width: 150 }}
                    variant="outlined"
                    type="number"
                    value={count}
                    InputProps={{ inputProps: { min: 0 } }}
                    disabled
                  />
                  <button
                     onClick={()=>increment(dish)}
                  
                    style={{ marginLeft: 10, width: 50, borderRadius: "10%" }}
                  >
                    +
                  </button>
                </Grid>
                <Typography
                  sx={{
                    mt: 3,
                    fontFamily: "poppins",
                    fontSize: 20,
                    width: 200,
                  }}
                >
                  Half portion ₹ {dish.Halfprice}
                </Typography>
                <Grid sx={{ display: "flex", flexDirection: "row", mt: 5 }}>
                  <button
                    onClick={()=>decrementt(dish)}
                    style={{ width: 50, borderRadius: "10%" }}
                  >
                    -
                  </button>
                  <TextField
                    sx={{ width: 150 }}
                    variant="outlined"
                    type="number"
                    value={count1}
                    InputProps={{ inputProps: { min: 0 } }}
                    disabled
                  />
                  <button
                    onClick={()=>incrementt(dish)}
                    style={{ marginLeft: 10, width: 50, borderRadius: "10%" }}
                  >
                    +
                  </button>
                </Grid>
                <Grid sx={{ mt: 10, ml: 2 }}>
                  <button
                    onClick={handleClose}
                    style={{ width: 50, height: 50, borderRadius: "10%" }}
                  >
                    Close
                  </button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>)}
        </DialogContent>
      </Dialog>
    );
  };

  const handleCart=()=>{
    window.localStorage.setItem("menucart",JSON.stringify(cart))
    navigate('/Kitchen',{state:{data:JSON.stringify(cart),menuId:menuId}})
  }

  const ViewCart = () => {
    const total = selectedProducts.reduce((acc, index) => {
      // Find the corresponding product in the 'data' array
      const product = datafood.find((item, index1) => index1 === index);

      // Find the corresponding cart item for the product
      const cartItem = cart.find((item) => item.index === index);

      // Add the total price (price * quantity) of the product to the total
      return (
        acc + (product ? product.price * (cartItem ? cartItem.cart : 0) : 0)
      );
    }, 0);
     

    return (
      <Grid >
        <Grid container spacing={2}   sx={{display:"flex",justifyContent:"center"}} >
        
            <Grid
              item
              xs={12}
              sx={{
               
                display: "flex",
                
                justifyContent: "center",
                alignItems: "center",
                height: 55,
                cursor: "pointer",
              }}
            >

              <Button
              onClick={()=>handleCart()}
                sx={{ bgcolor: "#f3b419", color: "black", mb: 2, display: "flex",borderRadius:2 }}
              >
                ViewCart
                <LocalMallIcon sx={{ width: 20, ml: 1 }} />
              </Button>
            </Grid>
          
        </Grid>
      </Grid>
    );
  };
  const ViewOrder = () => {
   
     

    return (
      <Grid >
        <Grid container spacing={2}   sx={{display:"flex",justifyContent:"center"}} >
        
            <Grid
              item
              xs={12}
              sx={{
               
                display: "flex",
                
                justifyContent: "center",
                alignItems: "center",
                height: 55,
                cursor: "pointer",
              }}
            >

              <Button
              onClick={()=>navigate('/menucheckout',{state:{menuId:menuId}})}
                sx={{ bgcolor: "#f3b419", color: "black", mb: 2, display: "flex",borderRadius:2 }}
              >
                Order Status
                <LocalMallIcon sx={{ width: 20, ml: 1 }} />
              </Button>
            </Grid>
          
        </Grid>
      </Grid>
    );
  };

  const CardComponent = () => {
    return (
      <Paper sx={{ width: 380, backgroundColor: "white", paddingBottom: 15 }}>
        <Grid
          container
          spacing={2}
          sx={{ width: 370, backgroundColor: "white" }}
        >
          {datafood.map((item, index) => (
            <React.Fragment key={item._id}>
              <Grid item xs={7}>
                <Typography>
                  <FiberManualRecordIcon
                    sx={{ color: item.foodtype === "veg" ? "green" : "red" }}
                  />
                </Typography>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {item.dish}
                </Typography>
                <Typography style={{ fontSize: "20px" }}>
                  &#8377;{item.price}
                </Typography>
                <Typography
                  style={{
                    color: "green",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  *{item.rating} (52)
                </Typography>
                <Typography sx={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{item.description}</Typography>
              </Grid>
              <Grid item xs={5}>
                <img
                  src={`${serverURL}/images/${item.Image}`}
                  alt="Masala Grill"
                  width={160}
                />
                {item.Halfprice==""?<Grid
                  sx={{
                    display: selectedProducts.includes(index)
                      ? "block"
                      : "none",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      fontSize: 30,
                      justifyContent: "center",
                    }}
                  >
                    <Grid>
                      <IconButton
                        sx={{
                          color: "#001E3C",
                          bgcolor: "white",
                          m: 1,
                          "&:hover": { bgcolor: "white" },
                        }}
                        onClick={() => handleRemove(index)}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#000",
                      }}
                    >
                      {cart == []
                        ? 1
                        : cart.find((item) => item.index === index)?.full || 1}
                      {console.log(cart)}
                    </Grid>
                    <Grid>
                      <IconButton
                        sx={{
                          color: "#001E3C",
                          bgcolor: "white",
                          m: 1,
                          "&:hover": { bgcolor: "white" },
                        }}
                        onClick={() => handleAdd(index)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>:<></>}
                {item.Halfprice==""?<Grid
                  sx={{
                    display: !selectedProducts.includes(index)
                      ? "block"
                      : "none",
                  }}
                >
                  <Button
                    onClick={() => handleClick(index, 1, item)}
                    variant="outlined"
                    size="large"
                    sx={{ width: 150, color: "green", borderColor: "#ffde00" }}
                  >
                    ADD
                  </Button>
                </Grid>:<Grid
                  sx={{
                    display: "block"
                  }}
                >
                  <Button
                    onClick={() =>     handleOpen(item,index) }
                    variant="outlined"
                    size="large"
                    sx={{ width: 150, color: "green", borderColor: "#ffde00" }}
                  >
                    ADD
                  </Button>
                </Grid>}
              </Grid>
            </React.Fragment>
          ))}
         
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            left:25,
            bottom:5
          }}
        >
          {showViewCart && <ViewCart />}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            left:200,
            bottom:5
          }}
        >
          {showOrder && <ViewOrder />}
        </Grid>
      </Paper>
    );
  };

  return (
    <Grid container spacing={2} sx={{ width: 400 }}>
      <Box name={name} number={number} image={Image.fileName} call={call}/>

      <Grid item xs={12}>
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          <WestIcon sx={{ marginRight: 1 }} /> Menu{" "}
          <EastIcon sx={{ marginLeft: 1 }} />
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        <TextField
          placeholder="Search dishes"
          value={keywords}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    color: "black",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                  disabled={keywords==''?true:false}
                  onClick={()=>FetchProductByKeywords()}
                >
                  <SearchIcon />
                </IconButton>
                
              </InputAdornment>
            ),
          }}
          sx={{
            width: "300px",
            padding: "10px",
          }}
        />
      </Grid>
      {/* <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          sx={{
            marginLeft: "15px",
            color: "grey",
            border: 1,
            borderStyle: "solid",
            borderRadius: 10,
            paddingLeft: 1,
            paddingRight: 1,
          }}
        >
          <Switch
            checked={vegOnly}
            onChange={handleVegSwitchChange}
            checkedIcon={
              <Avatar alt="Veg" src={img2} sx={{ width: 20, height: 20 }} />
            }
            icon={
              <Avatar alt="Non-Veg" src={img2} sx={{ width: 20, height: 20 }} />
            }
          />
        </Grid>
        <Grid
          sx={{
            marginLeft: "15px",
            color: "grey",
            border: 1,
            borderStyle: "solid",
            borderRadius: 10,
            paddingLeft: 1,
            paddingRight: 1,
          }}
        >
          <Switch
            checked={nonVegOnly}
            onChange={handleNonVegSwitchChange}
            icon={
              <Avatar alt="Veg" src={img1} sx={{ width: 20, height: 20 }} />
            }
            checkedIcon={
              <Avatar alt="Non-Veg" src={img1} sx={{ width: 20, height: 20 }} />
            }
          />
        </Grid>
        <Grid
          sx={{
            marginLeft: "15px",
            color: "grey",
            border: 1,
            borderStyle: "solid",
            borderRadius: 10,
            paddingLeft: 1,
            paddingRight: 1,
            width: 150,
            height: 40,
          }}
        >
          <Typography
            sx={{ textAlign: "center", padding: 1, color: "black", width: 100 }}
          >
            Ratings4.0+
          </Typography>
        </Grid>
        <Grid
          sx={{
            marginLeft: "15px",
            color: "grey",
            border: 1,
            borderStyle: "solid",
            borderRadius: 10,
            paddingLeft: 1,
            paddingRight: 1,
            width: 150,
            height: 40,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              padding: 1,
              color: "black",
            }}
          >
            BestSeller
          </Typography>
        </Grid>
      </Grid> */}
      <Divider
        sx={{
          backgroundColor: "black",
          height: "1px",
          width: "100%",
          mt: 2,
        }}
      />
      <Grid item xs={9}>
        <Typography sx={{ fontFamily: "poppins", fontSize: 30 }}>
          Recommended ({datafood.length})
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          scrollbarWidth: "none",
        }}
      >
        <CardComponent />
      </Grid>
      {DialogComponent()}
    </Grid>
  );
}
