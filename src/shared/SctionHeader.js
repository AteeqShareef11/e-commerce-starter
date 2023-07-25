import { Box, Typography } from '@mui/material';
import React from 'react';

const SctionHeader = ({children}) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Typography fontSize="18px" fontWeight="bold">
       {children}
      </Typography>
      <Typography fontSize="18px" fontWeight="bold">
        |
      </Typography>
    </Box>
  );
};

export default SctionHeader;
