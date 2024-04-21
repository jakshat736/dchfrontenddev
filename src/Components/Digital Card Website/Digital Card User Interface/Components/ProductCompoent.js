import { Avatar, Box, Grid, IconButton, Paper, Typography, Button, TextField, DialogActions, DialogContent, DialogTitle, Dialog, useMediaQuery, useTheme, Stack } from '@mui/material'
import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Navbar from './Navbar'

import bg from "../../Digital Card Assets/footer.png";
import Footer from "./Footer";
import { Add, FiberManualRecord, Remove } from '@mui/icons-material';
import { useState } from 'react';
import img1 from '../../Digital Card Assets/icons/1.png'
import img2 from '../../Digital Card Assets/icons/2.png'
import img3 from '../../Digital Card Assets/icons/3.png'
import img4 from '../../Digital Card Assets/icons/4.png'
import img5 from '../../Digital Card Assets/icons/5.png'
import img6 from '../../Digital Card Assets/icons/6.png'
import img7 from '../../Digital Card Assets/icons/7.png'
import img8 from '../../Digital Card Assets/icons/8.png'
import img9 from '../../Digital Card Assets/icons/9.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { postData, serverURL } from '../../../Services/NodeServices';
import Slider from 'react-slick';
import Swal from 'sweetalert2';
import { SessionContext } from '../../../Services/SessionContext';
import OtpGenerator from '../ReviewTag/OtpGenerator';
import logo1 from '../../Digital Card Assets/dchlogo.png'
import { makeStyles } from '@mui/styles';
import Varieties from './Varieties';
import Preloader from './Preloader';



