import { Box, Button,IconButton, Grid, TextField, Container, Typography, useTheme, useMediaQuery, Dialog, DialogTitle, Divider, DialogContent, DialogContentText, DialogActions,Avatar } from '@mui/material';
import img1 from "../../assets/hgf.jpg";
import img4 from "../../assets/review.jpg";
import img3 from "../../assets/c2.jpg";
import img9 from "../../assets/right.png";
import img34 from "../../assets/jkl.png";
import logo1 from '../../../Digital Card Assets/dchlogo.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import $ from 'jquery'; // Import jQuery
import RemoveIcon from "@mui/icons-material/Remove";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AddIcon from "@mui/icons-material/Add";
import google from "../../assets/google-logo.png";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import ReactPlayer from "react-player";
import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { postData, serverURL } from "../../../../Services/NodeServices";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import { SessionContext } from "../../../../Services/SessionContext";
import Swal from 'sweetalert2';
import OtpGenerator from '../../../Digital Card User Interface/ReviewTag/OtpGenerator';
// import './Enter.css'
const googleCardData = {
  firstHeading: 'Make it easy for your customers to review you on Google!',
  first: 'With the Google business cards “Icon” with google review QR Code in a reduced and attractive design, which fit into any company, you can easily win new Google reviews everywhere.',
  first1: 'In a handy business card format, the “Review us on Google” business cards are ideal for anyone who travels a lot for work – e.g. for craftsmen and salespeople.',
  secondHeading: 'This is how the google review business cards help you',
  second: 'The business cards remove your customers biggest hurdles in the Google review:',
  second1: 'No unpleasant questions & requests, just hand it over. The call-to-action does it for you Reviews wont be forgotten, because the customers will be reminded of the Google review.',
  second2: ' No searching and no difficulties: the QR code leads directly to your evaluation form Tangible: The business cards make the google review tangible.',
  second3: 'No extra app: the QR code can be scanned with the smartphone camera',
  thirdHeading: 'We will create and link the QR code for direct evaluation on your Google profile for you! We take this information from your company address.',
  ytLink: 'https://youtu.be/snwf2nrMyRI',

}
const googleStandeeData = {
  firstHeading: 'Getting Google reviews from customers has never been so easy!',
  first: 'With the contactless Google reviews NFC stands / displays, you can easily win new Google reviews directly on site. With its cool design, the Google rating table standee arouses the interest of customers and the call-to-action encourages your customers to rate you on Google.',
  first1: 'All your customers have to do is hold their smartphone close to the standee and a pop-up will open on their phone, which will lead directly to your review form! If the customer’s smartphone does not have an NFC function, there is an alternative QR code on the exhibitor, which can be scanned directly with the smartphone camera – in both cases no separate app is necessary!',
  secondHeading: 'This is how NFC exhibitors help you to get more Google ratings',
  second: 'The NFC displays take you and your customers the biggest hurdles in the Google rating:',
  second1: 'No awkward questions & Ask, just place on site. The Call-To-Action takes over the request for a Google rating for you Don’t forget, because the customers will be reminded of the Google rating.',
  second2: 'No searching and no hassles: The NFC link and the Google Review QR Code leads directly to your review form (we will create this for you)',
  second3: 'Touchable: The displays make the rating tangible.',
  thirdeHeading: 'We will create and link the NFC link and the QR code for direct evaluation on your Google profile for you!',
  ytLink: 'https://youtu.be/snwf2nrMyRI',

}
const instaStandeeData = {
  firstHeading: 'Converting customers to Instagram followers has never been easier!',
  first: 'With the contactless Instagram NFC stands / displays, you can easily win new Instagram followers directly on site. With its cool design, the Instagram NFC table standee arouses the interest of customers and the call-to-action encourages your customers to follow you on Instagram.',
  first1: 'All your customers have to do is hold their smartphone near the stand and a pop-up will open on their cell phone, which will lead directly to your Instagram profile!',
  secondHeading: 'This is how the NFC standees help you to get more followers',
  second: 'No awkward questions & Ask, just place on site. The Call-To-Action encourages your customers to follow you Don’t forget, because customers will be made aware of your Instagram profile',
  second1: 'Don’t forget, because customers will be made aware of your Instagram profile No searching and no difficulties: The NFC link and the Instagram QR code lead directly to your profile(we create this for you)',
  second2: 'Grabable: The displays make your Instagram profile tangible. No extra app required.',
  second3: 'Eye-catcher: modern design',
  thirdeHeading: 'We will create and link the NFC link and the QR code to your Instagram profile for you!',
  ytLink: 'https://youtu.be/wuahrbmjPb4',

}
const instaCardData = {
  firstHeading: 'Converting customers to Instagram followers has never been easier!',
  first: 'With the contactless Instagram NFC cards, you can easily win new Instagram followers directly on site. With their cool design, the Instagram NFC Cards arouse the interest of customers and the call-to-action encourages your customers to follow you on Instagram.',
  first1: 'All your customers have to do is hold their smartphone near the stand and a pop-up will open on their cell phone, which will lead directly to your Instagram profile!',
  secondHeading: 'This is how the NFC Cards help you to get more followers',
  second: 'No awkward questions & Ask, just place on site. The Call-To-Action encourages your customers to follow you Don’t forget, because customers will be made aware of your Instagram profile',
  second1: 'Don’t forget, because customers will be made aware of your Instagram profile No searching and no difficulties: The NFC link and the Instagram QR code lead directly to your profile(we create this for you)',
  second2: 'Accessible: The NFC cards make your Instagram profile tangible. No extra app required.',
  second3: 'Eye-catcher: modern design',
  thirdeHeading: 'We will create and link the NFC link and the QR code to your Instagram profile for you!',
  ytLink: 'https://youtu.be/wuahrbmjPb4',

}
const fbCardData = {
  firstHeading: '',
  first: 'Make it easy for your customers to follow you on Facebook with the “Clean” Facebook business cards in a reduced and up-to-date Facebook design that fits into any company.',
  first1: 'We will link the QR code to your Facebook profile for you!',
  secondHeading: '',
  second: 'Please add your logo using the upload function and enter your facebook username.',
  second1: '',
  second2: '',
  second3: '',
  thirdeHeading: '',
  ytLink: 'https://youtu.be/snwf2nrMyRI',

}

