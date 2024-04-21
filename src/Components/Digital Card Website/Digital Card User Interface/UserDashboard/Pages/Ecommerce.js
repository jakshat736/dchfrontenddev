import {
    Grid,
    Button,
    Typography,
    IconButton,
    TextField,
    Avatar,
    useTheme,
    useMediaQuery,
    Tooltip,
    Container,
} from "@mui/material";
import React from "react";
import Navbar from "../UserComponents/Navbar";
import Footer from "../UserComponents/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData, serverURL } from "../../../../Services/NodeServices";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Swal from "sweetalert2";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Preloader from "../../Components/Preloader";
const Ecommerce = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const navigate = useNavigate();
    const [productData, setProductData] = useState(Array(4).fill(null));
    const [data, setData] = useState(false);
    const [loadingAnimation, setLoadingAnimation] = useState(true);
    const [temp, setTemp] = useState();

    const cardId = window.localStorage.getItem("CardId");
    const userId = window.localStorage.getItem("userId");
    const oldImg = [];
    const fetchCardDetail = async () => {
        setLoadingAnimation(true)
        var formData = new FormData();
        formData.append("customerId", userId);
        var result = await postData("carddetails/getcardDetails", formData, true);
        // console.log(result.data.products);
        if(result!=false)    
        {        if (result.data.ecommerce.length == 0) {
            setProductData(Array(4).fill(null));
        } else {
            setData(true);
            let productData = [...result.data.ecommerce];

            if (productData.length < 4) {
                const emptyProduct = {
                    productName: "",
                    productimage: "",
                };

                const emptyProductCount = 4 - productData.length;
                productData = [
                    ...productData,
                    ...Array(emptyProductCount).fill(emptyProduct),
                ];
            }

            setProductData(productData);
            const newData = [...productData];

            productData.map((item, index) => {
                if(item!=null){
                oldImg[index] = { productimg: item.productimg };
                setTemp(oldImg);
                newData[index] = {
                    ...newData[index],
                    productimg: { url: `${serverURL}/images/${item.productimg}` },
                };

                setProductData(newData);
            }
            });}}else{
                navigate('/userdashboard')
            }
            if(result===false || result?.data!=undefined){
                setLoadingAnimation(false)
              }
        

    };
    React.useEffect(() => {
        fetchCardDetail();
    }, []);

    const handleProductNameChange = (index, value) => {
        const newData = [...productData];
        newData[index] = { ...newData[index], productname: value };
        setProductData(newData);
    };

    const handleProductMrpChange = (index, value) => {
        const newData = [...productData];
        newData[index] = { ...newData[index], price: value };
        setProductData(newData);
    };
    const handleProductOfferChange = (index, value) => {
        const newData = [...productData];
        newData[index] = { ...newData[index], offerprice: value };
        setProductData(newData);
    };

    const handleProductImageChange = (index, event) => {
        const newData = [...productData];
        newData[index] = {
            ...newData[index],
            productimg: {
                url: URL.createObjectURL(event.target.files[0]),
                bytes: event.target.files[0],
            },
        };
        setProductData(newData);
    };

    const handleSubmit = async () => {
       setLoadingAnimation(true)
        var formData = new FormData();
        formData.append("_id", cardId);
        let productsName = [];
        productData.map((item, index) => {
            if (item != null) {
                productsName[index] = {
                    index: index,
                    productname: item.productname,
                    price: item.price,
                    offerprice: item.offerprice,
                };
                formData.append(`productImage${index}`, item.productimg.bytes);
            }
        });
        if (temp != undefined) {
            temp.map((item, index) => {
                productsName[index].productimg = item.productimg;
            });
        }
        formData.append("products", JSON.stringify(productsName));
        formData.append("oldimg", JSON.stringify(temp));
        var response = await postData(
            "carddetails/updateecommerce",
            formData,
            true
        );
        if (response.status == true) {
            navigate("/preview");
            setLoadingAnimation(false)
        }
    };

    const handleDelete = async (id) => {
        var formData = new FormData();
        formData.append("cardId", cardId);
        formData.append("productId", id);
        var response = await postData(
            "carddetails/deleteecommerceproduct",
            formData,
            true
        );
        if (response.status == true) {
            fetchCardDetail();
           
        }
    };

    const handleAdd=()=>{

        const emptyProduct = {
          productName: '',
          productimage: '',
        };

     if(productData[0]!=null && productData[1]!=null && productData[2]!=null && productData[3]!=null){
    
    
        setProductData([...productData,...Array(1).fill(emptyProduct)])
     }else {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Fill The Empty Columns',
            showConfirmButton: false,
            timer: 1500
        })
     }
      }

      const handleShow=async(id,show)=>{
        var formData = new FormData();
        formData.append("cardId", cardId);
        formData.append("productId", id);
        formData.append("show", show=="true"?"false":"true");
        var response = await postData(
            "carddetails/showUpdate",
            formData,
            true
        );
        if (response.status == true) {
            fetchCardDetail();
            window.location.reload();
        }
      }
    return (
        <Grid>
            <Navbar />
            {loadingAnimation==true?
      <Container maxWidth="xl" sx={{height:"100vh",overflow:'hidden',width:"100vw"}}>
        <Grid container spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center",overflow:'hidden'}}>
          
          <Preloader/>
          </Grid></Container>:
            <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center", paddingX: "20px" }}
            >
                <Grid item xs={4} style={{ marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => navigate("/links")} variant="contained">
                        <NavigateBeforeIcon />Back
                    </Button>
                </Grid>
                <Grid item xs={4} sx={{display:'flex',justifyContent:"center", marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => handleSubmit()} variant='contained'>Save<BeenhereIcon /></Button>
                </Grid>
                <Grid
                    item
                    xs={4}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "2vh",
                        marginBottom: "2vh",
                    }}
                >
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => navigate("/preview")} variant="contained">
                        Skip<NavigateNextIcon />
                    </Button>
                </Grid>

                <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center", width: "90%", mt: mobile ? "2vh" : tablet ? "3vh" : "" }}
                >
                    <Grid item xs={12}>
                        <Typography
                            textAlign="center"
                            sx={{ fontSize: { xs: "1.4rem", md: 28 }, fontWeight: "bold" }}
                        >
                            Ecommerce Services / Gallery
                        </Typography>
                    </Grid>
                    {productData.map((item, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                xs={mobile?12:tablet?5:3}
                                md={2.5}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    border: 1,
                                    marginLeft: 4,
                                    marginTop: 4,
                                    paddingX: "15px",
                                    paddingY: "10px"
                                }}
                            >
                                <Grid
                                    container
                                    spacing={2}
                                    style={{ display: "flex", height: 60 }}
                                >
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ display: "flex", alignItems: "center" }}
                                    >
                                        <Typography>{index + 1}</Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={3}
                                        style={{ display: "flex", alignItems: "center" }}
                                    >
                                        {item==null ? (
                                            <></>
                                        ) : (
                                            <IconButton onClick={() => handleDelete(item._id)}>
                                                <DeleteOutlineIcon />
                                            </IconButton>
                                        )}
                                    </Grid>
                                    <Grid
                                        item
                                        xs={3}
                                        style={{ display: "flex", alignItems: "center" }}
                                    >{item==null ? (
                                        <></>
                                    ) :(
                                        <Tooltip title={item.show=="true" ?"Click For show as Gallery":" Click For show as Buy"} arrow>
                                        <IconButton onClick={()=>handleShow(item._id,item.show)} >
                                       {item.show=="true" ? <Visibility  /> : <VisibilityOff />}
                                       </IconButton></Tooltip>)}
                                    </Grid>
                                </Grid>
                                <Button
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        fontSize: 12.5,
                                        fontWeight: "bold",
                                    }}
                                    variant="text"
                                    component="label"
                                >
                                    {/* {alert(JSON.stringify(productData[index]))} */}
                                    <Avatar
                                        fullWidth
                                        variant="rounded"
                                        alt="Remy Sharp"
                                        src={
                                            productData[index]?.productimg == null
                                                ? ""
                                                : productData[index]?.productimg.url
                                        }
                                        sx={{ width: 100, height: 100 }}
                                    />
                                    Upload Product Image
                                    <input
                                        hidden
                                        accept="image/*"
                                        onChange={(event) => handleProductImageChange(index, event)}
                                        type="file"
                                    />
                                </Button>
                                <TextField
                                    sx={{ width: { xs: "80%", md: "80%" }, margin: 1 }}
                                    label="Product/Service Name"
                                    value={productData[index]?.productname || ""}
                                    onChange={(event) =>
                                        handleProductNameChange(index, event.target.value)
                                    }
                                />
                                <TextField
                                    sx={{ width: { xs: "80%", md: "80%" }, margin: 1 }}
                                    label="MRP"
                                    value={productData[index]?.price || ""}
                                    onChange={(event) =>
                                        handleProductMrpChange(index, event.target.value)
                                    }
                                />
                                <TextField
                                    sx={{ width: { xs: "80%", md: "80%" }, margin: 1 }}
                                    label="Offer Price"
                                    value={productData[index]?.offerprice || ""}
                                    onChange={(event) =>
                                        handleProductOfferChange(index, event.target.value)
                                    }
                                />
                            </Grid>
                        );
                    })}
 <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX:"30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleAdd()}>Add More Products</Button>
          </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 8,
                        }}
                    >
                        <Button
                            sx={{
                                borderRadius: 10,
                                backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                paddingX:"30px",
                                textAlign: "center",
                                alignItems: "center",
                            }}
                            variant="contained"
                            onClick={() => handleSubmit()}
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </Grid>}
            <Footer />
        </Grid >
    );
};

export default Ecommerce;
