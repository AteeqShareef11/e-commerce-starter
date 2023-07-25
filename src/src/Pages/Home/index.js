/* eslint-disable import/no-unresolved */
import React from 'react';
import { Box } from '@mui/material';
import Hero from 'src/src/Components/Hero';
import HeroCat from 'src/src/Components/HeroCat';
import AllProducts from 'src/src/Components/AllProducts';
import TeaTrolley from 'src/src/Components/TeaTrolley';
import NestingTables from 'src/src/Components/NestingTables';
import WallHanging from 'src/src/Components/WallHanging';
import BestSeller from 'src/src/Components/BestSeller';
import AboutHome from 'src/src/Components/AboutHome';
import Reviews from 'src/src/Components/Reviews';

const Home = () => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Hero />
      <HeroCat />
      <AllProducts />
      <TeaTrolley />
      <NestingTables />
      <WallHanging />
      <BestSeller />
      <AboutHome />
      <Reviews />
    </Box>
  );
};

export default Home;
