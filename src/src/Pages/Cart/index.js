/* eslint-disable import/no-unresolved */
import { Box, Button, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, decreaseFromCart, getCartTotal, removeFromCart } from 'src/Redux/slice/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const cartSlice = useSelector((s) => s?.cartSlice);

  const handleIncrease = (item) => {
    setQuantity(quantity + 1);
    dispatch(addToCart(item));
  };
  const handleDecrease = (item) => {
    setQuantity(quantity - 1);
    dispatch(decreaseFromCart(item));
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, quantity]);
  return (
    <Box sx={{ backgroundColor: '#fff' }} py={6}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Stack alignItems={'center'} spacing={1} direction={'row'}>
                <Typography sx={{ cursor: 'pointer' }} fontSize={'12px'} color={'gray'} onClick={() => navigate('/')}>
                  Home
                </Typography>
                <Typography fontSize={'12px'} color={'gray'}>
                  /
                </Typography>
                <Typography fontSize={'12px'} color={'gray'}>
                  Your Cart
                </Typography>
              </Stack>
            </Stack>
            <Typography fontWeight={700} fontSize={'18px'}>
              YOUR CART
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Stack spacing={2}>
                <Grid sx={{ backgroundColor: '#FAFAFA', p: 2 }} container>
                  <Grid item xs={6}>
                    <Typography>PRODUCT</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>PRICE</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>QUANTITY</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>TOTAL</Typography>
                  </Grid>
                </Grid>
                {cartSlice?.cartItems?.length > 0 &&
                  cartSlice?.cartItems?.map((item) => (
                    <Grid
                      key={item?._id}
                      alignItems={'center'}
                      sx={{ backgroundColor: '#FAFAFA', p: 2, border: '1px solid #d3d3d3d3' }}
                      container
                    >
                      <Grid item xs={6}>
                        <Stack direction={'row'}>
                          <img width={'100px'} src="" alt="" />
                          <Typography fontSize={'12px'} fontWeight={400}>
                            {item.productName}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography fontSize={'14px'} fontWeight={500}>
                          RS {item.price}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Box
                          justifyContent="space-around"
                          sx={{
                            height: '35px',
                            backgroundColor: 'rgba(0, 0, 0, 0.15)',
                          }}
                          width="70%"
                          alignItems="center"
                          display="flex"
                        >
                          <IconButton disableRipple onClick={() => handleDecrease(item)}>
                            -
                          </IconButton>
                          <Typography>{item.cartQuantity}</Typography>
                          <IconButton disableRipple onClick={() => handleIncrease(item)}>
                            +
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                          <Typography fontSize={'14px'} fontWeight={500}>
                            RS {item.cartQuantity * item.price}
                          </Typography>
                          <IconButton onClick={() => dispatch(removeFromCart(item))}>x</IconButton>
                        </Stack>
                      </Grid>
                    </Grid>
                  ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Stack>
                  <Typography fontSize={'29px'} fontWeight={700}>
                    ORDER SUMMARY
                  </Typography>
                  <Divider sx={{ backgroundColor: 'black' }} />
                </Stack>
                <Stack spacing={1}>
                  <Box display={'flex'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography fontSize={'12px'} fontWeight={600}>
                      Subtotal
                    </Typography>
                    <Typography fontSize={'16px'} fontWeight={600}>
                      RS {cartSlice?.cartTotalAmount}
                    </Typography>
                  </Box>
                  <Divider sx={{ backgroundColor: '#D3D3D3D3' }} />
                </Stack>
                <Stack spacing={1}>
                  <Box display={'flex'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography fontSize={'12px'} fontWeight={600}>
                      Total
                    </Typography>
                    <Typography fontSize={'16px'} fontWeight={600}>
                      RS {cartSlice?.cartTotalAmount}
                    </Typography>
                  </Box>
                  <Divider sx={{ backgroundColor: '#D3D3D3D3' }} />
                </Stack>
                <Button variant="addToCart" onClick={() => navigate('/proceed')}>
                  PROCEED TO CHECKOUT
                </Button>
                <Button variant="addToCartOpposite" onClick={() => navigate('/')}>
                  CONTINUE SHOPPING
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Cart;
