import { Grid,Button,TextField,Avatar, useMediaQuery ,useTheme,Typography} from '@mui/material'
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
const Chri = () => {
    const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));

    const [getCategoryData, setCategoryData] = useState([{categoryname:"Medicine"}]);
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  
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
              Indant
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
                Product List
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
              label="Brand Name"
              variant="outlined"
              value={getProductname}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              onChange={(event) => setPrice(event.target.value)}
              fullWidth
              label="Size"
              variant="outlined"
              value={getprice}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              onChange={(event) => setOfferprice(event.target.value)}
              fullWidth
              label="Pack/Unit"
              variant="outlined"
              value={getOfferprice}
            />
          </Grid>

          
          <Grid item xs={4}>
            <TextField
              onChange={(event) => setDescrition(event.target.value)}
              fullWidth
              label="Qty.REQD"
              variant="outlined"
              value={getDescription}
             
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              onChange={(event) => setDescrition(event.target.value)}
              fullWidth
              label="Stock"
              variant="outlined"
              value={getDescription}
             
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              onChange={(event) => setDescrition(event.target.value)}
              fullWidth
              label="Remarks"
              variant="outlined"
              value={getDescription}
             
            />
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
    </Grid>
   </Grid>
  )
}

export default Chri
