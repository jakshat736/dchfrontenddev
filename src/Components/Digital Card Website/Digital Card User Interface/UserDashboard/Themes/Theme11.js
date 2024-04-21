import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import phonepe from './ThemeAssets/phonepe.png'
import paytm from './ThemeAssets/paytm.png'
import gpay from './ThemeAssets/gpay.png'
  import zomato from './ThemeAssets/zomato.png'
import swiggy from './ThemeAssets/swiggy.png'
import skype from './ThemeAssets/skype.png'

  import React from "react";
  import review from "./ThemeAssets/reviewicon.png"
  import ChatIcon from '@mui/icons-material/Chat';
  import './Theme9.css'
  import {
    Apple,
    ArrowDownwardSharp,
    ArrowDropDownSharp,
    ArrowDropUpSharp,
    DataArray,
    Email,
    Facebook,
    FacebookOutlined,
    Instagram,
    Language,
    LinkedIn,
    LocationOn,
    MapSharp,
    Pinterest,
    Receipt,
    Save,
    SaveAlt,
    Share,
    Twitter,
    Web,
    WhatsApp,
    YouTube,
  } from "@mui/icons-material";
  import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
  
  import { serverURL } from "../../../../Services/NodeServices";
  import { useNavigate } from "react-router-dom";
  import ReactPlayer from "react-player";
  import bg from "./ThemeAssets/theme6.jpg";
  import Behance from "./ThemeAssets/behance.png";
  import dribble from "./ThemeAssets/dribble.png";
  import discord from "./ThemeAssets/discord.png";
  import thread from "./ThemeAssets/threads.png";
  import playstore from "./ThemeAssets/playstore.png";
  import appstore from "./ThemeAssets/appstore.png";
  import reviewicon from "./ThemeAssets/review.png";
  import home from "./ThemeAssets/home.png"
  import edit from "./ThemeAssets/pencil.png"
  import logo from "./ThemeAssets/dchlogo.png"
  import EmailIcon from "@mui/icons-material/Email";
  import CallIcon from "@mui/icons-material/Call";
  import LocationOnIcon from "./ThemeAssets/locationicon.png";
  import FacebookIcon from "./ThemeAssets/facebookicon.png";
  import WhatsAppIcon from "@mui/icons-material/WhatsApp";
  import Clock from "react-live-clock";
  import VisibilityIcon from "@mui/icons-material/Visibility";
  import { postData } from "../../../../Services/NodeServices";

  export default function Theme11({ data, products, gallery, ecommerce }) {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));
  
    const navigate = useNavigate();
    const UserId = window.localStorage.getItem("userId");
    const [number, setNumber] = React.useState();
    const [href, setHref] = React.useState("");
    const [fullCard, setFullCard] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleMessage = (e) => {
      console.log(e);
      setHref(
        `https://api.whatsapp.com/send?phone=+91${e.target.value}&text=https://digitalcardhub.in/%23/${data.companyId}`
        // `https://wa.me/+91${e.target.value}?text=https://digitalcardhub.in/#/${data.companyId}`
      );
    };
  
    const handleButtonClick = () => {
      setOpen(!open);
    };
    React.useEffect(()=>{
      const section = document.getElementById("hero");
      section.scrollIntoView({ behavior: 'instant' });
    },[])
    const handleClick = async (title, url) => {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    };
  
    const Products = () => {
      return products.map((item) => {
        if (item != null) {
          return (
            <Grid item xs={mobile ? 12 : 6}>
              <Paper
                elevation={12}
                sx={{
                  border: 1,
                  backgroundColor: "#ffffff",
                  borderStyle: "solid",
                  borderColor: "white",
                  display: item.productimage == "" ? "none" : "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  mb: "15px",
                  marginX: "15px",
                  p: 0,
                }}
              >
                <img src={`${serverURL}/images/${item.productimage}`} />
                <br />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "1.4rem",
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  {item.productName}
                </Typography>
                <br />
                <Button
                  variant="contained"
                  sx={{
                    paddingX: "20px",
                    bgcolor: "#FFDE59",
                    color: "#000000",
                    fontWeight: 600,
                    border: "1px solid #000000",
                    "&:hover": {
                      bgcolor: "#0CC0DF",
                      color: "#000000",
                    },
                  }}
                  onClick={() =>
                    window.open(
                      `https://wa.me/+91${data.WhatsappNo}?text=Enquiry For ${item.productName}`
                    )
                  }
                >
                  Enquiry
                </Button>
              </Paper>
            </Grid>
          );
        }
      });
    };
  console.log(ecommerce)
    const Ecommerce = () => {
      return ecommerce.map((item) => {
        if (item != null) {
          return (
            <Grid item xs={12}>
              <Paper
                elevation={12}
                sx={{
                  border: 1,
                  backgroundColor: "#ffffff",
                  borderStyle: "solid",
                  borderColor: "white",
                  display: item.productimg==''?"none":"flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  mb: "15px",
                  marginX: "15px",
                  p: 0,
                }}
              >
                <img src={`${serverURL}/images/${item.productimg}`} />
                <br />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "1.4rem",
                    color: "#000000",
                    textAlign: "center",
                    display:item.productname==''?"none":"block"
                  }}
                >
                  {item.productname}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <s>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "1.1rem",
                        color: "#000000",
                        textAlign: "center",
                        display:item.price==''?"none":"block"
                      }}
                    >
                      ₹{item.price}
                    </Typography>
                  </s>
                  &nbsp;&nbsp;
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "1.3rem",
                      color: "#000000",
                      textAlign: "center",
                      display:item.offerprice==''?"none":"block"
                    }}
                  >
                    ₹{item.offerprice}
                  </Typography>
                </Box>
                <br />
                <Button
                  variant="contained"
                  sx={{
                    paddingX: "20px",
                    bgcolor: "#FFDE59",
                    color: "#000000",
                    fontWeight: 600,
                    border: "1px solid #000000",
                    "&:hover": {
                      bgcolor: "#0CC0DF",
                      color: "#000000",
                    },
                  }}
                  onClick={() =>
                    window.open(
                      `https://wa.me/+91${data.WhatsappNo}?text=I Want To Buy Your ${item.productname}`
                    )
                  }
                >
                  BUY NOW
                </Button>
              </Paper>
            </Grid>
          );
        }
      });
    };
  
    const Gallery = () => {
      return gallery.map((item) => {
        if (item != null) {
          return (
            <Grid item xs={12}>
              <Paper
                elevation={6}
                sx={{
                  border: 1,
                  borderRadius: 2.5,
                  backgroundColor: "#ebfaeb",
                  borderStyle: "solid",
                  borderColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  mb: "15px",
                  marginX: "15px",
                  p: 0,
                }}
              >
                <img
                  src={`${serverURL}/images/${item.image}`}
                  style={{ borderRadius: 10, width: "auto" }}
                />
              </Paper>
            </Grid>
          );
        }
      });
    };
  
    const handleSave = () => {
      var vCardData =
        "BEGIN:VCARD\r\n" +
        "VERSION:3.0\r\n" +
        "FN:" +
        data.fullname +
        "\r\n" +
        "N:" +
        data.fullname +
        ";;;\r\n" +
        "EMAIL;TYPE=INTERNET:" +
        data.Email +
        "\r\n" +
        "TEL;TYPE=CELL:" +
        data.phoneNumber +
        "\r\n" +
        "END:VCARD";
      var blob = new Blob([vCardData], { type: "text/vcard" });
      var downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "contact.vcf";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      handleContactUpdate();
    };
  
    const handleWhatsappUpdate = async () => {
      var formData = new FormData();
      formData.append("_id", data._id);
      formData.append("whatsappClickCount", data.whatsappClickCount + 1);
      var result = await postData(
        "carddetails/updateWhatsappClickCount",
        formData,
        true
      );
    };
    const handleInstaUpdate = async () => {
      var formData = new FormData();
      formData.append("_id", data._id);
      formData.append("instaClickCount", data.whatsappClickCount + 1);
      var result = await postData(
        "carddetails/updateInstaClickCount",
        formData,
        true
      );
    };
  
  
    const handleFbUpdate = async () => {
      var formData = new FormData();
      formData.append("_id", data._id);
      formData.append("fbClickCount", data.fbClickCount + 1);
      var result = await postData(
        "carddetails/updateFbClickCount",
        formData,
        true
      );
    };
    const handleLinkdinUpdate = async () => {
      var formData = new FormData();
      formData.append("_id", data._id);
      formData.append("linkdinClickCount", data.linkdinClickCount + 1);
      var result = await postData(
        "carddetails/updateLinkdinClickCount",
        formData,
        true
      );
    };
    const handleContactUpdate = async () => {
      var formData = new FormData();
      formData.append("_id", data._id);
      formData.append("contactDownloadCount", data.contactDownloadCount + 1);
      var result = await postData(
        "carddetails/updateContactDownloadCount",
        formData,
        true
      );
    };

    const arrayBufferToBase64 = (buffer) => {
      var binary = '';
      var bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => (binary += String.fromCharCode(b)));
      return window.btoa(binary);
    };
  
    return (
      <Grid
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: { xs: "100vw", sm: "70%", md: "37%" },
            height: "100%",
            marginTop: 0,
            marginLeft: 0.3,
          }}
        >
          <Grid
            item
            xs={1}
            md={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: 1,
              marginTop: -1,
            }}
          >
             <IconButton
                  href={`https://digitalcardhub.in/`}
                  
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: 1,
                    "&:hover": {
                      backgroundColor: "wheat",
                    },
                  }}
                >
                                    <img src={home} width={25}/>
                </IconButton>
          </Grid>
          <Grid
            item
            xs={1}
            md={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: 1,
              marginTop: -1,
            }}
          >
             <IconButton
                  onClick={() => navigate("/digitalcardlogin")}
                  
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: 1,
                    "&:hover": {
                      backgroundColor: "wheat",
                    },
                  }}
                >
                                    <img src={edit} width={25}/>
                </IconButton>
          </Grid>
          <Grid
            item
            xs={4}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: 1,
              marginTop: -1,
            }}
          >
             <a
                  href={`https://digitalcardhub.in/`}
                  
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: 1,
                    "&:hover": {
                      backgroundColor: "wheat",
                    },
                  }}
                >
                                    <img src={logo} width={45}/>
                </a>
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: 1,
              marginTop: -1,
              color: "#0a290a",
              flexDirection: "row",
              alignItems: "center",
             
              
            }}
          >
            <Button variant="contained"
            sx={{
              bgcolor: "#ebebeb",
              color: "#0a290a",
              fontWeight: 600,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              "&:hover": {
                bgcolor: "#ebebeb",
                color: "#000",
              },
            }}>
            {data.cardViewCount} <VisibilityIcon sx={{ color: "#0a290a",m:1 }} />
            </Button>
          </Grid>
          
          {data.coverVideo != ''?<Grid
            id="hero"
            xs={12}
            
            sx={{display:"flex",
              color: "#fff",
               width:{ xs: "100vw", sm: "70%", md: "40%" },
              minHeight: { xs: 200 },
              paddingLeft:-5,
             overflow: "hidden", // Ensures the video doesn't overflow the Grid
             
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                objectFit:'cover',
                width: "100%",
                height: 250,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                
               
  
              }}
            >
               <source src={`${serverURL}/images/${data.coverVideo}`} type="video/mp4" />
           
            </video>
          </Grid>:
          <Grid
             id="hero"
              item
              xs={12}
              md={12}
              sx={{
                color: "#fff",
                backgroundImage: `url('data:image/png;base64,${arrayBufferToBase64(data.companyCoverImage.data.data)}')`,
                backgroundSize: "cover",
                width: "100%",
                minHeight: { xs: 260 },
                 borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                
              }}
            >
              {" "}
            </Grid>}
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              color: "#fff",
              bgcolor: "#ebebeb",
              width: "100%",
              minHeight: { xs: 600, sm: 600, md: 600 },
              zIndex:1
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                dispaly: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Grid item xs={4} sx={{  dispaly: "flex",
                justifyContent: "center",
                alignItems: "center",marginBottom: 1, marginTop: -10 }}>
                <img
                 src={'data:image/jpeg;base64,' +arrayBufferToBase64(data.companylogo.data.data)}
                 width={150}
                  height={150}
                  style={{ borderRadius: "60%", boxShadow: "2px 2px 15px 2px" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -3 }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#0a290a",
                    textAlign:'center'
                  }}
                >
                  {data.fullname}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -3 }}>
                <Typography
                  sx={{
                    fontSize: "1.0rem",
                    fontWeight: 300,
                    color: "#0a290a",
                    textAlign:'center'
                  }}
                >
                  {data.position}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -3 }}>
                <Typography
                  sx={{
                    fontSize: "1.0rem",
                    fontWeight: 300,
                    color: "#0a290a",
                    textAlign:'center'
                  }}
                >
                  {data.companyname}
                </Typography>
              </Grid>
              {/* <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -3 }}>
                <Typography
                  sx={{
                    fontSize: "1.0rem",
                    fontWeight: 300,
                    color: "#0a290a",
                  }}
                >
                  {data.Email}
                </Typography>
              </Grid> */}
           
              <Grid item xs={2} md={2}>
              <IconButton
                href={`https://wa.me/+91${data.phoneNumber}?text=`}
                onClick={() => handleWhatsappUpdate()}
                sx={{
                  backgroundColor: "#1471B9",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#1471B9",
                  },
                }}
                variant="outlined"
              >
                <WhatsAppIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 },color:"white" }} />
              </IconButton>
              </Grid>
              {/* <Grid
                item
                xs={2}
                md={2}
                sx={{
                  display: data.igLink == "" ? "none" : "flex",
                }}
              >
                <IconButton
                  href={`https://www.instagram.com/${data.igLink}`}
                  onClick={() => handleInstaUpdate()}
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: 1,
                    "&:hover": {
                      backgroundColor: "wheat",
                    },
                  }}
                >
                                    <img src={InstagramIcon} width={25}/>
                </IconButton>
              </Grid> */}
              <Grid
                item
                xs={2}
                md={2}
                sx={{
                  display: data.Email == "" ? "none" : "flex",
                }}
              >
