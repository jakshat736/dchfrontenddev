import { AppBar, Button, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import SwipeableTemporaryDrawer from './HomePageDrawer';
import CoPresentIcon from "@mui/icons-material/CoPresent";
import SearchIcon from "@mui/icons-material/Search";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from 'react-router-dom';
import { ArrowUpward, CurrencyRupeeSharp, Facebook } from "@mui/icons-material";
import img1 from "../../assets/go.png";
import img2 from "../../assets/in.jpg";
import img3 from "../../assets/io.png";
import img4 from "../../assets/ha.png";
import { SessionContext } from '../../../../Services/SessionContext';
import { useContext } from 'react';
import { postData } from '../../../../Services/NodeServices';
import { useEffect } from 'react';

const Navbar = () => {
    const theme = useTheme();
    const navigate=useNavigate()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { cart, setCart } = useContext(SessionContext);
    const Token = window.localStorage.getItem("Token");
    const User = window.localStorage.getItem("UserNumber")==null?window.localStorage.getItem("UserMail"): window.localStorage.getItem("UserNumber")

    const func = async () => {
      var formdata = new FormData();
      formdata.append("mobile", User);
      var response = await postData("cart/getAllProducts", formdata, true);
      if(response){
        console.log(response.products.length)
      setCart(response.products.length);
      }else{
        
      }
  };
    useEffect(()=>{
      func()
    },[cart])
  
  return (
    <AppBar position='static' style={{ background: "#f5f6fa" }}>
    <Toolbar>
      {isMobile ? <SwipeableTemporaryDrawer /> : <></>}
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          color: "black",
          fontSize: { xs: 20, md: 30 },
          fontFamily: "poppins",
          ml: { xs: 3, md: 1 },
          fontWeight: 'bold',
          cursor:"pointer"
        }}
        onClick={()=>navigate('/')}
      >
        Digital Card Hub
      </Typography>
      {isMobile ? (
        <>
          <IconButton
            size="large"
            edge="start"
           
            aria-label="menu"
            sx={{ mr: 2 ,color:"black"}}
          >
            <ShoppingBagIcon sx={{}} />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,color:"black"}}
            onClick={()=>navigate('/digitalcardlogin')}
          >
            <CoPresentIcon />
          </IconButton>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,color:"black" }}
          >
            <ShoppingBagIcon />
            {cart}
          </IconButton>
        </>
      )}
      <Typography variant="body1" sx={{ color: "black" }}>
        0,00 <CurrencyRupeeSharp />
      </Typography>
    </Toolbar>
    <div
      className="button-container"
      style={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "3%",
        color: "black",
        justifyContent:'space-evenly',
        marginBottom:1
      }}
    >
      {!isMobile ? (
        <>
          <Button className="expand-line-button">
            <img src={img1} alt="Google" width="20" style={{}} />
            <Typography
              sx={{
                margin: "0.5px",
                fontSize: 16,
                textTransform: "capitalize",
              }}
            >
              Google
            </Typography>{" "}
            <ArrowDropDownIcon />
          </Button>
          <Button className="expand-line-button">
            <img src={img2} alt="Google" width="20" style={{}} />
            <Typography
              sx={{
                margin: "0.5px",
                fontSize: 16,
                textTransform: "capitalize",
              }}
            >
              Instagram
            </Typography>{" "}
            <ArrowDropDownIcon />
          </Button>
          <Button className="expand-line-button">
            <Facebook/>
            <Typography
              sx={{
                margin: "0.5px",
                fontSize: 16,
                textTransform: "capitalize",
              }}
            >
              Facebook
            </Typography>{" "}
            <ArrowDropDownIcon />
          </Button>
          <Button className="expand-line-button">
            <img src={img4} alt="Google" width="20" style={{}} />
            <Typography
              sx={{
                margin: "0.5px",
                fontSize: 16,
                textTransform: "capitalize",
              }}
            >
              Food Menu
            </Typography>{" "}
            <ArrowDropDownIcon />
          </Button>

          {/* Add more buttons for laptop view */}
        </>
      ) : null}
    </div>
  </AppBar>
  )
}

export default Navbar
