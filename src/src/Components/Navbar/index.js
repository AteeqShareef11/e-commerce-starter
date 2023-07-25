/* eslint-disable import/no-unresolved */
/* eslint-disable dot-notation */
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseFromCart, getCartTotal, removeFromCart } from 'src/Redux/slice/cartSlice';
import { navbarStyles } from './style';
import Logo from '../../assets/logo.webp';
import Image from '../../assets/3 (1).png';

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggle, isFixed }) => {
  const [state, setState] = React.useState({ right: false });
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const navigate = useNavigate();
  const cartSlice = useSelector((s) => s?.cartSlice);

  const toggleDrawer = (anchor, open, item) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if (item.cart) {
      navigate('/cart');
    }

    setState({ ...state, [anchor]: open });
  };
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
    <>
      <Box
        alignItems={'center'}
        paddingX={4}
        paddingY={2}
        sx={{ backgroundColor: 'white' }}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Link to={'/'}>
          <img width={'100%'} src={Logo} alt="" />
        </Link>
        <Stack justifyContent={'center'} alignItems={'center'} width={'100%'} direction={'row'}>
          <TextField
            placeholder="Search The Store"
            sx={{
              width: '50%',
              backgroundColor: '#FAFAFA',
              border: 'none',
              outline: 'none',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography>Customer Service +92 308 1 487 487</Typography>
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <Stack alignItems={'center'}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography textAlign={'center'} textTransform={'uppercase'} fontSize={'12px'}>
              Wish
              <br />
              Lists
            </Typography>
          </Stack>
          <Stack alignItems={'center'} onClick={toggleDrawer('right', true, { cart: false })}>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <Typography textTransform={'uppercase'} fontSize={'12px'}>
              Cart
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false, { cart: false })}>
          <Stack padding={3} width={400} spacing={2}>
            <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
              <Typography fontWeight={700}>Shopping Cart</Typography>
              <IconButton onClick={toggleDrawer('right', false, { cart: false })}>x</IconButton>
            </Stack>
            <Typography fontSize={'12px'}>{cartSlice?.cartItems?.length} Items</Typography>
            {cartSlice?.cartItems?.length > 0 ? (
              <>
                {cartSlice?.cartItems?.map((item) => (
                  <Grid container key={item.id}>
                    <Grid item xs={4}>
                      <img src={item.image} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                      <Stack spacing={1}>
                        <Typography>{item.title}</Typography>
                        <Typography>{item.price}</Typography>
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
                      </Stack>
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton onClick={() => dispatch(removeFromCart(item))}>x</IconButton>
                    </Grid>
                  </Grid>
                ))}
              </>
            ) : (
              <Typography textAlign={'center'} fontWeight={700}>
                Your Cart is Empty
              </Typography>
            )}

            <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
              <Typography fontWeight={700}>Total:</Typography>
              <Typography fontWeight={700}>
                RS. {cartSlice?.cartItems?.length > 0 ? cartSlice?.cartTotalAmount : '00.00'}
              </Typography>
            </Stack>
            <Button variant="addToCart" onClick={() => navigate('/proceed')}>
              PROCEED TO CHECKOUT
            </Button>
            <Button variant="addToCartOpposite" onClick={toggleDrawer('right', false, { cart: true })}>
              VIEW CART
            </Button>
          </Stack>
        </Drawer>
      </>
    </>
  );
};

export default Navbar;
