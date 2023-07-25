import { Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import NavLinks from '../Components/NavLinks';
import WhatsApp from '../Components/WhatsApp/WhatsApp';

const WebLayout = () => {
  return (
    <Stack>
      <Navbar />
      <NavLinks />
      <Outlet />
      <WhatsApp />
      <Footer />
    </Stack>
  );
};

export default WebLayout;
