import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


const ProductInformation = () => {
  const cartSlice = useSelector((s) => s?.cartSlice);

  const { pathname } = useLocation();
  return (
    <Grid container p={3}>
      {
        cartSlice?.cartItems?.map((item) => (
          <Grid key={item._id} item xs={12} p={2}>
            <Grid container className="flexCenter">
              <Grid item xs={10} sm={2} md={2} lg={2} xl={2}>
                <Box className="productInfoImageBox">
                  <img
                    src="https://images.unsplash.com/photo-1639016618259-523caef3a860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="productInfoImage"
                    className="productInfoImage"
                  />
                  <Typography className="productInfoOrderNumber">{item?.cartQuantity}</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                sx={{ paddingLeft: "5%" }}
              >
                <Typography className="productInfoOrderTitle">
                  {item?.title}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                sx={{ textAlign: "right" }}
              >
                <Typography className="productInfoOrderTitle">Rs.{item?.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))
      }


      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        p={2}
        sx={{
          borderTop: "1px solid rgba(0, 0, 0, 0.5)",

        }}
      >
        <Box className="flexSpaceBtw" sx={{ paddingTop: "1%" }}>
          <Typography className="productInfoOrderPrice">Subtotal</Typography>
          <Typography className="productInfoOrderPrice">Rs.{cartSlice.cartTotalAmount}</Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        p={2}
        sx={{
          borderTop: "1px solid rgba(0, 0, 0, 0.5)",


        }}
      >
        <Box className="flexSpaceBtw" sx={{ paddingTop: "1%" }}>
          <Typography className="productInfoOrderPrice1">Total</Typography>
          <Typography className="productInfoOrderPrice1">
            <span className="productInfoOrderPrice2">PKR</span>Rs {cartSlice.cartTotalAmount}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductInformation;
