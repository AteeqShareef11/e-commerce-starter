import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

// eslint-disable-next-line react/prop-types
const HeaderSecondary = ({ title, desc }) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Typography textAlign={'center '} fontSize={'22px'} fontWeight={700}>
            {title}
          </Typography>
          <Typography textAlign={'center'} fontSize={'14px'} fontWeight={400} color={'rgb(60, 60, 60)'}>
            {desc}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderSecondary;
