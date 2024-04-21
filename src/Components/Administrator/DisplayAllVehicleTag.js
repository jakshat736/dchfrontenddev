import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
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

const Input = styled("input")({
  display: "none",
});

export default function DisplayAllVehicleTag(props) {
  var theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const [socket, setSocket] = React.useState();
  const [checked, setChecked] = React.useState(true);

  const handleChange = async(tagId,status) => {
   var formData = new FormData();
   formData.append("tagId",tagId);
   formData.append("status",status=="Active"?"inActive":"Active");
   const response= await postData('vehicle/updateTagStatus',formData,true)
  
   fetchAllTags();
  };

  useEffect(
    function () {
      fetchAllTags();
    },
    [socket]
  );

  const handleOpen = (rowData) => {
    setData(rowData);

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

   const handleDelete=async(tagId)=>{
    var formData = new FormData();
    formData.append("tagId",tagId);
     
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(async(result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const response= await postData('vehicle/deleteReviewTag',formData,true)
        console.log(response)
        if(response.status==true || response.status=='true'){
    fetchAllTags()}
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   
    
  }

  function displayTable() {
    return (
      <MaterialTable
        title={"Tag List"}
        data={tags}
        style={{}}
        columns={[
          {
            title: "Tag Status",
            render: (rowData) => (
              <div>
                <Switch
                  checked={rowData.status=="Active"?true:false}
                  onChange={()=>handleChange(rowData.tagId,rowData.status)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            ),
          },
          {
            title: "Delete",
            render: (rowData) => (
              <div>
                <Button
                 variant='contained'
                 onClick={()=>handleDelete(rowData.tagId)}
                >Delete</Button>
              </div>
            ),
          },
          {
            title: "Tag Id",
            field: "tagId",
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
            title: "Email Id",
            field: "email",
          },
          {
            title: "Password",
            field: "password",
          },
          {
            title:"Remaining Days",
            render: (rowData) => {
              const createdDate = new Date(rowData.createdDate);
              const currentDate = new Date();
              const timeDifference = createdDate.getTime() - currentDate.getTime();
              const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
              return (
                <div>
                  <Typography>{90-remainingDays} days</Typography>
                </div>
              );
            },
          }
          
        ]}
        actions={[]}
      />
    );
  }

  const fetchAllTags = async () => {
    const result = await getData("vehicle/displayalltags");
    console.log(result);
    setTags(result.reverse());
   
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
        {displayTable()}
      </Grid>
  
    </Grid>
  );
}
