import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { getData } from ".././Services/NodeServices";
import MaterialTable from "@material-table/core";
import { useStyles } from "./DisplayAllCategoryCss"
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
import { useTheme } from "@mui/material/styles";

const Input = styled('input')({
  display: 'none',
});


export default function DisplayAllUsers(props) {

  var theme = useTheme()
  const classes = useStyles()
  const matches = useMediaQuery(theme.breakpoints.down(700))
  const [enquiries, setEnquiries] = useState([])
  const [socket, setSocket] = React.useState()


  const handleDelete = async (_id) => {
    var formData = new FormData();
    formData.append("_id", _id);

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const response = await postData('customerLogin/deleteUser', formData, true)
        console.log(response)
        if (response.status == true || response.status == 'true') {
          fetchAllEnquiries()
        }
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }



  useEffect(function () {

    fetchAllEnquiries()

  }, [socket])

  function displayTable() {
    return (
      <MaterialTable
        title={"User List"}
        data={enquiries}
        style={{}}
        columns={[
          {
            title: "Delete",
            render: (rowData) => (
              <div>
                <Button
                  variant='contained'
                  onClick={() => handleDelete(rowData._id)}
                >Delete</Button>
              </div>
            ),
          },
          {
            title: "User Id",
            field: "_id",

          },

          {
            title: "Unique Card Id",
            field: "companyId",

          },
          {
            title: "Name",
            field: "name",
          },

          {
            title: "Phone Number",
            field: "phone",
          },
          {
            title: " Email Id",
            field: "email",
          },
          {
            title: "Password",
            field: "password",
          },



        ]}
        actions={[


        ]}

      />
    );
  }



  const fetchAllEnquiries = async () => {
    const result = await getData('customerLogin/displayallusers')

    setEnquiries(result.data.reverse())
  }




  return (


    <Grid container spacing={2} style={{
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Grid item xs={12} sm={12} style={{ marginTop: 20, fontSize: matches ? 10 : 20 }}>
        {displayTable()}</Grid>  </Grid>

  )

}