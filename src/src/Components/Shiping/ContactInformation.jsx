import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactInformation = () => {
  const { pathname } = useLocation();
  const { state } = useLocation();
  const navigate = useNavigate()

  console.log("----------", state);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography className="productInfoOrderTitle1">
          Contact Information
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="contactInfoContainer"
      >
        <Box sx={{ paddingBottom: "2%" }}>
          <Grid container>
            <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
              <Typography className="productInfoOrderTitle">Contact</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              <Typography className="productInfoOrderTitle">
                {state?.values?.email}
              </Typography>
            </Grid>
            {pathname === "/cart/information/shipping/payment" ? null : (
              <Grid
                item
                xs={12}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                sx={{ textAlign: "right" }}
              >
                <Typography
                  className="productInfoOrderTitle"
                  sx={{ color: "gray", cursor: "pointer" }}
                  onClick={() => navigate("/proceed/information", { state: { values: state.values } })}

                >
                  Change
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
        <Box
          sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.5)", paddingTop: "2%" }}
        >
          <Grid container>
            <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
              <Typography className="productInfoOrderTitle">Ship to</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              <Typography className="productInfoOrderTitle">
                {state?.values?.address}
              </Typography>
            </Grid>
            {pathname === "/cart/information/shipping/payment" ? null : (
              <Grid
                item
                xs={12}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                sx={{ textAlign: "right" }}
              >
                <Typography
                  className="productInfoOrderTitle"
                  sx={{ color: "gray", cursor: "pointer" }}
                  onClick={() => navigate("/proceed/information", { state: { values: state.values } })}
                >
                  Change
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactInformation;
