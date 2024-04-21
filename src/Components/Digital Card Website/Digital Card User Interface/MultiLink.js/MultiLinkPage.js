import React from 'react'
import { Stack, Grid, Button } from "@mui/material"
import logo from '../../Digital Card Assets/newlogo.png'
const MultiLinkPage = ({ data }) => {
    console.log(data)
    return (

        <Grid item xs={12}  sx={{ display: "flex",alignItems:'center', justifyContent: 'center', fontSize: 60, marginBottom: 3, color: '#000' ,height:'100%'}}>
            <Grid>
                <Grid item xs={12} class='welcome1' sx={{ display: "flex", justifyContent: 'center', fontSize: 60, marginBottom: 3, color: '#fff' }}>
                    Welcome
                </Grid>
                <Stack spacing={2}>
                    {
                        data?.links?.map((item) =>
                            <Button variant='contained' href={item?.link} fullWidth sx={{color:"#fff",backgroundColor:'#171717',width:'100%',"&:hover":{color:"#fff",backgroundColor:'#171717'}}}>
                                {item?.title}
                            </Button>
                        )
                    }
                    
                </Stack>
            </Grid>

        </Grid>
    )
}

export default MultiLinkPage
