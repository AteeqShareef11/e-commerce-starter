/* eslint-disable import/no-unresolved */
import { Box, Button, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from 'src/src/Shared/ProductCard';
import ReorderIcon from '@mui/icons-material/Reorder';
import ProductCard2 from 'src/src/Shared/ProductCard2';
import Image from '../../assets/image.webp';
import V2 from '../../assets/v2.png';
import V3 from '../../assets/v3.png';
import V4 from '../../assets/v4.png';
import H3 from '../../assets/h3o.png';

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

const ProductCatgorey = () => {
  const param = useParams();
  const [isLayoutChange, setIsLayoutChange] = useState(false);
  console.log(param.categorey.replace('-', ' '));
  const paragraph =
    'The perfect home decoration is what transforms the look of your surroundings. With the right items, showpieces, and other equipment, you can make your home visitor go wow. To ignite that feeling in your guests, HomeTrends offers a variety of amazingly designed traditional items to illuminate your home interior. We believe that every home can get a transformational look. All it needs is an item, which you get at HomeTrends. Present the tissues in appealing-looking tissue boxes to different types of trolleys, HomeTrends will exceed your expectations. Order your preferred home decoration equipment and have it at your doorstep in no time.';

  const lines = paragraph.split('. ');

  const [gridLayout, setGridLayout] = useState(3); // Initial grid layout is set to 3

  const handleGridLayoutChange = (layout) => {
    setGridLayout(layout);
    setIsLayoutChange(false);
  };

  return (
    <Box py={6}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Stack spacing={1} direction={'row'}>
            <Link style={{ fontSize: '12px', fontWeight: 400, color: 'rgb(153, 153, 153)' }} to={'/'}>
              Home
            </Link>
            <Typography fontSize={'12px'} fontWeight={400} color={'rgb(153, 153, 153)'}>
              /
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400} color={'rgb(153, 153, 153)'}>
              {param.categorey.replace('-', ' ')}
            </Typography>
          </Stack>
        </Stack>
        <Typography mt={2} fontSize={'20px'} fontWeight={700}>
          {param.categorey.replace('-', ' ')}
        </Typography>
        <Stack spacing={1}>
          {lines.map((line, index) => (
            <Typography fontSize={'12px'} fontWeight={400} key={index}>
              {line}.
              <br />
            </Typography>
          ))}
        </Stack>
        <Stack spacing={4} py={4}>
          <Divider />
          <Stack alignItems={'center'} spacing={3} direction={'row'}>
            <Typography>VIEW AS</Typography>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <IconButton onClick={() => setIsLayoutChange(true)}>
                <img width={'30px'} height={'30px'} src={H3} alt="" />
              </IconButton>
              <IconButton onClick={() => handleGridLayoutChange(6)}>
                <img width={'30px'} height={'30px'} src={V2} alt="" />
              </IconButton>
              <IconButton onClick={() => handleGridLayoutChange(4)}>
                <img width={'30px'} height={'30px'} src={V3} alt="" />
              </IconButton>
              <IconButton onClick={() => handleGridLayoutChange(3)}>
                <img width={'20px'} height={'20px'} src={V4} alt="" />
              </IconButton>
            </Stack>
          </Stack>
          <Container overflow={'hidden'} maxWidth="lg">
            {!isLayoutChange ? (
              <Grid rowSpacing={6} columnSpacing={2} container>
                {products.map((item) => (
                  <Grid key={item.id} item md={gridLayout} xs={12}>
                    <ProductCard item={item} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid rowSpacing={6} columnSpacing={2} container overflow={'hidden'}>
                {products.map((item) => (
                  <Grid key={item.id} item md={12} xs={12}>
                    <ProductCard2 item={item} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductCatgorey;
