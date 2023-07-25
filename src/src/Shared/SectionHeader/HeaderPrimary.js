/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const HeaderPrimary = ({ title }) => {
  return (
    <Container maxWidth="lg">
      <Grid alignItems={'center'} container>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: 'black',
              width: '100%',
              height: '1px',
            }}
          ></Box>
        </Grid>
        <Grid item xs={4}>
          <Typography fontSize={'20px'} fontWeight={700} textAlign={'center'}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: 'black',
              width: '100%',
              height: '1px',
            }}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderPrimary;
