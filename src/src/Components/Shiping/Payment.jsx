/* eslint-disable import/no-unresolved */
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import CustomButton from "../UI/Buttons/CustomButton";
import Radio from "@mui/material/Radio";
import ContactInformation from "./ContactInformation";
import logo from "../../assets/logo.webp";

const Payment = () => {
  // Radio Button
  const { state } = useLocation()
  const [selectedValue, setSelectedValue] = React.useState("null");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    size: "large",
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  // Radio Button

  return (
    <Grid container p={3}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
        <img src={logo} alt="none" width={"20%"} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
        <Box className="flexCenter">
          <Typography
            className="productInfoOrderBrod"
            sx={{ cursor: "pointer" }}
          >
            Cart
          </Typography>
          <ArrowForwardIosIcon className="productInfoOrderPrice" />
          <Typography
            sx={{ cursor: "pointer" }}

            className="productInfoOrderBrod"

          >
            Information
          </Typography>
          <ArrowForwardIosIcon className="productInfoOrderPrice" />
          <Typography
            className="productInfoOrderBrod"
            sx={{ cursor: "pointer" }}


          >
            Shipping
          </Typography>
          <ArrowForwardIosIcon className="productInfoOrderPrice" />
          <Typography className="productInfoOrderBrod" sx={{ color: "black", cursor: "pointer" }}
          >
            Payment
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={2} py={1}>
        <ContactInformation />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={2} pt={2}>
        <Typography className="productInfoOrderTitle1">
          Payment Method
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        px={1}
        pt={1}
        className="flexCenter"
      >
        <Radio
          {...controlProps("Cash on Delivery")}
          checked
          sx={{
            color: "black",
            "&.Mui-checked": {
              color: "black",
            },
          }}
        />
        <Typography className="productInfoOrderTitle">
          Cash on Delivery (COD)
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} p={2}>
        <Typography className="productInfoOrderBrod">
          <Typography onClick={() => navigate("/proceed/information", { state: { values: state.values } })}>
            <ArrowBackIosIcon className="productInfoOrderPrice" />
            Return to Information
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} p={2}>
        <Button
          variant={"addToCart"}
          onClick={() => navigate("order", { state: { values: state.values } })}
        >
          Complete Order
        </Button>
      </Grid>
    </Grid>
  );
};

export default Payment;
