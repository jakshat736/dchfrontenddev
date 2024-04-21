import { Grid, Button } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';

export default function FloatingMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <Grid>
        <Button variant="contained" onClick={toggleMenu} sx={{borderRadius:'50%',width:'88px',height:'80px',bgcolor:'black',flexDirection:'column'}}>
          <MenuBookIcon sx={{display:'flex'}} />
           Menu
        </Button>
      </Grid>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'up',
          horizontal: 'straight',
        }}
      >
        <MenuItem onClick={handleClose}>
          Burger - $5.99
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Pizza - $8.99
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Pasta - $7.49
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Soyachap - $6.99
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Cold Coffee - $3.99
        </MenuItem>
      </Menu>
    </Grid>
  );
}
