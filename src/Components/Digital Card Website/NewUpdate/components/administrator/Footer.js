import { Facebook, Instagram, LinkedIn, ShowChart, Twitter } from "@mui/icons-material";
import { Divider, Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";
import img1 from "../../assets/order.jpg";
import img2 from "../../assets/blink.jpg";
import img3 from "../../assets/thnku.jpg";
export default function Footer() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      {/* How it works */}
      <Grid container spacing={3} py={3} gap={3} justifyContent="center">
        <Grid item xs={12} ml={3} textAlign={!matches ? "center" : "left"}>
          <h3 style={{ margin: "0 0" }}>How it works</h3>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box bgcolor="white" sx={{ boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} display="flex" textAlign={!matches ? "center" : "left"} flexDirection={!matches ? "column" : "row"} alignItems="center" gap={matches ? 2 : 4} p={2} py={!matches ? 6 : 2}>
            <img src={img1} width={65} />
            <div>
              <b>Place an order</b>
              <div style={{ fontSize: 14, color: "gray" }}>Choose from a wide range of daily essentials.</div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box bgcolor="white" sx={{ boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} display="flex" textAlign={!matches ? "center" : "left"} flexDirection={!matches ? "column" : "row"} alignItems="center" gap={matches ? 2 : 5} p={2} py={!matches ? 6 : 2}>
            <img src={img2} width={80} />
            <div>
              <b>Don’t Blink</b>
              <div style={{ fontSize: 14, color: "gray" }}>Our delivery partner will be at your door</div>
            </div>
          </Box>

        </Grid>
        <Grid item xs={12} md={3}>
          <Box bgcolor="white" sx={{ boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} display="flex" textAlign={!matches ? "center" : "left"} flexDirection={!matches ? "column" : "row"} alignItems="center" gap={matches ? 0 : 4} p={2} py={!matches ? 6 : 2}>
            <img src={img3} width={80} />
            <div>
              <b>Enjoy</b>
              <div style={{ fontSize: !matches ? 14 : 12, color: "gray" }}>Boom! You’ll never have to wait for groceries again</div>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2 }} />

      {/* Footer */}
      <Grid container py={4}>
        <Grid item xs={12} md={3} order={matches ? 1 : 0}>
          <h2 style={{fontSize:'300%',color:'black',fontFamily:'poppins'}}>digital card hub</h2>
          <Divider sx={{ mt: 2 }} />
          <Box color="gray" display="flex" gap={3} pb={1}>
            <Instagram />
            <Twitter />
            <Facebook />
            <LinkedIn />
          </Box>
          <p style={{ color: "black", fontSize: 25 }}>The no.1 for customer trust</p>
        </Grid>
        <Grid item xs={12} md={6} container gap={5} justifyContent={matches ? "start" : "space-evenly"} fontSize={14}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 15, paddingLeft: matches ? 0 : 40 }}>
          <p style={{ color: "black", fontSize: 25 }}>INFOMATION</p>
            <li>About digital card hub</li>
            <li>Faqs</li>
            <li>Press</li>
          </ul>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 15 }}>
          <p style={{ color: "black", fontSize: 25 }}>CHANNEL</p>
            <li>Facebook</li>
            <li>Google</li>
            <li>Instagram</li>
             <li>Tripadvisor</li>
             <li>WhatsApp Chat QR code & NFC products</li>
             <li>kiyoh</li>
             <li>klanten vertellen</li>

          </ul>
          
        </Grid>

        <Grid item xs={12} md={3}>
          <p>Download App</p>
          <Box display="flex" alignItems="center" fontSize={14} gap={1} border="1px solid gray" p={1} justifyContent="center">
            <AppleIcon /> <span>Get it on app store</span>
          </Box>
          <Box mt={2} display="flex" alignItems="center" fontSize={14} gap={1} border="1px solid gray" p={1} justifyContent="center">
            <ShopIcon /> <span>Get it on play store</span>
          </Box>
        </Grid>
        {matches ? (
          <Grid item xs={12}>
            <Divider sx={{ mt: 4 }} />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
}