<IconButton
                href={`mailto:${data.Email}?body=Query%20About%20Business`}
                sx={{
                  backgroundColor: "#1471B9",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#1471B9",
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 },color:"white" }} />
              </IconButton>
              </Grid>
              <Grid
                item
                xs={2}
                md={2}
                sx={{
                  display: data.phoneNumber == null ? "none" : "flex",
                }}
              >
                <IconButton
                href={`tel:${data.phoneNumber}`}
                sx={{
                  backgroundColor: "#1471B9",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#1471B9",
                  },
                }}
              >
                <CallIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 },color:"white" }} />
              </IconButton>
              </Grid>
              {/* <Grid
                item
                xs={2}
                md={2}
                sx={{
                  display: data.fbLink == "" ? "none" : "flex",
                }}
              >
                <IconButton
                  href={`https://www.facebook.com/${data.fbLink}`}
                  onClick={() => handleFbUpdate()}
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: 1,
                    "&:hover": {
                      backgroundColor: "wheat",
                    },
                  }}
                >
                                   <img src={FacebookIcon} width={25}/>
                </IconButton>
              </Grid> */}
              {/* <Grid
                item
                xs={2}
                md={2}
                sx={{
                  display: data.YoutubeLink == "" ? "none" : "flex",
                  
                }}
              >
                <IconButton
                  href={`https://www.youtube.com/@${data.YoutubeLink}`}
                  onClick={()=>handleLinkdinUpdate()}
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: 1,
                    "&:hover": {
                      backgroundColor: "wheat",
                    },
                  }}
                >
                                    <img src={YouTubeIcon} width={25}/>
                </IconButton>
              </Grid> */}
              <Grid
                item
                xs={2}
                md={2}
                sx={{
                  display: data.location == "" ? "none" : "flex",
  
                }}
              >
              <IconButton
                href={`${data.location}`}
                // onClick={() => handleLinkdinUpdate()}
                sx={{
                  backgroundColor: "#1471B9",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#1471B9",
                  },
                }}
              >
                <LocationOn sx={{ fontSize: { xs: 25, sm: 35, md: 35 },color:'white' }} />
              </IconButton>
              </Grid>
            </Grid>
  
            <Grid
              container
              spacing={2}
              sx={{ dispaly: "flex", justifyContent: "center",mt:1 }}
            >
               {/* <Grid item xs={5} sx={{  display:
                      data.paytmNumber == '' &&
                      data.Googlepaynumber == '' &&
                      data.phonepenumber == ''
                        ? "none":'block'}} >
                  <Button
                    variant="contained"
                    endIcon={<CurrencyRupeeIcon />}
                    onClick={handleButtonClick}
                    sx={{
                      
                      backgroundColor: "#fff",
                      color: "#000",
                      border: 1,
                      "&:hover": {
                        backgroundColor: "wheat",
                      },
                    }}
                  >
                    Pay Here
                  </Button>
                  <Box sx={{ display: open ? "block" : "none" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={4} sx={{display:data.phonepenumber!=''?'block':'none',mr:2}}>
                        <IconButton sx={{marginTop:1,bgcolor:"#fff"}} href={`upi://pay?pa=${data.phonepenumber}&mc=0000&mode=02&purpose=00`}>
                          <img src={phonepe}/>
                        </IconButton>
                      </Grid>
                      <Grid item xs={4} sx={{display:data.paytmNumber!=''?'block':'none',mr:1}}>
                        <IconButton sx={{marginTop:1,bgcolor:"#fff"}} href={`upi://pay?pa=${data.paytmNumber}&pn=PaytmUser&mc=0000&mode=02&purpose=00&orgid=159761`}>
                        <img src={paytm}/>
                        </IconButton>
                      </Grid>
                      <Grid item xs={4} sx={{display:data.Googlepaynumber!=''?'block':'none',mr:1}}>
                        <IconButton sx={{marginTop:1,bgcolor:"#fff"}} href={`upi://pay?pa=${data.Googlepaynumber}&aid=uGICAgIDzn4f_TQ`}>
                        <img src={gpay}/>
                        </IconButton>
                      </Grid>
                    </Grid>
                   
                  </Box>
                </Grid> */}
               
               {/* <Grid item xs={3.5} sx={{display:data.GoogleMapLink!=''?'block':'none'}}>
             <IconButton
                 href={`${data.GoogleMapLink}`}
                // onClick={()=>handleInstaUpdate()}
                sx={{ color: "#fff", "&:hover": {bgcolor:"#fff"},bgcolor:'#fff' }}
              >
                <img src={review} width={35} />
              </IconButton>
               
              </Grid> */}
             
              {/* <Grid item xs={12} md={12}>
                  <Typography sx={{ fontSize: 25, color: "#000" }}>
                    {" "}
                    Establishment Date : {data.CompanyEstDate}
                  </Typography>
                </Grid> */}
              <Grid item xs={11} md={11}>
                <p
                className="theme3"
                >
                  {" "}
                  {data.AboutUs}
                </p>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ dispaly: "flex", justifyContent: "center" }}
            >
              <Grid
                item
                xs={10}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#000000", // Outline color when hovering
                      },
  
                      "&.Mui-focused fieldset": {
                        borderColor: "#000000", // Outline color when focused
                      },
                    },
  
                    "& label": {
                      paddingLeft: (theme) => theme.spacing(2),
                      color: "#fff",
                      "&.Mui-focused": {
                        color: "#fff", // Change label color when focused
                      },
                    },
                    "& input": {
                      paddingLeft: (theme) => theme.spacing(0),
                      color: "#fff",
                      zIndex: 1,
                    },
  
                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: "15px",
                      backgroundColor: "#1471B9",
                      "&:hover": {
                        borderColor: "#000000",
                        backgroundColor: "#1471B9",
                      },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "#fff",
                            zIndex: 1,
                          }}
                        >
                          +91
                        </Typography>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          style={{
                            border: 0,
                            borderRadius: 15,
                            zIndex: 1,
                            color: "#FFD1D9",
                            cursor: "pointer",
                            fontSize: "1.1rem",
                            backgroundColor: "#00a550",
                          }}
                          href={href}
                        >
                          Send&nbsp;
                          <WhatsApp />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={number}
                  onChange={(e) => handleMessage(e)}
                />
              </Grid>
            </Grid>
  
            <Grid
              container
              spacing={2}
              sx={{ dispaly: "flex", justifyContent: "center",alignItems:"center" }}
            >
              <Grid
                item
                xs={2}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column",

                }}
                onClick={() => handleSave()}
              >
                <IconButton
                 
                 sx={{
                  backgroundColor: "#1471B9",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#1471B9",
                  },
                  
                }}
                  // onClick={() => handleSave()}
                >
                  <ChatIcon  sx={{color:'white',fontSize:35}}/>
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Enquiry
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                onClick={() => handleSave()}
              >
                <IconButton
                 
                 sx={{
                  backgroundColor: "#1471B9",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#1471B9",
                  },
                  
                }}
                  onClick={() => handleSave()}
                >
                  <SaveAlt sx={{color:'white',fontSize:35}} />
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Download Contact
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                onClick={() =>
                  handleClick(
                    `${data.companyId}`,
                    `https://digitalcardhub.in/#/${data.companyId}`
                  )
                }
              >
                <IconButton
                   sx={{
                    backgroundColor: "#1471B9",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#1471B9",
                    },
                    
                  }}
                  onClick={() =>
                    handleClick(
                      `${data.companyId}`,
                      `http://digitalcardhub.in/#/${data.companyId}`
                    )
                  }
                >
                  <Share sx={{color:'white',fontSize:35}} />
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>

            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ dispaly: "flex", justifyContent: "center",alignItems:"center",mt:-5 }}
            >
              <Grid
                item
                xs={2}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column",

                }}
                onClick={() => handleSave()}
              >

                <Typography sx={{color:'grey',textAlign:"center"}}>
                  Enquiry
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                onClick={() => handleSave()}
              >
                <Typography sx={{color:'grey',textAlign:"center"}}>
                  Download Contact
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                onClick={() =>
                  handleClick(
                    `${data.companyId}`,
                    `https://digitalcardhub.in/#/${data.companyId}`
                  )
                }
              >
