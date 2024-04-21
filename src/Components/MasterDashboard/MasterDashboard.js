import { Grid, Box, Tabs, AppBar, Toolbar, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tab from '@mui/material/Tab';
import logo1 from '../Digital Card Website/Digital Card Assets/dchlogo.png'
import MaterialTable from "@material-table/core";
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";
import { getData, postData } from '../Services/NodeServices';
import Swal from 'sweetalert2';
const MasterDashboard = () => {
    const [value, setValue] = React.useState('Review Tags');
      
  var theme =useTheme()  
  const matches=useMediaQuery(theme.breakpoints.down(700))
const[enquiries,setEnquiries]=useState([])
const [socket,setSocket]=React.useState()

const masterId=window.localStorage.getItem("masterId")



useEffect(function(){
  
   fetchAllReviewTags()

},[masterId])

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
      const response= await postData('review/deleteReviewTag',formData,true)
      console.log(response)
      if(response.status==true || response.status=='true'){
  fetchAllReviewTags()}
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
 
  
}


function displayTable() {
    return (
      <MaterialTable
      title={"Review List"}
        data={enquiries}
        style={{}}
        columns={[
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
              title: "Status",
              field: "status",
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

        ]}
        actions={[
          
        
        ]}
       
      />
    );
  }



    const fetchAllReviewTags=async()=>{
     { var formdata=new FormData
      formdata.append("masterId",masterId)
      var data = await postData("review/displayalltaglinksbymasterid",formdata,true);
      var newArray = [];
      if(data.status)
     { for (let item of data?.data) {
          var formData = new FormData;
          formData.append("tagId", item?.tagId);
      
          const response = await postData('/review/chkTagId', formData, true);
          console.log(response)
          if (response?.status==='true') {
              newArray.push(response?.data); // Insert the response into the newArray
          } else {
              newArray.push(item); // Insert the original item if no response found
          }
      }
      }}
      console.log(newArray?.reverse())
      setEnquiries(newArray)
        
    }


    


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Tab_Data=[
        // {
        //     name:"Users",
        //     component:<Grid item xs={12} sm={12} style={{marginTop:20,fontSize:matches?10:20}}>
        //     {displayTable()}</Grid>
        // },
        {
            name:"Review Tags",
            component:<Grid item xs={12} sm={12} style={{marginTop:20,fontSize:matches?10:20}}>
            {displayTable()}</Grid>
        },
    ]
    return (
        <Grid>
            <AppBar position="static" sx={{background: "#001e3c"}}>
                <Toolbar>
                    <img src={logo1} style={{width:100}}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Digital Card Hub Master Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ width: '100%',display:"flex",justifyContent:"center" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                >
                   {Tab_Data?.map((item)=>{
                    return <Tab value={item.name} label={item.name} />
                   })
                    
                }
                </Tabs>
            </Box>
            {Tab_Data.map((tab, index) => {
                    const isMatched = tab.name === value;
                    return isMatched && <Box key={tab.name}>{tab.component}</Box>;
                })}

        </Grid>
    )
}

export default MasterDashboard
