import { Grid ,IconButton,Avatar} from '@mui/material'
import React, { useState } from 'react'

import { PhotoCamera } from '@mui/icons-material';

export default function UploadYourLogo() {
    const [Image, setImage] = useState({
        fileName: "",
        bytes: "",
      });
      const handleImage = (event) => {
        setImage({
          fileName: URL.createObjectURL(event.target.files[0]),
          bytes: event.target.files[0],
        });
      };
  
    
  


  return (
    <Grid item xs={12} >
            <IconButton
              fullWidth
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImage}
              />
              <PhotoCamera />
            </IconButton>

            <Avatar
              alt="Remy Sharp"
              variant="rounded"
              src={Image.fileName}
              sx={{ width: 56, height: 56 }}
            />
          </Grid>

  )
}
