/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from 'src/Redux/slice/cartSlice';
import Image from '../../assets/image.webp';
import RatingsImg from '../../assets/rating.png';

const ProductCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    navigate('/cart', { state: { item } });
  };

  return (
    <Stack alignItems={'center'} spacing={2}>
      <Box
        sx={{
          position: 'relative',
          cursor: 'pointer',
          '&:hover .icons': {
            opacity: 1,
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
          '&:hover .addToCart': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to="/pages/categorey/product">
          <img width={'100%'} src={item.image} alt="" />
        </Link>
        <Stack
          className="icons"
          spacing={0.5}
          sx={{
            position: 'absolute',
            filter: 'blur(3px)',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            top: 0,
            right: 0,
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'transparent',
              width: 150,
              justifyContent: 'flex-end',
              display: 'flex',
              borderRadius: 20,
              position: 'relative',
              '&:hover': {
                backgroundColor: 'white',
              },
              '&:hover .textIcon': {
                display: 'block',
              },
            }}
          >
            <IconButton sx={{ backgroundColor: 'white', color: 'black' }}>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <Typography
              fontSize={'12px'}
              className="textIcon"
              fontWeight={400}
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                display: 'none',
              }}
              color="black"
            >
              Add To Wish List
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'transparent',
              width: 150,
              justifyContent: 'flex-end',
              display: 'flex',
              borderRadius: 20,
              position: 'relative',
              '&:hover': {
                backgroundColor: 'white',
              },
              '&:hover .textIcon': {
                display: 'block',
              },
            }}
          >
            <IconButton sx={{ backgroundColor: 'white', color: 'black' }}>
              <VisibilityOutlinedIcon />
            </IconButton>
            <Typography
              className="textIcon"
              fontSize={'12px'}
              fontWeight={400}
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                display: 'none',
              }}
              color="black"
            >
              Quick View Detail
            </Typography>
          </Box>
        </Stack>
        <Button
          className="addToCart"
          sx={{
            position: 'absolute',
            bottom: 0,
            opacity: 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
          }}
          fullWidth
          variant="addToCart"
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </Box>
      <Typography fontSize={'12px'} fontWeight={400}>
        {item.title}
      </Typography>
      <Stack justifyContent={'center'} direction={'row'} alignItems={'center'}>
        <img width={'40%'} src={RatingsImg} alt="" />
        <Typography fontSize={'16px'} fontWeight={400}>
          {item.soldItems}
        </Typography>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <Typography fontSize={'14px'} fontWeight={600} color={'black'} sx={{ textDecoration: 'line-through' }}>
          {item.oldPrice}
        </Typography>
        <Typography fontSize={'14px'} fontWeight={600} color={'rgb(233, 81, 68)'}>
          {item.newPrice}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
