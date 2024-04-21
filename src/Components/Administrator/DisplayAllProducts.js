import React,{useState,useEffect} from "react";
import { Button,Checkbox,FormControl,FormControlLabel,FormLabel,Grid,InputLabel,MenuItem,Radio,RadioGroup,Select,Table,TableCell,TableRow,TextField } from "@mui/material";
import { getData, serverURL } from ".././Services/NodeServices";
import MaterialTable from "@material-table/core";
import {useStyles} from "./DisplayAllCategoryCss"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { postData } from ".././Services/NodeServices";
import Swal from "sweetalert2";
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import './DisplayAllProduct.css'
import { useContext } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";

const Input = styled('input')({
  display: 'none',
});


export default function DisplayAllProducts(props){  
  
  var theme =useTheme()
  const classes=useStyles()   
  const matches=useMediaQuery(theme.breakpoints.down(700))
const[products,setProducts]=useState([])
const[message,setMessage]=useState('')
    const[showBtn,setShowBtn]=useState(false)
    const [showData,setShowData]=useState()
const[open,setOpen]=useState(false)
const[open1,setOpen1]=useState(false)
const[edit,setEdit]=useState(false)
const [images,setImages]=useState([])
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
  const [productId,setProductId]=useState('')
  const [customizable, setCustomizable] = useState(false);
  const [uploadName, setUploadName] = useState(false);
  const [uploadLogo, setUploadLogo] = useState(false);
  const [uploadDescription, setUploadDescription] = useState(false);
  const [uploadLink, setUploadLink] = useState(false);
 

const [socket,setSocket]=React.useState()



useEffect(function(){
  
   props.onChange()

},[socket])

const handleOpen=(rowData)=>{
   setOpen(true)
   setImages(rowData.images)

}

const handleDelete=async(rowdata)=>{

  Swal.fire({
    title: 'Do you want to Delete the subcategory?',
    showDenyButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: `Don't Delete`,
  }).then(async(res) => {
    /* Read more about isConfirmed, isDenied below */
    if (res.isConfirmed) {
      var body={_id:rowdata._id}
      var result=await postData('products/delete_product',body)
      if(result.status==true)
      {
      Swal.fire('Delete!', '', 'success')
      props.onChange()
      }
      else{
        Swal.fire('Server error', '', 'error')
      }
      props.onChange()
    } 
    else if (res.isDenied) {
      Swal.fire('Changes are not deleted', '', 'info')
    }
  })}


const handleView=(rowData)=>{
    setOpen1(true)
    setShowData(rowData)
    console.log(rowData)

}

const handleEdit=(data)=>{
  setCategoryName(data.categoryName) 
  setSubCategoryName(data.subCategoryName)
  setProductname(data.productName)
  setPrice(data.price)
  setOfferprice(data.offerprice)
  setDescrition(data.description)
  setDescrition1(data.description1)
  setDescrition2(data.description2)
  setDescrition3(data.description3)
  setDescrition4(data.description4)
  setNewArrival(data.newArrival)
  setHotSelling(data.hotSelling)
  setUploadName(data.uploadName)
  setUploadLogo(data.uploadLogo)
  setCustomizable(data.customizable)
  setUploadDescription(data.uploadDescription)
  setUploadLink(data.uploadLink)
  setProductId(data._id)
  fetchsubCategory(data.categoryName)
  setEdit(true)


}

function DisplayDailog(){
  console.log(showData)
  return(<div>
      <Dialog
      
        open={open1}
        onClose={handleClose}
      >
        <DialogContent>
        <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
        <Table  >      
          <TableRow  className='row-style'>
              <TableCell variant="head">Category Id</TableCell>
              <TableCell>{showData.categoryName}</TableCell>
          </TableRow>     
          <TableRow  className='row-style'>
              <TableCell variant="head">Sub Category Id</TableCell>
              <TableCell>{showData.subCategoryName}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Product Id</TableCell>
              <TableCell>{showData._id}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Product Name</TableCell>
              <TableCell>{showData.productName}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Price</TableCell>
              <TableCell>{showData.price}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Offer Price</TableCell>
              <TableCell>{showData.offerprice}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">New Arrival</TableCell>
              <TableCell>{showData.newArrival}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Hot  Selling</TableCell>
              <TableCell>{showData.hotSelling}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Description</TableCell>
              <TableCell>{showData.description}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Point 1</TableCell>
              <TableCell>{showData.description1}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Point 2</TableCell>
              <TableCell>{showData.description2}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Point 3</TableCell>
              <TableCell>{showData.description3}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Point 4</TableCell>
              <TableCell>{showData.description4}</TableCell>
            
          </TableRow>       
      </Table>
      <Grid item xs={8}>
           <Button fullWidth variant='contained' onClick={()=>handleEdit(showData)}>Edit</Button>
      </Grid>
        </Grid>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Close
          </Button>
         
        </DialogActions>
      </Dialog>
  </div>)
}

const handleSubmit = async () => {
  var formdata = new FormData();
  formdata.append("_id", productId);
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
  formdata.append("uploadName", uploadName);
    formdata.append("uploadDescription", uploadDescription);
    formdata.append("uploadLogo", uploadLogo);
    formdata.append("uploadLink", uploadLink);
    formdata.append("customizable",customizable)
   
  formdata.append("hotSelling", hotSelling);
  formdata.append("newArrival", newArrival);
  
  var response = await postData("products/editProduct", formdata, true);
  if (response.status == true) {
    setEdit(false)
    setOpen1(false)
    Swal.fire({
      icon: "success",
      title: "successfully submitted",
    });
    props.onChange()
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
};
const handleStockUpdate = async (_Id,stock) => {
  var formdata = new FormData();
  formdata.append("_id", _Id);
  formdata.append("Instock", stock==true?false:true);
  
  var response = await postData("products/editStock", formdata, true);
  if (response.status == true) {
    setEdit(false)
    setOpen1(false)
    Swal.fire({
      icon: "success",
      title: "successfully submitted",
    });
    props.onChange()
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
function EditDailog(){
  console.log(showData)
  return(<div>
      <Dialog
      
        open={edit}
        onClose={handleClose}
      >
        <DialogContent>
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
          <Grid item xs={1.5} >
          <FormControlLabel sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} control={<Checkbox checked={uploadName==true?true:false} onChange={()=>setUploadName(!uploadName)} />} label="Upload Name" />
          </Grid>
          <Grid item xs={1.5}>
          <FormControlLabel sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} control={<Checkbox checked={uploadLogo==true?true:false} onChange={()=>setUploadLogo(!uploadLogo)} />} label="Upload Logo" />
          </Grid>
          <Grid item xs={1.5}>
          <FormControlLabel sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} control={<Checkbox checked={uploadDescription==true?true:false} onChange={()=>setUploadDescription(!uploadDescription)} />} label="Upload Description" />
          </Grid>
          <Grid item xs={1.5}>
          <FormControlLabel sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} control={<Checkbox checked={uploadLink==true?true:false} onChange={()=>setUploadLink(!uploadLink)} />} label="Upload Link" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} control={<Checkbox checked={customizable==true?true:false} onChange={()=>setCustomizable(!customizable)} />} label="Customizable" />
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
          
          
          <Grid item xs={12}>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
          </Grid>

          
    </Grid>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Close
          </Button>
         
        </DialogActions>
      </Dialog>
  </div>)
}

