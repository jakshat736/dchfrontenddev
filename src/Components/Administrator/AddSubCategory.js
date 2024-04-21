
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

export default function SubCategory(props) {

    // STYLING VARIABLES


    // NAVIGATION VARIABLES
    const navigate = useNavigate();

    // SUBCATEGORY VARIABLES
    const [categoryId, setcategoryId] = useState("");
    const [subcategory, setsubcategory] = useState("");
    const [categoryList, setcategoryList] = useState([]);
    
const[subcategorydata,setSubcategory]=useState([ ])

    // FUNCTION TO FETCH THE CATEGORY
    // FUNCTION TO FETCH THE CATEGORY
    const FetchAllsubCategory=async()=>{
  var data=await getData('subcategory/display_all_subcategory')
  setSubcategory(data.data)  
}
 useEffect( function(){
  FetchAllsubCategory()
},[])

    const FetchAllCategory = async () => {
        var data = await getData("category/display_all_category");
        setcategoryList(data.data);
    };
    useEffect(function () {
        FetchAllCategory();
    }, []);

    // FUNCTION TO FILL THE SUBCATEGORY
    const FillAllCategory = () => {
        return categoryList.map((item) => {
            return <MenuItem value={item._id} style={{margin:10}}><Button variant='contained' fullWidth>{item.categoryname}</Button></MenuItem>;
        });
    };

    // FUNCTION TO HANDLE ICON
    
    // FUNCTION TO SUBMIT DATA
    const handlesubmit = async () => {
        var formdata = new FormData();
        formdata.append("categoryid", categoryId);
        formdata.append("subcategoryname", subcategory);
        var response = await postData("subcategory/addsubcategory", formdata, true);
        if (response.data) {
            Swal.fire({
                icon: "success",
                title: "Record successfully submited",
            });
            FetchAllsubCategory()
        } else {
            Swal.fire({
                icon: "success",
                title: "Record successfully submited",
            });
        }
    };

    // FUNCTION TO CHANGE CATEGORY
    const handleChange = (event) => {
       
        setcategoryId(event.target.value);
    };

    // FUNCTION TO RESET THE FORM
    const handleClearValues=()=>{
        setcategoryId("");
        setsubcategory("");
        
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
        fontWeight:"bold" }}>Add Sub Category</div>
                       
                    </Grid>
                    <Grid item xs={12} sx={{ mt:4,width: "100%" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categoryId}
                                label="Category"
                                onChange={handleChange}
                                style={{ display: "flex" }}
                            >
                                {FillAllCategory()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={(event) => setsubcategory(event.target.value)}
                            fullWidth
                            id="outlined-basic"
                            label="Subcategory"
                            variant="outlined"
                            value={subcategory}
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
                    <DisplaySubCategory subcategory={subcategorydata} onChange={()=>FetchAllsubCategory()}/>
                </Grid>
            </div>
        </div>
    );
}
