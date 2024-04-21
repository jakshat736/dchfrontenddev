import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { postData } from '../../../../Services/NodeServices';
import Theme1 from './Theme1';
import { Container, Grid } from '@mui/material';
import NFCCard from './NFCCard';
import { useNavigate } from 'react-router-dom';
import Theme2 from './Theme2';
import Theme4 from './Theme4';

import Theme6 from './Theme6';
import Theme5 from './Theme5';
import Theme3 from './Theme3';
import Theme7 from './Theme7';
import Swal from 'sweetalert2';
import Theme8 from './Theme8';
import Theme9 from './Theme9';
import Theme10 from './Theme10';
import Theme11 from './Theme11';
import Preloader from '../../Components/Preloader';
import newlogo from '../../../Digital Card Assets/newlogo.png'
const Card = () => {
    let navigate = useNavigate()
    const { companyId } = useParams();
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [ecommerce, setEcommerce] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [show, setShow] = useState(false)

    const [loadingAnimation, setLoadingAnimation] = useState(true)
    React.useEffect(() => {
        fetchCardDetail();

    }, []);

    const fetchCardDetail = async () => {
        setLoadingAnimation(true)
        var formData = new FormData();
        formData.append("companyId", companyId);
        var result = await postData(
            "carddetails/getcardDetailsbycompanyid",
            formData,
            true
        );
        if (result.status == undefined || result.data.cardStatus == "inActive") {
            navigate('/cardhome')

        }
        if (result.data != undefined) {
            console.log(result.data.YoutubeVideoLink2 == "undefined");
            setData(result.data);
            setProducts(result.data.products);
            setEcommerce(result.data.ecommerce);
            setGallery(result.data.gallery);
            setShow(true)


            updateViewCount(result.data._id, result.data.cardViewCount)
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
        if (result.status == undefined) {
            navigate('/cardhome')
        }
        if (result.data != undefined) {
            console.log(result)
            console.log(result.data.YoutubeVideoLink2 == "undefined");
            setData(result.data);
            setProducts(result.data.products);
            setEcommerce(result.data.ecommerce);
            setGallery(result.data.gallery);

            if (result.data.themeid == undefined) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Choose the Theme First',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/cardhome')
            }
        }
    };


    return (
        <>{loadingAnimation == true ?

            <Grid style={{ backgroundColor: '#FFF', width: "100%", height: '790px', display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column' }}>
                <img src={newlogo} width={300} />
                <Preloader />
            </Grid>
            : <Grid style={{ width: "100%" }}>

                {show && (data.menuLink == "" ? <Theme3 data={data} products={products} gallery={gallery} ecommerce={ecommerce} /> : <Theme9 data={data} products={products} gallery={gallery} ecommerce={ecommerce} />)}
                {/* {show && (<Theme3 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>) } */}
            </Grid>}
        </>

    )
}

export default Card
