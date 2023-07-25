import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography fontSize={'20px'} fontWeight={700}>
            ABOUT US
          </Typography>
          <Stack spacing={2}>
            <Typography fontSize={'24px'} fontWeight={700}>
              Why Home Trends?
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
              At Home Trends, ideas stream from customer needs. Our commitment is deeply rooted in understanding our
              client needs. Innovative product; compelling design; quality workmanship; superior customer service; fair
              price – these are basics every customer expects and we believe every customer deserves. But none of these
              components hold value unless customer need is fulfilled.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography fontSize={'20px'} fontWeight={700}>
              How We Started?
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
              The Home Trends was formed on 2005. With a long lasting customer relationship, gained through enormous
              value delivery and unique designs, we have always prioritized our client’s preferences.
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
              We have been dealing on our physical store till now, but with overwhelming response for online orders
              starting from 2017, we have now landed in the E Commerce World Officially through this website.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
