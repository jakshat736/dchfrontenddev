import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../Digital Card Assets/New Logo New.png";
import 'animate.css';
import { Container, IconButton, List, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import { NestedMenuItem } from "mui-nested-menu";
import { MenuItem, Menu } from "@mui/material";
import { ClickAwayListener, Divider } from "@mui/material";
import { ArrowDownwardRounded, ArrowDropDown, ShoppingBag } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { getData, postData } from '../../../Services/NodeServices';
import { SessionContext } from '../../../Services/SessionContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from '../../NewUpdate/components/administrator/Header';
export default function Navbar() {

        const navigate = useNavigate();
        const [open, setOpen] = React.useState(false);
        const anchorRef = React.useRef(null);
        const [anchorEl, setAnchorEl] = React.useState(null);
        const [category, setCategory] = React.useState([]);
        const { cart, setCart } = useContext(SessionContext);
        const Token = window.localStorage.getItem("Token");
        const User = window.localStorage.getItem("UserNumber")

        const func = async () => {
                var formdata = new FormData();
                formdata.append("mobile", User);
                var response = await postData("cart/getAllProducts", formdata, true);
                if (response) {
                        console.log(response.products)
                        setCart(response.products);
                } else {

                }
        };
        useEffect(() => {
                if (User != null) {
                        func()
                }
        }, [])
        const FetchAllCategory = async () => {
                var data = await getData("category/display_all_category");

                setCategory(data.data);
        };


        React.useEffect(function () {
                FetchAllCategory();
        }, []);
        const handleToggle = () => {
                setOpen((prevOpen) => !prevOpen);
        };
        const theme = useTheme();
        const mobile = useMediaQuery(theme.breakpoints.down("xs"));
        const medium = useMediaQuery(theme.breakpoints.down(900));
        const handleClose = () => {
                setAnchorEl(null);
                setOpen(false);
        };
        function handleListKeyDown(event) {
                if (event.key === "Tab") {
                        event.preventDefault();
                        setOpen(false);
                } else if (event.key === "Escape") {
                        setOpen(false);
                }
        }
        const handleSideBar = () => {
                return (
                        <>
                                <SideBar />
                        </>
                )
        }

        const handleCart = () => {
                if (cart.length > 0) {
                        navigate('/cart')
                } else {
                        Swal.fire({
                                title: 'Cart Is Empty Add Some Product First',
                                showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                },
                                icon: "warning"
                        })
                }
        }

        return (
                <>

                        <Box sx={{ flexGrow: 1 }}>

                                <AppBar position="fixed" sx={{ background: "rgba(0, 30, 60,0.6)", boxShadow: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                                        <Container maxWidth="xl" sx={{ background: "transparent", boxShadow: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                                <Box >
                                                        <img onClick={() => navigate("/")} src={Logo} style={{ width: mobile ? "51px" : medium ? "100px" : "130px" }} />
                                                </Box>
                                                <Toolbar>
                                                        <Button sx={{ display: { xs: "none", md: "block" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }} onClick={() => navigate("/")}>Home</Button>
                                                        <Button onClick={() => navigate("/compatible-devices")} sx={{ display: { xs: "none", md: "block" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }}>Compatible Devices</Button>
                                                        <Button onClick={() => navigate("/how_to_create")} sx={{ display: { xs: "none", md: "block" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }}>How To Create</Button>
                                                        <Button onClick={() => navigate("/allproducts")} sx={{ display: { xs: "none", md: "block" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }}>All Products</Button>

                                                        <Button id="composition-button"
                                                                aria-controls={open ? "composition-menu" : undefined}
                                                                aria-expanded={open ? "true" : undefined}
                                                                aria-haspopup="true"
                                                                onMouseEnter={handleToggle}
                                                                onMouseLeave={handleToggle} sx={{ display: { xs: "none", md: "flex" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }}>Shop<Grid><ArrowDropDown /></Grid>
                                                                <Popper
                                                                        open={open}
                                                                        anchorEl={anchorRef.current}
                                                                        role={undefined}
                                                                        placement="bottom"
                                                                        transition
                                                                        disablePortal
                                                                        sx={{ zIndex: 1 }}
                                                                >
                                                                        {({ TransitionProps, placement }) => (
                                                                                <Grow
                                                                                        {...TransitionProps}
                                                                                        style={{
                                                                                                transformOrigin:
                                                                                                        placement === "bottom-start"
                                                                                                                ? "left top"
                                                                                                                : "left bottom",
                                                                                        }}
                                                                                >
                                                                                        <Paper sx={{ marginRight: 10 }}>

                                                                                                <MenuList
                                                                                                        autoFocusItem={open}
                                                                                                        id="composition-menu"
                                                                                                        aria-labelledby="composition-button"
                                                                                                        onKeyDown={handleListKeyDown}
                                                                                                        style={{ fontWeight: "bold", width: 300 }}
                                                                                                >
                                                                                                        <List component="div" >
                                                                                                                {
                                                                                                                        category.map((item) => (
                                                                                                                                <ListItemButton onClick={() => navigate(`/productspage/${item._id}`, { state: { category: item.categoryname } })}>

                                                                                                                                        <ListItemText primary={`${item.categoryname}`} sx={{ color: '#001E3C', fontWeight: 700, }} />
                                                                                                                                </ListItemButton>
                                                                                                                        ))
                                                                                                                }
                                                                                                        </List>


                                                                                                </MenuList>

                                                                                        </Paper>
                                                                                </Grow>
                                                                        )}
                                                                </Popper></Button>
                                                        <Button onClick={() => navigate("/digitalcardlogin")} sx={{ display: { xs: "none", md: "block" }, color: "#ffffff", fontSize: "1em", fontFamily: "Oxanium", letterSpacing: "0.1em", fontWeight: 600, m: "0px 5px" }} ref={anchorRef}
                                                        >Login/Sign Up</Button>
                                                        <IconButton
                                                                size="large"
                                                                edge="start"
                                                                color="inherit"
                                                                aria-label="menu"
                                                                sx={{ mr: 2, color: "white" }}
                                                                onClick={() => handleCart()}
                                                        >
                                                                <ShoppingBag />
                                                                {cart.length}
                                                        </IconButton>
                                                        {medium ? <>
                                                                {<SideBar />}
                                                        </> : <></>}
                                                </Toolbar>
                                        </Container>
                                </AppBar>
                        </Box>
                </>
        );
}