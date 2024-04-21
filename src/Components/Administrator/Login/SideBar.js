import React,{useState,useEffect} from "react";
import { useStyles } from "./SideBarCss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function SideBar(props){
  const classes=useStyles()
  const handleLogout=()=>{
    window.localStorage.setItem("Session","false")
    window.location.reload()
  }
return(
    <div className={classes.rootDiv}>
    
    <div sx={{ width: 250, maxWidth:'100%'}}>
  
    
      <MenuList>
      
      <MenuItem>
          <ListItemIcon>
            <DashboardIcon fontSize="small" className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText className={classes.dashboardTextStyle}>DashBoard</ListItemText>
         
        </MenuItem>

        <Link to="/dashboard/selforder" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Self Order</ListItemText>  
        </MenuItem>
        </Link>

        <Link to="/dashboard/displayalllinks" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Generated Links</ListItemText>  
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallvehiclelinks" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Display All Vehicle Links</ListItemText>  
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayalldoorlinks" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Display All Door Links</ListItemText>  
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallcompanylinks" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Generated Company Links</ListItemText>  
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallinvitelinks" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Generated Invite Links</ListItemText>  
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallmenulinks" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Generated Menu Links</ListItemText>  
        </MenuItem>
        </Link>
        <Link to="/dashboard/payment" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Payment Link Generator</ListItemText>  
        </MenuItem>
        </Link>
        <Link to="/linkgenerator" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Link Generator</ListItemText>  
        </MenuItem>
        </Link>
        <Link to="/dashboard/masterid" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Create Master Id</ListItemText>  
        </MenuItem>
        </Link>

          <Link to="/dashboard/displayallenquiries" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Enquiry Form</ListItemText>  
        </MenuItem>
        </Link>

        
       
        <Link to="/dashboard/addcategory" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Category</ListItemText>
          
        </MenuItem>
        </Link>
       
        {/* <Link to="/dashboard/displayallcategory" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Display All Category</ListItemText>
          
        </MenuItem>
        </Link> */}
        <Link to="/dashboard/addsubcategory" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Sub Category</ListItemText>
          
        </MenuItem>
        </Link>
        {/* <Link to="/dashboard/displaysubcategory" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Display Sub Category</ListItemText>
          
        </MenuItem>
        </Link> */}
        <Link to="/dashboard/addproduct" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Product</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/orders" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Orders</ListItemText>
          
        </MenuItem>
        </Link>
        {/* <Link to="/dashboard/displayallproduct" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Products</ListItemText>
          
        </MenuItem>
        </Link> */}
        <Link to="/dashboard/displayallregistrations" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Custom design enquiry</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallcards" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cards</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallusers" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Users</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayalltags" className={classes.link}>
        <MenuItem >
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Review Tags</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallstandee" className={classes.link}>
        <MenuItem >
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Standee Tags</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallvehicletags" className={classes.link}>
        <MenuItem >
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Vehicle Tags</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayalldoortags" className={classes.link}>
        <MenuItem >
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Door Tags</ListItemText>
          
        </MenuItem>
        </Link>
        <MenuItem onClick={()=>handleLogout()}>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
          
        </MenuItem>
        
        <Divider />
        
      </MenuList>
    
    </div>
   
    </div>
)


}