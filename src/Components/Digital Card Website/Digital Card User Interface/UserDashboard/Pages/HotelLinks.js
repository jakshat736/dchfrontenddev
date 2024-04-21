import React from 'react'
import Navbar from '../UserComponents/Navbar'
import Footer from '../UserComponents/Footer'
import { Grid, Button, Typography, TextField, useTheme, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postData } from '../../../../Services/NodeServices'
import BeenhereIcon from '@mui/icons-material/Beenhere';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const HotelLinks = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const navigate = useNavigate()
    const cardId = window.localStorage.getItem("CardId")
    const userId = window.localStorage.getItem("userId")

    const [hotelLink1, setHotelLink1] = useState('')
    const [hotelName1, setHotelName1] = useState('')
    const [hotelLink2, setHotelLink2] = useState('')
    const [hotelName2, setHotelName2] = useState('')
    const [link2, setLink2] = useState('none')
    const [hotelLink3, setHotelLink3] = useState('')
    const [hotelName3, setHotelName3] = useState('')
    const [link3, setLink3] = useState('none')
    const [hotelLink4, setHotelLink4] = useState('')
    const [hotelName4, setHotelName4] = useState('')
    const [link4, setLink4] = useState('none')
    const [count,setCount]=useState(1);
 

    const fetchCardDetail = async () => {
        var formData = new FormData()
        formData.append("customerId", userId)
        var result = await postData('carddetails/getcardDetails', formData, true)
        console.log(result.data)
        setHotelLink1(result.data.hotelLink1)
        setHotelName1(result.data.hotelName1)
        if(result.data.hotelLink2!='' && result.data.hotelName2!=''){
            setLink2('flex')
            setCount(count+1)
        }
        if(result.data.hotelLink3!='' && result.data.hotelName3!=''){
            setLink3('flex')
            setCount(count+1)
        }
        if(result.data.hotelLink4!='' && result.data.hotelName4!=''){
            setLink4('flex')
            setCount(count+1)
        }
       
        setHotelLink2(result.data.hotelLink2)
        setHotelName2(result.data.hotelName2)
        setHotelLink3(result.data.hotelLink3)
        setHotelName3(result.data.hotelName3)
        setHotelLink4(result.data.hotelLink4)
        setHotelName4(result.data.hotelName4)
    }
    React.useEffect(() => {

        fetchCardDetail()
    }, [])

    const handleSubmit = async () => {
        var formData = new FormData()
        formData.append('_id', cardId)
        formData.append('hotelName1', hotelName1)
        formData.append('hotelName2', hotelName2)
        formData.append('hotelName3', hotelName3)
        formData.append('hotelName4', hotelName4)
        formData.append('hotelLink1', hotelLink1)
        formData.append('hotelLink2', hotelLink2)
        formData.append('hotelLink3', hotelLink3)
        formData.append('hotelLink4', hotelLink4)
       
        
        var response = await postData("carddetails/updatehotels", formData, true);
        if (response.status) {
            navigate('/links')
        } else {

        }
    }

    const handleAdd=(n)=>{
       
        if(n==1){
            setLink2('flex')
            setCount(n+1)
        }
        if(n==2){
            setLink3('flex')
            setCount(n+1)
        }
        if(n==3){
            setLink4('flex')
            setCount(n+1)
        }
        

    }
    return (
        <Grid>
            <Navbar />
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', paddingInline: "20px" }}>
                <Grid item xs={4} sx={{ marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => navigate('/information')} variant='contained'><NavigateBeforeIcon />Back</Button>
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
                    }} onClick={() => handleSubmit()} variant='contained'>Save<BeenhereIcon /></Button>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => navigate('/links')} variant='contained'>Skip<NavigateNextIcon /></Button>
                </Grid>
                <Grid container spacing={2} sx={{ width: mobile ? "100%" : tablet ? "100%" : '70%', display: mobile ? "flex" : tablet ? "" : "", justifyContent: mobile ? "center" : tablet ? "" : "", alignItems: mobile ? "center" : tablet ? "" : "", flexDirection: mobile ? "column" : tablet ? "" : "" }}>
                    

                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Hotel Links</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8,flexDirection:'column',alignItems:"center" }}>
                        <TextField value={hotelName1} onChange={(e) => setHotelName1(e.target.value)} sx={{ width: { xs: '100%', md: '60%' },m:1 }} label='Hotel Name(Optional)' />
                        <TextField value={hotelLink1} onChange={(e) => setHotelLink1(e.target.value)} sx={{ width: { xs: '100%', md: '60%' },m:1 }} label='Hotel Link(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: link2, justifyContent: "center", marginBottom: 8,flexDirection:"column",alignItems:"center" }}>
                    <TextField value={hotelName2} onChange={(e) => setHotelName2(e.target.value)} sx={{ width: { xs: '100%', md: '60%' },m:1 }} label='Hotel Name(Optional)' />
                        <TextField value={hotelLink2} onChange={(e) => setHotelLink2(e.target.value)} sx={{ width: { xs: '100%', md: '60%' },m:1 }} label='Hotel Link(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: link3, justifyContent: "center", marginBottom: 8,flexDirection:"column",alignItems:"center" }}>
                    <TextField value={hotelName3} onChange={(e) => setHotelName3(e.target.value)} sx={{ width: { xs: '100%', md: '60%' },m:1 }} label='Hotel Name(Optional)' />
                        <TextField value={hotelLink3} onChange={(e) => setHotelLink3(e.target.value)} sx={{ width: { xs: '100%', md: '60%' },m:1 }} label='Hotel Link(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: link4, justifyContent: "center", marginBottom: 8,flexDirection:"column",alignItems:"center" }}>
                    <TextField value={hotelName4} onChange={(e) => setHotelName4(e.target.value)} sx={{ width: { xs: '100%', md: '60%' },m:1 }} label='Hotel Name(Optional)' />
                        <TextField value={hotelLink4} onChange={(e) => setHotelLink4(e.target.value)} sx={{ width: { xs: '100%', md: '60%' },m:1 }} label='Hotel Link(Optional)' />
                    </Grid>
                    
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <Button sx={{
                            borderRadius: 10,
                            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            paddingX: "30px",
                            textAlign: "center",
                            alignItems: "center",
                        }} variant='contained' onClick={()=>handleAdd(count)}>Add More Hotel</Button>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <Button sx={{
                            borderRadius: 10,
                            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                            display: "flex",
                            paddingX: "30px",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            textAlign: "center",
                            alignItems: "center",
                        }} variant='contained' onClick={() => handleSubmit()}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Footer />
        </Grid>
    )
}

export default HotelLinks
