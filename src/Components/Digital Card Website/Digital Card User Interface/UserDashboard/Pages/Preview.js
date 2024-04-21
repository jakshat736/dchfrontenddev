import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postData } from '../../../../Services/NodeServices'
import Theme1 from '../Themes/Theme1';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Theme2 from '../Themes/Theme2'
import Theme4 from '../Themes/Theme4'
import Theme6 from '../Themes/Theme6'
import Theme5 from '../Themes/Theme5'
import Theme3 from '../Themes/Theme3'
import Theme7 from '../Themes/Theme7'
import Swal from 'sweetalert2'
import Navbar from '../UserComponents/Navbar'
import Theme8 from '../Themes/Theme8'
import Theme9 from '../Themes/Theme9'
import Theme11 from '../Themes/Theme11'
import Theme10 from '../Themes/Theme10'
import Preloader from '../../Components/Preloader'
const Preview = () => {
    let navigate = useNavigate()

    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [ecommerce, setEcommerce] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [show,setShow]=useState(false)
    const [loadingAnimation,setLoadingAnimation]=useState(true)
    const userId = window.localStorage.getItem("userId")
   

    const fetchCardDetail = async () => {
        setLoadingAnimation(true)
        var formData = new FormData();
        formData.append("customerId", userId)
        var result = await postData('carddetails/getcardDetails', formData, true)
        if (result?.data != undefined) {
            console.log(result?.data?.YoutubeVideoLink2 == "undefined");
            setData(result?.data);
            setProducts(result?.data?.products);
            setEcommerce(result?.data?.ecommerce);
            setGallery(result?.data?.gallery);
            

            
            updateViewCount(result?.data?._id, result?.data?.cardViewCount)
            setLoadingAnimation(false)
            setShow(true)
        }
    };
    const updateViewCount = async (id, view) => {
        var formData = new FormData();
        formData.append("_id", id);
        formData.append("cardViewCount", view + 1);
        var result = await postData(
            "carddetails/updateViewCount",
            formData,
            true
        );
        if (result === false) {
            navigate('/userdashboard')
        }
        if (result?.data != undefined) {
           
            setData(result?.data);
            

          
           
        }
    };
    React.useEffect(() => {
        fetchCardDetail();

    }, []);

    return (
        <>        
        {loadingAnimation==true?
            <Container maxWidth="xl" sx={{height:"100vh",overflow:'hidden',width:"100vw"}}>
              <Grid container spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center",overflow:'hidden'}}>
                
                <Preloader/>
                </Grid></Container>
                :
                 <Grid sx={{bgcolor:"#001e3c"}}>
            <Navbar/>
         
     
            <Grid sx={{ position: "absolute", left: 10, top: {xs:60,sm:65,md:100} }}><Button sx={{
                borderRadius: 10,
                backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                textAlign: "center",
                alignItems: "center",
                mt:1
            }} onClick={() =>navigate('/ecommerce')} variant='contained'><NavigateBeforeIcon />Back</Button></Grid>
            <Grid sx={{mt:7}}>
                {/* {data?.themeid == 1 ? <Theme1 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data?.themeid == 2 ? <Theme2 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data?.themeid == 3 ? <Theme3 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data?.themeid == 4 ? <Theme4 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data?.themeid == 6 ? <Theme6 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data?.themeid == 5 ? <Theme5 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data?.themeid == 7 ? <Theme7 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data?.themeid == 8 ? <Theme8 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : data?.themeid == 9 ? <Theme9 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> :data?.themeid == 11 ? <Theme11 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> :data?.themeid == 10 ? <Theme10 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : ''} */}
                {show && (data?.menuLink == "" ? <Theme3 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>:<Theme9 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>)}
            </Grid>
            <Grid sx={{ position: "absolute", right: 10, top: {xs:60,sm:65,md:100} }}><Button sx={{
                borderRadius: 10,
                backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                textAlign: "center",
                alignItems: "center",
                mt:1
               
            }} onClick={() => navigate('/userdashboard')} variant='contained'><NavigateNextIcon />Go to Home</Button></Grid>
            
        </Grid>}
        </>

        
    )
}

export default Preview
