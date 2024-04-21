import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Tooltip, Typography } from "@mui/material";
import { getData } from ".././Services/NodeServices";
import MaterialTable from "@material-table/core";
import { useStyles } from "./DisplayAllCategoryCss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { postData } from ".././Services/NodeServices";
import Swal from "sweetalert2";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import { useContext } from "react";


import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Delete, Edit, Print } from "@mui/icons-material";

import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { data1 } from './MakeData';

const columnHelper = createMRTColumnHelper();
  
const columns = [
  columnHelper.accessor('_id', {
    header: 'Order Id',
    size: 40,
  }),
  columnHelper.accessor('productName', {
    header: 'Client Name',
    size: 120,
  }),
  columnHelper.accessor('orderDate', {
    header: 'Order Date',
    size: 120,
  }),
  columnHelper.accessor('number', {
    header: 'Phone Number',
    size: 120,
  }),
  columnHelper.accessor('orderDetails', {
    header: 'Order Details',
  }),
  columnHelper.accessor('totalAmount', {
    header: 'Total Amount',
    size: 120,
  }),
  columnHelper.accessor('gstNo', {
    header: 'Gst Number',
    size: 120,
  }),
  columnHelper.accessor('trackingId', {
    header: 'Tracking Id',
    size: 120,
  }),
  columnHelper.accessor('payment', {
    header: 'Payment',
    size: 120,
  }),
  columnHelper.accessor('address', {
    header: 'Address',
    size: 120,
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ',',
  decimalSeparator: '.',
  useKeysAsHeaders: true,
});

const Input = styled("input")({
  display: "none",
});

export default function DisplayAllSelfOrder(props) {
  var theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const [selfOrders, setSelfOrders] = useState([]);
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const [socket, setSocket] = React.useState();
  const [checked, setChecked] = React.useState(true);
  const [selfOrderId, setSelfOrderId] = useState("");
  const [getProductname, setProductname] = useState("");
  const [getNumber, setNumber] = useState("");
  const [getOrderDetails, setOrderDetails] = useState("");
  const [getTotalAmount, setTotalAmount] = useState("");
  const [getTrackingId, setTrackingId] = useState("");
  const [getGst, setGst] = useState("");
  const [getPayment, setPayment] = useState("");
  const [getAddress, setAddress] = useState("");

  const handleEditData = async() => {
    var formdata = new FormData

    formdata.append("_id", selfOrders._id)
    formdata.append("productName", getProductname)
    formdata.append("number", getNumber)
    formdata.append("orderDetails", getOrderDetails)
    formdata.append("totalAmount", getTotalAmount)
    formdata.append("trackingId", getTrackingId)
    formdata.append("gstNo", getGst)
    formdata.append("payment", getPayment)
    formdata.append("address", getAddress)

    const response = await postData('/selforder/edit', formdata, true)
    setOpen(false)
    props.onChange()
  };

 

  const handleOpen = (rowData) => {
    setSelfOrders(rowData.original);
    setProductname(rowData.original.productName)
    setNumber(rowData.original.number)
    setOrderDetails(rowData.original.orderDetails)
    setTrackingId(rowData.original.trackingId)
    setGst(rowData.original.gstNo)
    setPayment(rowData.original.payment)
    setAddress(rowData.original.address)
    setTotalAmount(rowData.original.totalAmount)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (rowData) => {
    // alert(JSON.stringify(rowData))
    Swal.fire({
      title: "Do you want to Delete the subcategory?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then(async (res) => {
      /* Read more about isConfirmed, isDenied below */
      if (res.isConfirmed) {
        var body = { _id: rowData.original._id };
        var result = await postData("/selforder/delete", body,true);
        if (result.status) {
          Swal.fire("Delete!", "", "success");
          props.onChange()
        } else {
          Swal.fire("Server error", "", "error");
        }
        props.onChange()
      } else if (res.isDenied) {
        Swal.fire("Changes are not deleted", "", "info");
      }
    });

    props.onChange()
    handleClose();
  };

  const EditDialog = () => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
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
              marginTop: 15,
            }}
          >
            Self Order Interface
          </Grid>

        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(event) => setProductname(event.target.value)}
            fullWidth
            label="Client Name"
            variant="outlined"
            value={getProductname}

          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(event) => setNumber(event.target.value)}
            fullWidth
            label="Number"
            variant="outlined"
            value={getNumber}

          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(event) => setOrderDetails(event.target.value)}
            fullWidth
            label="Order Details"
            variant="outlined"
            value={getOrderDetails}

          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={(event) => setTotalAmount(event.target.value)}
            fullWidth
            label="Total Amount"
            variant="outlined"
            value={getTotalAmount}

          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={(event) => setTrackingId(event.target.value)}
            fullWidth
            label="Traking ID"
            variant="outlined"
            value={getTrackingId}

          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            onChange={(event) => setGst(event.target.value)}
            fullWidth
            label="GST Number"
            variant="outlined"
            value={getGst}

          />
        </Grid>


        <Grid item xs={4}>
          <TextField
            onChange={(event) => setPayment(event.target.value)}
            fullWidth
            label="Payment Received"
            variant="outlined"
            value={getPayment}


          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            onChange={(event) => setAddress(event.target.value)}
            fullWidth
            label="Shipping Address"
            variant="outlined"
            value={getAddress}
            multiline
            minRows={4}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => handleEditData()}
            style={{ marginTop: 40 }}
            fullWidth
            color="primary"
            variant="contained"
          >
            Edit
          </Button>
        </Grid>

        



      </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(props.data);
    download(csvConfig)(csv);
  };

  const printReceipt = (data) => {
   
   

    let receipt = `Receipt\n\n`;
    const dateTime = new Date().toLocaleString(); // Assuming you have a variable named `dateTime`

receipt += `Customer: ${data.original.productName}\n\n`;
receipt += `Items:\n`;

receipt += `Order Details \t Quantity \t Unit Price\t Total Price\n`;

const orderDetails = JSON.parse(data.original.orderDetails);
receipt += `${orderDetails} \t ${data.original.totalAmount / orderDetails} \t Rs: ${data.original.totalAmount / orderDetails} \t Rs: ${data.original.totalAmount}\n`;

receipt += `\nSubTotal: ${data.original.totalAmount}\n\n`;
receipt += `\nSgst: ${(data.original.totalAmount * 0.025)}\n\n`;
receipt += `\nCgst: ${(data.original.totalAmount * 0.025)}\n\n`;
receipt += `\nGrand Total (Including SGST and CGST): ${parseInt(data.original.totalAmount) + parseInt(data.original.totalAmount * 0.05)}\n\n`;

receipt += `Date: ${dateTime}\n`;


    const printWindow = window.open('');
    printWindow.document.write('<html><head><title>Receipt</title></head><body>');
    printWindow.document.write(`<pre>${receipt}</pre>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  const table = useMaterialReactTable({
    columns,
    data:props.data,
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
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => handleDelete(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        {/* <Tooltip title="Print">
          <IconButton color="error" onClick={() => printReceipt(row)}>
            <Print/>
          </IconButton>
        </Tooltip> */}
      </Box>
    ),
  });




  const fetchAllSelfOrders = async () => {
    const result = await getData("selforder/displayallselforders");
    // console.log(result);
    // alert(JSON.stringify(result.reverse()))
    setData(result.reverse());
   
  };

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
      >
       
        <MaterialReactTable table={table} />
      </Grid>
       {EditDialog()}
    </Grid>
  );
}
