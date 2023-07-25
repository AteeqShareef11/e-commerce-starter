import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography fontSize={'20px'} fontWeight={700}>
            Contact
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
