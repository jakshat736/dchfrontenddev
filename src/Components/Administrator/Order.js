import React,{useState,useEffect} from "react";
import { Button,FormControl,FormControlLabel,FormLabel,Grid,InputLabel,MenuItem,Radio,RadioGroup,Select,Table,TableCell,TableRow,TextField, Typography } from "@mui/material";
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


export default function Order(props){  
  
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

 

const [socket,setSocket]=React.useState()



useEffect(function(){
  
   fetchAllProducts()

},[socket])



const handleView=(rowData)=>{
     setOpen1(true)
    setShowData(rowData)
    console.log(rowData)

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
              <TableCell variant="head">Order Id</TableCell>
              <TableCell>{showData._id}</TableCell>
            
          </TableRow>           
          <TableRow  className='row-style'>
              <TableCell variant="head">Customer Name</TableCell>
              <TableCell>{showData.name}</TableCell>
          </TableRow>     
          <TableRow  className='row-style'>
              <TableCell variant="head">Shipping Address</TableCell>
              <TableCell>{showData.fullAddress}</TableCell>
            
          </TableRow>       
         
          <TableRow  className='row-style'>
              <TableCell variant="head">Customer Email</TableCell>
              <TableCell>{showData.email}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Customer Phone</TableCell>
              <TableCell>{showData.phone}</TableCell>
            
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Payment Status</TableCell>
              <TableCell>{showData.payment}</TableCell>
            
          </TableRow>       
          <Grid sx={{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:19}}>
             Ordered Products
            </Grid>      
          {
            showData.products.map((item,index)=>(
          <>     
          <Typography>{index+1}</Typography>
         <TableRow  className='row-style'>
              <TableCell variant="head">Product Id</TableCell>
              <TableCell>{item.productId}</TableCell>
            
          </TableRow>
         <TableRow  className='row-style'>
              <TableCell variant="head">Product Name</TableCell>
              <TableCell>{item.productName}</TableCell>
            
          </TableRow>
         <TableRow  className='row-style'>
              <TableCell variant="head">Quantity</TableCell>
              <TableCell>{item.count}</TableCell>
            
          </TableRow>
         <TableRow  className='row-style'>
              <TableCell variant="head">Company Name</TableCell>
              <TableCell>{item.companyName==""?"Not Available":item.companyName}</TableCell>
            
          </TableRow>
         <TableRow  className='row-style'>
              <TableCell variant="head">Link</TableCell>
              <TableCell>{item.Link==""?"Not Available":item.Link}</TableCell>
            
          </TableRow>
         <TableRow  className='row-style'>
              <TableCell variant="head">Description</TableCell>
              <TableCell>{item.Description==""?"Not Available":item.Description}</TableCell>
            
          </TableRow>
         <TableRow  className='row-style'>
              <TableCell variant="head">Logo</TableCell>
              <TableCell>{item.Logo==""?"Not Available":<img src={`${serverURL}/images/${item.Logo}`}  width={'100%'}/>}</TableCell>
            
          </TableRow>
          </>
            ))
          }       
                
      </Table>
     
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
const [value, setValue] = React.useState('female');

const handleChange = async(event,rowData) => {
 var formdata=new FormData
 formdata.append("_id",rowData._id)
 formdata.append("status",event.target.value)
 const response=await postData('orders/updateStatus',formdata,true)
 window.location.reload();
};


function displayTable() {
    return (
     
      <MaterialTable
      title={"Order List"}
        data={products}
        style={{}}
        columns={[
            {
              title: "Order Id",
              field: "_id",
             
            },
            {
              title: "Customer Name",
              field: "name",
            },
            {
              title: "Order Date",
              field: "date",
            },   
            {
              title: "Payment Status",
              field: "payment",
            },
            {
                title: "Order Status",
                render: (rowData) => (
                  <div>
                    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={rowData.status}
        onChange={(event)=>handleChange(event,rowData)}
      >
        <FormControlLabel value="Ordered Successfully" control={<Radio />} label="Ordered Successfully" />
        <FormControlLabel value="Packed" control={<Radio />} label="Packed" />
        <FormControlLabel value="Shipped" control={<Radio />} label="Shipped" />
        <FormControlLabel value="Delivered" control={<Radio />} label="Delivered" />
      </RadioGroup>
    </FormControl>
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
        ]}
       
      />
      
    );
  }



    const fetchAllProducts=async()=>{
        const result=await getData('orders/getOrders')
        
        setProducts(result.data.reverse())
        console.log(result.data)
    }


    

    return(
      
        
        <Grid container spacing={2} style={{  display:"flex",
        justifyContent:'center',
        alignItems:'center'}}>
          <Grid item xs={12} sm={12} style={{marginTop:20,fontSize:matches?10:20, width:'100%'}}>
        {displayTable()}</Grid>  
        
        {showData && DisplayDailog()}
      </Grid>

    )
    
}