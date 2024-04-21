import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData, postData } from '../Services/NodeServices';

const LinkGenrator = () => {

  const [link, setLink] = React.useState('');
  const [multiLink, setMultiLink] = React.useState('');
  const [vehicleLink, setVehicleLink] = React.useState('');
  const [doorLink, setDoorLink] = React.useState('');
  const [businessLink, setBusinessLink] = useState("")
  const [menuLink, setMenuLink] = useState("")
  const [companyName, setCompanyName] = useState("");
  const [clientName, setClientName] = useState("");
  const [multiClientName, setMultiClientName] = useState("");
  const [vehicleClientName, setVehicleClientName] = useState("");
  const [doorClientName, setDoorClientName] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [inviteName, setInviteName] = useState("");
  const [inviteLink, setInviteLInk] = useState("");
  const [masters, setMasters] = useState([])
  const [selectedMaster,setSelectedMaster]=useState("DCH")
  const [selectedVehicleMaster,setSelectedVehicleMaster]=useState("DCH")
  const [selectedDoorMaster,setSelectedDoorMaster]=useState("DCH")
  const [selectedMultiMaster,setSelectedMultiMaster]=useState("DCH")


  const handleCopy = () => {


    // Copy the text inside the text field
    navigator.clipboard.writeText(link);


  }
  const handleMultiCopy = () => {


    // Copy the text inside the text field
    navigator.clipboard.writeText(multiLink);


  }
  const handleVehicleCopy = () => {
    navigator.clipboard.writeText(vehicleLink);
  }

  const handleDoorCopy = () => {
    navigator.clipboard.writeText(vehicleLink);
}

  const handleBusinessCopy = () => {


    // Copy the text inside the text field
    navigator.clipboard.writeText(businessLink);


  }
  const handleMenuCopy = () => {


    // Copy the text inside the text field
    navigator.clipboard.writeText(menuLink);


  }
  const handleInviteCopy = () => {


    // Copy the text inside the text field
    navigator.clipboard.writeText(inviteLink);


  }
  const handleGenerate = async () => {
    if (clientName != '') {
      var formData = new FormData
      formData.append("clientName", clientName)
      formData.append("masterId",selectedMaster)
      const res = await postData('review/addTagLinkId', formData, true)

      if (res.status == "true") {
        setLink(`https://digitalcardhub.in/#/tag/${res.tagId}`)
      }
    }
  }
  const handleMultiGenerate = async () => {
    if (multiClientName != '') {
      var formData = new FormData
      formData.append("clientName", multiClientName)
      formData.append("masterId",selectedMultiMaster)
      const res = await postData('multi/addTagLinkId', formData, true)

      if (res.status == "true") {
        setMultiLink(`https://digitalcardhub.in/#/multi/${res.tagId}`)
      }
    }
  }
  const handleVehicleGenerate = async () => {
    if (vehicleClientName != '') {
      var formData = new FormData
      formData.append("clientName", vehicleClientName)
      formData.append("masterId",selectedVehicleMaster)
      const res = await postData('vehicle/addTagLinkId', formData, true)

      if (res.status == "true") {
        setVehicleLink(`https://digitalcardhub.in/#/vehicle/${res.tagId}`)
      }
    }
  }
  const handleDoorGenerate = async () => {
    if (doorClientName != '') {
      var formData = new FormData
      formData.append("clientName", doorClientName)
      formData.append("masterId",selectedDoorMaster)
      const res = await postData('door/addTagLinkId', formData, true)

      if (res.status == "true") {
        setDoorLink(`https://digitalcardhub.in/#/door/${res.tagId}`)
      }
    }
  }
  const handleMenuGenerate = async () => {
    if (restaurantName != '') {
      var formData = new FormData
      formData.append("menuId", restaurantName.replace(/\s/g, ''))
      formData.append("restaurantName", restaurantName)
      const res = await postData('menulink/add', formData, true)

      if (res.status == true) {
        setMenuLink(`https://digitalcardhub.in/#/menu/${res.data.menuId}`)
      }
    }
  }
  const handleInviteGenerate = async () => {
    if (inviteName != '') {
      var formData = new FormData
      formData.append("inviteId", inviteName.replace(/\s/g, ''))
      formData.append("inviteName", inviteName)
      const res = await postData('invitelink/add', formData, true)

      if (res.status == true) {
        setInviteLInk(`https://digitalcardhub.in/#/invite/${res.data.inviteId}`)
      }
    }
  }

  const handleClick = async () => {
    if (companyName != "") {
      var formData = new FormData
      formData.append('companyId', companyName.toLowerCase())

      const response = await postData('carddetails/verifyCompanyName', formData, true)

      var formData1 = new FormData
      formData1.append('companyId', companyName.replace(/\s/g, ''))
      const result = await postData('generatedcompanylink/checkCompanyName', formData1, true)
      // alert(JSON.stringify(response))
      if (response.status != true && result.status != true) {
        var Formdata = new FormData
        Formdata.append("companyId", companyName.replace(/\s/g, ''));
        Formdata.append("link", `https://digitalcardhub.in/#/${companyName.replace(/\s/g, '').toLowerCase()}`);
        const res = await postData('/generatedcompanylink/add', Formdata, true)
        setBusinessLink(`https://digitalcardhub.in/#/${companyName.replace(/\s/g, '').toLowerCase()}`)
      } else {
        setBusinessLink("Check For Another Name")
      }

    }
  }

  const fetchAllMaster = async () => {
    const result = await getData('master/displayallusers')
    setMasters(result.data.reverse())
  }
  useEffect(function () {
    fetchAllMaster()
  }, [])

  const handleChange=(e)=>{
      setSelectedMaster(e.target.value)
  }
  const handleVehicleMasterChange=(e)=>{
    setSelectedVehicleMaster(e.target.value)
}
const handleDoorMasterChange=(e)=>{
  setSelectedDoorMaster(e.target.value)
}
const handleMultiMasterChange=(e)=>{
  setSelectedMultiMaster(e.target.value)
}







  return (
    <Grid>
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <Paper elevation={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: '50%', mt: 5 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <FormControl fullWidth  sx={{width:"100%"}}>
              <InputLabel id="demo-simple-select-label">Masters</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedMaster}
                label="Masters"
                onChange={handleChange}
                sx={{width:"100%"}}
              >
                <MenuItem value={"DCH"}>DCH</MenuItem>
               {
                masters?.map((item)=>
                <MenuItem value={item.name}>{item.name}</MenuItem>
                )
               }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <TextField

              value={clientName}
              onChange={(e) => setClientName(e.target.value)}

              label="Client Name"
              required

            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Button variant='contained' onClick={() => handleGenerate()}>Generate Review/social media tag link</Button>
          </Grid>

          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Typography>{link}</Typography>
          </Grid>
          {link && <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX: "30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleCopy()}>Copy</Button>
          </Grid>}
        </Paper>


        <Paper elevation={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: '50%', mt: 5 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <FormControl fullWidth  sx={{width:"100%"}}>
              <InputLabel id="demo-simple-select-label">Masters</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedMultiMaster}
                label="Masters"
                onChange={handleMultiMasterChange}
                sx={{width:"100%"}}
              >
                <MenuItem value={"DCH"}>DCH</MenuItem>
               {
                masters?.map((item)=>
                <MenuItem value={item.name}>{item.name}</MenuItem>
                )
               }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <TextField

              value={multiClientName}
              onChange={(e) => setMultiClientName(e.target.value)}

              label="Client Name"
              required

            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Button variant='contained' onClick={() => handleMultiGenerate()}>Generate Multi tag link</Button>
          </Grid>

          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Typography>{multiLink}</Typography>
          </Grid>
          {multiLink && <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX: "30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleMultiCopy()}>Copy</Button>
          </Grid>}
        </Paper>
        <Paper elevation={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: '50%', mt: 5 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <FormControl fullWidth  sx={{width:"100%"}}>
              <InputLabel id="demo-simple-select-label">Masters</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedVehicleMaster}
                label="Masters"
                onChange={handleVehicleMasterChange}
                sx={{width:"100%"}}
              >
                <MenuItem value={"DCH"}>DCH</MenuItem>
               {
                masters?.map((item)=>
                <MenuItem value={item.name}>{item.name}</MenuItem>
                )
               }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <TextField

              value={vehicleClientName}
              onChange={(e) => setVehicleClientName(e.target.value)}

              label="Client Name"
              required

            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Button variant='contained' onClick={() => handleVehicleGenerate()}>Generate Vehicle tag link</Button>
          </Grid>

          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Typography>{vehicleLink}</Typography>
          </Grid>
          {vehicleLink && <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX: "30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleVehicleCopy()}>Copy</Button>
          </Grid>}
        </Paper>
        <Paper elevation={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: '50%', mt: 5 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <FormControl fullWidth  sx={{width:"100%"}}>
              <InputLabel id="demo-simple-select-label">Masters</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedDoorMaster}
                label="Masters"
                onChange={handleDoorMasterChange}
                sx={{width:"100%"}}
              >
                <MenuItem value={"DCH"}>DCH</MenuItem>
               {
                masters?.map((item)=>
                <MenuItem value={item.name}>{item.name}</MenuItem>
                )
               }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <TextField

              value={doorClientName}
              onChange={(e) => setDoorClientName(e.target.value)}

              label="Client Name"
              required

            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Button variant='contained' onClick={() => handleDoorGenerate()}>Generate Door tag link</Button>
          </Grid>

          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Typography>{doorLink}</Typography>
          </Grid>
          {doorLink && <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX: "30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleDoorCopy()}>Copy</Button>
          </Grid>}
        </Paper>
        <Paper elevation={5} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: '50%', mt: 5 }}>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Typography>Business Card link</Typography>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8, flexDirection: "column", alignItems: "center" }}>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Button variant='contained' onClick={() => handleClick()}>
                      Generate
                    </Button>
                  </InputAdornment>
                ),
              }}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}

              label="Company Name"
              required

            />
          </Grid>


          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Typography>{businessLink}</Typography>
          </Grid>
          {businessLink && <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX: "30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleBusinessCopy()}>Copy</Button>
          </Grid>
          } </Paper>
        <Paper elevation={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: '50%', mt: 5 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <TextField

              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}

              label="Restaurant Name"
              required

            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Button variant='contained' onClick={() => handleMenuGenerate()}>Generate Dynamic Menu link</Button>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Typography>{menuLink}</Typography>
          </Grid>
          {menuLink && <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX: "30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleMenuCopy()}>Copy</Button>
          </Grid>}
        </Paper>
        <Paper elevation={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: '50%', mt: 5 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <TextField

              value={inviteName}
              onChange={(e) => setInviteName(e.target.value)}

              label="Client Name"
              required

            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Button variant='contained' onClick={() => handleInviteGenerate()}>Generate Invite link</Button>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Typography>{inviteLink}</Typography>
          </Grid>
          {inviteLink && <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX: "30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleInviteCopy()}>Copy</Button>
          </Grid>}
        </Paper>
      </Grid>

    </Grid>
  )
}

export default LinkGenrator