export default function Enter() {
  const { cart, setCart } = useContext(SessionContext);
  const Token = window.localStorage.getItem("Token");
    const User = window.localStorage.getItem("UserNumber")==null?window.localStorage.getItem("UserMail"): window.localStorage.getItem("UserNumber")
    const navigate=useNavigate();
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(1);

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [changeMessage, setChangeMessage] = useState("");
  const [newPassword,setNewPassword]=useState("")

  const [companyName, setCompanyName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescrition] = useState('');
  const [isMoving, setIsMoving] = useState(false);
  const [Icon, setIcon] = React.useState({ url: "", bytes: "" });

  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  
  const [isError, setIsError] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);
  const [otp, setOtp] = useState()
  const [verified, setVerified] = useState()

  const handleChange = (event) => {
      const inputValue = event.target.value;
      setPassword(inputValue);
      validatePassword(inputValue);
  };

  const validatePassword = (value) => {
      // Define the regular expressions to check for lowercase, uppercase, number, and special character.
      const lowercaseRegex = /[a-z]/;
      const uppercaseRegex = /[A-Z]/;
      const numberRegex = /[0-9]/;
      const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/;

      // Check if the password meets all the requirements.
      const isValid =
          value.length >= 8 &&
          lowercaseRegex.test(value) &&
          uppercaseRegex.test(value) &&
          numberRegex.test(value) &&
          specialCharacterRegex.test(value);

      setIsError(!isValid);
  };

  const handleOtp = (value) => {
      if (value.length == 4) {
          if (otp == value) {
              setVerified(true)
          } else {
              setVerified(false)
          }
      }
  }

  const handleCheck=async()=>{

    var formData = new FormData()

    formData.append('email',email)
 

    
    var result = await postData('customerLogin/chkUser', formData, true)
    
    if(result.status=="exist"){
       
        setOpen3(true)
        setMessage("")
    }else{
        setOpen3(false)
        setMessage("User Not Found")
    }
}


  const handleSignIn = async () => {

      if (isError == false && verified == true) {

          var formData = new FormData()
          formData.append('name', fullName)
          formData.append('email', emailId.toLowerCase())
          formData.append('phone', phoneNo)
          formData.append('password', password)


          var result = await postData('customerLogin/customerLogin', formData, true)
          console.log(result)
          if (result.status == 'true') {
            setOpen1(!open1)  
            Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Registered Succesfully',
                  showConfirmButton: false,
                  timer: 1500
              })
             setOpen(!open)
            
          }
          else if (result.status == 'exist') {
            setOpen1(!open1)
              Swal.fire({
                  title: 'You already have an Account.Do you want to make a new registration',
                  showDenyButton: true,

                  confirmButtonText: 'Log In',
                  denyButtonText: `Sign Up`,
                  denyButtonColor: `green`,
                  confirmButtonColor: "#001E3C"
              }).then((result) => {
                  if (result.isConfirmed) {
                     setOpen(true)
                     setOpen1(false)
                  } else if (result.isDenied) {
                      
                  }
              })
              //navigate('/digitalcardsignup')
          }
          else {
              Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Fail to Register',
                  showConfirmButton: false,
                  timer: 1500
              })

          }

      }
  }


  

   
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const { _id } = useParams()
  const fetchProduct = async () => {
    var formData = new FormData
    formData.append('_id', _id)
    const response = await postData('products/getProductById', formData, true)
    console.log(response.data.images)
    setData(response.data)
    setShow(true)
  }

  const handleSubmit=async()=>{
    var formData = new FormData()

    formData.append('email',emailId)
    formData.append('password',password)

    
    var result = await postData('customerLogin/chkLogin', formData, true)
    console.log(result)
   
    if (result.status) {
        
        window.localStorage.setItem("userId",result.data._id)
        window.localStorage.setItem("UserNumber",result.data.phone)
        window.localStorage.setItem("UserEmail",emailId.toLowerCase())
            // Swal.fire({
            //         position: 'center',
            //         icon: 'success',
            //         title:'Login Succesfully',
            //         showConfirmButton: false,
            //         timer: 1500
            // })
            Swal.fire({
                title: 'Successfully Logged In!',
                imageUrl:logo1,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                background:'#001e3c',
                timer:1500,
                width:500,
                padding:15,
                color:'#fff',
                showConfirmButton:false,
                
              })
           
            window.localStorage.setItem("Token",true)
            window.localStorage.removeItem('data')
            window.localStorage.setItem("data",JSON.stringify(result.data))
            handleClick(true)
           
        }
    else {
            Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Fail to Login',
                    showConfirmButton: false,
                    timer: 1500
            })

    }
  
}
const handleClose=()=>{
    setOpen(false)
    setOpen1(false)
}

