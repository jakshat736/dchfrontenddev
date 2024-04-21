import { Grid, Typography, Button, Divider, TextField, IconButton, handleImage, Avatar } from '@mui/material'
import React, { useState, useEffect } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import img1 from "../assets/dch logooo.png";


import { PhotoCamera } from '@mui/icons-material';
import { getData, postData } from "../../../Services/NodeServices";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddMenu() {
  const location = useLocation()
  const navigate = useNavigate()
  const menuId = location.state.menuId
  const [Dish, setDish] = useState("")
  const [Price, setPrice] = useState("")
  const [Halfprice, setHalfprice] = useState("")

  const [rating, setRating] = useState("")
  const [Sorting, setSorting] = useState("")
  const [Stock, setStock] = useState("")
  const [Description, setDescription] = useState("")
  const [foodType, setFoodType] = useState("");
  // const [data, setData] = useState([]);
  const [Image, setImage] = useState({
    fileName: "",
    bytes: "",
  });

  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  const handleImage = (event) => {
    setImage({
      fileName: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };

  // const fetchData = async () => {
  //   const result = await getData("index/adddata");
  //   setData(result.data); // Update the data state with the fetched data
  // };

  const handleSubmit = async () => {
    var AddMenudata = new FormData;
    if(Dish!="" && Price!="" && Halfprice!="" && rating!="" && Sorting!="" && Stock!="" && Description!="" && foodType!="" && Image.fileName!=""){
    AddMenudata.append("menuId", menuId);
    AddMenudata.append("dish", Dish);
    AddMenudata.append("price", Price);
    AddMenudata.append("Halfprice", Halfprice);

    AddMenudata.append("rating", rating);
    AddMenudata.append("sorting", Sorting);
    AddMenudata.append("stock", Stock);
    AddMenudata.append("description", Description);
    AddMenudata.append("foodtype", foodType);
    AddMenudata.append("image", Image.bytes);
    const response = await postData("index/addmenu", AddMenudata, true);
     console.log(response)

     if(response.status==true){
      Swal.fire({
        text:"Saved Successfully",
        timer:1000,
        icon:"success"
      })
     }

  

    }else{
      Swal.fire({
        text:"Fill All The Details",
        timer:1000,
        icon:"warning"
      })
    }


  };

  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts
  // }, []);


  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Grid container spacing={2} sx={{ width: 400 }}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
          <img src={img1} alt="Masala Grill" width={120} />

        </Grid>

        <Grid item xs={6} sx={{}}>
          <Button variant="outlined" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"},mt:2}}><WhatsAppIcon />Live support</Button>
        </Grid>
        <Divider
          sx={{
            backgroundColor: 'black',
            height: '1px',
            width: '100%',
            mt: 1
          }}
        />
        <Grid item xs={3}>


          <Button
            onClick={() => navigate(`/menudashboard/${menuId}`)}
            variant='contained'
            sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
          >
            Back
          </Button>

        </Grid>
        {/* {data.map((item) => (
        <React.Fragment key={item.id}> */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: 30, textAlign: 'left' }}>Update Menu Items</Typography>
        </Grid>

        <Divider sx={{ backgroundColor: 'black', height: '1px', width: '100%', }} />

        <Grid item xs={6}>
          <TextField onChange={(e) => setDish(e.target.value)} value={Dish} id="outlined-basic" fullWidth label="DishName" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={(e) => setRating(e.target.value)} value={rating} id="outlined-basic" label="Ratings" variant="outlined" />
        </Grid>

        <Grid item xs={6}>
          <TextField onChange={(e) => setPrice(e.target.value)} value={Price} id="outlined-basic" label="Price" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={(e) => setHalfprice(e.target.value)} value={Halfprice} id="outlined-basic" label="Halfprice" variant="outlined" />
        </Grid>
        <Grid item xs={12}>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Food Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={foodType}
              onChange={handleFoodTypeChange}
            >
              <FormControlLabel value="veg" control={<Radio />} label="veg" />
              <FormControlLabel value="nonveg" control={<Radio />} label="Non-veg" />
              <FormControlLabel value="Vegan" control={<Radio />} label="Vegan" />

            </RadioGroup>
          </FormControl>

        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: 'left', fontSize: 12 }}>Sorting Order</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 12 }}>Higher order will be shown first.</Typography>
          <TextField onChange={(e) => setSorting(e.target.value)} value={Sorting} id="outlined-basic"variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: 'left', fontSize: 12 }}> Stock</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 12 }}>If left 0 will not track.</Typography>
          <TextField onChange={(e) => setStock(e.target.value)} value={Stock} id="outlined-basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

<Avatar
    alt="Remy Sharp"
    variant="rounded"
    src={Image.fileName}
    sx={{ width: 80, height: 80, m: 1 }}
/>
<Button

    color="primary"
    aria-label="upload picture"
    component="label"
    variant='contained'
    sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
>
    <input
        hidden
        accept="image/*"
        type="file"
        onChange={handleImage}
        
    />
    Upload Image<PhotoCamera />
</Button>


</Grid>
        <Grid item xs={12}>
          <TextField onChange={(e) => setDescription(e.target.value)} value={Description} multiline minRows={4} id="outlined-basic" label="Descrption" variant="outlined" fullWidth />
        </Grid>

        {/* </React.Fragment>
      ))} */}


        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

          <Button  sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
            Save item
          </Button>

        </Grid>







      </Grid>







    </Grid>
  )
}
