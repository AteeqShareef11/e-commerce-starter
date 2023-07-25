/* eslint-disable import/no-unresolved */
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import CustomButton from "../UI/Buttons/CustomButton";
import Radio from '@mui/material/Radio';
import ContactInformation from './ContactInformation';
import logo from '../../assets/logo.webp';

const OrderInformation = () => {
  // Radio Button
  const [selectedValue, setSelectedValue] = React.useState('null');
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    size: 'large',
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  // Radio Button

  return (
    <Grid container p={3}>
      <Grid item xs={12} p={2}>
        <img src={logo} alt="none" width={'20%'} />
      </Grid>

      <Grid item xs={12} px={2} py={1}>
        <Typography fontStyle={'24px'} fontWeight={700}>
          Thank You! Muhammad
        </Typography>
      </Grid>
      <Grid item xs={12} px={2} py={1}>
        <Stack sx={{ border: '1px solid #000', padding: 2 }} spacing={2}>
          <Typography fontWeight={700} fontSize={'14px'}>
            Your order is confirmed now
          </Typography>
          <Typography fontSize={'12px'}> you will receive a confirmation email with your order shortly</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} px={2} py={1}>
        <Stack sx={{ border: '1px solid #000', padding: 2 }} spacing={2}>
          <Typography fontWeight={700} fontSize={'14px'} py={1}>
            Order Details
          </Typography>
          <Stack>
            <Typography fontWeight={700} fontSize={'14px'}>
              Contact Information
            </Typography>
            <Typography fontSize={'12px'}>abcd@gmail.com</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography fontWeight={700} fontSize={'14px'}>
              Shipping Adress
            </Typography>
            <Typography fontSize={'12px'}>
              {state?.values?.address} <br />
              {state?.values?.city}
              <br />
              {state?.values?.postelCode}
              <br />
              {state?.values?.phone}
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography fontWeight={700} fontSize={'14px'}>
              Payment Method
            </Typography>
            <Typography fontSize={'12px'}>Cash on Delivery</Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6} md={6} p={2}>
        <Button variant={'addToCart'} onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </Grid>
    </Grid>
  );
};

export default OrderInformation;
