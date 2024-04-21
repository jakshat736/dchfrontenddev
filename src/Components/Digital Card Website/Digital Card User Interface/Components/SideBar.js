import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { AssistWalkerTwoTone } from '@mui/icons-material';
import { getData } from '../../../Services/NodeServices';

const pages = [
        { url: "/", name: "Home" },
        // {url:"",name:"Products"},
        // {url:"",name:"Cart"},
        { url: "/compatible-devices", name: "Compatible Devices" },
        { url: "/how_to_create", name: "How To Create" },
        { url: "/allproducts", name: "All Products" },
        { url: "/digitalcardlogin", name: "Login/Sign Up" },]


export default function TemporaryDrawer() {
        const navigate = useNavigate()
        const [state, setState] = React.useState({
                top: false,
                left: false,
                bottom: false,
                right: false,
        });
        const [open1, setOpen1] = React.useState(false);
        const [category, setCategory] = React.useState([]);

        const handleClick = () => {
               
                setOpen1(!open1);
        };

        const toggleDrawer = (anchor, open) => (event) => {
                // alert(anchor)
                if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                        return;
                }
                setState({ ...state, [anchor]: open });
        };

        const FetchAllCategory = async () => {
                var data = await getData("category/display_all_category");

                setCategory(data.data);
              
        };
        const handleNavigate=(item,anchor)=>{
                setOpen1(false)
                const closeDrawer = toggleDrawer(anchor, false); // Get the toggleDrawer function
                closeDrawer();
                navigate(`/productspage/${item._id}`,{state:{category:item.categoryname}})
        }

        React.useEffect(function () {
                FetchAllCategory();
        }, []);

        const list = (anchor) => (
                <Box
                  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, background: "#001E3C", height: "100vh" }}
                  role="presentation"
                >
                  <Typography sx={{ fontSize: "1.5em", fontWeight: 700, color: "#ffffff", textAlign: "center", mt: 2 }}>
                    Digital Card Hub
                  </Typography>
                  <List>
                    {pages.map((text) => (
                      <ListItem key={text.name} disablePadding>
                        <ListItemButton onClick={() => navigate(text.url)}>
                          <ListItemText sx={{ color: "#ffffff", textAlign: "left", ml: 2 }} primary={text.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem key={"Shop"} disablePadding>
                      <ListItemButton onClick={handleClick}>
                        <ListItemText sx={{ color: "#ffffff", textAlign: "left", ml: 2 }} primary={"Shop"} />
                      </ListItemButton>
                    </ListItem>
                    {open1 && (
                      <List sx={{ paddingLeft: 2 }}>
                        {category.map((item) => (
                          <ListItem key={`${item._id}`} disablePadding>
                            <ListItemButton onClick={() => handleNavigate(item, anchor)}>
                              <ListItemText sx={{ color: "#ffffff", textAlign: "left" }} primary={`${item.categoryname}`} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </List>
                </Box>
              );
              
              // ... (remaining code)
              
        return (
                <div>
                        {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                        <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{ color: "#ffffff", fontSize: "3em" }} /></Button>
                                        <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                                onClose={toggleDrawer(anchor, false)}
                                        >
                                                {list(anchor)}

                                        </Drawer>
                                </React.Fragment>
                        ))}
                </div>
        );
}