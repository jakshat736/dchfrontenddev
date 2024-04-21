import { Grid,Button,TextField,Avatar, useMediaQuery ,useTheme,Typography, Checkbox} from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Swal from 'sweetalert2';
import { getData, postData } from '../Services/NodeServices';
import DisplayAllProducts from './DisplayAllProducts';
var categoryData=[
    "Proximity Tag",
    "Card",
    "Standee",

  ]

var subCategory=[
    "Google",
    "Facebook",
    "Instagram",
    "Food Menu"
]  
const AddProduct = () => {
    const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));

    const [getCategoryData, setCategoryData] = useState([]);
  const [getSubCategoryData, setSubCategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [getProductname, setProductname] = useState("");
  const [getprice, setPrice] = useState("");
  const [getOfferprice, setOfferprice] = useState("");
  const [getDescription, setDescrition] = useState("");
  const [hotSelling, setHotSelling] = useState("");
  const [newArrival, setNewArrival] = useState("");
  const [getDescription1, setDescrition1] = useState("");
  const [getDescription2, setDescrition2] = useState("");
  const [getDescription3, setDescrition3] = useState("");
  const [getDescription4, setDescrition4] = useState("");
  const [uploadName, setUploadName] = useState(false);
  const [uploadLogo, setUploadLogo] = useState(false);
  const [uploadDescription, setUploadDescription] = useState(false);
  const [uploadLink, setUploadLink] = useState(false);
  const [customizable, setCustomizable] = useState(false);
  const[products,setProducts]=useState([])

  const [productData, setProductData] = useState(Array(4).fill(null));
  const [selectedImages, setSelectedImages] = useState(Array(4).fill(null));


  const handleImageChange = (index, event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const selectedImage = files[0];
      const updatedSelectedImages = [...selectedImages];
      updatedSelectedImages[index] = selectedImage;
      setSelectedImages(updatedSelectedImages);
    }
  };
  
  const handleAdd=()=>{

   

    if(selectedImages[0]!=null && selectedImages[1]!=null && selectedImages[2]!=null && selectedImages[3]!=null){
    
    
      setSelectedImages([...selectedImages,...Array(1).fill(null)])
      setProductData([...productData,...Array(1).fill(null)])
   }else {
      Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Fill The Empty Columns',
          showConfirmButton: false,
          timer: 1500
      })
   }
  }

  const fetchAllProducts=async()=>{
    const result=await getData('products/displayAllProduct')
    
    setProducts(result.data)
    console.log(result.data)
}


  useEffect(function(){
  
    fetchAllProducts()
 
 },[])
  

  const handleSubmit = async () => {
  
    var formdata = new FormData();
    formdata.append("categoryName", categoryName);
    formdata.append("subCategoryName", subCategoryName);
    formdata.append("productName", getProductname);
    formdata.append("price", getprice);
    formdata.append("offerprice", getOfferprice);
    
    formdata.append("description", getDescription);
    formdata.append("description1", getDescription1);
    formdata.append("description2", getDescription2);
    formdata.append("description3", getDescription3);
    formdata.append("description4", getDescription4);
   
    formdata.append("hotSelling", hotSelling);
    formdata.append("uploadName", uploadName);
    formdata.append("uploadDescription", uploadDescription);
    formdata.append("uploadLogo", uploadLogo);
    formdata.append("uploadLink", uploadLink);
    formdata.append("customizable", customizable);
    formdata.append("newArrival", newArrival);
    selectedImages.forEach((image, index) => {
        if (image) {
          formdata.append(`images[${index}]`, image);
        }
      
       
      });
    
    var response = await postData("products/addProduct", formdata, true);
    if (response.status == true) {
      Swal.fire({
        icon: "success",
        title: "successfully submitted",
      });
      fetchAllProducts()
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const fetchgetCategory = async () => {
    var result = await getData("category/display_all_category");

    setCategoryData(result.data);
  };
  useEffect(function () {
    fetchgetCategory();
  }, []);
  const handleClearValues = () => {
    setCategoryName("");
    setSubCategoryName("");
    setProductname("");
    setPrice("");
    setOfferprice("");
    setDescrition("");
    setDescrition1("");
    setDescrition2("");
    setDescrition3("");
    setDescrition4("");
    setHotSelling("");
    setNewArrival("");
    setUploadName(false);
    setUploadDescription(false);
    setUploadLogo(false);
    setUploadLink(false)
    setCustomizable(false)
    setSelectedImages(Array(4).fill(null))
    setProductData(Array(4).fill(null))
    
    
  };

  const fetchsubCategory = async (cid) => {
    var result = await postData("subcategory/display_subcategory_by_category", {
      categoryid: cid,
    });
    setSubCategoryData(result.data);
  };

  const handleCategoryId = (event) => {
    setCategoryName(event.target.value);
    fetchsubCategory(event.target.value);

  
  };

  const CategoryDropDown = () => {
    return getCategoryData.map((item) => {
      return (
        <MenuItem value={item._id} style={{ margin: 10 }}>
          <Button variant="contained" fullWidth>
            {item.categoryname}
          </Button>
        </MenuItem>
      );
    });
  };
  const SubCategoryDropDown = () => {

    return getSubCategoryData.map((item) => {
      return (
        <MenuItem value={item._id} style={{ margin: 10 }}>
          <Button variant="contained" fullWidth>
            {item.subcategoryname}
          </Button>
        </MenuItem>
      );
    });
  };
  return (
   <Grid style={{ justifyContent: "center", display: "flex" }}>
    <Grid container
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Grid
            item
            xs={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Grid
              style={{
                fontSize: 32,
                fontVariant: "small-caps",
                fontWeight: "bolder",
                fontWeight: "bold",
              }}
            >
              Product Interface
            </Grid>
           
          </Grid>

          <Grid item xs={12}  md={6} style={{ width: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Category name
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categoryName}
                label="CategoryName"
                onChange={handleCategoryId}
              >
                {CategoryDropDown()}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6} style={{ width: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {" "}
                SubCategory name
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subCategoryName}
                label="Sub-CategoryName"
                onChange={(event) => setSubCategoryName(event.target.value)}
              >
                {SubCategoryDropDown()}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <TextField
              onChange={(event) => setProductname(event.target.value)}
              fullWidth
              label="Product Name"
              variant="outlined"
              value={getProductname}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              onChange={(event) => setPrice(event.target.value)}
              fullWidth
              label="Product price"
              variant="outlined"
              value={getprice}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              onChange={(event) => setOfferprice(event.target.value)}
              fullWidth
              label="Offert price"
              variant="outlined"
              value={getOfferprice}
            />
          </Grid>

          
          <Grid item xs={12}>
            <TextField
              onChange={(event) => setDescrition(event.target.value)}
              fullWidth
              label="Description"
              variant="outlined"
              value={getDescription}
              multiline
              minRows={4}
            />
          </Grid>


          <Grid item xs={2}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Hot Selling
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={hotSelling}
                onChange={(event) => {
                  console.log("this is radio", event.target.value);
                  setHotSelling(event.target.value);
                }}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                New Arrival
              </FormLabel>
              <RadioGroup
                row
                value={newArrival}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(event) => {
                  console.log("this is radio", event.target.value);
                  setNewArrival(event.target.value);
                }}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={1.5}>
          <FormControlLabel control={<Checkbox checked={uploadName==true?true:false} onChange={()=>setUploadName(!uploadName)} />} label="Upload Name" />
          </Grid>
          <Grid item xs={1.5}>
          <FormControlLabel control={<Checkbox checked={uploadLogo==true?true:false} onChange={()=>setUploadLogo(!uploadLogo)} />} label="Upload Logo" />
          </Grid>
          <Grid item xs={1.5}>
          <FormControlLabel control={<Checkbox checked={uploadDescription==true?true:false} onChange={()=>setUploadDescription(!uploadDescription)} />} label="Upload Description" />
          </Grid>
          <Grid item xs={1.5}>
          <FormControlLabel control={<Checkbox checked={uploadLink==true?true:false} onChange={()=>setUploadLink(!uploadLink)} />} label="Upload Link" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox checked={customizable==true?true:false} onChange={()=>setCustomizable(!customizable)} />} label="Customizable" />
          </Grid>
         
          
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
          {productData.map((item, index) => {
            return (<Grid
              key={index}
              item
              xs={mobile ? 12 : tablet ? 5 : 3.5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                border: 1,
                marginLeft: 4,
                marginTop: 4,
                paddingX: "15px"
              }}
            >
              <Grid container spacing={2} style={{ display: "flex", height: 60 }}>
                <Grid item xs={9} style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography >{index + 1}</Typography>
                </Grid>
               
              </Grid>
              <Button
                style={{ display: 'flex', flexDirection: 'column', fontSize: 12.5,textAlign:'center', fontWeight: 'bold' }}
                variant="text"
                component="label"
              >
                {/* {alert(JSON.stringify(productData[index]))} */}
                <Avatar
                  fullWidth
                  variant="rounded"
                  alt="Remy Sharp"
                  src={selectedImages[index] ? URL.createObjectURL(selectedImages[index]) : ''}
                  sx={{ width: 100, height: 100 }}
                />
                Upload Product Image
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(event) => handleImageChange(index, event)}
                />
              </Button>
            </Grid>
            )
          })

          }
           <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX:"30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleAdd()}>Add More Products Images</Button>
          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(event) => setDescrition1(event.target.value)}
                  fullWidth
                  label="Description 1"
                  variant="outlined"
                  value={getDescription1}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(event) => setDescrition2(event.target.value)}
                  fullWidth
                  label="Description 2"
                  variant="outlined"
                  value={getDescription2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(event) => setDescrition3(event.target.value)}
                  fullWidth
                  label="Description 3"
                  variant="outlined"
                  value={getDescription3}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(event) => setDescrition4(event.target.value)}
                  fullWidth
                  label="Description 4"
                  variant="outlined"
                  value={getDescription4}
                />
              </Grid>
            </Grid>
          </Grid>
          
          
          <Grid item xs={6}>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button
              onClick={handleClearValues}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Reset
            </Button>
          </Grid>
          <Grid item xs={12} sx={{mt:10}}>
          <DisplayAllProducts products={products} onChange={()=>fetchAllProducts()} />
          </Grid>
    </Grid>
    
   </Grid>
    
    
  
  )
}

export default AddProduct
