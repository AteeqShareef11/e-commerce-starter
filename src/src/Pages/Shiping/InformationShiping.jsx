/* eslint-disable import/no-unresolved */
import { Grid } from '@mui/material';
import React from 'react';
import Information from 'src/src/Components/Shiping/Information';
import ProductInformation from 'src/src/Components/Shiping/ProductInformation';

const InformationShiping = () => {
  return (
    <Grid container sx={{ backgroundColor: "#F5F5F5" }}  >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ backgroundColor: "white" }} >
        <Information />
      </Grid>
      <Grid height={"100%"} item xs={12} sm={12} md={6} lg={6} xl={6}>
        <ProductInformation />
      </Grid>
    </Grid>
  );
};

export default InformationShiping;