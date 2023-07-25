/* eslint-disable react/prop-types */
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Masonry from 'react-masonry-css';
import RatingsImg from '../../assets/rating.png';
import Review from '../../assets/reviewimg.jpg';
import Image from '../../assets/image.webp';

const breakpointColumnsObj = {
  default: 4,
  1100: 2,
  700: 1,
};
const products = [
  {
    id: 1,
    image: Review,
    name: 'Lorem Ipsum',
    title: 'Traditional Window Style Mirror',
    review: 'Get the same thing I ordered thanks',
    productImg: Review,
  },
  {
    id: 2,
    image: Image,
    name: 'Lorem Ipsum',
    title: 'Product 2',
    review: 'Get the same thing I ordered thanks',
    productImg: Review,
  },
  {
    id: 3,
    image: Review,
    name: 'Lorem Ipsum',
    title: 'Traditional Window Style Mirror',
    review: 'Get the same thing I ordered thanks',
    productImg: Review,
  },
  {
    id: 4,
    image: Image,
    name: 'Lorem Ipsum',
    title: 'Product 2',
    review: 'Get the same thing I ordered thanks',
    productImg: Review,
  },
  {
    id: 5,
    image: Image,
    name: 'Lorem Ipsum',
    title: 'Product 2',
    review: 'Get the same thing I ordered thanks',
    productImg: Review,
  },
  {
    id: 6,
    image: Review,
    name: 'Lorem Ipsum',
    title: 'Traditional Window Style Mirror',
    review: 'Get the same thing I ordered thanks',
    productImg: Review,
  },
  {
    id: 7,
    image: Review,
    name: 'Lorem Ipsum',
    title: 'Traditional Window Style Mirror',
    review: 'Get the same thing I ordered thanks',
    productImg: Review,
  },
  {
    id: 8,
    image: Image,
    name: 'Lorem Ipsum',
    title: 'Product 2',
    review: 'Get the same thing I ordered thanks',
    productImg: Review,
  },
];

const ReviewCard = ({ item }) => {
  return (
    <Stack sx={{ borderRadius: 2, border: '1px solid #808080' }}>
      <img style={{ borderRadius: 10 }} width={'100%'} src={item.image} alt="" />
      <Stack padding={1} spacing={1}>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <Typography fontWeight={700}>{item.name}</Typography>
          <CheckCircleIcon fontSize="small" />
        </Stack>
        <img width={'40%'} src={RatingsImg} alt="" />
        <Typography>{item.review}</Typography>
      </Stack>
      <Stack
        padding={2}
        sx={{ borderTop: 1, borderColor: '#808080' }}
        alignItems={'center'}
        spacing={2}
        direction={'row'}
        justifyContent={'space-between'}
      >
        <img width={'60px'} src={item.productImg} alt="" />
        <Typography fontSize={'12px'} fontWeight={400}>
          {item.title}
        </Typography>
      </Stack>
    </Stack>
  );
};

const Reviews = () => {
  return (
    <Box my={20}>
      <Container maxWidth="lg">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {products.map((product) => (
            <div key={product.id}>
              <ReviewCard item={product} />
            </div>
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Reviews;
