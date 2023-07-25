/* eslint-disable import/no-unresolved */
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ProductCard from 'src/src/Shared/ProductCard';
import HeaderSecondary from 'src/src/Shared/SectionHeader/HeaderSecondary';
import Image from '../../assets/image.webp';

const products = [
  {
    id: 1,
    image: Image,
    title: 'Traditional Window Style Mirror',
    oldPrice: '$50',
    newPrice: '$35',
    soldItems: 100,
  },
  {
    id: 2,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 3,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 4,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 5,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 6,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 7,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 8,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 9,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 10,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 11,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
  {
    id: 12,
    image: Image,
    title: 'Product 2',
    oldPrice: '$80',
    newPrice: '$60',
    soldItems: 75,
  },
];
const WallHanging = () => {
  return (
    <Stack spacing={2} py={6}>
      <HeaderSecondary
        title="WALL HANGING"
        desc="Empty walls may not give your home the outlook which you desire. If that’s what you find at your home, it’s time to fix that. Check out our variety of pleasing-looking wall hanging items to trigger an appealing and traditional viewing."
      />
      <Typography textAlign={'center'} fontSize={'12px'} fontWeight={400}>
        View All
      </Typography>
      <Box>
        <Container maxWidth="lg">
          <Grid rowSpacing={6} columnSpacing={2} container>
            {products.map((item) => (
              <Grid key={item.id} item md={3} xs={12}>
                <ProductCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Stack>
  );
};

export default WallHanging;
