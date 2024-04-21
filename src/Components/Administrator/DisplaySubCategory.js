import {TextField,Grid,Avatar,Button } from "@material-ui/core"
import { useState, useEffect  } from "react"
import {useStyles} from "./DisplaySubCategoryCss"
import MaterialTable from "@material-table/core"
import { getData,postData } from "../Services/NodeServices"
import { serverURL } from "../Services/NodeServices"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { Delete, Edit } from "@mui/icons-material"

import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, IconButton, Tooltip } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { data1 } from './MakeData';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const columnHelper = createMRTColumnHelper();
  
const columns = [
  columnHelper.accessor('categoryid', {
    header: 'Category Id',
    size: 40,
  }),
  columnHelper.accessor('_id', {
    header: 'SubCategory Id',
    size: 40,
  }),
  columnHelper.accessor('subcategoryname', {
    header: 'Sub Category Name',
    size: 120,
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ',',
  decimalSeparator: '.',
  useKeysAsHeaders: true,
});






export default function DisplaySubCategory(props){
const classes=useStyles() 
const navigate=useNavigate()
var theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down(700));
const [categoryID,setcategoryID]=useState(' ')
const[ subcategoryId,setsubcategoryId]=useState(' ')
const [subcategoryName,setsubcategoryName]=useState('')
const[Icon,setIcon]=useState('')
const[oldIcon,setOldIcon]=useState('')


const[open,setopen]=useState(false)

const handleOpen=(rowData)=>{
   setopen(true)
   setsubcategoryId(rowData.original._id)
     setcategoryID(rowData.original.categoryid)
   setsubcategoryName(rowData.original.subcategoryname)
  
  
}
const handleClose=()=>{
  setbtn(false)
  setopen(false)
  setuploadbtn(false)
  props.onChange()
}



const handleEditdata=async()=>{
  var body={categoryid:categoryID,subcategoryname:subcategoryName,subcategoryid:subcategoryId}
  var result=await postData('subcategory/edit_subcategory',body)
 if(result.status)
 {  Swal.fire({
  icon: 'success',
 title: 'EDIT-Record successfully submited',
 
})
setopen(false)

}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  })
}

props.onChange()

}
const handleDeletedata=async()=>{

  Swal.fire({
    title: 'Do you want to Delete the subcategory?',
    showDenyButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: `Don't Delete`,
  }).then(async(res) => {
    /* Read more about isConfirmed, isDenied below */
    if (res.isConfirmed) {
      var body={subcategoryid:subcategoryId}
      var result=await postData('subcategory/delete_subcategory',body)
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
  })



  
  handleClose(true)

}
const [uploadbtn,setuploadbtn]=useState(false)
const[getbtn,setbtn]=useState(false)


const handleSave=async()=>{
    var formdata = new FormData()
   formdata.append('subcategoryid',subcategoryId)
   formdata.append('icon',Icon.bytes)
   var response= await postData('subcategory/update_icon',formdata,true)

   setbtn(false)
   uploadbtn(false)
   props.onChange()

}
const handleCancel=()=>{
  
  setIcon({url:oldIcon.url,bytes:''})

  setOldIcon(' ')
  setbtn(false) 
  setuploadbtn(false)

}

function SaveAndCancel()
{
  return(<div>
    {getbtn?<div style={{display:'flex', width:180 ,justifyContent:'space-between'}}><Button onClick={handleSave} color="primary" variant="contained">Save</Button>
     <Button style={{backgroundColor:'green'}} variant="contained" onClick={handleCancel}>cancel</Button></div>:<></>}
      </div>)
}

const[categoryList,setcategoryList]=useState([ ])

const FetchAllCategory=async()=>{
   var data= await getData('category/display_all_category')
   setcategoryList(data.data)
}
useEffect(function(){
FetchAllCategory()
},[])

const FillAllcategory=()=>{
  return categoryList.map((item)=>{
    return(
      <MenuItem value={item._id}>{item.categoryname}</MenuItem>
    )
  })
}

const handleChange=(event)=>{
  setcategoryID(event.target.value)
}

const handleDelete=async(rowData)=>{

  Swal.fire({
    title: 'Do you want to Delete the subcategory?',
    showDenyButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: `Don't Delete`,
  }).then(async(res) => {
    /* Read more about isConfirmed, isDenied below */
    if (res.isConfirmed) {
      var body={subcategoryid:rowData.original._id}
      var result=await postData('subcategory/delete_subcategory',body)
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


function DisplayDailog(){
  return(<div>
      <Dialog
      
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ fontSize:20,
        fontWeight:'bolder',}}> EDIT Sub Category</Grid>
        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryID}
          label="category"
          onChange={handleChange}
        >
         {FillAllcategory()}
        </Select>
      </FormControl>
         </Grid>
            <Grid item xs={12}>
            <TextField  value={subcategoryName}  onChange={(event)=>setsubcategoryName(event.target.value)}  fullWidth  label="add subcategory"  />
            </Grid>
            <Grid item xs={12}>
            <Button  onClick={handleEditdata}  variant="contained"  style={{backgroundColor:'green'}} fullWidth> Edit </Button>
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


const handleExportRows = (rows) => {
  const rowData = rows.map((row) => row.original);
  const csv = generateCsv(csvConfig)(rowData);
  download(csvConfig)(csv);
};

const handleExportData = () => {
  const csv = generateCsv(csvConfig)(props.subcategory);
  download(csvConfig)(csv);
};

const table = useMaterialReactTable({
  columns,
  data:props.subcategory,
  enableRowSelection: true,
  columnFilterDisplayMode: 'popover',
  paginationDisplayMode: 'pages',
  positionToolbarAlertBanner: 'bottom',
  createDisplayMode: 'modal', //default ('row', and 'custom' are also available)
  editDisplayMode: 'modal', //default ('row', 'cell', 'table', and 'custom' are also available)
  enableEditing: true,
  renderTopToolbarCustomActions: ({ table }) => (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        padding: '8px',
        flexWrap: 'wrap',
      }}
    >
      <Button
        //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
        onClick={handleExportData}
        startIcon={<FileDownloadIcon />}
      >
        Export All Data
      </Button>
      <Button
        disabled={table.getPrePaginationRowModel().rows.length === 0}
        //export all rows, including from the next page, (still respects filtering and sorting)
        onClick={() =>
          handleExportRows(table.getPrePaginationRowModel().rows)
        }
        startIcon={<FileDownloadIcon />}
      >
        Export All Rows
      </Button>
      <Button
        disabled={table.getRowModel().rows.length === 0}
        //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
        onClick={() => handleExportRows(table.getRowModel().rows)}
        startIcon={<FileDownloadIcon />}
      >
        Export Page Rows
      </Button>
      <Button
        disabled={
          !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
        }
        //only export selected rows
        onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
        startIcon={<FileDownloadIcon />}
      >
        Export Selected Rows
      </Button>
    </Box>
  ),
  renderRowActions: ({ row, table }) => (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Tooltip title="Edit">
        <IconButton onClick={() => handleOpen(row)}>
          <Edit/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton color="error" onClick={() => handleDelete(row)}>
         <Delete/>
        </IconButton>
      </Tooltip>
    </Box>
  ),
});

  
  
  
  
  
  
  return(    <Grid
    container
    spacing={2}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Grid
      item
      xs={12}
      sm={12}
      style={{ marginTop: 20, fontSize: matches ? 10 : 20 }}
    >
     
      <MaterialReactTable table={table} />
    </Grid>
     {DisplayDailog()}
  </Grid>)
}