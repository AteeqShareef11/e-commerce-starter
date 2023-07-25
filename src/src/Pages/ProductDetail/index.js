/* eslint-disable import/no-unresolved */
import { Button, Divider, Grid, TextField, Typography, IconButton, Stack, Container } from '@mui/material';
import React, { useEffect } from 'react';
// import Image1 from "../../Assets/productImg1.png";
// import Image2 from "../../Assets/productImg2.png";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';
// import CustomizedDialogs from '../Modal/Modal';
// import CustomButton from '../UI/Buttons/CustomButton';
// import { addToCart, decreaseFromCart } from '../../redux/slice/cartSlice';
// import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { advancedSlides } from 'src/src/Components/Slides/Slides';
import Reviews from 'src/src/Components/Reviews';
import ProductSlider from 'src/src/Components/ProductSlidder';
import HeaderPrimary from 'src/src/Shared/SectionHeader/HeaderPrimary';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseFromCart, getCartTotal } from 'src/Redux/slice/cartSlice';
import styles from './ProductDetail.module.css';
import Image from '../../assets/image.webp';

const customTextFiled = {
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'grey',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      backgroundColor: 'rgba(217, 217, 217, 0.35)',
      border: 0,
    },
    '&:hover fieldset': {
      borderColor: 'grey',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'grey',
    },
  },
};

const productDetailData = {
  imgUrls: [Image, Image, Image, Image],
  productName: 'Lorem Ipsum',
  previousPrice: '2449',
  price: '1999',
  description: 'Lorem Ipsum, Lorem Ipsum',
  _id: 'dWDFW342EDWD2332',
};

const ProductDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [askopen, setAskOpen] = React.useState(false);
  const [cartopen, setCartOpen] = React.useState(false);
  const [wishList, setWishList] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const cartSlice = useSelector((s) => s?.cartSlice);

  console.log('cartSlice____', cartSlice);
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch(addToCart(productDetailData));
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(decreaseFromCart(productDetailData));
    }
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleAddToCart = () => {
    dispatch(addToCart(productDetailData));
    navigate('/cart', { state: { productDetailData } });
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, quantity]);

  const maxSteps = productDetailData?.imgUrls?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box position={'relative'}>
      {productDetailData && (
        <>
          <Grid paddingY={6} width="90%" mx="auto" container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Box width="100%" display="flex">
                <Box display="flex" flexDirection="column" gap={1}>
                  {productDetailData?.imgUrls?.map((item, index) => (
                    <Box
                      sx={{
                        cursor: 'pointer',
                        filter: activeStep === index ? 'contrast(50%)' : 'none',
                      }}
                      key={index}
                      onClick={() => setActiveStep(index)}
                    >
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          className={styles.descriptionImg}
                          sx={{
                            borderRadius: 0,
                          }}
                          component="img"
                          src={item}
                          alt=""
                        />
                      ) : null}
                    </Box>
                  ))}
                </Box>
                <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                  <Box
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <Paper
                      square
                      elevation={0}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                    <SwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={activeStep}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                    >
                      {productDetailData?.imgUrls?.map((step, index) => (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                          key={index}
                        >
                          {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                              width={'100%'}
                              height="400px"
                              onClick={() => setOpenModal(true)}
                              component="img"
                              sx={{
                                overflow: 'hidden',
                                width: '90%',
                                cursor: 'crosshair',
                              }}
                              src={step}
                              alt={''}
                            />
                          ) : null}
                        </div>
                      ))}
                    </SwipeableViews>
                    <Box className={styles.slideNavigationContainer}>
                      <MobileStepper
                        sx={{
                          backgroundColor: 'transparent',
                        }}
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                          <IconButton
                            sx={{
                              backgroundColor: '#F8DFA7',
                              color: '#000000',
                              '&:hover': {
                                backgroundColor: '#F8DFA7',
                                color: '#000000',
                              },
                            }}
                            size="medium"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                          >
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                          </IconButton>
                        }
                        backButton={
                          <IconButton
                            sx={{
                              backgroundColor: '#F8DFA7',
                              color: '#000000',
                              '&:hover': {
                                backgroundColor: '#F8DFA7',
                                color: '#000000',
                              },
                            }}
                            size="medium"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                          >
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                          </IconButton>
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography className={styles.new}>new</Typography>
                <Typography fontWeight={500} fontSize="2.25rem">
                  {productDetailData?.productName}
                </Typography>
                <Box display="flex" gap={1}>
                  <Typography color="red" fontSize="2.25rem">
                    Rs.{productDetailData?.price}.00
                  </Typography>
                  <Typography fontSize="2.25rem">
                    <del>Rs.{productDetailData?.previousPrice}.00</del>
                  </Typography>
                </Box>
                <Typography fontSize="1.125rem">
                  Color:
                  <span
                    style={{
                      color: '#F8DFA7',
                      textTransform: 'capitalize',
                    }}
                  >
                    {/* {productDetailData?.color[0]} */}W
                  </span>
                </Typography>
                <Box display="flex" gap={1}>
                  {productDetailData?.imgUrls?.map((item, index) => (
                    <Box
                      sx={{
                        cursor: 'pointer',
                      }}
                      key={index}
                      onClick={() => setActiveStep(index)}
                    >
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          className={activeStep === index ? styles.activeImg : styles.descriptionImg}
                          component="img"
                          src={item}
                          alt=""
                        />
                      ) : null}
                    </Box>
                  ))}
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#F8DFA7',
                      },
                    }}
                    alignItems="center"
                    display="flex"
                    gap={1}
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <LocalShippingOutlinedIcon />
                    <Typography fontSize="1.125rem"> Free Shipping</Typography>
                  </Box>
                  <Box
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#F8DFA7',
                      },
                    }}
                    alignItems="center"
                    display="flex"
                    gap={1}
                    onClick={() => setAskOpen(true)}
                  >
                    <MailOutlineOutlinedIcon />
                    <Typography fontSize="1.125rem">about this product</Typography>
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Box
                      justifyContent="space-around"
                      sx={{
                        borderRadius: 28,
                        height: '35px',
                        backgroundColor: 'rgba(0, 0, 0, 0.15)',
                      }}
                      width="100%"
                      alignItems="center"
                      display="flex"
                    >
                      <IconButton disableRipple onClick={handleDecrease}>
                        -
                      </IconButton>
                      <Typography>{quantity}</Typography>
                      <IconButton disableRipple onClick={handleIncrease}>
                        +
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
                <Grid spacing={2} container>
                  <Grid item xs={12}>
                    <Button width="100%" variant="addToCartOpposite" onClick={() => navigate('/proceed/information')}>
                      Buy It Now
                    </Button>
                  </Grid>
                  <Grid xs={12} item>
                    <Button width="100%" variant="addToCart" onClick={handleAddToCart}>
                      Add to cart
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  onClick={() => setWishList(!wishList)}
                  alignItems="center"
                  display="flex"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#F8DFA7',
                    },
                  }}
                  gap={1}
                >
                  {wishList ? <FavoriteIcon sx={{ color: '#F32E4B' }} /> : <FavoriteBorderOutlinedIcon />}

                  <Typography color={wishList ? 'red' : ''} fontSize="1.125rem">
                    {wishList ? 'Remove from WishList' : 'Add to WishList'}
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography fontSize="1.5rem">Description</Typography>
                  <Typography fontSize="1.125rem">{productDetailData.description}</Typography>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          {/* <CustomizedDialogs open={open} setOpen={setOpen}>
            <Box width="100%" display="flex" flexDirection="column" gap={2}>
              <Typography fontSize="18px">Shipping</Typography>
              <li>Free Shipping nationwide above Rs. 3000</li>
              <li>Standard Shipping charges are Rs. 195</li>
            </Box>
          </CustomizedDialogs> */}
          {/* <CustomizedDialogs open={askopen} setOpen={setAskOpen}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography fontSize="24px">Have a question?</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField sx={customTextFiled} fullWidth multiline rows={4} label="Your Message" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                {' '}
                <TextField sx={customTextFiled} fullWidth label="Your Name" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                {' '}
                <TextField sx={customTextFiled} fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                {' '}
                <TextField sx={customTextFiled} fullWidth label="Phone" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{
                    paddingX: 5,
                    borderRadius: 1,
                    backgroundColor: '#F8DFA7',
                    color: '#000000',
                    borderColor: '#F8DFA7',
                    '&:hover': {
                      color: '#F8DFA7',
                      borderColor: '#F8DFA7',
                    },
                  }}
                  variant="outlined"
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </CustomizedDialogs> */}
          {/* <CustomizedDialogs open={cartopen} setOpen={setCartOpen}>
            <Grid justifyContent="center" container>
              <Grid item xs={12} md={5}>
                <Box padding={3} alignItems="center" display="flex" flexDirection="column" gap={1}>
                  <Box alignItems="center" display="flex" flexDirection="column">
                    <CheckCircleOutlineIcon sx={{ color: '#f8c9d0' }} fontSize="large" />
                    <Typography fontSize="1.5rem">Added to cart successfully!</Typography>
                  </Box>
                  <img
                    style={{
                      marginTop: '10px',
                      marginBottom: '10px',
                    }}
                    width="117px"
                    height="117px"
                    src={productDetailData.imgUrls[0]}
                    alt="cart-img"
                  />
                  <Typography fontSize="1.125rem">{productDetailData.productName}</Typography>
                  <Typography fontSize="1.125rem">QTY: {quantity}</Typography>
                  <Typography fontSize="1.125rem">Total: Rs.{quantity * productDetailData.price} .00</Typography>
                </Box>
              </Grid>
              <Grid display="flex" justifyContent="center" item xs={0} md={1}>
                <Divider orientation="vertical" />
              </Grid>
              <Grid item xs={12} md={5}>
                <Box padding={3} alignItems="center" display="flex" flexDirection="column" gap={2}>
                  <Typography paddingTop={1} textAlign="center" fontSize="1.125rem">
                    Therer are {quantity} item <br />
                    in your cart
                  </Typography>
                  <Typography paddingTop={1} fontSize="2.563rem">
                    <span style={{ fontSize: '1.313rem', textTransform: 'uppercase' }}>Total:</span> Rs.
                    {quantity * productDetailData.price}.00{' '}
                  </Typography>
                  <CustomButton width="100%" variant="primaryOutlined">
                    Continue Shopping
                  </CustomButton>
                  <CustomButton width="100%" variant="primaryOutlined" onClick={() => navigate('/cart')}>
                    View Cart
                  </CustomButton>
                  <CustomButton width="100%" variant="primaryContained" onClick={() => navigate('/cart/information')}>
                    Proceed to Checkout
                  </CustomButton>
                </Box>
              </Grid>
            </Grid>
          </CustomizedDialogs> */}

          <Lightbox
            open={openModal}
            close={() => setOpenModal(false)}
            slides={[
              {
                src: 'https://cdn.shopify.com/s/files/1/0614/2590/9957/files/blue-truck-art-rickshaw-sculptures-monuments-247.webp?v=1684932168',
                alt: 'Image 1',
                width: 1200,
                height: 800,
                srcSet: [
                  {
                    src: 'https://cdn.shopify.com/s/files/1/0614/2590/9957/files/blue-truck-art-rickshaw-sculptures-monuments-416.webp?v=1684932152',
                    width: 320,
                    height: 213,
                  },
                  {
                    src: 'https://cdn.shopify.com/s/files/1/0614/2590/9957/files/blue-truck-art-rickshaw-sculptures-monuments-157.webp?v=1684932156',
                    width: 640,
                    height: 427,
                  },
                  {
                    src: 'https://cdn.shopify.com/s/files/1/0614/2590/9957/files/blue-truck-art-rickshaw-sculptures-monuments-892.webp?v=1684932171',
                    width: 1200,
                    height: 800,
                  },
                ],
              },
              {
                src: 'https://cdn.shopify.com/s/files/1/0614/2590/9957/files/traditional-style-orange-truck-model-sculptures-monuments-411.webp?v=1684929164',
                alt: 'Image 2',
                width: 800,
                height: 600,
                srcSet: [
                  {
                    src: 'https://cdn.shopify.com/s/files/1/0614/2590/9957/files/traditional-style-orange-truck-model-sculptures-monuments-319.webp?v=1684929220',
                    width: 320,
                    height: 240,
                  },
                  {
                    src: 'https://cdn.shopify.com/s/files/1/0614/2590/9957/files/traditional-style-orange-truck-model-sculptures-monuments-524.webp?v=1684929226',
                    width: 640,
                    height: 480,
                  },
                  {
                    src: 'https://cdn.shopify.com/s/files/1/0614/2590/9957/files/traditional-style-orange-truck-model-sculptures-monuments-162.webp?v=1684929236',
                    width: 800,
                    height: 600,
                  },
                ],
              },
              // Add more image objects for additional slides
            ]}
          />
        </>
      )}
      <Stack py={10} spacing={6}>
        <Typography fontWeight={700} fontSize={'22px'} textAlign={'center'}>
          Reviews
        </Typography>
        <Reviews />
        <Stack py={4} gap={4}>
          <HeaderPrimary title=" RELATED PRODUCTS" />
          <ProductSlider />
        </Stack>
        <Container sx={{ marginX: 'auto !important' }} maxWidth="lg">
          <Divider sx={{ backgroundColor: 'black' }} />
        </Container>
        <Stack py={4} gap={4}>
          <HeaderPrimary title="RECENTLY VIEW  PRODUCTS" />
          <ProductSlider />
        </Stack>
        <Container sx={{ marginX: 'auto !important' }} maxWidth="lg">
          <Divider sx={{ backgroundColor: 'black' }} />
        </Container>
      </Stack>
      {/* <Lightbox
        open={openModal}
        close={() => setOpenModal(false)}
        slides={advancedSlides}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      /> */}
    </Box>
  );
};

export default ProductDetail;
