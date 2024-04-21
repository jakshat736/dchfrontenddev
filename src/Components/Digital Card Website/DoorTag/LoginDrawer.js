import { Global } from '@emotion/react';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo1 from '../Digital Card Assets/dchlogo.png'
import { postData } from '../../Services/NodeServices';
import OtpGenerator from './OtpGenerator';

const drawerBleeding = 150;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function DoorEdgeDrawer(props) {
    const { windows } = props;
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const location = useLocation();
    let goahead = (location?.state?.goahead !== undefined && location?.state?.goahead !== null) ? location.state.goahead : true;

    const [open, setOpen] = React.useState(false);
    const [phoneNo, setPhoneNo] = React.useState("");
    const [verified, setVerified] = React.useState()
    const [otp, setOtp] = React.useState()

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleSubmit = async () => {


        var formData = new FormData

        formData.append('phone', phoneNo)
        // formData.append('password', password)


        var result = await postData('customerLogin/chkLogin', formData, true)


        if (result.status) {
            window.localStorage.setItem("userId", result.data._id)
            var formData = new FormData()
            formData.append('tagId', props?.tagId)
            formData.append('phone', result.data.phone)


            var response = await postData('door/customerLogin', formData, true)

            if (response.status == 'true') {
                Swal.fire({
                    title: 'Successfully Logged In!',
                    imageUrl: logo1,
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    background: '#001e3c',
                    timer: 1500,
                    width: 500,
                    padding: 15,
                    color: '#fff',
                    showConfirmButton: false,

                })
                navigate('/userdashboard')
                window.localStorage.setItem("User", true)
                window.localStorage.removeItem('data')
                window.localStorage.setItem("data", JSON.stringify(result.data))
            } else if (response.status == 'exist') {
                Swal.fire({
                    title: 'You already have an Account with this Phone',
                    showDenyButton: true,

                    confirmButtonText: 'Log In with another Email Id',
                    denyButtonText: `Sign Up for new Email Id`,
                    denyButtonColor: `green`,
                    confirmButtonColor: "#001E3C"
                })

            }


        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Fail to Login',
                showConfirmButton: false,
                timer: 1500
            })

        }


    }

    // This is used only for the example
    const container = windows !== undefined ? () => window().document.body : undefined;
    const handleOtp = (value) => {
        if (value.length == 4) {
            if (otp == value) {
                // setMessage("")
                setVerified(true)
                handleSubmit()
            } else {
                setVerified(false)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Wrong Otp',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }

    const handleopenotpdailog = async () => {

        if (phoneNo != '') {
            var otpval = OtpGenerator()

            setOtp(otpval)

            const apiUrl = `https://soft7.in/api/send?number=91${phoneNo}&type=text&message=Your Otp For Digital Card Hub - ${otpval}&instance_id=65B92B5C6DD7D&access_token=65b928bbcea41`;
            const response = await postData('otp/api', { url: apiUrl })
            // https://soft7.in/api/send?number=917225051627&type=text&message=test+message&instance_id=65B92B5C6DD7D&access_token=65b928bbcea41
        } else {
            Swal.fire({
                text: "Enter the Number First",
                timer: 1000
            })
        }


    }

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                    },
                }}
            />

            <Button onClick={toggleDrawer(true)} variant='contained' sx={{ fontSize: 25, backgroundColor: '#F3B419', color: "black", "&:hover": { backgroundColor: '#F3B419' } }}><Typography class='font'>Get Started</Typography></Button>
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={0}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{ borderRadius: 4 }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Grid container spacing={2} sx={{ p: 2 }}>
                        <Grid item xs={12}>
                            <Typography sx={{
                                fontSize: { xs: "1.5em", md: "2.6em", lg: "2.4em" },
                                fontWeight: 700,
                                fontFamily: "OXANIUM",
                                color: "#000000",
                                letterSpacing: "-0.2px",
                                mb: "2.5vh",
                                textAlign: "center"
                            }}>
                                Login / Signup
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField label="Whatsapp Number" type='tel' fullWidth value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
                        </Grid>
                        <Grid item xs={3} sx={{ display: "flex" }}>
                            <Button
                                fullWidth
                                onClick={handleopenotpdailog}
                                sx={{ fontSize: 25, backgroundColor: '#F3B419', color: "black", "&:hover": { backgroundColor: '#F3B419' } }}>
                                <Typography class='font'>
                                    Get Otp
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="One Time Password(OTP)" fullWidth onChange={(event) => handleOtp(event.target.value)} inputProps={{ maxLength: 4 }} />

                        </Grid>
                        <Grid item xs={12}>
                            OTP not received ? <a style={{ cursor: 'pointer' }} onClick={handleopenotpdailog}>Resend</a>
                        </Grid>
                        <Grid item xs={12}>
                            {verified == true ? "Verified" : verified == false ? "Not Verified" : ""}
                        </Grid>
                    </Grid>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}


DoorEdgeDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    windows: PropTypes.func,
    tagId: PropTypes.string
};


export default DoorEdgeDrawer;