/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable no-useless-escape */
/* eslint-disable prefer-const */
import { Box, Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoginImg from '../../assets/lock-screen.png';
import LogoImg from '../../assets/logo.webp';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const [Values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validations()) {
      // try {
      //   const res = await dispatch(LoginUser(JSON.stringify(Values)));
      //   if (res.payload.data) {
      //     localStorage.setItem('web_token', res.payload.data.access_token);
      //     navigate('/dashboard');
      //   }
      //   console.log('Submit', res);
      // } catch (error) {
      //   console.log(error);
      // }
      navigate('/dashboard');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...Values,
      [name]: value,
    });
    validations({ [name]: value });
  };
  const validations = (fieldValue = Values) => {
    let temp = { ...errors };

    if ('email' in fieldValue)
      temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue.email) ? '' : 'Email is not valid';
    if ('password' in fieldValue) temp.password = fieldValue.password ? '' : 'This field requires';
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === '');
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'bgColors.primary',
      }}
    >
      <Container maxWidth="lg">
        <Grid width={'100%'} sx={{ boxShadow: 4 }} container>
          <Grid
            sx={{
              width: '100%',
              // height: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}
            item
            xs={12}
            md={6}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                // padding: 6,
              }}
            >
              <img width={'70%'} src={LogoImg} alt="" />
              <Typography fontSize={'22px'} fontWeight={700}>
                Login to Your Account
              </Typography>
              <Box
                component={'form'}
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '80%',
                  // padding: 6,
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <TextField
                    helperText={errors.email}
                    name="email"
                    value={Values.email}
                    onChange={handleChange}
                    error={errors.email}
                    fullWidth
                    label="EMAIL ADDRESS"
                    variant="outlined"
                  />
                  <TextField
                    helperText={errors.password}
                    name="password"
                    value={Values.password}
                    onChange={handleChange}
                    error={errors.password}
                    type="password"
                    fullWidth
                    label="PASSWORD"
                    variant="outlined"
                  />
                </Box>
                <Box width="100%" display={'flex'} flexDirection={'column'} gap={1}>
                  <Button type="submit" variant="addToCart">
                    Login
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              // height: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'bgColors.primary',
            }}
            item
            xs={12}
            md={6}
          >
            <img width={'80%'} src={LoginImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
