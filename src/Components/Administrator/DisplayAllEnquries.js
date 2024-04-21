import React,{useState,useEffect} from "react";
import { Button,Grid,TextField } from "@mui/material";
import { getData } from ".././Services/NodeServices";
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

import { useContext } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";
import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { data1 } from './MakeData';

const columnHelper = createMRTColumnHelper();
  
const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    size: 40,
  }),
  columnHelper.accessor('number', {
    header: 'Number',
    size: 120,
  }),
  columnHelper.accessor('query', {
    header: 'Query',
    size: 120,
  }),
  columnHelper.accessor('email', {
    header: 'Email Id',
    size: 120,
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ',',
  decimalSeparator: '.',
  useKeysAsHeaders: true,
});

const Input = styled('input')({
  display: 'none',
});





export default function DisplayAllEnquries(props){  
  
  var theme =useTheme()
  const classes=useStyles()   
  const matches=useMediaQuery(theme.breakpoints.down(700))
const[enquiries,setEnquiries]=useState([])
const[categoryId,setCategoryId]=useState('')
const[categoryName,setCategoryName]=useState('')
const[message,setMessage]=useState('')
    const[showBtn,setShowBtn]=useState(false)
const[open,setOpen]=useState(false)

const [socket,setSocket]=React.useState()



useEffect(function(){
  
   fetchAllEnquiries()

},[socket])

const handleExportRows = (rows) => {
  const rowData = rows.map((row) => row.original);
  const csv = generateCsv(csvConfig)(rowData);
  download(csvConfig)(csv);
};

const handleExportData = () => {
  const csv = generateCsv(csvConfig)(enquiries);
  download(csvConfig)(csv);
};

const table = useMaterialReactTable({
  columns,
  data:enquiries,
  enableRowSelection: true,
  columnFilterDisplayMode: 'popover',
 
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
  
});


    const fetchAllEnquiries=async()=>{
        const result=await getData('enquiry/displayallenquiries')
       
        setEnquiries(result.reverse())
    }


    

    return(
      
        
        <Grid container spacing={2} style={{  display:"flex",
        justifyContent:'center',
        alignItems:'center'}}>
          <Grid item xs={12} sm={12} style={{marginTop:20,fontSize:matches?10:20}}>
          <MaterialReactTable table={table} /></Grid>  </Grid>

    )
    
}