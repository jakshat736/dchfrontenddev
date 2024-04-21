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

const MenuLink = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const navigate = useNavigate()
    const cardId = window.localStorage.getItem("CardId")
    const userId = window.localStorage.getItem("userId")

    const [menuLink, setMenuLink] = useState('')

    
 

    const fetchCardDetail = async () => {
        var formData = new FormData()
        formData.append("customerId", userId)
        var result = await postData('carddetails/getcardDetails', formData, true)
        console.log(result.data)
        setMenuLink(result.data.menuLink)
       
    }
    React.useEffect(() => {

        fetchCardDetail()
    }, [])

    const handleSubmit = async () => {
        var formData = new FormData()
        formData.append('_id', cardId)
        formData.append('menuLink', menuLink)
       
       
        
        var response = await postData("carddetails/updatemenu", formData, true);
        if (response.status) {
            navigate('/links')
        } else {

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
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Menu Link</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8,flexDirection:'column',alignItems:"center" }}>
                        <TextField value={menuLink} onChange={(e) => setMenuLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' },m:1 }} label='Menu Link(Optional)' />
                        
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

export default MenuLink
