import { Box, Grid,Button, Paper, TextField, Typography, useMediaQuery, Container } from '@mui/material'
import React, { useContext } from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import bg from "../../Digital Card Assets/footer.png";
import { SessionContext } from '../../../Services/SessionContext';
import { postData, serverURL } from '../../../Services/NodeServices';
import { useState } from 'react';
import { useEffect } from 'react';
import { useTheme } from "@mui/material/styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const CartPage = () => {
  const navigate=useNavigate()
  const theme=useTheme()
  const [cartProducts, setCartProducts] = useState([])
    
  const [subTotal, setSubTotal] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(0)
  const [products, setProducts] = useState([])
  const User = window?.localStorage?.getItem("UserNumber") == null ? window?.localStorage?.getItem("UserMail") : window?.localStorage?.getItem("UserNumber")
  const matches1 = useMediaQuery(theme?.breakpoints?.down(480));
  const func = async (User) => {
    var formdata = new FormData();
    formdata?.append("mobile", User);
    var response = await postData("cart/getAllProducts", formdata, true);
    if(response){
    setCartProducts(response?.products)
    console?.log(response)
    }

}


React?.useEffect(() => {
    func(User)
}, [])

const fetchProductById = async (item) => {
    const formData = new FormData();
    formData?.append("_id", item);
    const response = await postData("products/getproductbyid", formData, true);
    return response?.data;
}
React.useEffect(() => {
    if(cartProducts?.length>0){
    const fetchProducts = async () => {
        const productData = await Promise?.all(
            cartProducts?.map((item) => fetchProductById(item?.productId))
        );
        
        var price = 0
        var discount = 0
        cartProducts?.forEach(cartItem => {
            const product = productData?.find(item => item?._id === cartItem?.productId);
           
            if (product) {
                if (product?.customizable) {
                    if(cartItem?.count > 1 && cartItem?.count < 5)
                    {
                        product.offerprice = 499;
                    }
                    if(cartItem?.count > 4 && cartItem?.count < 10)
                    {
                        product.offerprice = 449
                    }
                    if(cartItem?.count > 9)
                    {
                        product.offerprice = 333
                    }
                    
                }
                const subTotal = product?.price * cartItem?.count;
                const discountPrice = (product?.price - product?.offerprice) * cartItem?.count;
                price += subTotal;
                discount += discountPrice;
            }
        });
        console?.log(productData)
        setProducts(productData);
        setSubTotal(price)
        setDiscountPrice(discount)
    };
    fetchProducts();}
}, [cartProducts]);
useEffect(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'instant',
    });
}, [])
  
  const handleDelete = async (id) => {
    const formData = new FormData();
    formData?.append("mobile", User);
    formData?.append("productId", id);
    const response = await postData("cart/remove", formData, true);
    window?.location?.reload()

}

const handleAdd = async (item) => {
    var count
    cartProducts?.map((items) => {
        if (item?._id == items?.productId) {
            count = items?.count + 1
        }

    })
    const formData = new FormData();
    formData?.append("mobile", User);
    formData?.append("productId", item?._id);
    formData?.append("count", count);
    const response = await postData("cart/update-count", formData, true);
    window?.location?.reload()
}
const handleRemove = async (item) => {
  var count
  cartProducts?.map((items) => {
      if (item?._id == items?.productId) {
         
        count = items?.count - 1
      }

  })
  
  if(count >= 1)
  {  const formData = new FormData();
  formData?.append("mobile", User);
  formData?.append("productId", item?._id);
  formData?.append("count", count);
  const response = await postData("cart/update-count", formData, true);
  window?.location?.reload()
}else{
    handleDelete(item?._id)
  }
 
}

  const handleProduct = (item) => {

    return products?.map((item) => {


        return (

            <Box sx={{ marginLeft: matches1?3:2,marginTop:1 }}>
                <Paper
                    elevation={3}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: matches1 ? "100%" : "90%",
                        padding: matches1?1:5,
                        marginLeft:matches1?-1:0
                    }}
                >
                    <Grid
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            position:"relative"
                        }}
                    >
                        <img
                            src={`${serverURL}/images/${item?.images[0]}`}
                            style={{
                                width: matches1 ? "40%" : "25%",
                            }}
                        />
                        <Grid style={{ marginLeft: matches1 ? 10 : 30 }}>
                            <Grid style={{ display: "flex", flexDirection: "row" }}>
                                <Typography
                                    sx={{
                                        color: "#001E3C",
                                        width: '90%',
                                        fontSize: { xs:16,md: 25},
                                        margin: matches1 ? "0px 0px 8px" : "0px 15px",
                                        textAlign: "left",
                                    }}
                                >
                                    {item?.productName}{" "}
                                </Typography>
                                <DeleteOutlineIcon id="icon" onClick={() => { handleDelete(item?._id) }} variant={"filled"} sx={{ fontSize: matches1?20:30, marginLeft: matches1 ? "0px" : 20,position:"absolute",right:0,cursor:"pointer" }} />
                            </Grid>
                            <Box
                                style={{
                                    display: "flex",
                                    flexDirection:"column",
                                    textAlign: "left",
                                }}
                            >
                                <Typography
                                    style={{
                                        fontSize: matches1 ? 14 : 26,
                                        marginLeft: matches1 ? 0 : 20,
                                        fontWeight: 600,
                                        textAlign: "left",
                                        marginBottom:matches1?2:0
                                    }}
                                >
                                    ₹&nbsp;{item?.offerprice}{" "}
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: matches1 ? 12 : 20,
                                        fontWeight: 600,
                                        color: "#808080",
                                        marginTop: matches1 ? 3 : 0,
                                        marginLeft: matches1 ? 0 : 20,
                                        textAlign: "left",
                                    }}
                                >
                                    <s>₹&nbsp;{item?.price}</s>
                                </Typography>
                            </Box>
                            <Box
                                style={{
                                    marginTop: matches1 ? 5 : 10,
                                    marginLeft: matches1 ? 0 : 15,
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                               
                            >
                                <Box style={{ display: "flex",
    flexDirection: "row",}}>
                                    <AddCircleIcon
                                        onClick={() => handleAdd(item)}
                                        style={{
                                            fontSize: matches1 ? 16 : 30,
                                            color: "#001E3C",
                                            margin: 2,
                                            marginRight: 10,
                                            cursor:"pointer"
                                        }}
                                    />
                                    <Typography
                                        style={{
                                            fontSize: matches1 ? 14 : 24,
                                            color: "#000000",
                                        }}
                                    >
                                        {cartProducts?.map((items) => {
                                            if (item?._id == items?.productId) {
                                                return items?.count
                                            }
                                        })}
                                    </Typography>
                                    <RemoveCircleIcon
                                        onClick={() => handleRemove(item)}
                                        style={{
                                            fontSize: matches1 ? 16 : 30,
                                            color: "#001E3C",
                                            margin: 2,
                                            marginLeft: 10,
                                            cursor:"pointer"
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        );
    })
};

