import { Grid ,Typography,Button,Divider,TextField,IconButton,handleImage,Avatar} from '@mui/material'
import React, { useState } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import img1 from "../assets/dch logooo.png";
import { PhotoCamera } from '@mui/icons-material';
import { getData, postData, serverURL } from "../../../Services/NodeServices";
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditMenu() {
  const location=useLocation()
  const navigate=useNavigate()
  const data=JSON.parse(location.state.data)
  const menuId=location.state.menuId
  const [Dish,setDish]  = useState(data.dish)

  const [Price,setPrice]  = useState(data.price)
  const [Halfprice, setHalfprice] = useState(data.Halfprice)

  const [rating, setRating] = useState(data.rating)
  
  const [Sorting,setSorting]  = useState(data.sorting)
  const [Stock,setStock]  = useState(data.stock)
  const [Description,setDescription]  = useState(data.description)
  const [foodType, setFoodType] = useState(data.foodtype);


  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  



  const handleSubmit = async () => {
    var formdata = new FormData;
    formdata.append("_id", data._id);
    formdata.append("dish", Dish);
    formdata.append("price", Price);
    formdata.append("Halfprice", Halfprice);

    formdata.append("rating", rating);
    formdata.append("sorting", Sorting);
    formdata.append("stock", Stock);
    formdata.append("description", Description);
    formdata.append("foodtype", foodType);

    const response=postData("index/editmenu",formdata,true)
    alert(response.status)

  };


  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

    <Grid container spacing={2} sx={{ width: 400 }}>
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
        <img src={img1} alt="Masala Grill" width={120} />

      </Grid>

      <Grid item xs={6} sx={{}}>
        <Button variant="outlined"  sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"},mt:2}}><WhatsAppIcon />Live support</Button>
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
            onClick={() => navigate('/Allmenu',{state:{menuId:menuId}})}
            variant='contained'
            sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
          >
            Back
          </Button>
        
        </Grid>
      {/* {data.map((item) => (
      <React.Fragment key={item.id}> */}
      <Grid item xs={12} sx={{ mt: 5 }}>
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
        <TextField onChange={(e) => setSorting(e.target.value)} value={Sorting} id="outlined-basic"  variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ textAlign: 'left', fontSize: 12 }}> Stock</Typography>
        <Typography sx={{ textAlign: 'left', fontSize: 12 }}>If left 0 will not track.</Typography>
        <TextField onChange={(e) => setStock(e.target.value)} value={Stock} id="outlined-basic"  variant="outlined" />
      </Grid>
     

      <Grid item xs={12}>
        <TextField onChange={(e) => setDescription(e.target.value)} value={Description} multiline minRows={4} id="outlined-basic" label="Descrption" variant="outlined" fullWidth />
      </Grid>

      {/* </React.Fragment>
    ))} */}


      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

        <Button  sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
          Update item
        </Button>

      </Grid>







    </Grid>







  </Grid>
  )
}
