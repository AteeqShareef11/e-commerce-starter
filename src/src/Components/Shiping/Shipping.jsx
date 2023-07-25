/* eslint-disable import/no-unresolved */
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";
import ContactInformation from "./ContactInformation";

const Shipping = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  return (
    <Grid container p={3}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
        <img src={logo} alt="none" width={"20%"} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
        <Box className="flexCenter">
          <Typography
            className="productInfoOrderBrod"
            sx={{ color: "gray" }}
          >
            Cart
          </Typography>
          <ArrowForwardIosIcon className="productInfoOrderPrice" />
          <Typography
            className="productInfoOrderBrod"
            sx={{ color: "gray" }}
          >
            Information
          </Typography>
          <ArrowForwardIosIcon className="productInfoOrderPrice" />
          <Typography className="productInfoOrderBrod" sx={{ color: "black" }}>
            Shipping
          </Typography>
          <ArrowForwardIosIcon className="productInfoOrderPrice" />
          <Typography className="productInfoOrderBrod">Payment</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={2} py={1}>
        <ContactInformation />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={2}>
        <Typography className="productInfoOrderBrod">
          <Typography className="links" onClick={() => navigate("/proceed/information", { state: { values: state.values } })}
          >
            <ArrowBackIosIcon className="productInfoOrderPrice" />
            Return to Information
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={2}>
        <Button
          variant={"addToCart"}
          height={"180%"}
          onClick={() => navigate("payment", { state: { values: state.values } })}
        >
          Continue to Shipping
        </Button>
      </Grid>
    </Grid >
  );
};

export default Shipping;