const handleClose=()=>{
    setOpen(false)
    setOpen1(false)
    setEdit(false)
}

const ImagesDialog=()=>{
    return (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{color:"grey"}}
          >
            <DialogContent sx={{bgcolor:"gray"}}>
              <Grid container spacing={2}>
               {images.map((item,index)=>{
               return(<Grid item xs={5} sx={{border:1,borderStyle:"solid" ,m:2}}>
                  <img src={`${serverURL}/images/${item}`} width={'100%'}/>
                </Grid>)
               }) 
}
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} style={{ cursor: "pointer" }}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

function displayTable() {
    return (
      
      <MaterialTable
      title={"Product List"}
        data={props.products}
        style={{}}
        columns={[
            {
              title: "Product Id",
              field: "_id",
             
            },
            {
              title: "Name",
              field: "productName",
            },
          
            
           
            
            {
              title: "Images",
              render: (rowData) => (
                <div>
                  <Button variant="contained" onClick={() => handleOpen(rowData)}>
                    Show
                  </Button>
                </div>
              ),
            },
            {
              title: "Stock",
              render: (rowData) => (
                <div>
                 <FormControlLabel sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} control={<Checkbox checked={rowData.Instock==true?true:false} onChange={()=>handleStockUpdate(rowData._id,rowData.Instock)} />} label="In Stock" />
          
                </div>
              ),
            },
           
            
           
        ]}
        actions={[
          
          {
            icon: ()=><RemoveRedEye/>,
            tooltip: "see details",
            onClick: (event, rowData) => {
              handleView(rowData);
            },
          },
          {
            icon: ()=><Delete/>,
            tooltip: "Delete",
            onClick: (event, rowData) => {
              handleDelete(rowData);
            },
          },
        ]}
       
      />
    );
  }



    

    

    return(
      
        
        <Grid container spacing={2} style={{  display:"flex",
        justifyContent:'center',
        alignItems:'center'}}>
          <Grid item xs={12} sm={12} style={{marginTop:20,fontSize:matches?10:20}}>
        {displayTable()}</Grid>  
        {ImagesDialog()}
        {showData && DisplayDailog()}
        {EditDailog()}</Grid>

    )
    
}