<Typography sx={{color:'grey',textAlign:"center"}}>
                  Share
                </Typography>
              </Grid>
            
            </Grid>

            <Grid item xs={12}>
              <Typography textAlign={'center'} fontSize={22} color={'#1471B9'}>LET'S CONNECT</Typography>

            </Grid>

            <Grid item xs={10} sx={{display:"flex",justifyContent:'center',bgcolor:'#aaaaaa',borderRadius:20,ml:5}}>
              <Typography textAlign={'center'} fontSize={20} color={'#2B3445'}>Social Media</Typography>

            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ dispaly: "flex", justifyContent: "center",alignItems:"center",mb:1 }}
            >
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column",

                }}
              >
                <IconButton
                   href={`https://www.instagram.com/${data.igLink}`}
                 sx={{
                  backgroundColor: "#fff",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  
                }}
                  // onClick={() => handleSave()}
                >
                  <Instagram  sx={{color:'#1471B9',fontSize:35}}/>
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Enquiry
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
              >
                <IconButton
                  href={`https://www.facebook.com/${data.fbLink}`}
                 sx={{
                  backgroundColor: "#fff",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  
                }}
                >
                  <Facebook sx={{color:'#1471B9',fontSize:35}} />
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Download Contact
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                   href={`https://twitter.com/${data.TwitterLink}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  
                >
                  <Twitter sx={{color:'#1471B9',fontSize:35}} />
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                href={`https://www.youtube.com/@${data.YoutubeLink}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  // onClick={() =>
                  //   handleClick(
                  //     `${data.companyId}`,
                  //     `http://digitalcardhub.in/#/${data.companyId}`
                  //   )
                  // }
                >
                  <YouTube sx={{color:'#1471B9',fontSize:35}} />
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                  href={`https://www.linkedin.com/in/${data.LinkdnLink}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  // onClick={() =>
                  //   handleClick(
                  //     `${data.companyId}`,
                  //     `http://digitalcardhub.in/#/${data.companyId}`
                  //   )
                  // }
                >
                  <LinkedIn sx={{color:'#1471B9',fontSize:35}} />
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                   href={`${data.PinterestLink}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  // onClick={() =>
                  //   handleClick(
                  //     `${data.companyId}`,
                  //     `http://digitalcardhub.in/#/${data.companyId}`
                  //   )
                  // }
                >
                  <Pinterest sx={{color:'#1471B9',fontSize:35}} />
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
                            <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                href={`${data.behance}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  // onClick={() =>
                  //   handleClick(
                  //     `${data.companyId}`,
                  //     `http://digitalcardhub.in/#/${data.companyId}`
                  //   )
                  // }
                >
                    <img src={Behance} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}

              >
                <IconButton
                                href={`${data.threads}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  // onClick={() =>
                  //   handleClick(
                  //     `${data.companyId}`,
                  //     `http://digitalcardhub.in/#/${data.companyId}`
                  //   )
                  // }
                >
                   <img src={thread} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                                href={`${data.dribble}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  // onClick={() =>
                  //   handleClick(
                  //     `${data.companyId}`,
                  //     `http://digitalcardhub.in/#/${data.companyId}`
                  //   )
                  // }
                >
                  <img src={dribble} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                                href={`${data.discord}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  // onClick={() =>
                  //   handleClick(
                  //     `${data.companyId}`,
                  //     `http://digitalcardhub.in/#/${data.companyId}`
                  //   )
                  // }
                >
                   <img src={discord} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={10} sx={{display:"flex",justifyContent:'center',bgcolor:'#aaaaaa',borderRadius:20,ml:5}}>
              <Typography textAlign={'center'} fontSize={20} color={'#2B3445'}>Website & Links</Typography>

            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ dispaly: "flex", justifyContent: "center",alignItems:"center",mb:1 }}
            >
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column",

                }}
              >
                <IconButton
                 href={`${data.website}`}
                 sx={{
                  backgroundColor: "#fff",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  
                }}
                  // onClick={() => handleSave()}
                >
                  <Language  sx={{color:'#1471B9',fontSize:35}}/>
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Enquiry
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
              >
                <IconButton
                 href={`${data.GoogleMapLink}`}
                 sx={{
                  backgroundColor: "#fff",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  
                }}
                >
                                    <img src={reviewicon} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Download Contact
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                   href={`${data.playstore}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  
                >
                  <img src={playstore} width={35}/>                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
              <Grid
                
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                   href={`${data.appstore}`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  // onClick={() =>
                  //   handleClick(
                  //     `${data.companyId}`,
                  //     `http://digitalcardhub.in/#/${data.companyId}`
                  //   )
                  // }
                >
                  <img src={appstore} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>


            </Grid>
            <Grid item xs={10} sx={{display:"flex",justifyContent:'center',bgcolor:'#aaaaaa',borderRadius:20,ml:5}}>
              <Typography textAlign={'center'} fontSize={20} color={'#2B3445'}>Payment</Typography>

            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ dispaly: "flex", justifyContent: "center",alignItems:"center",mb:1 }}
            >
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column",

                }}
              >
                <IconButton
                 href={`upi://pay?pa=${data.phonepenumber}&mc=0000&mode=02&purpose=00`}
                 sx={{
                  backgroundColor: "#fff",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  
                }}
                  // onClick={() => handleSave()}
                >
                  <img src={phonepe} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Enquiry
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
              >
                <IconButton
                 href={`upi://pay?pa=${data.paytmNumber}&pn=PaytmUser&mc=0000&mode=02&purpose=00&orgid=159761`}
                 sx={{
                  backgroundColor: "#fff",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  
                }}
                >
                                    <img src={paytm} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Download Contact
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
                
              >
                <IconButton
                   href={`upi://pay?pa=${data.Googlepaynumber}&aid=uGICAgIDzn4f_TQ`}
                   sx={{
                    backgroundColor: "#fff",
                    color: "#000",
    
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    
                  }}
                  
                >
                  <img src={gpay} width={35}/>                  {/* &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL */}
                </IconButton>
              </Grid>
              

            </Grid>
            <Grid item xs={10} sx={{display:"flex",justifyContent:'center',bgcolor:'#aaaaaa',borderRadius:20,ml:5}}>
              <Typography textAlign={'center'} fontSize={20} color={'#2B3445'}>Other</Typography>

            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ dispaly: "flex", justifyContent: "center",alignItems:"center",mb:1 }}
            >
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column",

                }}
              >
                <IconButton
                 href={`${data.zomato}`}
                 sx={{
                  backgroundColor: "#fff",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  
                }}
                  // onClick={() => handleSave()}
                >
                  <img src={zomato} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Enquiry
                </Typography> */}
              </Grid>
              <Grid
                item
                xs={2.5}
                sx={{
                  marginTop: { xs: 4, sm: 4, md: 4 },
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                  cursor: "pointer",
                  flexDirection:"column"
                }}
              >
                <IconButton
                 href={`${data.skype}`}
                 sx={{
                  backgroundColor: "#fff",
                  color: "#000",
  
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  
                }}
                >
                                    <img src={skype} width={35}/>
                  {/* &nbsp;&nbsp;&nbsp;Add To Contact */}
                </IconButton>
                {/* <Typography sx={{color:'grey',textAlign:"center"}}>
                  Download Contact
                </Typography> */}
              </Grid>
             
              

            </Grid>
            <Grid item xs={10} sx={{display:"flex",justifyContent:'center',bgcolor:'#aaaaaa',borderRadius:20,ml:5}}>
              <Typography textAlign={'center'} fontSize={20} color={'#2B3445'}>More Information</Typography>

            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ dispaly: "flex", justifyContent: "center",alignItems:"center",mb:1 }}
            >
              <Grid item xs={12} sx={{display:"flex",flexDirection:"row",justifyContent:'center'}}>

                  <Typography color={'black'} fontWeight={'bold'}>
                    Education:
                  </Typography>
                  <Typography color={'black'}>
                      {data.education}
                  </Typography>
              </Grid>
              <Grid item xs={12} sx={{display:"flex",flexDirection:"row",justifyContent:'center'}}>

                  <Typography color={'black'} fontWeight={'bold'}>
                    Other Info:
                  </Typography>
                  <Typography color={'black'}>
                      {data.AboutUs}
                  </Typography>
              </Grid>
              <Grid item xs={12} sx={{display:"flex",flexDirection:"row",justifyContent:'center'}}>

                  <Typography color={'black'} fontWeight={'bold'}>
                    Hobby:
                  </Typography>
                  <Typography color={'black'}>
                     {data.hobby}
                  </Typography>
              </Grid>
              <Grid item xs={12} sx={{display:"flex",flexDirection:"row",justifyContent:'center'}}>

                  <Typography color={'black'} fontWeight={'bold'}>
                    Personal Email:
                  </Typography>
                  <Typography color={'black'}>
                     {data.Email}
                  </Typography>
              </Grid>

              

            </Grid>
  
            {/* <Grid
              item
              xs={12}
              md={12}
              sx={{ display: data.profile=='false'?'none':"flex", justifyContent: "center", margin: 2 }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                  bgcolor: "wheat",
                  color: "#000000",
                  fontWeight: 600,
                  borderRadius: 2,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "#ebebeb",
                    color: "#000000",
                  },
                }}
                onClick={() => setFullCard(!fullCard)}
              >
                {fullCard ? "Show Less" : "Show Full Card"}
              </Button>
            </Grid> */}
          </Grid>
  
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: fullCard ? "block" : "none",
              color: "#fff",
  
              backgroundColor: "#ebebeb",
              width: "100%",
              minHeight: { xs: "auto", sm: "auto", md: "auto" },
              marginTop: 2,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={12}>
              <p
                className="theme3heading"
                >
                  {" "}
                  About Us
                </p>
              </Grid>
              {/* <Grid item xs={12} md={12}>
                  <Typography sx={{ fontSize: 25, color: "#000" }}>
                    {" "}
                    Establishment Date : {data.CompanyEstDate}
                  </Typography>
                </Grid> */}
              <Grid item xs={11} md={11}>
                <p
                className="theme3"
                >
                  {" "}
                  {data.AboutUs}
                </p>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: products.length != 0 && fullCard ? "block" : "none",
              color: "#fff",
              backgroundColor: "#ebebeb",
              width: "100%",
              minHeight: { xs: "auto", sm: "100%", md: "auto" },
              marginTop: 2,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  textAlign={"center"}
                  sx={{ fontSize: 25, color: "#000" }}
                >
                  {" "}
                  Our Products and Services
                </Typography>
              </Grid>
              <Products />
            </Grid>
          </Grid> */}
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: ecommerce.length != 0 && fullCard ? "block" : "none",
              color: "#fff",
              backgroundColor: "#ebebeb",
              width: "100%",
              minHeight: { xs: "auto", sm: "100%", md: "auto" },
              marginTop: 2,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  textAlign={"center"}
                  sx={{ fontSize: 25, color: "#000" }}
                >
                  Products / Gallery
                </Typography>
              </Grid>
              <Ecommerce />
            </Grid>
          </Grid>
          {/* <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: gallery.length != 0 && fullCard ? "block" : "none",
              color: "#fff",
              backgroundColor: "#ebebeb",
              width: "100%",
              minHeight: { xs: "auto", sm: "100%", md: "auto" },
              marginTop: 2,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  textAlign={"center"}
                  sx={{ fontSize: 25, color: "#000" }}
                >
                  Our Gallery
                </Typography>
              </Grid>
              <Gallery />
            </Grid>
          </Grid> */}
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display:
                (data.YoutubeVideoLink1 != "" ||
                  data.YoutubeVideoLink2 != "" ||
                  data.YoutubeVideoLink3 != "" ||
                  data.YoutubeVideoLink4 != "" ||
                  data.YoutubeVideoLink5 != "") &&
                fullCard
                  ? "block"
                  : "none",
              color: "#fff",
              backgroundColor: "#ebebeb",
              width: "100%",
              minHeight: { xs: "auto", sm: "100%", md: "auto" },
              marginTop: 2,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Typography
                textAlign={"center"}
                sx={{ fontSize: 25, color: "#000" }}
              >
                See Our Videos
              </Typography>
              <Grid
                item
                xs={11}
                md={11}
                style={{
                  margin: 10,
                  display: data.YoutubeVideoLink1 == "" ? "none" : "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <ReactPlayer height="300px" url={data.YoutubeVideoLink1} />
                </Grid>
              </Grid>
              <Grid
                item
                xs={11}
                md={11}
                style={{
                  margin: 10,
                  display: data.YoutubeVideoLink2 == "" ? "none" : "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <ReactPlayer height="300px" url={data.YoutubeVideoLink2} />
                </Grid>
              </Grid>
              <Grid
                item
                xs={11}
                md={11}
                style={{
                  margin: 10,
                  display: data.YoutubeVideoLink3 == "" ? "none" : "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <ReactPlayer height="300px" url={data.YoutubeVideoLink3} />
                </Grid>
              </Grid>
              <Grid
                item
                xs={11}
                md={11}
                style={{
                  margin: 10,
                  display: data.YoutubeVideoLink4 == "" ? "none" : "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <ReactPlayer height="300px" url={data.YoutubeVideoLink4} />
                </Grid>
              </Grid>
              <Grid
                item
                xs={11}
                md={11}
                style={{
                  margin: 10,
                  display: data.YoutubeVideoLink5 == "" ? "none" : "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <ReactPlayer height="300px" url={data.YoutubeVideoLink5} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
  
  {/* Payment Section */}
          {/* <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: fullCard ? "flex" : "none",
              color: "#fff",
              backgroundColor: "#ebebeb",
              width: "100%",
              minHeight: { xs: "auto", sm: "100%", md: "auto" },
              marginTop: 2,
              display:
                (data.paytmNumber != null ||
                  data.Googlepaynumber != null ||
                  data.phonepenumber != null ||
                  data.paytmQrimage != "" ||
                  data.phonepeQrimage != "" ||
                  data.googlepayQrimage != "" ||
                  data.Accountholdername != "" ||
                  data.bankaccountnumber != null ||
                  data.bankifsccode != "" ||
                  data.bankname != "") &&
                fullCard
                  ? "block"
                  : "none",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Grid item xs={12} md={12}>
                <Grid
                  sx={{
                    display:
                      data.paytmNumber == null &&
                      data.Googlepaynumber == null &&
                      data.phonepenumber == null
                        ? "none"
                        : "block",
                  }}
                >
                  <Grid
                    style={{ fontSize: 30, textAlign: "center", color: "#000" }}
                  >
                    Payment Info
                  </Grid>
                  <Grid
                    style={{
                      fontSize: { xs: 10, md: 30 },
                      textAlign: "center",
                      color: "#000",
                    }}
                  >
                    -------------------------------
                  </Grid>
                  <Grid style={{ marginTop: 10 }}>
                    <Typography
                      sx={{
                        display: data.paytmNumber == null ? "none" : "block",
                        color: "#000",
                      }}
                    >
                      Paytm
                    </Typography>
                    <Typography color="#00adef" fontSize={20}>
                      {data.paytmNumber}
                    </Typography>
                    <Typography
                      sx={{
                        display: data.Googlepaynumber == null ? "none" : "block",
                        color: "#000",
                      }}
                    >
                      Google Pay
                    </Typography>
                    <Typography color="#00adef" fontSize={20}>
                      {data.Googlepaynumber}
                    </Typography>
                    <Typography
                      sx={{
                        display: data.phonepenumber == null ? "none" : "block",
                        color: "#000",
                      }}
                    >
                      PhonePe
                    </Typography>
                    <Typography color="#00adef" fontSize={20}>
                      {data.phonepenumber}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    display:
                      data.Accountholdername == "" &&
                      data.bankaccountnumber == null &&
                      data.bankifsccode == "" &&
                      data.bankname == ""
                        ? "none"
                        : "block",
                  }}
                >
                  <Grid
                    style={{ fontSize: 30, textAlign: "center", color: "#000" }}
                  >
                    Bank Account Details
                  </Grid>
                  <Grid
                    style={{
                      fontSize: { xs: 10, md: 30 },
                      textAlign: "center",
                      color: "#000",
                    }}
                  >
                    -------------------------------
                  </Grid>
                  <Grid style={{ marginTop: 10, marginBottom: 20 }}>
                    <Typography
                      sx={{
                        display: data.Accountholdername == "" ? "none" : "block",
                        color: "#000",
                      }}
                    >
                      Name:
                    </Typography>
                    <Typography color="#00adef" fontSize={20}>
                      {data.Accountholdername}
                    </Typography>
                    <Typography
                      sx={{
                        display:
                          data.bankaccountnumber == null ? "none" : "block",
                        color: "#000",
                      }}
                    >
                      Account Number:
                    </Typography>
                    <Typography color="#00adef" fontSize={20}>
                      {data.bankaccountnumber}
                    </Typography>
                    <Typography
                      sx={{
                        display: data.bankifsccode == "" ? "none" : "block",
                        color: "#000",
                      }}
                    >
                      IFSC Code:
                    </Typography>
                    <Typography color="#00adef" fontSize={20}>
                      {data.bankifsccode}
                    </Typography>
                    <Typography
                      sx={{
                        display: data.bankname == "" ? "none" : "block",
                        color: "#000",
                      }}
                    >
                      Bank Name:
                    </Typography>
                    <Typography color="#00adef" fontSize={20}>
                      {data.bankname}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    display:
                      data.paytmQrimage == "" &&
                      data.phonepeQrimage == "" &&
                      data.googlepayQrimage == ""
                        ? "none"
                        : "block",
                  }}
                >
                  <Grid
                    style={{ fontSize: 30, textAlign: "center", color: "#000" }}
                  >
                    QRs
                  </Grid>
                  <Grid
                    style={{
                      fontSize: { xs: 10, md: 30 },
                      textAlign: "center",
                      color: "#000",
                    }}
                  >
                    -------------------------------
                  </Grid>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid
                      item
                      xs={5}
                      sx={{ display: data.paytmQrimage == "" ? "none" : "block" }}
                    >
                      <Typography color="#000" fontSize={20}>
                        Paytm Qr
                      </Typography>
  
                      <img
                        src={`${serverURL}/images/${data.paytmQrimage}`}
                        width={"100%"}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      sx={{
                        display: data.phonepeQrimage == "" ? "none" : "block",
                      }}
                    >
                      <Typography color="#000" fontSize={20}>
                        Phone Pe Qr
                      </Typography>
                      <img
                        src={`${serverURL}/images/${data.phonepeQrimage}`}
                        width={"100%"}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      sx={{
                        display: data.googlepayQrimage == "" ? "none" : "block",
                      }}
                    >
                      <Typography color="#000" fontSize={20}>
                        Google Pay Qr
                      </Typography>
                      <img
                        src={`${serverURL}/images/${data.googlepayQrimage}`}
                        width={"100%"}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid> */}
  
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: fullCard ? "block" : "none",
              color: "#fff",
              backgroundColor: "#ebebeb",
              width: "100%",
              minHeight: { xs: "auto", sm: "100%", md: "auto" },
              marginTop: 2,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Grid item xs={12} md={12} sx={{ color: "#fff", paddingInline: 0 }}>
                <Grid
                  style={{
                    fontSize: 30,
                    textAlign: "center",
                    color: "#000",
                    fontWeight: 700,
                  }}
                >
                  Contact Us
                </Grid>
                <Grid
                  sx={{
                    marginTop: 5,
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    mb: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      textAlign: "left",
                      fontWeight: 600,
                      ml: "5px",
                      color: "#000",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    Enter Your Name :{" "}
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#EBD8B2", // Outline color when hovering
                        },
  
                        "&.Mui-focused fieldset": {
                          borderColor: "#EBD8B2", // Outline color when focused
                        },
                      },
  
                      "& label": {
                        paddingLeft: (theme) => theme.spacing(2),
                        color: "#654E92",
                        "&.Mui-focused": {
                          color: "#654E92", // Change label color when focused
                        },
                      },
                      "& input": {
                        paddingLeft: (theme) => theme.spacing(0),
                        color: "#000000",
                        zIndex: 1,
                      },
  
                      "& fieldset": {
                        paddingLeft: (theme) => theme.spacing(2.5),
                        borderRadius: 2,
                        backgroundColor: "#fff",
                        "&:hover": {
                          borderColor: "#EBD8B2",
                        },
                      },
                      mb: "10px",
                      color: "#654E92",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography
                            sx={{ color: "#654E92", zIndex: 1 }}
                          ></Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      textAlign: "left",
                      fontWeight: 600,
                      ml: "5px",
                      color: "#000",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    Enter Your Mobile No :{" "}
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#EBD8B2", // Outline color when hovering
                        },
  
                        "&.Mui-focused fieldset": {
                          borderColor: "#EBD8B2", // Outline color when focused
                        },
                      },
  
                      "& label": {
                        paddingLeft: (theme) => theme.spacing(2),
                        color: "#D24A61",
                        "&.Mui-focused": {
                          color: "#EBD8B2", // Change label color when focused
                        },
                      },
                      "& input": {
                        paddingLeft: (theme) => theme.spacing(0),
                        color: "#000000",
                        zIndex: 1,
                      },
  
                      "& fieldset": {
                        paddingLeft: (theme) => theme.spacing(2.5),
                        borderRadius: 2,
                        backgroundColor: "#fff",
                        "&:hover": {
                          borderColor: "#EBD8B2",
                        },
                      },
                      mb: "10px",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography
                            sx={{ color: "#654E92", zIndex: 1 }}
                          ></Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      textAlign: "left",
                      fontWeight: 600,
                      ml: "5px",
                      color: "#000",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    Enter Your Email Address :{" "}
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#EBD8B2", // Outline color when hovering
                        },
  
                        "&.Mui-focused fieldset": {
                          borderColor: "#EBD8B2", // Outline color when focused
                        },
                      },
  
                      "& label": {
                        paddingLeft: (theme) => theme.spacing(2),
                        color: "#D24A61",
                        "&.Mui-focused": {
                          color: "#EBD8B2", // Change label color when focused
                        },
                      },
                      "& input": {
                        paddingLeft: (theme) => theme.spacing(0),
                        color: "#000000",
                        zIndex: 1,
                      },
  
                      "& fieldset": {
                        paddingLeft: (theme) => theme.spacing(2.5),
                        borderRadius: 2,
                        backgroundColor: "#fff",
                        "&:hover": {
                          borderColor: "#EBD8B2",
                        },
                      },
                      mb: "10px",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography
                            sx={{ color: "#654E92", zIndex: 1 }}
                          ></Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      textAlign: "left",
                      fontWeight: 600,
                      ml: "5px",
                      color: "#000",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    Enter Your Message or Query :{" "}
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#EBD8B2", // Outline color when hovering
                        },
  
                        "&.Mui-focused fieldset": {
                          borderColor: "#EBD8B2", // Outline color when focused
                        },
                      },
  
                      "& label": {
                        paddingLeft: (theme) => theme.spacing(2),
                        color: "#D24A61",
                        "&.Mui-focused": {
                          color: "#EBD8B2", // Change label color when focused
                        },
                      },
                      "& input": {
                        paddingLeft: (theme) => theme.spacing(0),
                        color: "#000000",
                        zIndex: 1,
                      },
  
                      "& fieldset": {
                        paddingLeft: (theme) => theme.spacing(2.5),
                        borderRadius: 2,
                        backgroundColor: "#fff",
                        "&:hover": {
                          borderColor: "#EBD8B2",
                        },
                      },
                      mb: "10px",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography
                            sx={{ color: "#654E92", zIndex: 1 }}
                          ></Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      marginY: "12px",
                      paddingX: "20px",
                      bgcolor: "#fff",
                      color: "#000",
                      fontWeight: 600,
                      border: "1px solid #ebebeb",
                      "&:hover": {
                        bgcolor: "#fff",
                        color: "#ebebeb",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              color: "#fff",
              backgroundColor: "#ebebeb",
              width: "100%",
              minHeight: { xs: "auto", sm: "auto", md: "auto" },
              marginTop: 2,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={12} style={{ color: "#fff" }}>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#000", fontWeight: 700, textAlign: "center" }}
                  >
                    DIGITAL CARD HUB{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{ color: "#000", fontWeight: 500, textAlign: "center" }}
                  >
                    Powered by India Buzz
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  