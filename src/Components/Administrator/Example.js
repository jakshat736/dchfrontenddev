import {
    MaterialReactTable,
    useMaterialReactTable,
    createMRTColumnHelper,
  } from 'material-react-table';
  import { Box, Button } from '@mui/material';
  import FileDownloadIcon from '@mui/icons-material/FileDownload';
  import { mkConfig, generateCsv, download } from 'export-to-csv';
//   import { data } from './MakeData';
import { useEffect, useState } from 'react';
import { getData } from '../Services/NodeServices';
  
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
  
  const Example = () => {

    
  const [data, setData] = useState([]);
    const fetchAllSelfOrders = async () => {
        const result = await getData("selforder/displayallselforders");
        // console.log(result);
        alert((result.reverse()))
        setData(result.reverse());
       
      };
    useEffect(
        function () {
          fetchAllSelfOrders();
        },
        []
      );
    const handleExportRows = (rows) => {
      const rowData = rows.map((row) => row.original);
      const csv = generateCsv(csvConfig)(rowData);
      download(csvConfig)(csv);
    };
  
    const handleExportData = () => {
      const csv = generateCsv(csvConfig)(data);
      download(csvConfig)(csv);
    };
  
    const table = useMaterialReactTable({
      columns,
      data,
      enableRowSelection: true,
      columnFilterDisplayMode: 'popover',
      paginationDisplayMode: 'pages',
      positionToolbarAlertBanner: 'bottom',
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
            onClick={handleExportData}
            startIcon={<FileDownloadIcon />}
          >
            Export All Data
          </Button>
          <Button
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<FileDownloadIcon />}
          >
            Export All Rows
          </Button>
          <Button
            disabled={table.getRowModel().rows.length === 0}
            onClick={() => handleExportRows(table.getRowModel().rows)}
            startIcon={<FileDownloadIcon />}
          >
            Export Page Rows
          </Button>
          <Button
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            startIcon={<FileDownloadIcon />}
          >
            Export Selected Rows
          </Button>
        </Box>
      ),
    });
  
    return (<MaterialReactTable table={table} />);
  };
  
  export default Example;
  