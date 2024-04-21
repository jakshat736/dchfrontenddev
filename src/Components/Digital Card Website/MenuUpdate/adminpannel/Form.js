import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { getData, postData, serverURL } from "../../../Services/NodeServices";

export default function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await getData("index/getData");
    setData(result.data); // Update the data state with the fetched data
  };

  const handleSubmit = async () => {
    var formdata = new FormData();
    formdata.append("Name", name);
    formdata.append("password", password);
    const response = await postData("index/add", formdata, true);
    alert(response.data.id);
  };
   
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <Grid item xs={6}>
            <TextField
              value={item.Name}
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              label="name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={item.password}
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
          </Grid>
        </React.Fragment>
      ))}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
