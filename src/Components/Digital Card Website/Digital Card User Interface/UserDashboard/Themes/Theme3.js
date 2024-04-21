import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import './Theme9.css'
import review from "./ThemeAssets/reviewicon.png"

import {
  ArrowDownwardSharp,
  ArrowDropDownSharp,
  ArrowDropUpSharp,
  Close,
  Email,
  Facebook,
  FacebookOutlined,
  Instagram,
  Language,
  LinkedIn,
  LocationOn,
  MapSharp,
  Save,
  SaveAlt,
  Share,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import { serverURL } from "../../../../Services/NodeServices";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import bg from "./ThemeAssets/theme6.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Clock from "react-live-clock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { postData } from "../../../../Services/NodeServices";
import YouTubeIcon from '@mui/icons-material/YouTube';
import phonepe from './ThemeAssets/phonepe.png'
import paytm from './ThemeAssets/paytm.png'
import gpay from './ThemeAssets/gpay.png'
import Instagramgif from '../Themes/ThemeAssets/Instagram (1).gif';
import Whatsappgif from '../Themes/ThemeAssets/Whatsapp (2).gif';
import Facebookgif from '../Themes/ThemeAssets/Facebook (1).gif';
import Githubgif from '../Themes/ThemeAssets/Github.gif';
import Telegramgif from '../Themes/ThemeAssets/Telegram.gif';
import Youtubegif from '../Themes/ThemeAssets/Youtube (1).gif';
import Discordgif from '../Themes/ThemeAssets/Discord.gif';
import Linkedingif from '../Themes/ThemeAssets/Linkedin.gif';
import Twittergif from '../Themes/ThemeAssets/Twitter.gif';
import Gmailgif from '../Themes/ThemeAssets/Gmail.gif';
import Googlegif from '../Themes/ThemeAssets/Google.gif';
import Behancegif from '../Themes/ThemeAssets/Behance.gif';
import Paypalgif from '../Themes/ThemeAssets/Paypal (1).gif';
import Snapchatgif from '../Themes/ThemeAssets/Snapchat.gif';
import Skypegif from '../Themes/ThemeAssets/Skype.gif';
import Pinterestgif from '../Themes/ThemeAssets/Pinterest.gif';
import Drivegif from '../Themes/ThemeAssets/Google Drive.gif';
import Dropboxgif from '../Themes/ThemeAssets/Dropbox.gif';
import Redditgif from '../Themes/ThemeAssets/Reddit.gif';
import { Helmet } from "react-helmet";
export default function Theme3({ data, products, gallery, ecommerce }) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));

  console.log(data)

  const navigate = useNavigate();
  const UserId = window.localStorage.getItem("userId");
  const [number, setNumber] = React.useState();
  const [name, setName] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [href, setHref] = React.useState("");
  const [fullCard, setFullCard] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [fullOpen,setFullOpen]=useState(false)
  const handleMessage = (e) => {
    console.log(e);
    setHref(
      `https://api.whatsapp.com/send?phone=+91${e.target.value}&text=https://digitalcardhub.in/%23/${data?.companyId}`
      // `https://wa.me/+91${e.target.value}?text=https://digitalcardhub.in/#/${data?.companyId}`
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
        text: 'Check out this link!',
      
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
                    `https://wa.me/+91${data?.WhatsappNo}?text=Enquiry For ${item.productName}`
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
                  display:item.show=="true"?"block":"none"
                }}
                onClick={() =>
                  window.open(
                    `https://wa.me/+91${data?.WhatsappNo}?text=I Want To Buy Your ${item.productname}`
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
      data?.fullname +
      "\r\n" +
      "N:" +
      data?.fullname +
      ";;;\r\n" +
      "EMAIL;TYPE=INTERNET:" +
      data?.Email +
      "\r\n" +
      "TEL;TYPE=CELL:" +
      data?.phoneNumber +
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
    formData.append("_id", data?._id);
    formData.append("whatsappClickCount", data?.whatsappClickCount + 1);
    var result = await postData(
      "carddetails/updateWhatsappClickCount",
      formData,
      true
    );
  };
  const handleInstaUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data?._id);
    formData.append("instaClickCount", data?.whatsappClickCount + 1);
    var result = await postData(
      "carddetails/updateInstaClickCount",
      formData,
      true
    );
  };


  const handleFbUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data?._id);
    formData.append("fbClickCount", data?.fbClickCount + 1);
    var result = await postData(
      "carddetails/updateFbClickCount",
      formData,
      true
    );
  };
  const handleLinkdinUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data?._id);
    formData.append("linkdinClickCount", data?.linkdinClickCount + 1);
    var result = await postData(
      "carddetails/updateLinkdinClickCount",
      formData,
      true
    );
  };
  const handleContactUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data?._id);
    formData.append("contactDownloadCount", data?.contactDownloadCount + 1);
    var result = await postData(
      "carddetails/updateContactDownloadCount",
      formData,
      true
    );
  };

  const handleSubmit = async (customerId) => {
    let formData=new FormData
    formData.append('cardId',customerId)
    formData.append('name',name)
    formData.append('number',phoneNo)
    formData.append('query',query)

        let response = await postData("enquiry/addcardenquiry",formData,true);
    // alert("Successful");
  };

  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  const handleFull=()=>{
    setFullCard(!fullCard)
    if(fullCard!=true){
      if( data?.enquiry=='true'){
      setFullOpen(true)}
    }
  }

  const handleClose=()=>{
    setFullOpen(false)
  }

  const DialogComponent = () => {
    return (
      <Dialog
        open={fullOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
       
      >
         <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        <Close/>
        </IconButton>
        <DialogContent  sx={{bgcolor:"#f3b419"}}>
          
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
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
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
                  value={phoneNo}
                  onChange={(e)=>setPhoneNo(e.target.value)}
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
                      color: "#000",
                    },
                  }}
                  onClick={()=>handleSubmit(data?.customerId)}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  };


  return (
    <Grid
      style={{
        backgroundColor: "wheat",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <meta property="og:title" content={data?.fullname} />
        <meta property="og:image" content={'data:image/jpeg;base64,' +arrayBufferToBase64(data?.companylogo.data?.data)} />
        <meta property="og:url" content={ `http://digitalcardhub.in/#/${data?.companyId}`} />
      </Helmet>

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
          xs={4}
          md={3.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 1,
            marginTop: -1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ebebeb",
              color: "#008069",
              fontWeight: 600,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              "&:hover": {
                bgcolor: "#ebebeb",
                color: "#BDCAB8",
              },
            }}
          >
            <Clock
              format={"h:mm:ssA"}
              ticking={true}
              style={{ color: "#0a290a", fontSize: 15 }}
              timezone={"Asia/Calcutta"}
            />
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          md={3.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 1,
            marginTop: -1,
            color: "#0a290a",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {data?.cardViewCount} <VisibilityIcon sx={{ color: "#0a290a" }} />
        </Grid>
        <Grid
          item
          xs={4}
          md={3.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 1,
            marginTop: -1,
          }}
        >
          <Button
            variant="contained"
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
            }}
            onClick={() => navigate("/digitalcardlogin")}
          >
            {data?.customerId == UserId ? "Login" : "Create Now"}
          </Button>
        </Grid>
        {data?.coverVideo != ''?<Grid
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
            <source src={`${serverURL}/images/${data?.coverVideo}`} type="video/mp4" />
          </video>
        </Grid>:
        <Grid
           id="hero"
            item
            xs={12}
            md={12}
            sx={{
              color: "#fff",
              backgroundImage: data?.companyCoverImage ?`url('data:image/png;base64,${arrayBufferToBase64(data?.companyCoverImage.data?.data)}')`:'',
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
            <Grid item xs={12} sx={{ marginBottom: 1, marginTop: -10 }}>
              <img
                src={'data:image/jpeg;base64,' +arrayBufferToBase64(data?.companylogo.data?.data)}
                width={120}
                height={120}
                style={{ borderRadius: "60%", boxShadow: "2px 2px 15px 2px" }}
              />
            </Grid>
            <Grid item xs={12} sx={{display:"flex", marginBottom: 1, marginTop: -3 }}>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#0a290a",
                }}
              >
                {data?.fullname}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{display:"flex", marginBottom: 1, marginTop: -3 }}>
              <Typography
                sx={{
                  fontSize: "1.0rem",
                  fontWeight: 300,
                  color: "#0a290a",
                }}
              >
                {data?.position}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display:"flex",marginBottom: 1, marginTop: -3 }}>
              <Typography
                sx={{
                  fontSize: "1.0rem",
                  fontWeight: 300,
                  color: "#0a290a",
                }}
              >
                {data?.phoneNumber}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{display:"flex", marginBottom: 1, marginTop: -3 }}>
              <Typography
                sx={{
                  fontSize: "1.0rem",
                  fontWeight: 300,
                  color: "#0a290a",
                }}
              >
                {data?.Email}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                
                  
                display: data?.phoneNumber == null ? "none" : "flex",
              }}
            >
              <IconButton
                href={`tel:${data?.phoneNumber}`}
                sx={{color: "#000",}}
              >
                <CallIcon sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>

            <Grid
              item
              xs={3}
              md={3}
              sx={{
                display: data?.location == "" ? "none" : "flex",

              }}
            >
              <IconButton
                href={`${data?.location}`}
                // onClick={() => handleLinkdinUpdate()}
                sx={{color: "#000",}}
              >
                <LocationOn sx={{ fontSize: { xs: 25, sm: 35, md: 35 } }} />
              </IconButton>
            </Grid>

            <Grid item xs={3} sx={{display:data?.GoogleMapLink!=''?'block':'none'}}>
             <IconButton
                 href={`${data?.GoogleMapLink}`}
                // onClick={()=>handleInstaUpdate()}
                sx={{color: "#000",}}
              >
                <img src={review} width={35} />
              </IconButton>
               
              </Grid>
  

            <Grid item xs={3} md={3}>
              <IconButton
                href={`https://wa.me/+91${data?.phoneNumber}?text=`}
                onClick={() => handleWhatsappUpdate()}
              //   sx={{
              //     backgroundColor: "#fff",
              //     color: "#000",
              //     border: 1,
              //     "&:hover": {
              //       backgroundColor: "wheat",
              //     },
              //   }}
              //   variant="outlined"
              >
               <img src={Whatsappgif} style={{width:70,}}/>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                display: data?.igLink == "" ? "none" : "flex",
              }}
            >
              <IconButton
                href={`https://www.instagram.com/${data?.igLink}`}
                onClick={() => handleInstaUpdate()}
                
              >
                 <img src={Instagramgif} style={{width:70,}}/>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                display: data?.Email == "" ? "none" : "flex",
              }}
            >
              <IconButton
                href={`mailto:${data?.Email}?body=Query%20About%20Business`}
                
              >
                 <img src={Gmailgif} style={{width:70,}}/>             </IconButton>
            </Grid>
                      <Grid
              item
              xs={3}
              md={3}
              sx={{
                display: data?.fbLink == "" ? "none" : "flex",
              }}
            >
              <IconButton
                href={`https://www.facebook.com/${data?.fbLink}`}
                onClick={() => handleFbUpdate()}
               
              >
                <img src={Facebookgif} style={{width:70,}}/>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                display: data?.TwitterLink == "" ? "none" : "flex",
              }}
            >
              <IconButton
                href={`https://twitter.com/${data?.TwitterLink}`}
                // onClick={() => handleFbUpdate()}
               
              >
                <img src={Twittergif} style={{width:70,}}/>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                display: data?.LinkdnLink == "" ? "none" : "flex",
              }}
            >
              <IconButton
                href={`https://www.linkedin.com/in/${data?. LinkdnLink}`}
                // onClick={() => handleFbUpdate()}
               
              >
               <img src={Linkedingif} style={{width:70,}}/>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                display: data?.YoutubeLink == "" ? "none" : "flex",
                
              }}
            >
              <IconButton
                href={`https://www.youtube.com/@${data?.YoutubeLink}`}
                onClick={()=>handleLinkdinUpdate()}
               
              >
                <img src={Youtubegif} style={{width:70,}}/>
              </IconButton>
            </Grid>
            
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                display: data?.location == "" ? "none" : "flex",

              }}
            >
              <IconButton
                href={`${data?.website}`}
                // onClick={() => handleLinkdinUpdate()}
               
              >
                <img src={Googlegif} style={{width:70,}}/>
              </IconButton>
            </Grid>

            {
                data?.links.map((item)=>{
                  return(
                    <Grid
                    item
                    xs={3}
                    md={3}
                   
                   
                  >
                     {item.title === "GitHub" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Githubgif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Telegram" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Telegramgif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Discord" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Discordgif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "PayPal" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Paypalgif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Snapchat" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Snapchatgif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Skype" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Skypegif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Reddit" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Redditgif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Google drive" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Drivegif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Dropbox" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Dropboxgif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Pinterest" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Pinterestgif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Behance" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        <img src={Behancegif} style={{width:70,}}/>
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Others" &&(
                        <Button
                        sx={{
                          paddingX: "25px",
                          paddingY: "10px",
                          bgcolor: "#ebebeb",
                          color: "#000000",
                          fontWeight: 600,
                          borderRadius: 2,
                          border: "1px solid #000000",
                          "&:hover": {
                            bgcolor: "wheat",
                            color: "#000000",
                          },
                        }}
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {item.customTitle}
                      </Button>
                       
                     )
                    }
                  </Grid>
                  
                  )
                })

}


            
          </Grid>

          <Grid
            container
            spacing={2}
            
          >
             {/* <Grid item xs={5} sx={{  display:
                    data?.paytmNumber == '' &&
                    data?.Googlepaynumber == '' &&
                    data?.phonepenumber == ''
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
                    <Grid item xs={4} sx={{display:data?.phonepenumber!=''?'block':'none',mr:2}}>
                      <IconButton sx={{marginTop:1,bgcolor:"#fff"}} href={`upi://pay?pa=${data?.phonepenumber}&mc=0000&mode=02&purpose=00`}>
                        <img src={phonepe}/>
                      </IconButton>
                    </Grid>
                    <Grid item xs={4} sx={{display:data?.paytmNumber!=''?'block':'none',mr:1}}>
                      <IconButton sx={{marginTop:1,bgcolor:"#fff"}} href={`upi://pay?pa=${data?.paytmNumber}&pn=PaytmUser&mc=0000&mode=02&purpose=00&orgid=159761`}>
                      <img src={paytm}/>
                      </IconButton>
                    </Grid>
                    <Grid item xs={4} sx={{display:data?.Googlepaynumber!=''?'block':'none',mr:1}}>
                      <IconButton sx={{marginTop:1,bgcolor:"#fff"}} href={`upi://pay?pa=${data?.Googlepaynumber}&aid=uGICAgIDzn4f_TQ`}>
                      <img src={gpay}/>
                      </IconButton>
                    </Grid>
                  </Grid>
                 
                </Box>
              </Grid> */}
              
 
             
             
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ dispaly: "flex", justifyContent: "center",mt:0 }}
          >
            <Grid
              item
              xs={10}
              sx={{
                marginTop: { xs: 4, sm: 4, md: 0 },
                fontSize: 25,
                textAlign: "center",
                mb:1,
               
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
                    color: "#000000",
                    "&.Mui-focused": {
                      color: "#000000", // Change label color when focused
                    },
                  },
                  "& input": {
                    paddingLeft: (theme) => theme.spacing(0),
                    color: "#000000",
                    zIndex: 1,
                  },

                  "& fieldset": {
                    paddingLeft: (theme) => theme.spacing(2.5),
                    borderRadius: "15px",
                    backgroundColor: "wheat",
                    "&:hover": {
                      borderColor: "#000000",
                      backgroundColor: "wheat",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#000000",
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
            sx={{ dispaly: "flex", justifyContent: "center",mb:1 }}
          >
            <Grid
              item
              xs={10}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
              }}
              onClick={() =>
                handleClick(
                  `${data?.companyId}`,
                  `https://digitalcardhub.in/#/${data?.companyId}`
                )
              }
            >
              <Button
                fullWidth
                sx={{
                  paddingX: "25px",
                  paddingY: "10px",
                  bgcolor: "#ebebeb",
                  color: "#000000",
                  fontWeight: 600,
                  borderRadius: 2,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "wheat",
                    color: "#000000",
                  },
                }}
                onClick={() =>
                  handleClick(
                    `${data?.companyId}`,
                    `http://digitalcardhub.in/#/${data?.companyId}`
                  )
                }
              >
                <Share />
                &nbsp;&nbsp;&nbsp; SHARE YOUR DETAIL
              </Button>
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                marginTop: { xs: 4, sm: 4, md: 4 },
                display: "flex",
                justifyContent: "flex-start",
                cursor: "pointer",
                position:"fixed",
                bottom:50,
                zIndex:1,
               
              }}
              onClick={() => handleSave()}
            >
              <Button
                fullWidth
                sx={{
                  paddingX: "30px",
                  paddingY: "10px",
                  bgcolor: "#ebebeb",
                  color: "#000000",
                  fontWeight: 600,
                  borderRadius: 2,
                  border: "1px solid #000000",
                  "&:hover": {
                    bgcolor: "wheat",
                    color: "#000000",
                  },
                  boxShadow:20
                }}
                onClick={() => handleSave()}
              >
                <SaveAlt />
                &nbsp;&nbsp;&nbsp;Add To Contact
              </Button>
            </Grid>
            
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: data?.profile=='false'?'none':"flex", justifyContent: "center", margin: 0 }}
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
              onClick={() =>handleFull()}
            >
              {fullCard ? "Show Less" : "Show Full Card"}
            </Button>
          </Grid>
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
                  Establishment Date : {data?.CompanyEstDate}
                </Typography>
              </Grid> */}
            <Grid item xs={11} md={11} sx={{ml:-2}}>
              <p
              className="theme3"
              >
                {" "}
                {data?.AboutUs}
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
              (data?.YoutubeVideoLink1 != "" ||
                data?.YoutubeVideoLink2 != "" ||
                data?.YoutubeVideoLink3 != "" ||
                data?.YoutubeVideoLink4 != "" ||
                data?.YoutubeVideoLink5 != "") &&
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
                display: data?.YoutubeVideoLink1 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink1} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink2 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink2} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink3 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink3} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink4 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink4} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink5 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink5} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink6 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink6} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink7 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink7} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink8 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink8} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink9 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink9} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink10 == "" ? "none" : "flex",
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
                <ReactPlayer height="300px" url={data?.YoutubeVideoLink10} />
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
              (data?.paytmNumber != null ||
                data?.Googlepaynumber != null ||
                data?.phonepenumber != null ||
                data?.paytmQrimage != "" ||
                data?.phonepeQrimage != "" ||
                data?.googlepayQrimage != "" ||
                data?.Accountholdername != "" ||
                data?.bankaccountnumber != null ||
                data?.bankifsccode != "" ||
                data?.bankname != "") &&
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
                    data?.paytmNumber == null &&
                    data?.Googlepaynumber == null &&
                    data?.phonepenumber == null
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
                      display: data?.paytmNumber == null ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    Paytm
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data?.paytmNumber}
                  </Typography>
                  <Typography
                    sx={{
                      display: data?.Googlepaynumber == null ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    Google Pay
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data?.Googlepaynumber}
                  </Typography>
                  <Typography
                    sx={{
                      display: data?.phonepenumber == null ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    PhonePe
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data?.phonepenumber}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display:
                    data?.Accountholdername == "" &&
                    data?.bankaccountnumber == null &&
                    data?.bankifsccode == "" &&
                    data?.bankname == ""
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
                      display: data?.Accountholdername == "" ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    Name:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data?.Accountholdername}
                  </Typography>
                  <Typography
                    sx={{
                      display:
                        data?.bankaccountnumber == null ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    Account Number:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data?.bankaccountnumber}
                  </Typography>
                  <Typography
                    sx={{
                      display: data?.bankifsccode == "" ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    IFSC Code:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data?.bankifsccode}
                  </Typography>
                  <Typography
                    sx={{
                      display: data?.bankname == "" ? "none" : "block",
                      color: "#000",
                    }}
                  >
                    Bank Name:
                  </Typography>
                  <Typography color="#00adef" fontSize={20}>
                    {data?.bankname}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display:
                    data?.paytmQrimage == "" &&
                    data?.phonepeQrimage == "" &&
                    data?.googlepayQrimage == ""
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
                    sx={{ display: data?.paytmQrimage == "" ? "none" : "block" }}
                  >
                    <Typography color="#000" fontSize={20}>
                      Paytm Qr
                    </Typography>

                    <img
                      src={`${serverURL}/images/${data?.paytmQrimage}`}
                      width={"100%"}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      display: data?.phonepeQrimage == "" ? "none" : "block",
                    }}
                  >
                    <Typography color="#000" fontSize={20}>
                      Phone Pe Qr
                    </Typography>
                    <img
                      src={`${serverURL}/images/${data?.phonepeQrimage}`}
                      width={"100%"}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      display: data?.googlepayQrimage == "" ? "none" : "block",
                    }}
                  >
                    <Typography color="#000" fontSize={20}>
                      Google Pay Qr
                    </Typography>
                    <img
                      src={`${serverURL}/images/${data?.googlepayQrimage}`}
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
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
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
                  value={phoneNo}
                  onChange={(e)=>setPhoneNo(e.target.value)}
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
                  value={query}
                  onChange={(e)=>setQuery(e.target.value)}
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
                  onClick={()=>handleSubmit(data?.customerId)}
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
      {DialogComponent()}
    </Grid>
  );
}
