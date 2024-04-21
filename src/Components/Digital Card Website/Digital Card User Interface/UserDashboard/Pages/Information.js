import { Grid, Button, Typography, TextField, useTheme, useMediaQuery, CircularProgress, Box, DialogContentText, Container } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../UserComponents/Navbar'
import Footer from '../UserComponents/Footer'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { postData } from '../../../../Services/NodeServices'
import { serverURL } from '../../../../Services/NodeServices'
import InputAdornment from '@mui/material/InputAdornment';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Dropzone from 'react-dropzone';
import { confirmAlert } from 'react-confirm-alert'; // Import
import BeenhereIcon from '@mui/icons-material/Beenhere';
import AvatarEditor from 'react-avatar-editor'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2'
import { HelpOutline } from '@mui/icons-material'
import help from '../UserAssets/help.png'
import Preloader from '../../Components/Preloader'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const Information = () => {

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));
  const [crop, setCrop] = useState({}); // Stores the crop data
  const [image, setImage] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const navigate = useNavigate()
  // const cardId = window.localStorage.getItem("CardId")
  const userId = window.localStorage.getItem("userId")
  const [cardId, setCardId] = useState("");
    const date = new Date().toLocaleDateString();
  const [Icon, setIcon] = React.useState({ url: "", bytes: "" });
  const [companyCover, setCompanyCover] = React.useState({ url: "", bytes: "" });
  const [fullName, setFullName] = useState('')
  const [position, setPosition] = useState('')
  const [phone, setPhone] = useState()
  const [alternatePhone, setAlternatePhone] = useState()
  const [whatsappNo, setWhatsappNo] = useState()
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [education, setEducation] = useState('')
  const [hobby, setHobby] = useState('')
  const [fbLink, setFbLink] = useState('')
  const [twitterLink, setTwitterLink] = useState('')
  const [instaLink, setInstaLink] = useState('')
  const [linkedlnLink, setLinkedlnLink] = useState('')
  const [threadLink, setThreadLink] = useState('')
  const [skypeLink, setSkypeLink] = useState('')
  const [zomatoLink, setZomatoLink] = useState('')
  const [discordLink, setDiscordLink] = useState('')
  const [dribbleLink, setDribbleLink] = useState('')
  const [behanceLink, setBehanceLink] = useState('')
  const [playstoreLink, setPlayStoreLink] = useState('')
  const [appstoreLink, setAppStoreLink] = useState('')
  const [youtubeLink, setYoutubeLink] = useState('')
  const [pinterestLink, setPinterestLink] = useState('')
  const [location, setLocation] = useState('')
  const [companyEstDate, setCompanyEstDate] = useState('')
  const [about, setAbout] = useState('')
  const [paytmNumber, setPaytmNumber] = useState('')
  const [googlePayNumber, setGooglePayNumber] = useState('')
  const [phonePeNumber, setPhonePeNumber] = useState('')
  const [googleMapLink, setGoogleMapLink] = useState('');
  const [coverVideo, setCoverVideo] = useState({ url: "", bytes: "" })
  const [show, setShow] = useState(false)
  const [edited, setEdited] = useState(false)
  const [edited1, setEdited1] = useState(false)
  const [themeId, setThemeId] = useState('')
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')
  const [save, setSave] = useState()

  const [Editor, setEditor] = useState(null);
  const [Editor1, setEditor1] = useState(null);
  const [image1, setimage1] = useState(null);
  const [logo1, setLogo1] = useState(null);
  const [file, setfile] = useState(null);
  const [file1, setfile1] = useState(null);
  const [DBimage, setDBimage] = useState(null);
  const [img, setImg] = useState(null)
  const [name1, setName1] = useState()
  const [logo, setLogo] = useState(null)
  const [logoName, setLogoName] = useState()
  const [companyName, setCompanyName] = useState("");
  const [companyName1, setCompanyName1] = useState("");
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [loadingAnimation,setLoadingAnimation]=useState(false)
  const setEditorRef = (editor) => {
    setEditor(editor);
  };
  const setEditorRef1 = (editor) => {
    setEditor1(editor);
  };
  //convet FILE form URL
  const DataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };
  //canvert the data Buffer Array into image
  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  const submit = (e) => {
    e.preventDefault();
    if (Editor) {
      const url = Editor.getImageScaledToCanvas().toDataURL();
      setimage1(url);
      // alert(url)

      setfile(DataURLtoFile(url, name1));
      console.log('jhhbdeb', DataURLtoFile(url, name1));
    }
    setEdited(true)
    setShow(false)
    setOpen(false)
  };
  const submit1 = (e) => {
    e.preventDefault();
    if (Editor1) {
      const url1 = Editor1.getImageScaledToCanvas().toDataURL();
      setLogo1(url1);
      // alert(url1)

      setfile1(DataURLtoFile(url1, logoName));
      console.log('jhhbdeb', DataURLtoFile(url1, name1));
    }
    setEdited1(true)

    setOpen1(false)
  };
  const handleClose = () => {
    setOpen(false);
    setOpen1(false)
  };



  const DialogComponent = () => {
    return (
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{width:{xs:'100%'}}}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Crop Image
        </DialogTitle>
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
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {img && (<AvatarEditor
            ref={setEditorRef}
            image={img}
            width={400}
            height={200}
            border={50}
            color={[128, 128, 128]}
            borderRadius={0}
            scale={1.2}
            rotate={0}
          />)}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={submit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    )
  }
  const DialogComponent1 = () => {
    return (
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open1}
       
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Crop Image
        </DialogTitle>
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
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {logo && (<AvatarEditor
            ref={setEditorRef1}
            image={logo}
            width={120}
            height={120}
            border={50}
            color={[128, 128, 128]}
            borderRadius={50}
            scale={1.2}
            rotate={0}
          />)}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={submit1}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    )
  }

  const fetchCardDetail = async () => {
    setLoadingAnimation(true)
    var formData = new FormData()
    formData.append("customerId", userId)
    var result = await postData('carddetails/getcardDetails', formData, true)
    console.log(result.data)
    var result = await postData("carddetails/getcardDetails", formData, true);
        if (result.data != undefined) {
            setCompanyName(result.data.companyname);
            setCompanyName1(result.data.companyname);

            window.localStorage.setItem("CardId", result.data._id);
            setCardId(result.data._id);
    setFullName(result.data.fullname)
    setPosition(result.data.position)
    setPhone(result.data.phoneNumber)
    setAlternatePhone(result.data.AlternatePhoneNumber)
    setWhatsappNo(result.data.WhatsappNo)
    setAddress(result.data.Address)
    setEmail(result.data.Email)
    setFbLink(result.data.fbLink)
    setInstaLink(result.data.igLink)
    setLinkedlnLink(result.data.LinkdnLink)
    setPinterestLink(result.data.PinterestLink)
    setGoogleMapLink(result.data.GoogleMapLink)

    setTwitterLink(result.data.TwitterLink)
    setYoutubeLink(result.data.YoutubeLink)
    setPaytmNumber(result.data.paytmNumber)
    setPhonePeNumber(result.data.phonepenumber)
    setGooglePayNumber(result.data.Googlepaynumber)
    setEducation(result.data.education)
    setHobby(result.data.hobby)
    setThreadLink(result.data.threads)
    setSkypeLink(result.data.skype)
    setZomatoLink(result.data.zomato)
    setDiscordLink(result.data.discord)
    setDribbleLink(result.data.dribble)
    setBehanceLink(result.data.behance)
    setPlayStoreLink(result.data.playstore)
    setAppStoreLink(result.data.appstore)

    if (result.data.website != 'undefined') { setWebsite(result.data.website) }
    if (result.data.location != 'undefined') { setLocation(result.data.location) }
    setCompanyEstDate(result.data.CompanyEstDate)
    setAbout(result.data.AboutUs)
    setIcon({ url: `${serverURL}/images/${result.data.companylogo}`, bytes: " " });
    if (result.data.coverVideo != '') {
      setCoverVideo({ url: `${serverURL}/images/${result.data.coverVideo}`, bytes: " " });
      setShow(true)
    }
    // setimage1(${serverURL}/images/${result.data.companyCoverImage});
    //  console.log(result.data.companylogo.data.data)
    if (result.data.companyCoverImage != undefined) {
      setimage1(arrayBufferToBase64(result.data.companyCoverImage.data.data));
      setLogo1(arrayBufferToBase64(result.data.companylogo.data.data));
      setDBimage(arrayBufferToBase64(result.data.companyCoverImage.data.data));
    }
    setThemeId(result.data.themeid)
    //setType(result.data.companyCoverImage.slice(result.data.companyCoverImage.length-3))
    setGoogleMapLink(result.data.GoogleMapLink)
  }
  if(result===false || result?.data!=undefined){
    setLoadingAnimation(false)
  }
  

  }
  React.useEffect(() => {

    fetchCardDetail()
  }, [])


  const handleSubmit = async (verify) => {
  
    if(verify==true){
      var formData = new FormData();
    formData.append("companyname", companyName);
    formData.append("companyId", companyName.replace(/\s/g, '').toLowerCase());
    formData.append("customerId", userId);
    formData.append("paymentStatus", "Trial Period");
    formData.append("cardStatus", "Active");
    formData.append("createdDate", date);
    formData.append("cardViewCount", 0);

    var result = await postData("carddetails/addcardDetails", formData, true);

    if (result.status) {
        window.localStorage.setItem("CardId", result.data._id);
        
        setCardId(result.data._id)
        setSave(true)
    } else {
       setSave(false)
    }}else if(companyName==''){
      Swal.fire({
        title:'<b>Enter Your Unique Id First</b>',
        icon:"error"
      })
    }else{
      Swal.fire({
        title: '<b style={{color:"#fff"}}>You Are Changine the Unique Card Id!</b>',
        html:'<b>Bad News!</b><br/>Changing the unique id can make the old link deactive for the users and your NFC Card will also not work.',
        showDenyButton: true,
        icon:"warning",
       
        confirmButtonText: 'Save',
        denyButtonText:` Don't save`,
      }).then(async(result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          var formData = new FormData();
          formData.append("companyname", companyName);
          formData.append("companyId", companyName.replace(/\s/g, '').toLowerCase());
          formData.append("customerId", userId);
          formData.append("paymentStatus", "Trial Period");
          formData.append("cardStatus", "Active");
          formData.append("createdDate", date);
          formData.append("cardViewCount", 0);
      
          var result = await postData("carddetails/addcardDetails", formData, true);
          console.log(result);
          if (result.status) {
              window.localStorage.setItem("CardId", result.data._id);
              setSave(true)
          } else {
             setSave(false)
          }
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
};
const handleUpdate = async (verify) => {
 
    if(verify==true || companyName1==companyName){
      var formData = new FormData();
    formData.append("_id", cardId);
    formData.append("companyname", companyName.replace(/\s/g, '').toLowerCase());

    var result = await postData(
        "carddetails/updateCompanyName",
        formData,
        true
    );
    if (result.status) {
       
        setSave(true)
    } else {
       setSave(false)
    }}else if(companyName==''){
      Swal.fire({
        title:'<b>Enter Your Unique Id First</b>',
        icon:"error"
      })
    }
    else{
      Swal.fire({
        title: '<b style={{color:"#fff"}}>You Are Changine the Unique Card Id!</b>',
        html:'<b>Bad News!</b><br/>Changing the unique id can make the old link deactive for the users and your NFC Card will also not work.',
        showDenyButton: true,
        icon:"warning",
       
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then(async(result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          var formData = new FormData();
          formData.append("_id", cardId);
          formData.append("companyname", companyName.replace(/\s/g, '').toLowerCase());
      
          var result = await postData(
              "carddetails/updateCompanyName",
              formData,
              true
          );
          console.log(result);
          if (result.status) {
             
              setSave(true)
          } else {
             setSave(false)
          }
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
};

  const handleSubmit1 = async (cardId) => {
         
   if(!!cardId){
    try {
      // Set loading to true before making the request
      setLoadingAnimation(true)
    var formData = new FormData()
    formData.append('_id', cardId)
    formData.append('companylogo', file1)
    formData.append('coverVideo', coverVideo.bytes)
    // alert(file)
    formData.append('companyCover', file)
    formData.append('fullname', fullName)
    formData.append('position', position)
    formData.append('phoneNumber', phone)
    formData.append('AlternatePhoneNumber', alternatePhone)
    formData.append('whatsappNo', whatsappNo)
    formData.append('Address', address)
    formData.append('Email', email)
    formData.append('website', website)
    formData.append('location', location)
    formData.append('AboutUs', about)
    formData.append('fbLink', fbLink)
    formData.append('igLink', instaLink)
    formData.append('TwitterLink', twitterLink)
    formData.append('YoutubeLink', youtubeLink)
    formData.append('PinterestLink', pinterestLink)
    formData.append('LinkdnLink', linkedlnLink)
    formData.append('threads', threadLink)
    formData.append('education', education)
    formData.append('hobby', hobby)
    formData.append('skype', skypeLink)
    formData.append('zomato', zomatoLink)
    formData.append('discord', discordLink)
    formData.append('dribble', dribbleLink)
    formData.append('behance', behanceLink)
    formData.append('playstore', playstoreLink)
    formData.append('appstore', appstoreLink)
    formData.append('paytmNumber', paytmNumber)
    formData.append('Googlepaynumber', googlePayNumber)
    formData.append('phonepenumber', phonePeNumber)
    formData.append('GoogleMapLink', googleMapLink)

    var response = await postData("carddetails/updatepersonelinfo", formData, true);
   
    if (response.status) {
      setLoadingAnimation(false)
      navigate('/links')
       
    } else {

    }
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error("An error occurred:", error);
  } finally {
    // Set loading back to false after the request completes
    setLoadingAnimation(false);
  }
}else{
  Swal.fire({
    title:"First Verify Your Unique Card Id",
    icon:'error'
  })
}


  }

  const handleIcon = (event) => {
    setIcon({
      url: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
    setLogo(event.target.files[0]);
    setLogoName(event.target.files[0].name)
    setOpen1(true)
  };
  const handleCover = (event) => {
    if (event.target.files[0].type.slice(event.target.files[0].type.length - 3) == "mp4") {
      setCoverVideo({
        url: URL.createObjectURL(event.target.files[0]),
        bytes: event.target.files[0],
      });
      setShow(true)
    } else {
      setCompanyCover({
        url: URL.createObjectURL(event.target.files[0]),
        bytes: event.target.files[0],
      });
      setImg(event.target.files[0]);
      setName1(event.target.files[0].name)
      setOpen(true)
    }
    setType(event.target.files[0].type.slice(event.target.files[0].type.length - 3))



  };

  const handleClick=async()=>{
   
    var formData=new FormData
    formData.append('companyId',companyName.replace(/\s/g, '').toLowerCase())
    const response=await postData('generatedcompanylink/checkCompanyName',formData,true)
   
    if(response.status!=true)
    {
    
      (cardId == "" ? handleSubmit(false) : handleUpdate(false))
     
    }else{
      (cardId == "" ? handleSubmit(response.status) : handleUpdate(response.status))
    
   
    }

  }

  const LoaderComponent=()=>{
    return(
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    )
  }

  const handleClose1=()=>{
    setOpenDialog(false)
  }

   const Dialog1=()=>{
    return(
      <Dialog
      open={openDialog}
      onClose={handleClose1}
      fullWidth
      sx={{
        width: { xs: 400, sm: 490, md: 490 },
        marginLeft: { xs: "0%", sm: "20%", md: "35%" },
      }}
    >
      <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
        Your Unique Card Id
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "#001e3c", fontWeight: "bolder" }}>
         <img src={help} width={"100%"}/>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      
        <Button
          onClick={handleClose1}
          variant="contained"
          sx={{
            backgroundColor: "#001e3c",
            "&:hover": { backgroundColor: "#001e3c" },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
    )
   }
  return (
    <Grid>
      <Navbar />
      {loadingAnimation==true?
      <Container maxWidth="xl" sx={{height:"100vh",overflow:'hidden',width:"100vw"}}>
        <Grid container spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center",overflow:'hidden'}}>
          
          <Preloader/>
          </Grid></Container>:
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', paddingX: "20px" }}>
        <Grid item xs={4} sx={{ marginTop: "2vh", marginBottom: "2vh" }}>
          <Button sx={{
            borderRadius: 10,
            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignItems: "center",
          }} onClick={() => navigate('/userDashboard')} variant='contained'><NavigateBeforeIcon />Back</Button>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
          <Button sx={{
            borderRadius: 10,
            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignItems: "center",
          }} onClick={() =>handleSubmit1(cardId) } variant='contained'>Save<BeenhereIcon /></Button>
          {loading && <LoaderComponent />}
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "2vh", marginBottom: "2vh" }}>
          <Button sx={{
            borderRadius: 10,
            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignItems: "center",
          }} onClick={() =>  navigate('/links')} variant='contained'>Skip<NavigateNextIcon /></Button>
        </Grid>
        <Grid container spacing={2} sx={{ width: mobile ? "90%" : '50%' }}>
          <Grid item xs={12}>
            <Typography textAlign='center' sx={{ fontSize: { xs: "1.4rem", md: 28 } }}>Company Details</Typography>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
            {show == true ? <video
            key={coverVideo.url}
              autoPlay
              loop
              muted
              style={{
                objectFit: 'fill',
                width:380,
                height: 250,
                marginLeft: -10,
                backgroundColor:"black"

              }}
            >
              <source src={coverVideo.url} type="video/mp4" />

            </video> : edited == true ? <Avatar
              fullWidth
              variant="rounded"
              alt="Remy Sharp"
              src={image1}
              sx={{ width: 400, height: 200 }}
            /> : <Avatar
              fullWidth
              variant="rounded"
              alt="Remy Sharp"
              src={'data:image/jpeg;base64,' + image1}
              sx={{ width: 400, height: 200 }}
            />}

          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
            <label htmlFor="icon-button-file">
              <input
                style={{ display: "none" }}
                accept="image/, video/"
                id="icon-button-file"
                type="file"
                onChange={handleCover}
              />
              <Button
                color="primary"
                aria-label="upload picture"
                variant='contained'
                component="span"
              >
                Upload Cover
              </Button>
            </label>
          </Grid>


          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
            {edited1 == true ? <Avatar
              fullWidth
              variant="rounded"
              alt="Remy Sharp"
              src={logo1}
              sx={{ width: 120, height: 120, borderRadius: '60%' }}
            /> : <Avatar
              fullWidth
              variant="rounded"
              alt="Remy Sharp"
              src={'data:image/jpeg;base64,' + logo1}
              sx={{ width: 120, height: 120, borderRadius: '60%' }}
            />}
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
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
          <Grid item xs={12}>
            <Typography textAlign='center' sx={{ fontSize: { xs: 14, md: 28 } }}>Personel Details</Typography>
          </Grid>





              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Full Name' />
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={position} onChange={(e) => setPosition(e.target.value)} sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Position/Designation' />
              </Grid>
             
              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8,flexDirection:"column",alignItems:"center" }}>
              <TextField
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <Button variant='contained' onClick={()=>handleClick()}>
                                  Save
                                </Button>
                                <IconButton variant='contained' onClick={()=>setOpenDialog(true)} sx={{color:"black"}}>
                                  <HelpOutline/>
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }}
                            label="Your Unique Card Id"
                            required
                           
                        />
                        <Typography>{save==true?"Saved Successfully":save==false?"Not Saved":''}</Typography>  </Grid>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={phone} type='number' InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallIcon />
                    </InputAdornment>
                  ),
                }} onChange={(e) => setPhone(e.target.value)} sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Phone Number' />
              </Grid>
              
              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={whatsappNo} type='number' InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WhatsAppIcon />
                    </InputAdornment>
                  ),
                }} onChange={(e) => setWhatsappNo(e.target.value)} sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Whatsapp Number' />
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={address} onChange={(e) => setAddress(e.target.value)} sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Address' />
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={email} type='email' onChange={(e) => setEmail(e.target.value)} sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Email Id' />
              </Grid>



              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={about} onChange={(e) => setAbout(e.target.value)} rows={5} multiline sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='About Us' />
              </Grid>
           

          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              paddingInline: "30px",
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained'onClick={() =>handleSubmit1(cardId)}>Next</Button>
          </Grid>
        </Grid>
      </Grid>}
      <Footer />
      {DialogComponent()}
      {DialogComponent1()}
      {Dialog1()}
    </Grid>
  )
}

export default Information