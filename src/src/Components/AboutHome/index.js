import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Image1 from '../../assets/img1.webp';
import Image2 from '../../assets/img2.webp';
import Image3 from '../../assets/img3.webp';

const AboutHome = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', paddingY: 6, my: 6 }}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={4} xs={12}>
            <Stack alignItems={'center'} spacing={2}>
              <img width="25%" src={Image1} alt="" />
              <Typography fontSize={'23px'} fontWeight={400} color={'black'}>
                Premium Quality
              </Typography>
              <Typography textAlign="center" fontSize={'12px'}>
                Our main focus is to provide you with the best quality products.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={4} xs={12}>
            <Stack alignItems={'center'} spacing={2}>
              <img width="25%" src={Image3} alt="" />
              <Typography fontSize={'23px'} fontWeight={400} color={'black'}>
                Huge variety
              </Typography>
              <Typography textAlign="center" fontSize={'12px'}>
                Providing a huge amount of variety in our products only for you.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={4} xs={12}>
            <Stack alignItems={'center'} spacing={2}>
              <img width="25%" src={Image2} alt="" />
              <Typography fontSize={'23px'} fontWeight={400} color={'black'}>
                Easy returns
              </Typography>
              <Typography textAlign="center" fontSize={'12px'}>
                If the item is the same as new condition it will be eligible for a full refund or store credit.{' '}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHome;