const ProductCompoent = () => {
  const theme = useTheme()
  const { cart, setCart } = useContext(SessionContext);
  const Token = window.localStorage.getItem("Token");
  const User = window.localStorage.getItem("UserNumber")
  const matches = useMediaQuery(theme.breakpoints.down("sm"))


  const navigate = useNavigate()
  const [value, setValue] = useState(1)
  const [data, setData] = useState([])
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [size, setSize] = useState("70mm")
  const [Icon, setIcon] = React.useState({ url: "", bytes: "" });
  const [show, setShow] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescrition] = useState('');

  const [expanded, setExpanded] = React.useState('panel1');



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
  const [newPassword, setNewPassword] = useState("")

  const [isMoving, setIsMoving] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [isError, setIsError] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [otp, setOtp] = useState()
  const [verified, setVerified] = useState()
  const [loading, setLoading] = useState(true)
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


  const handleCheck = async () => {

    var formData = new FormData()

    formData.append('email', email)



    var result = await postData('customerLogin/chkUser', formData, true)

    if (result?.status == "exist") {

      setOpen3(true)
      setMessage("")
    } else {
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
      if (result?.status == 'true') {
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
      else if (result?.status == 'exist') {
        setOpen1(!open1)
        Swal.fire({
          title: 'You already have an Account.Do you want to make a new registration',
          showDenyButton: true,

          confirmButtonText: 'Log In',
          denyButtonText: `Sign Up`,
          denyButtonColor: `green`,
          confirmButtonColor: "#001E3C"
        }).then((result) => {
          if (result?.isConfirmed) {
            setOpen(true)
            setOpen1(false)
          } else if (result?.isDenied) {

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
    setLoading(true)
    var formData = new FormData
    formData.append('_id', _id)
    const response = await postData('products/getProductById', formData, true)
    console.log(response.data?.images)
    setData(response.data)
    if (response?.data != undefined) {
      setLoading(false)
      setShow(true)
    }

  }

  const handleSubmit = async () => {
    var formData = new FormData()

    formData.append('phone', phoneNo)
    // formData.append('password', password)


    var result = await postData('customerLogin/chkLogin', formData, true)


    if (result.status) {

      window.localStorage.setItem("userId", result?.data?._id)
      window.localStorage.setItem("UserNumber", result?.data?.phone)
      // Swal.fire({
      //         position: 'center',
      //         icon: 'success',
      //         title:'Login Succesfully',
      //         showConfirmButton: false,
      //         timer: 1500
      // })
      Swal.fire({
        title: 'Successfully Logged In!',
        imageUrl: logo1,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: '#001e3c',
        timer: 1500,
        width: 500,
        padding: 15,
        color: '#fff',
        showConfirmButton: false,

      })

      window.localStorage.setItem("Token", true)
      window.localStorage.setItem("User", true)
      window.localStorage.removeItem('data')
      window.localStorage.setItem("data", JSON.stringify(result?.data))
      handleClick(true, result?.data?.phone)

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
  const handleClose = () => {
    setOpen(false)
    setOpen1(false)
  }

  const handleChangePassword = async () => {
    var formData = new FormData()

    formData.append('email', email)
    formData.append('password', newPassword)


    var result = await postData('customerLogin/updatePassword', formData, true)
    console.log(result)
    if (result?.status) {
      setChangeMessage("Password Changed Successfully")
    }
    else {
      setChangeMessage("Fail to Change")
    }
  }

  const handleClose2 = () => {
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
              width: "100%",

              overflow: "hidden"
            }}
          >

            <Grid item xs={10} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <TextField label="Your Registered Mail Id" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{ fontSize: 20, textAlign: "center", color: "red" }}>{message}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant='contained' onClick={() => handleCheck()}>Verify</Button>
            </Grid>

            <Grid item xs={10} sx={{ display: open3 ? "flex" : "none", justifyContent: "center", mt: 2 }}>
              <TextField label="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} fullWidth />
            </Grid>

            <Grid item xs={12} sx={{ display: open3 ? "flex" : "none", justifyContent: "center" }}>
              <Button variant='contained' onClick={() => handleChangePassword()}>Change Password</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 20, textAlign: "center", color: "green" }}>{changeMessage}</Typography>
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

  const func = async () => {
    var formdata = new FormData();
    formdata.append("mobile", User);
    var response = await postData("cart/getAllProducts", formdata, true);
    if (response) {
      console.log(response.products.length)
      setCart(response.products.length);
    } else {

    }
  };

  const handleSignup = () => {
    setOpen(!open)
    setOpen1(!open1)
  }


  const LoginComponent = () => {
    return (
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Log In / SignUp
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ p: "8% 5%" }}>
            <Grid item xs={9}>
              <TextField label="Whatsapp Number" type='tel' fullWidth value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
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
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField label="One Time Password(OTP)" fullWidth onChange={(event) => handleOtp(event.target.value)} inputProps={{ maxLength: 4 }} />

            </Grid>
            <Grid item xs={12}>
              OTP not received ? <a style={{ cursor: 'pointer' }} onClick={handleopenotpdailog}>Resend</a>
            </Grid>
            <Grid item xs={12}>
              {verified == true ? "Verified" : verified == false ? "Not Verified" : ""}
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

  const handleOtp = (value) => {
    if (value.length == 4) {
        if (otp == value) {
            // setMessage("")
            setVerified(true)
            handleSubmit()
        } else {
            setVerified(false)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Wrong Otp',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const handleopenotpdailog = async () => {

    if (phoneNo != '') {
        var otpval = OtpGenerator()

        setOtp(otpval)

        const apiUrl = `https://soft7.in/api/send?number=91${phoneNo}&type=text&message=Your Otp For Digital Card Hub - ${otpval}&instance_id=65B92B5C6DD7D&access_token=65b928bbcea41`;
        const response = await postData('otp/api', { url: apiUrl })
        // https://soft7.in/api/send?number=917225051627&type=text&message=test+message&instance_id=65B92B5C6DD7D&access_token=65b928bbcea41
    } else {
        Swal.fire({
            text: "Enter the Number First",
            timer: 1000
        })
    }

    
}

  const SignUpComponent = () => {
    return (
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



  const handleClick = async (Token1,phone) => {

    if (Token1) {
      var formdata = new FormData();
      formdata.append("mobile", User || phone);
      formdata.append("productId", data?._id);
      formdata.append("productName", data?.productName);
      formdata.append("count", value);
      formdata.append("companyName", companyName);
      formdata.append("Logo", Icon.bytes);
      formdata.append("Link", link);
      formdata.append("Description", description);
      var response = await postData("cart/add", formdata, true);
      if (response.result == true) {

        navigate('/cart')
        func();
      }
    } else {
      setOpen(true)
    }
  };
  useEffect(() => {
    func();
  }, []);


  useEffect(() => {
    fetchProduct()
  }, [_id])


  const handleRemove = () => {
    if (value != 1) {
      setValue(value - 1)
    }
  }
  const handleAdd = () => {

    setValue(value + 1)

  }

  const descriptionStyle = {
    fontSize: 18,
    color: "#fff",
    textAlign: 'justify',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '100%', // Set the maximum width as needed
  };

  const sliceTo200Characters = (text) => {
    if (text.length <= 200) {
      return text;
    } else {
      return text.slice(0, 200) + "...";
    }
  }


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [_id])

  return (
    <Grid id='top' sx={{ bgcolor: "#001E3C" }}>

      <Navbar />
      {loading ?
        <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center', py: 100, bgcolor: "white" }} >
          <Preloader />
        </Grid>
        :
        (show && <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center' }} >
          <Grid item xs={12} sx={{ mt: 15, display: { xs: 'block', md: 'none' } }}>
            <Typography sx={{ fontSize: 25, color: "#fff", textAlign: 'center' }}>{data?.productName}</Typography>

          </Grid>
          <Grid item xs={10} md={5} sx={{ mt: { xs: 0, md: 15 } }}>
            <Slider asNavFor={nav2} arrows={false} ref={(slider1) => setNav1(slider1)}>
              {data?.images.map((item) => (
                <Grid item xs={12} sx={{ ml: { xs: 9, sm: 15, md: 15 } }}>
                  <img src={`${serverURL}/images/${item}`} width={"50%"} />
                </Grid>
              ))}
            </Slider>
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={data?.images.length == 2 ? 2 : data?.images.length > 2 ? 3 : 1}
              swipeToSlide={true}
              focusOnSelect={true}

            >
              {data?.images.map((item) => (
                <Grid item xs={12} >
                  <img src={`${serverURL}/images/${item}`} width={"80%"} />
                </Grid>
              ))}
            </Slider>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: { xs: 0, md: 15 } }}>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Typography sx={{ fontSize: 30, color: "#fff" }}>{data?.productName}</Typography>

              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: 30, color: "#fff", textAlign: { xs: "center", md: "left" } }}>Price</Typography>
                <Typography sx={{ fontSize: 25, color: "#fff", textAlign: { xs: "center", md: "left" } }}>Rs {data?.offerprice}/-</Typography>
                <Typography sx={{ fontSize: 25, color: "#fff", textDecoration: 'line-through', textAlign: { xs: "center", md: "left" } }}>Rs {data?.price}/-</Typography>

              </Grid>


              <Grid item xs={12} sx={{ display: "flex", fontSize: 30, justifyContent: "center", mb: -3 }}>
                <Typography sx={{ fontSize: 30, color: "#fff", textAlign: "center" }}>Customize Here</Typography>
              </Grid>




              <Grid item xs={10} sm={6} md={6} sx={{ display: data?.uploadName == true ? 'block' : 'none' }}>
                <Typography sx={{ fontSize: 25, color: "white" }}>Company*</Typography>
                <Typography sx={{ color: "white" }}>
                  Please enter the name of your company on Google.
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  sx={{
                    marginTop: 1, marginBottom: 1, bgcolor: "white",
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#fff', // Outline color when hovering
                      },

                      '&.Mui-focused fieldset': {
                        borderColor: '#fff', // Outline color when focused

                      },
                    },

                    "& label": {
                      paddingLeft: (theme) => theme.spacing(2), color: '#000',
                      '&.Mui-focused': {
                        color: '#000' // Change label color when focused
                      },
                    },
                    "& input": { paddingLeft: (theme) => theme.spacing(3.5), color: '#000' },

                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: "20px",
                      borderColor: "white",

                    },
                  }}
                  InputProps={{
                    style: {
                      borderColor: 'white',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={10} sm={6} md={6} sx={{ display: data?.uploadLogo == true ? 'flex' : 'none', flexDirection: "column" }}>


                <Typography sx={{ fontSize: 30, color: "#fff" }}>Logo*</Typography>

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

              <Grid item xs={10} sm={6} md={6} sx={{ display: data?.uploadLink == true ? 'block' : 'none' }}>
                <Typography sx={{ fontSize: 25, color: "#fff" }}>Link*</Typography>
                <Typography color={'#fff'}>
                  Please tell us Link to the increase of the reach
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Link"
                  variant="outlined"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  sx={{
                    marginTop: 1, marginBottom: 1, bgcolor: "white",
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#fff', // Outline color when hovering
                      },

                      '&.Mui-focused fieldset': {
                        borderColor: '#fff', // Outline color when focused

                      },
                    },

                    "& label": {
                      paddingLeft: (theme) => theme.spacing(2), color: '#000',
                      '&.Mui-focused': {
                        color: '#000' // Change label color when focused
                      },
                    },
                    "& input": { paddingLeft: (theme) => theme.spacing(3.5), color: '#000' },

                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: "20px",
                      borderColor: "white",

                    },
                  }}

                />
              </Grid>

              <Grid item xs={11} sm={6} md={6} sx={{ display: data?.uploadDescription == true ? 'block' : 'none' }}>
                <Typography sx={{ fontSize: 25, color: "#fff" }}>Description*</Typography>
                <Typography color={'#fff'}>
                  Please tell us about your business more
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescrition(e.target.value)}
                  sx={{
                    marginTop: 1, marginBottom: 1, bgcolor: "white",
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#fff', // Outline color when hovering
                      },

                      '&.Mui-focused fieldset': {
                        borderColor: '#fff', // Outline color when focused

                      },
                    },

                    "& label": {
                      paddingLeft: (theme) => theme.spacing(2), color: '#000',
                      '&.Mui-focused': {
                        color: '#000' // Change label color when focused
                      },
                    },
                    "& input": { paddingLeft: (theme) => theme.spacing(3.5), color: '#000' },

                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: "20px",
                      borderColor: "white",

                    },
                  }}

                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", fontSize: 30, justifyContent: "center" }}>
                <Grid><IconButton sx={{ color: '#001E3C', bgcolor: "white", m: 1, "&:hover": { bgcolor: "white" } }} onClick={() => handleRemove()}><Remove /></IconButton></Grid> <Grid sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', color: '#fff' }}>{value}</Grid><Grid><IconButton sx={{ color: '#001E3C', bgcolor: "white", m: 1, "&:hover": { bgcolor: "white" } }} onClick={() => handleAdd()}><Add /></IconButton></Grid>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
                <Button variant='outlined' sx={{ fontSize: 20, borderColor: '#fff', color: '#fff', boxShadow: 20, "&:hover": { bgcolor: '#fff', color: '#001E3C' } }} onClick={() => handleClick(Token)}>Add Cart</Button>

              </Grid>



            </Grid>
          </Grid>


          {data?.customizable && <Grid item xs={10} sm={6} md={3}>
            <Paper sx={{ textAlign: "center", height: "100%", py: 4, px: 4 }}>
              <Typography variant="h6">2 Cards to 4 Cards</Typography>
              <Typography variant="body1">Only ₹499</Typography>
            </Paper>
          </Grid>}
          {data?.customizable && <Grid item xs={10} sm={6} md={3}>
            <Paper sx={{ textAlign: "center", height: "100%", py: 4, px: 4 }}>
              <Typography variant="h6">5 Cards to 9 Cards</Typography>
              <Typography variant="body1">Only ₹449</Typography>
            </Paper>
          </Grid>}
          {data?.customizable && <Grid item xs={10} sm={6} md={3}>
            <Paper sx={{ textAlign: "center", height: "100%", py: 4, px: 4 }}>
              <Typography variant="h6">10 Cards or above</Typography>
              <Typography variant="body1">Only ₹333</Typography>
            </Paper>
          </Grid>}

          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: 30, color: "#fff", textAlign: 'center' }}>Features</Typography>
              </Grid>
              <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                <Grid><img src={img1} width={matches ? 20 : 30} /></Grid><Typography sx={{ fontSize: { xs: 15, sm: 17.5 }, color: "#fff", ml: 1 }}>Boost the number of reviews instantly</Typography>
              </Grid>
              <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                <Grid><img src={img2} width={matches ? 20 : 30} /></Grid><Typography sx={{ fontSize: { xs: 14, sm: 17.5 }, color: "#fff", ml: 1 }}>Real-time access to Analytics with TAPS feature</Typography>
              </Grid>
              <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                <Grid><img src={img4} width={matches ? 20 : 30} /></Grid><Typography sx={{ fontSize: { xs: 14, sm: 17.5 }, color: "#fff", ml: 1 }}>One-time payment, no recurring fees</Typography>
              </Grid>
              <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                <Grid><img src={img5} width={matches ? 20 : 30} /></Grid><Typography sx={{ fontSize: { xs: 14, sm: 17.5 }, color: "#fff", ml: 1 }}>Utilizes NFC & QR code technology for iOS & Android</Typography>
              </Grid>
              <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                <Grid><img src={img8} width={matches ? 20 : 30} /></Grid><Typography sx={{ fontSize: { xs: 14, sm: 17.5 }, color: "#fff", ml: 1 }}>Enjoy free tracked shipping worldwide</Typography>
              </Grid>
              <Grid item xs={10} md={3.5} sx={{ display: "flex" }}>
                <Grid><img src={img6} width={matches ? 20 : 30} /></Grid><Typography sx={{ fontSize: { xs: 14, sm: 17.5 }, color: "#fff", ml: 1 }}>
                  iOS & Android | No App needed</Typography>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={8} sx={{ mb: 5 }}>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: 30, color: "#fff", textAlign: 'center' }}>Description</Typography>
              </Grid>
              <Grid item xs={12}>
                {(!matches || showDescription) ?
                  <Typography sx={{ fontSize: 18, color: "#fff", textAlign: "justify" }}>{data?.description}</Typography>
                  :

                  <Typography sx={{ fontSize: 18, color: "#fff", textAlign: 'justify' }}>{sliceTo200Characters(data?.description)}</Typography>

                }

                <Stack alignItems='center'>
                  {matches && <Button variant='contained' onClick={() => setShowDescription(!showDescription)}>{showDescription ? "Show Less" : "Show More"}</Button>}
                </Stack>

              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <FiberManualRecord sx={{ color: 'white', width: { xs: 14, sm: 18 } }} /><Typography sx={{ fontSize: 16, color: "#fff" }}>{data?.description1}</Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <FiberManualRecord sx={{ color: 'white', width: { xs: 14, sm: 18 } }} /><Typography sx={{ fontSize: 16, color: "#fff" }}>{data?.description2}</Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <FiberManualRecord sx={{ color: 'white', width: { xs: 14, sm: 18 } }} /><Typography sx={{ fontSize: 16, color: "#fff" }}>{data?.description3}</Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <FiberManualRecord sx={{ color: 'white', width: { xs: 14, sm: 18 } }} /><Typography sx={{ fontSize: 16, color: "#fff" }}>{" "}&nbsp;{data?.description4}</Typography>
              </Grid>
            </Grid>

          </Grid>

          <Varieties />

        </Grid>)}
      <Box sx={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover" }}>
        <Footer />
      </Box>
      {LoginComponent()}
      {SignUpComponent()}
      {ChangePasswordComponent()}
    </Grid>

  )
}

export default ProductCompoent