const handleChangePassword=async()=>{
  var formData = new FormData()

  formData.append('email', email)
  formData.append('password', newPassword)


  var result = await postData('customerLogin/updatePassword', formData, true)
  console.log(result)
  if (result.status) {
      setChangeMessage("Password Changed Successfully")
  }
  else {
     setChangeMessage("Fail to Change")
  }
}

const handleClose2=()=>{
  setOpen2(false)
}



const ChangePasswordComponent = () => {
  return (
    <Dialog open={open2} onClose={handleClose2} >
      <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
        Change Password
      </DialogTitle>
      <DialogContent>
      <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           width:"100%",
           
            overflow:"hidden"
          }}
        >
          
          <Grid item xs={10} sx={{display:"flex",justifyContent:"center",mt:2}}>
              <TextField label="Your Registered Mail Id" value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth/>
          </Grid>
         
          <Grid item xs={12}>
          <Typography sx={{fontSize:20,textAlign:"center",color:"red"}}>{message}</Typography>
          </Grid>
          <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
              <Button variant='contained' onClick={()=>handleCheck()}>Verify</Button>
          </Grid>

          <Grid item xs={10} sx={{display:open3?"flex":"none",justifyContent:"center",mt:2}}>
              <TextField label="Enter New Password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} fullWidth/>
          </Grid>

          <Grid item xs={12} sx={{display:open3?"flex":"none",justifyContent:"center"}}>
              <Button variant='contained' onClick={()=>handleChangePassword()}>Change Password</Button>
          </Grid>
          <Grid item xs={12}>
          <Typography sx={{fontSize:20,textAlign:"center",color:"green"}}>{changeMessage}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose2} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};


  const handleIcon = (event) => {
    setIcon({
      url: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };
  useEffect(() => {
    
    fetchProduct()
  }, [])

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

const handleSignup=()=>{
  setOpen(!open)
  setOpen1(!open1)
}


const LoginComponent=()=>{
  return(
<Dialog open={open} onClose={handleClose} >
            <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
              Log In
            </DialogTitle>
            <DialogContent>
            <Grid container spacing={2} sx={{ p: "8% 5%" }}>
                                <Grid item xs={12}>
                                    <TextField label="Email" type='email' fullWidth value={emailId} onChange={(event)=>setEmailId(event.target.value)}  />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Password" type='password' fullWidth value={password} onChange={(event)=>setPassword(event.target.value)}  />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        onClick={handleSubmit}
                                        sx={{
                                            background: "#001E3C",
                                            color: "#ffffff",
                                            p: "2% 10%",
                                            fontSize: { xs: "0.8em", md: "1.1em", lg: "1.2em" },
                                            fontWeight: 600,
                                            "&:hover": {
                                                background: "#023569",
                                                color: "#ffffff",
                                            }
                                        }}
                                    >
                                        Log in
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: "1%" }}>
                                    <Typography sx={{ fontSize:"0.8em",color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center" }}>
                                        Don't Remember Password?
                                    </Typography>
                                    &nbsp;&nbsp;
                                    <Typography onClick={() => setOpen2(true)} sx={{fontSize:"0.8em", color: "#001E3C", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center", '&:hover': { color: "red" }, cursor: "pointer" }}>
                                        Forget Password
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: "1%" }}>
                                    <Typography sx={{ fontSize:"0.8em",color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center" }}>
                                        Don't have an account?
                                    </Typography>
                                    &nbsp;&nbsp;
                                    <Typography onClick={() => handleSignup()} sx={{fontSize:"0.8em", color: "#001E3C", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center", '&:hover': { color: "red" }, cursor: "pointer" }}>
                                        Sign up
                                    </Typography>
                                </Grid>
                            </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained">
                Close
              </Button>
            </DialogActions>
          </Dialog>
  )
}

const handleopenotpdailog = async () => {


  var otpval = OtpGenerator()
  setOtp(otpval)
  var formData = new FormData
  formData.append('mail', emailId.toLowerCase())
  formData.append('otp', otpval)
  let res = await postData('customerLogin/sendOtp', formData, true)

}

const SignUpComponent=()=>{
  return(
<Dialog open={open1} onClose={handleClose} >
            <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
              Sign Up
            </DialogTitle>
            <DialogContent>
            <Grid container spacing={2} sx={{ p: "8% 5%" }}>
                                <Grid item xs={12}>
                                    <TextField label="Full Name" fullWidth value={fullName} onChange={(event) => setFullName(event.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Phone Number" fullWidth value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField label="Email" fullWidth value={emailId} onChange={(event) => setEmailId(event.target.value)} />
                                </Grid>
                                <Grid item xs={3} sx={{ display: "flex" }}>
                                    <Button
                                        fullWidth
                                        onClick={handleopenotpdailog}
                                        sx={{
                                            background: "#001E3C",
                                            color: "#ffffff",
                                            p: "2% 10%",
                                            fontSize: { xs: "0.6em", md: "0.9em", lg: "0.9em" },
                                            fontWeight: 600,
                                            "&:hover": {
                                                background: "#023569",
                                                color: "#ffffff",
                                            }
                                        }}
                                    >
                                        Get Otp
                                    </Button></Grid>
                                <Grid item xs={12}>
                                    <TextField label="One Time Password(OTP)" fullWidth onChange={(event) => handleOtp(event.target.value)} inputProps={{ maxLength: 4 }} />

                                </Grid>
                                <Grid item xs={12}>
                                    OTP not received ? <a style={{ cursor: 'pointer' }} onClick={handleopenotpdailog}>Resend</a>
                                </Grid>
                                <Grid item xs={12}>
                                    {verified == true ? "Verified" : verified == false ? "Not Verified" : ""}
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        value={password}
                                        onChange={handleChange}
                                        error={isError}
                                        helperText={
                                            isError
                                                ? 'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
                                                : ''
                                        }
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        onClick={handleSignIn}
                                        sx={{
                                            background: "#001E3C",
                                            color: "#ffffff",
                                            p: "2% 10%",
                                            fontSize: { xs: "0.8em", md: "1.1em", lg: "1.2em" },
                                            fontWeight: 600,
                                            "&:hover": {
                                                background: "#023569",
                                                color: "#ffffff",
                                            }
                                        }}
                                    >
                                        Sign up
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: "1%" }}>
                                    <Typography sx={{ fontSize: "0.8em", color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center" }}>
                                        already have an account
                                    </Typography>
                                    &nbsp;&nbsp;
                                    <Typography onClick={() => handleSignup()} sx={{ fontSize: "0.8em", color: "#001E3C", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center", '&:hover': { color: "red" }, cursor: "pointer" }}>
                                        Log in Now
                                    </Typography>
                                </Grid>
                            </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained">
                Close
              </Button>
            </DialogActions>
          </Dialog>
  )
}



const handleClick = async (Token1) => {
  
    if (Token1) {
        var formdata = new FormData();
        formdata.append("mobile", User);
        formdata.append("productId", data._id);
        formdata.append("count", value);
        formdata.append("companyName", companyName);
        formdata.append("Logo", Icon.bytes);
        formdata.append("Link", link);
        formdata.append("Description", description);
        var response = await postData("cart/add", formdata, true);
        if (response.result == true) {
            window.location.reload();
            
            func();
        }
    } else {
       setOpen(true)
    }
};
useEffect(() => {
    func();
}, []);

  const handleRemove = () => {
    if (value != 1) {
      setValue(value - 1);
    }
  };
  const handleAdd = () => {
    setValue(value + 1);
  };

  return (
    <>

      {show && (<Grid container spacing={2} sx={{ height: "100%", overflow: "hidden" }}>
        <Grid item xs={12}><Header /></Grid>
        <Navbar />
        <Grid
          item
          xs={11.5}
          md={6}
          sx={{
            maxHeight: "800px",
          }}
        >
          <Slider asNavFor={nav2} arrows={false} ref={(slider1) => setNav1(slider1)}>
            {data.images.map((item) => (
              <Grid item xs={12} sx={{ ml: 15 }}>
                <img src={`${serverURL}/images/${item}`} width={"70%"} />
              </Grid>
            ))}
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {data.images.map((item) => (
              <Grid item xs={12}>
                <img src={`${serverURL}/images/${item}`} width={"100%"} />
              </Grid>
            ))}
          </Slider>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            maxHeight: "800px",
            overflowY: "scroll", // Always show a scrollbar, but make it the same color as the background to hide it
            scrollbarWidth: "none", // Hide the scrollbar in Firefox
            "&::-webkit-scrollbar": {
              width: "0", // Hide the scrollbar in WebKit (Chrome, Safari, and Opera)
            },
          }}
        >
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <img src={data.subCategoryName == "Google" ? google : data.subCategoryName == "Instagram" ? insta : data.subCategoryName == "Facebook" ? facebook : ''} style={{ width: 100 }} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", fontSize: 40 }}>
              {data.productName}
            </Grid>
            <Grid item xs={12} sx={{ color: "green", textAlign: "center", fontSize: 30 }}>
              ₹{data.offerprice}
            </Grid>
            <Grid item xs={12} sx={{ color: "red", textAlign: "center", textDecoration: 'line-through', fontSize: 25 }}>
              ₹{data.price}
            </Grid>
            <Grid item xs={12} sx={{ fontSize: 30, textAlign: "center" }}>
              Get more Google reviews with review NFC{" "}
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", fontSize: 30 }}>
              Cards
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 25, fontFamily: "poppins" }}>
                customize it
              </Typography>
              <Typography>
                Please configure the product to suit you. We offer you different
                options and variations for this. We create the QR code and NFC tag
                link for your Google review for you based on your business name
                and location. There is no need to add a custom link by yourself.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography sx={{ fontSize: 25 }}>Company*</Typography>
              <Typography>
                Please enter the name of your company on Google.
              </Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Grid>
            <Grid item xs={10} sm={6} md={6} sx={{ display: "flex", flexDirection: "column" }}>


              <Typography sx={{ fontSize: 30, color: "#000" }}>Logo*</Typography>

              <Grid sx={{ display: 'flex' }}>
                <Avatar
                  fullWidth
                  variant="rounded"
                  alt="Remy Sharp"
                  src={Icon.url}
                  sx={{ width: 80, height: 80, borderRadius: '60%' }}
                />

                <Grid item xs={6} sx={{ m: 3 }} >
                  <label htmlFor="icon-button-file1">
                    <input
                      style={{ display: "none" }}
                      accept="image/*"
                      id="icon-button-file1"
                      type="file"
                      onChange={handleIcon}
                    />
                    <Button
                      color="primary"
                      aria-label="upload picture"
                      variant='contained'
                      component="span"
                    >
                      Upload Logo
                    </Button>
                  </label>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Typography sx={{fontSize: 25 }}>Link*</Typography>
              <Typography>
                Please tell us Link to the increase of the reach
              </Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Link"
                variant="outlined"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Typography sx={{ fontSize: 25 }}>Description*</Typography>
              <Typography>
                Please tell us about your business more
              </Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescrition(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ textAlign: "center", fontSize: 25 }}>
                Final total
              </Typography>
              <Typography sx={{ textAlign: "center", color: "#e67e22" }}>
                ₹{value * data.offerprice}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", fontSize: 30, justifyContent: "center" }}
            >
              <Grid>
                <IconButton
                  sx={{
                    color: "#001E3C",
                    bgcolor: "white",
                    m: 1,
                    "&:hover": { bgcolor: "white" },
                  }}
                  onClick={() => handleRemove()}
                >
                  <RemoveIcon />
                </IconButton>
              </Grid>{" "}
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#000",
                }}
              >
                {value}
              </Grid>
              <Grid>
                <IconButton
                  sx={{
                    color: "#001E3C",
                    bgcolor: "white",
                    m: 1,
                    "&:hover": { bgcolor: "white" },
                  }}
                  onClick={() => handleAdd()}
                >
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button sx={{ bgcolor: "black", color: "white" }} onClick={()=>handleClick(Token)}>
                ADD To Cart
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ fontSize: 10, textAlign: "center" }}>
              Delivery Time: 4-6 Working days
            </Grid>
           

            <Grid item xs={12} sx={{ textAlign: "center", fontSize: 15 }}>
              Getting Google reviews from customers has never been easier!
              <br />
              With the Contactless Google Reviews NFC Cards, you can effortlessly
              gain new Google reviews <br /> directly on-site.
              <br />
              The eye-catching design of the Google Review NFC Cards sparks
              customers’ interest, and the
              <br /> Call-To-Action encourages them to review your business on
              Google.
              <br />
              All your customers need to do is hold their smartphone near the NFC
              Cards, and a pop-up will
              <br /> open on their phone, leading them directly to your review
              form!
              <br />
              If customers’ smartphones do not have NFC functionality, an
              alternative QR code is available on <br /> the back of the NFC
              Cards, which can be scanned directly using the smartphone camera –
              in <br /> both cases, no separate app is required!
              <br />
            </Grid>
            <Grid item xs={12} sx={{ fontSize: 10, textAlign: "center" }}>
              Delivery Time: 4-6 Working days
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: 32,
                  textAlign: "center",
                }}
              >
                How NFC Cards help you get more Google reviews
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ textAlign: "center", fontSize: 15 }}>
                The NFC Cards eliminate the biggest hurdles for both you and your
                customers when it comes to <br /> Google reviews: No more
                uncomfortable asking or pleading. The Call-To-Action takes care of
                requesting Google <br />
                reviews for you. No more forgetting, as customers are reminded to
                leave a Google review.
                <br />
                No searching or difficulty: The NFC link and the Google Review QR
                code directly lead to your
                <br /> review form (which we create for you)
                <br />
                Tangible: The NFC Cards make the review process more tangible.
                <br />
                No extra app required.
                <br />
                Eyecatcher: Modern design
                <br />
                We handle the creation and linking of the NFC link and QR code for
                direct reviews on your <br />
                Google profile!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: 32,
                  textAlign: "center",
                }}
              >
                How it works
              </Typography>
            </Grid>

            <Grid item xs={12} >
              <ReactPlayer url="https://youtu.be/snwf2nrMyRI?si=oaebKxPGf1BuO218" width={'100%'} />
            </Grid>
            <Grid item xs={4} sx={{ flexDirection: "row", mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <img src={img9} />
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ fontSize: 15 }}>
                    No subscription or
                    <br /> recurring fees
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4} sx={{ flexDirection: "row", mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <img src={img9} />
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ fontSize: 15 }}>
                    Individually made for
                    <br /> you{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4} sx={{ flexDirection: "row", mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <img src={img9} />
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ fontSize: 15 }}>
                    Secure - SSL protected
                    <br />
                    checkout
                  </Typography>
                </Grid>
              </Grid>
            </Grid>



            <Grid item xs={10} sx={{ backgroundColor: "lightblue", mt: 3 }}>
              <Typography sx={{ fontSize: 25 }}>Information</Typography>
              <Typography>
                The review QR code for your product is created by us, based on
                your business information (business name and location) that you
                can enter above. You dont need to link your profile or upload your
                own QR code. This service is integrated and without any monthly
                fees / subscription.
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <img src={img34} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", fontSize: 15 }}>
              <Typography>Pay as it suits you best.</Typography>
            </Grid>
            <Divider sx={{ width: '100%', color: 'black' }} />
            <Grid item xs={12} sx={{ fontSize: 15 }}>
              <Typography>United States (US) Dollar ($)-USD</Typography>
            </Grid>

            <Grid item xs={12} sx={{ fontSize: 13, textAlign: 'center' }}>
              <Typography >Sku:trunfc20231006</Typography>
              <Typography>Categories: Automotive, Beauty, Doctors & Medical industry, Gastronomy, Google, Google Review Business Cards, Google Review NFC Business Cards, Google Review NFC Cards, Hotel industry, NFC Cards, NFC products, Restaurant, Retail</Typography>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Typography>SHARE:</Typography>
              <FacebookIcon />
              <TwitterIcon />
              <PinterestIcon />
            </Grid>





          </Grid>
        </Grid>
        <Divider sx={{ width: '100%', color: 'black', mt: 5 }} />

        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
            
              <Typography>
               {data.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Additional Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>ABout Brand</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Discover the truzzer products to get more Google reviews!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Shipping & Production</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This product is custom made for you. The duration from dispatch to delivery to you is approx. 4 to 5 working days.

              </Typography>
            </AccordionDetails>
          </Accordion>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>Reviews</Typography>
              <Typography>There are no reviews yet.</Typography>

            </Grid>

            <Grid item xs={6}>
              <Typography>Show only reviews in English (0)</Typography>
              <Typography>BE THE FIRST TO REVIEW “GOOGLE REVIEW NFC CARD “TAP” WITH GOOGLE REVIEW QR CODE”</Typography>
              <Typography>Your email address will not be published. Required fields are marked *</Typography>
              <Typography>Your rating *12345</Typography>

              <Typography>Your Review</Typography>
              <Typography>Name*</Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />

              <Typography>Email*</Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />

              <Checkbox {...label} defaultChecked />
              <Typography>I have Read and accept the private policy</Typography>
              <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Checkbox {...label} defaultChecked />
                <Typography sx={{ mt: 1 }}>Save my name, email, and website in this browser for the next time I comment.</Typography>
              </Grid>
              <Typography>You have to be logged in to be able to add photos to your review.</Typography>
              <Button sx={{ bgcolor: "black", color: "white" }}>
                SUBMIT
              </Button>
            </Grid>






          </Grid>




          <Footer />


        </Grid>
   

      </Grid>)}
     {LoginComponent()}
     {SignUpComponent()}
     {ChangePasswordComponent()}
    </>
  );
}
