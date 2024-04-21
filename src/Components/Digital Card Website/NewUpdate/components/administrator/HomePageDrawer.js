import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Facebook, FoodBankOutlined, Google, Instagram } from '@mui/icons-material';


const data=[
  {
    name:'Google',
    icon:<Google/>
  },
  {
    name:'Instagram',
    icon:<Instagram/>
  },
  {
    name:'Facebook',
    icon:<Facebook/>
  },
  {
    name:'Food Menu',
    icon:<FoodBankOutlined/>
  },
]

export default function SwipeableTemporaryDrawer(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
     const [open,setOpen]=React.useState(false)
    const handleOpenDrawer=()=>{
        alert(true)
         setOpen(true)
       }
  const [state, setState] = React.useState(false)
   
 

  const toggleDrawer = (anchor, open) => (event) => {
  
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {data.map((item, index) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>
     
        <React.Fragment key={'left'}>
 <IconButton onClick={toggleDrawer('left', true)} sx={{mt:3}}> 
       <MenuIcon/>
        </IconButton>
          <SwipeableDrawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
