
import { TextField, Button, Grid, Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { postData, getData } from "../Services/NodeServices";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ViewListIcon from '@mui/icons-material/ViewList';
import DisplaySubCategory from "./DisplaySubCategory";
import DisplayAllMasters from "./DisplayAllMasters";

export default function MasterId(props) {

    // STYLING VARIABLES


    // NAVIGATION VARIABLES
    const navigate = useNavigate();

    // SUBCATEGORY VARIABLES
    const [name,setName]=useState('')
    const [mail,setMail]=useState('')
    const [password,setPassword]=useState('')
const[masters,setMasters]=useState([])
    
const[subcategorydata,setSubcategory]=useState([ ])

    // FUNCTION TO FETCH THE CATEGORY
    // FUNCTION TO FETCH THE CATEGORY
    
    const fetchAllMaster=async()=>{
        const result=await getData('master/displayallusers')    
        setMasters(result.data.reverse())
    }
 useEffect( function(){
    fetchAllMaster()
},[])

   
    // FUNCTION TO HANDLE ICON
    
    // FUNCTION TO SUBMIT DATA
    const handlesubmit = async () => {
        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", mail.toLowerCase());
        formdata.append("password", password);
        var response = await postData("master/masterlogin", formdata, true);
        if (response.data) {
            Swal.fire({
                icon: "success",
                title: "Record successfully submited",
            });
            fetchAllMaster()
            handleClearValues()
        } else {
            Swal.fire({
                icon: "success",
                title: "Record successfully submited",
            });
        }
    };

    const handleClearValues=()=>{
        setName("");
        setMail("")
        setPassword("");
        
    }

    return (
        <div style={{justifyContent:'center',
        display:'flex',}}>
            <div style={{borderRadius:30,
        width:'100%',
        height:'50%',
        background:'white ',
        padding:'30px',
        marginTop:'5%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{ display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",}}>
                        <div style={{fontSize:32,
        fontVariant:"small-caps",
        fontWeight:'bolder',
        fontWeight:"bold" }}>Create Master id</div>
                       
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={(event) => setName(event.target.value)}
                            fullWidth
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={(event) => setMail(event.target.value)}
                            fullWidth
                            id="outlined-basic"
                            label="Mail Id"
                            variant="outlined"
                            value={mail}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={(event) => setPassword(event.target.value)}
                            fullWidth
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            value={password}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            onClick={handlesubmit}
                            color="primary"
                            variant="contained"
                            fullWidth
                        >
                            SUBMIT
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            onClick={handleClearValues}
                            color="primary"
                            variant="contained"
                            fullWidth
                        >
                            RESET
                        </Button>
                    </Grid>
                </Grid>
                <Grid >
                    <DisplayAllMasters masters={masters} onChange={()=>fetchAllMaster()}/>
                </Grid>
            </div>
        </div>
    );
}
