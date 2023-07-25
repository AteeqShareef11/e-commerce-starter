/* eslint-disable import/no-unresolved */
import { Grid, Typography } from "@mui/material";
import React from "react";
import Payment from "src/src/Components/Shiping/Payment";
import ProductInformation from "src/src/Components/Shiping/ProductInformation";


const PaymentShipping = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "#F5F5F5" }}
    >
      <Grid
        height={"100vh"}
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{ backgroundColor: "white" }}
      >
        <Payment />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <ProductInformation />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        px={5}
        sx={{ zIndex: "0.1111", marginTop: "-1.3%" }}
      >
        <Typography className="productInfoOrderBottom">
          All rights reserved @ateeqshareef
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PaymentShipping;
