import { TextField, Grid, Button, Avatar } from "@mui/material";
import { getData, postData } from "../Services/NodeServices";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import DisplayAllCategory from "./DisplayAllCategory";


const AddCategory = () => {
    const navigate = useNavigate();

  // CATEGORY VARIABLES
  const [getcategory, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const FetchAllCategory = async () => {
    var data = await getData("category/display_all_category");

    setCategoryData(data.data);
  };

  useEffect(function () {
     FetchAllCategory();
  }, []);
 
  // FUNCTION FOR ICON HANDLING
  

  // FUNCTION TO SUBMIT DATA
  const handleSubmit = async () => {
    var formdata = new FormData();
    formdata.append("categoryname", getcategory);
   
   
    var response = await postData("category/addcategory", formdata, true);
    if (response.result) {
      Swal.fire({
        icon: "success",
        title: "Done",
        title: "Record successfully submited",
      });
      FetchAllCategory()
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  // FUNCTION TO RESET THE FORM
  const handleClearValues = () => {
    setCategory("");
    
  };

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
    <div
      style={{
        borderRadius: 30,
        width: "100%",
        height: "50%",
        background: "white ",
        padding: "30px",
        marginTop: "5%",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontVariant: "small-caps",
              fontWeight: "bolder",
              fontWeight: "bold",
            }}
          >
            {" "}
            Category Interface
          </div>
          
        </Grid>
        <Grid sx={{ mt: 4 }} item xs={12}>
          <TextField
            onChange={(event) => setCategory(event.target.value)}
            value={getcategory}
            label="Category Name"
            fullWidth
          />
        </Grid>
        


        
        <Grid item xs={6}>
          <Button
            onClick={handleSubmit}
            style={{ marginTop: 40 }}
            fullWidth
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleClearValues}
            style={{ marginTop: 40 }}
            fullWidth
            color="primary"
            variant="contained"
          >
            Clear
          </Button>
        </Grid>
      </Grid>
      <Grid >
        <DisplayAllCategory category={categoryData} onChange={()=>FetchAllCategory()}/>
      </Grid>
    </div>
  </div>
  )
}

export default AddCategory
