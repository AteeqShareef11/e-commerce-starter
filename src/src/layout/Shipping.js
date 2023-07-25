import { Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const ShippingLayout = () => {
  return (
    <Stack>
      <Outlet />
    </Stack>
  );
};

export default ShippingLayout;