const handleOrderSummary = () => {
    return (
        <Box sx={{ marginLeft: 3 }}>
            <Paper
                elevation={1}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    padding: matches1 ? 1 : 5,
                    borderRadius: matches1 ? 1 : 2,
                    backgroundColor: "#f2f2f2",
                }}
            >

                <Typography
                    style={{
                        
                        fontSize: matches1 ? 16 : 24,
                        color: "#001E3C"
                    }}
                >
                    ORDER SUMMARY
                </Typography>
                <Box
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                    }}
                   
                >
                    <Typography style={{
                        color: "#001E3C",
                        fontSize: matches1 ? 14 : 20,
                        fontWeight: 600,
                    }}>
                        Sub total
                    </Typography>
                    <Typography style={{
                        color: "#001E3C",
                        fontSize: matches1 ? 14 : 20,
                        fontWeight: 600,
                    }}>
                        ₹{subTotal}
                    </Typography>
                </Box>
                <Box
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                    }}
                   
                >
                    <Typography style={{
                        color: "green",
                        fontSize: matches1 ? 14 : 20,
                        fontWeight: 600,
                    }}>
                        Discount
                    </Typography>
                    <Typography style={{
                        color: "green",
                        fontSize: matches1 ? 14 : 20,
                        fontWeight: 600,
                    }}>
                        - ₹{discountPrice}
                    </Typography>
                </Box>
                <Box
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
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
                        ₹{subTotal - discountPrice}{" "}
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
                        ₹{((subTotal - discountPrice)*18)/100}{" "}
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
                        ₹{(subTotal - discountPrice)+(((subTotal - discountPrice)*18)/100)}{" "}
                    </Typography>
                </Box>
                <Grid
                    container
                    spacing={2}
                    style={{ marginTop: 2, marginBottom: matches1 ? 10 : 5 }}
                >
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            fullWidth
                            style={{
                                color: "#001E3C",
                                border: "2px solid #001E3C",
                                fontSize: matches1 ? 8 : 11,
                            }}
                            onClick={()=>navigate('/')}
                        >
                            Continue to Shopping
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            onClick={() => navigate('/details', { state: { products: cartProducts, discount: discountPrice, subTotal: subTotal, totalPrice:(subTotal - discountPrice)+(((subTotal - discountPrice)*18)/100) } })}
                            fullWidth
                            style={{
                                backgroundColor: "#001E3C",
                                color: "#ffffff",
                                fontSize: matches1 ? 8 : 12,
                            }}
                        >
                            Proceed to Checkout
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

  return (
    <>
      <Grid container spacing={2} sx={{ bgcolor: "#001E3C" }}>

        <Navbar />
        <Grid item xs={12} sx={{ mt: 15 }}>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: 'whitesmoke', height: 150, }}>
              <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 30 }, fontWeight: 'bold', m: 1 }}>Shopping Cart</Typography>
              <ArrowRightAltIcon sx={{ fontSize: { xs: 20, sm: 22, md: 30 }, opacity: 0.8 }} />
              <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 30 }, opacity: 0.8, m: 1 }} >Check Out</Typography>
              <ArrowRightAltIcon sx={{ fontSize: { xs: 20, sm: 22, md: 30 }, opacity: 0.8 }} />
              <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 30 }, opacity: 0.8, m: 1 }}>Order Complete</Typography>
            </Grid>
            <Grid item xs={12} >

            </Grid>
            <Container maxWidth={"xl"}>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Grid container spacing={2} style={{ marginTop: 2 }}>
                            <Grid item xs={12} lg={8} style={{ padding: 20 }}>
                                {handleProduct()}
                            </Grid>
                            <Grid item xs={12} lg={4} style={{ padding: 20 }}>
                                {handleOrderSummary()}{" "}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
          </Grid>

        </Grid>

        <Box sx={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover" }}>
          <Footer />
        </Box>
      </Grid>
    </>
  )
}

export default CartPage
