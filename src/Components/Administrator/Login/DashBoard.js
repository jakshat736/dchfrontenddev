import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import TopBar  from "./TopBar";
import SideBar from "./SideBar";
import DisplayAllEnquries from "../DisplayAllEnquries";

import DisplayAllRegistrations from "../DisplayAllRegistrations";

import { Grid } from "@mui/material";
import DisplayAllCards from "../DisplayAllCards";
import DisplayAllTags from "../DisplayAllTags";
import { useNavigate } from "react-router-dom";
import DisplayAllStandee from "../DisplayAllStandee";
import AddProduct from "../AddProduct";
import DisplayAllProducts from "../DisplayAllProducts";
import AddCategory from "../AddCategory";
import SubCategory from "../AddSubCategory";
import DisplaySubCategory from "../DisplaySubCategory";
import DisplayAllCategory from "../DisplayAllCategory";
import Order from "../Order";
import DisplayAllUsers from "../DisplayAllUsers";
import DisplayAllGeneratedLinks from "../DisplayAllGeneratedLinks";
import SelfOrder from "../SelfOrder";
import DisplayAllGeneratedCompanyLink from "../DisplayAllGeneratedCompanyLink";
import DisplayAllMenuLinks from "../DisplayAllMenuLinks";
import DisplayAllInviteLinks from "../DispalyAllInviteLinks";
import PaymentLink from "../PaymentLink";
import MasterId from "../MasterId";
import DisplayAllVehicleTag from "../DisplayAllVehicleTag";
import DisplayAllVehicleTagLink from "../DisplayAllVehicleTagLink";
import DisplayAllDoorTagLink from "../DisplayAllDoorTagLink";
import DisplayAllDoorTag from "../DisplayAllDoorTag";
export default function DashBoard(props){
    var navigate=useNavigate();
    let Session=window.localStorage.getItem("Session");
    console.log(Session)
    useEffect(()=>{
        if(Session!="true"){
            navigate('/adminlogin')
        }
    },[])

return(
    <div>
    <TopBar/>
   
        <Grid container spacing={2} style={{display:'flex',flexDirection:'row'}}>
          <Grid item xs={12} sm={2}> 
    <SideBar/>
    </Grid>
    <Grid item xs={12} sm={12} md={10}>
       <Routes>
              <Route element={<DisplayAllEnquries/>} path="/displayallenquiries" /> 
              <Route element={<DisplayAllUsers/>} path="/displayallusers" /> 
            
              <Route element={<DisplayAllRegistrations/>} path="/displayallregistrations" /> 
              <Route element={<DisplayAllCards/>} path="/displayallcards" /> 
              <Route element={<DisplayAllTags/>} path="/displayalltags" /> 
              <Route element={<DisplayAllStandee/>} path="/displayallstandee" /> 
              <Route element={<AddProduct/>} path="/addproduct" /> 
              <Route element={<AddCategory/>} path="/addcategory" /> 
              <Route element={<SubCategory/>} path="/addsubcategory" /> 
              <Route element={<DisplaySubCategory/>} path="/displaysubcategory" /> 
              <Route element={<DisplayAllCategory/>} path="/displayallcategory" /> 
              <Route element={<DisplayAllProducts/>} path="/displayallproduct" /> 
              <Route element={<Order/>} path="/orders" /> 
              <Route element={<DisplayAllGeneratedLinks/>} path="/displayalllinks" /> 
              <Route element={<DisplayAllGeneratedCompanyLink/>} path="/displayallcompanylinks" /> 
              <Route element={<DisplayAllMenuLinks/>} path="/displayallmenulinks" /> 
              <Route element={<DisplayAllInviteLinks/>} path="/displayallinvitelinks" /> 
              <Route element={<PaymentLink/>} path="/payment" /> 
              <Route element={<DisplayAllVehicleTag/>} path="/displayallvehicletags" /> 
              <Route element={<DisplayAllVehicleTagLink/>} path="/displayallvehiclelinks" /> 
              <Route element={<DisplayAllDoorTagLink/>} path="/displayalldoorlinks" /> 
              
              <Route element={<DisplayAllDoorTag/>} path="/displayalldoortags" /> 
              <Route element={<MasterId/>} path="/masterid" /> 
              <Route path="/selforder" element={<SelfOrder/>} />
       </Routes>
       </Grid>
       </Grid>
    </div>
)


}