/* eslint-disable dot-notation */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Container, Grid, Box, IconButton, Typography, Stack, TextField, Button, Divider } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Link } from 'react-router-dom';

const categoriesData = [
  {
    id: 0,
    title: 'Home Decor',
    link: 'pages/Home-Decor',
  },
  {
    id: 1,
    title: 'Kitchen Decor',
    link: 'pages/Kitchen-Decor',
  },
  {
    id: 2,
    title: 'Wall Hangings',
    link: 'pages/Wall-Hangings',
  },
  {
    id: 3,
    title: 'Home Furniture',
    link: 'pages/Home-Furniture',
  },
  {
    id: 4,
    title: 'Lighting',
    link: 'pages/Lighting',
  },
  {
    id: 5,
    title: 'Sculptures & Monuments',
    link: 'pages/Sculptures-&-Monuments',
  },
  {
    id: 6,
    title: 'Bestsellers',
    link: 'pages/Bestsellers',
  },
];

const quickLinksData = [
  {
    id: 0,
    title: 'Home',
    link: '',
  },
  {
    id: 1,
    title: 'About Us',
    link: 'pages/about',
  },
  {
    id: 2,
    title: 'Contact',
    link: 'pages/contact',
  },
  {
    id: 3,
    title: 'Terms Of Service',
    link: 'pages/terms',
  },
  {
    id: 4,
    title: 'Shipping Policy',
    link: 'pages/shipping',
  },
  {
    id: 5,
    title: 'Refund Policy',
    link: 'pages/refund',
  },
  // {
  //   id: 6,
  //   title: 'Faqs',
  //   link: 'pages/about',
  // },
  // {
  //   id: 7,
  //   title: 'Plant A Tree',
  //   link: 'pages/about',
  // },
  // {
  //   id: 8,
  //   title: 'All Collections',
  //   link: 'pages/about',
  // },
];

const informationData = [
  {
    id: 0,
    title: '0308 1487 487',
  },
  {
    id: 1,
    title: 'Info@Hometrends.Com.Pk',
  },
  {
    id: 2,
    title: 'First Floor, Plot Number 6, Hill',
  },
];

export default function Footer(props) {
  return (
    <section
      style={{
        backgroundColor: '#232323',
        color: 'white',
      }}
    >
      <Stack>
        <Container maxWidth="lg">
          <Box py={4}>
            <Grid container>
              <Grid item xs={12} md={7}>
                <Grid container>
                  <Grid sx={{ color: 'white' }} item xs={12} md={4}>
                    <Stack spacing={2}>
                      <Typography fontWeight={600} fontSize={'15px'}>
                        CATEGORIES
                      </Typography>
                      <Stack spacing={1}>
                        {categoriesData.map((item) => (
                          <Link to={item.link} key={item.id}>
                            <Typography
                              sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                  borderBottom: '1px solid #B1AFB1',
                                },
                              }}
                              fontSize={'12px'}
                              fontWeight={400}
                              color={'#B1AFB1'}
                              key={item.id}
                            >
                              {item.title}
                            </Typography>
                          </Link>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid sx={{ color: 'white' }} item xs={12} sm={6} md={4}>
                    <Stack spacing={2}>
                      <Typography fontWeight={600} fontSize={'15px'}>
                        QUICK LINKS
                      </Typography>
                      <Stack spacing={1}>
                        {quickLinksData.map((item) => (
                          <Link to={item.link} key={item.id}>
                            <Typography
                              sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                  borderBottom: '1px solid #B1AFB1',
                                },
                              }}
                              fontSize={'12px'}
                              fontWeight={400}
                              color={'#B1AFB1'}
                              key={item.id}
                            >
                              {item.title}
                            </Typography>
                          </Link>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Stack spacing={2}>
                      <Typography fontWeight={600} fontSize={'15px'}>
                        INFORMATION
                      </Typography>
                      <Stack spacing={1}>
                        {informationData.map((item) => (
                          <Typography
                            sx={{
                              cursor: 'pointer',
                              '&:hover': {
                                borderBottom: '1px solid #B1AFB1',
                              },
                            }}
                            fontSize={'12px'}
                            fontWeight={400}
                            color={'#B1AFB1'}
                            key={item.id}
                          >
                            {item.title}
                          </Typography>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack spacing={2}>
                  <Typography fontWeight={600} fontSize={'15px'}>
                    NEWSLETTER SIGN UP
                  </Typography>
                  <Stack spacing={1}>
                    <Typography
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          borderBottom: '1px solid #B1AFB1',
                        },
                      }}
                      fontSize={'12px'}
                      fontWeight={400}
                      color={'#B1AFB1'}
                    >
                      Sign up for exclusive updates, new arrivals & insider only discounts
                    </Typography>
                    <Stack width={'100%'} spacing={1} direction={'row'}>
                      <TextField
                        inputProps={{ sx: { color: '#fff' } }}
                        sx={{
                          borderColor: 'white',

                          '& label.Mui-focused': {
                            color: 'white',
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: 'white',
                          },
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'white',
                            },
                            '&:hover fieldset': {
                              borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'white',
                            },
                          },
                        }}
                        fullWidth
                        placeholder="enter your email address"
                      />
                      <Button
                        sx={{
                          px: 4,
                          py: 2,
                          backgroundColor: '#B1AFB1',
                          color: '#232323',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          '&:hover': {
                            backgroundColor: '#B1AFB1',
                            color: '#232323',
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Stack>
                    <Stack spacing={1} direction={'row'}>
                      <IconButton
                        sx={{
                          backgroundColor: 'white',
                          '&:hover': { backgroundColor: 'white' },
                          '&:focus': { backgroundColor: 'white' },
                        }}
                      >
                        <FacebookOutlinedIcon />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: 'white',
                          '&:hover': { backgroundColor: 'white' },
                          '&:focus': { backgroundColor: 'white' },
                        }}
                      >
                        <LocalPhoneOutlinedIcon />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Divider />
        <Container maxWidth="lg">
          <Typography fontSize={'12px'} fontWeight={400} color={'#B1AFB1'} padding={4}>
            © Hometrends. All Rights Reserved. Made With 💚 By asproduction
          </Typography>
        </Container>
      </Stack>
    </section>
  );
}
