import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import img1 from "../../../Digital Card Assets/logo192.png";
import img2 from "../../assets/jo.png";
import img3 from "../../assets/hair.png";

export default function Text() {
  return (
    <Grid sx={{ ml: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={10} sx={{ backgroundColor: "#95a5a6", padding: 1 }}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <img src={img1} style={{ width: 60 }} />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", fontSize: 20 }}>
            We do
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", fontSize: 20 }}>
            Customer trust 4.0
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", fontSize: 20 }}>
            For YOUR business
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center" }}>
            digital card hub changes the way you look at your customers, guests and
            patients. With our follower and review solutions, you can turn your{" "}
            <br />
            customers into an independent marketing tool! Instead of leaving
            your customers as regular customers after the purchase, we help you
            to convert them into an influential, <br />
            trustworthy and highly effective marketing tool after the purchase,
            which gives you more reach, more awareness, more attention, more
            trust, a high <br /> reputation and thus brings in more sales! With
            our review and follow solutions, we get your customers to always
            review you positively on Google and to follow you on
            <br /> Facebook and Instagram ⭐And the best: Recommendations even
            ensure that they not only bring you new customers, but also buy them
            from you again!
            <br />
            This is how customer loyalty works today!
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", mt: 1 }}>
            <Button
              variant="outlined"
              sx={{ borderRadius: "10%", borderColor: "orange" }}
            >
              How it works
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={10} sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: { xs: 18, md: 30 }, fontWeight: "bold" }}>
            The effective interface between offline & online, between <br />{" "}
            customer & dealer for more Google and online reviews{" "}
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ textAlign: "center" }}>
          With digital card hub you make it easy for your customers to review your
          company on Google or Tripadvisor and to <br /> follow you on Instagram
          and Facebook. This saves you having to buy expensive and fake Google
          and online
          <br /> reviews. Receive ratings directly on Google and your relevant
          channels from satisfied customers - without <br /> detours and without
          monthly costs.
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <img src={img2} style={{ width: "60%" }} />
        </Grid>
        <Divider />

        <Grid item xs={10} sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: { xs: 18, md: 30 }, fontWeight: "bold" }}>
            Easily get your customers to review you on Google or to <br />
            follow you on Instagram & Co.{" "}
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ textAlign: "center" }}>
          We offer two types of follow-up and review solutions to companies.
          From rating cards, rating stickers and <br /> business cards that ask
          your customers for a nice rating, to a reward function in the form of
          discounts or <br />
          competitions that you define in advance so that your customers receive
          a reward in the form of a discount,
          <br /> discount or of a win. In this way you increase customer loyalty
          & ensure that your customers buy from you
          <br /> again.
        </Grid>

        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <img src={img3} style={{ width: "90%" }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
