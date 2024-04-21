import { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { getData, postData, serverURL } from "../Services/NodeServices";
// import React from "react";
import { Button, Grid, Avatar, TextField } from "@material-ui/core";
import { useStyles } from "./DisplayAllCategoryCss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Delete, Edit } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";


import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, IconButton, Tooltip } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { data1 } from './MakeData';

const columnHelper = createMRTColumnHelper();
  
const columns = [
  columnHelper.accessor('companyId', {
    header: 'Company Id',
    size: 40,
  }),
  columnHelper.accessor('link', {
    header: 'Link',
    size: 120,
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ',',
  decimalSeparator: '.',
  useKeysAsHeaders: true,
});

const DisplayAllGeneratedCompanyLink = () => {
  var theme =useTheme()
   
  const matches=useMediaQuery(theme.breakpoints.down(700))

  
  
    const [category, setCategory] = useState([]);
    const FetchAllCategory = async () => {
      var data = await getData("generatedcompanylink/display");
  
      setCategory(data.reverse());
    };
  
   
    useEffect(function () {
      FetchAllCategory();
    }, []);
  

    const handleDelete=async(row)=>{
        var formData = new FormData();
        formData.append("_id",row.original._id);
         
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then(async(result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            const response= await postData('generatedcompanylink/delete',formData,true)
            console.log(response)
            if(response.status==true || response.status=='true'){
        FetchAllCategory()}
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
       
        
      }
      const handleExportRows = (rows) => {
        const rowData = rows.map((row) => row.original);
        const csv = generateCsv(csvConfig)(rowData);
        download(csvConfig)(csv);
      };
    
      const handleExportData = () => {
        const csv = generateCsv(csvConfig)(category);
        download(csvConfig)(csv);
      };
    
      const table = useMaterialReactTable({
        columns,
        data:category,
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
            
            <Tooltip title="Delete">
              <IconButton color="error" onClick={() => handleDelete(row)}>
                <Delete/>
              </IconButton>
            </Tooltip>
          </Box>
        ),
      });
    
  
    return (
      <Grid
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
      > <MaterialReactTable table={table} /></Grid></Grid>

    );
}

export default DisplayAllGeneratedCompanyLink
