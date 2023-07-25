/* eslint-disable no-useless-escape */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { CustomTextField } from "../UI/Input/Input";

const initialValues = {
  firstName: "",
  email: "",
  lastName: "",
  address: "",
  city: "",
  phone: "",
  postelCode: "",
};

const Information = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  const { pathname } = useLocation()

  console.log("_____state", pathname)

  const [values, setValues] = useState({
    firstName: state?.values?.firstName ? state?.values?.firstName : "",
    email: state?.values?.email ? state?.values?.email : "",
    lastName: state?.values?.lastName ? state?.values?.lastName : "",
    address: state?.values?.address ? state?.values?.address : "",
    city: state?.values?.city ? state?.values?.city : "",
    phone: state?.values?.phone ? state?.values?.phone : "",
    postelCode: state?.values?.postelCode ? state?.values?.postelCode : "",
  });
  const [errors, setErrors] = useState({});

  console.log(values);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validations({ [name]: value });
  };

  const validations = (fieldValue = values) => {
    let temp = { ...errors };
    if ("firstName" in fieldValue)
      temp.firstName = fieldValue.firstName ? "" : "This field requires";
    if ("address" in fieldValue)
      temp.address = fieldValue.address ? "" : "This field requires";
    if ("city" in fieldValue)
      temp.city = fieldValue.city ? "" : "This field requires";
    if ("lastName" in fieldValue)
      temp.lastName = fieldValue.lastName ? "" : "This field requires";
    if ("postelCode" in fieldValue)
      temp.postelCode = fieldValue.postelCode
        ? /^-?\d+\.?\d*$/.test(fieldValue.postelCode)
          ? ""
          : "Postel Code should be in number"
        : "This field requires Number";
    if ("email" in fieldValue)
      temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        fieldValue.email
      )
        ? ""
        : "Email is not valid";
    if ("phone" in fieldValue)
      temp.phone = fieldValue.phone
        ? /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i.test(
          fieldValue.phone
        )
          ? ""
          : "Phone Number is no Vaild"
        : "Phone Number is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("errors", errors)
    if (validations()) {
      console.log("values", values);
      navigate("shipping", { state: { values } })
    }
  };

  return (
    <Grid sx={{ backgroundColor: "white" }} container p={3}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
        <img src={logo} alt="none" width={"20%"} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
        <Box className="flexCenter">
          <Typography
            className="productInfoOrderBrod"
            sx={{ cursor: "pointer" }}
          >
            Cart
          </Typography>
          <ArrowForwardIosIcon className="productInfoOrderPrice" />
          <Typography
            sx={{ cursor: "pointer", color: "black" }}
            fontWeight={700}

            className="productInfoOrderBrod"

          >
            Information
          </Typography>
          <ArrowForwardIosIcon className="productInfoOrderPrice" />
          <Typography
            className="productInfoOrderBrod"
            sx={{ cursor: "pointer" }}


          >
            Shipping
          </Typography>
          <ArrowForwardIosIcon className="productInfoOrderPrice" />
          <Typography className="productInfoOrderBrod" sx={{ color: "black" }}
          >
            Payment
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={2} py={1} mt={2}>
        <Box className="flexSpaceBtw">
          <Typography className="productInfoOrderTitle1">
            Contact Information
          </Typography>

        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={2}>
        <CustomTextField
          label="Email or phone number"
          variant="outlined"
          name="email"
          value={values.email}
          error={errors.email}
          onChange={handleInputChange}
          fullWidth
          inputProps={{ style: { fontFamily: "Poppins", fontSize: 14 } }} // font size of input text
          InputLabelProps={{ style: { fontFamily: "Poppins", fontSize: 14 } }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label="Email me with news and offers"
            sx={{ color: "gray", fontSize: "12px" }}
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={2} py={1} mt={2}>
        <Typography className="productInfoOrderTitle1">
          Shipping Address
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={2}>
        <CustomTextField
          placeholder="Pakistan"
          variant="outlined"
          fullWidth
          disabled
          inputProps={{ style: { fontFamily: "Poppins", fontSize: 14 } }} // font size of input text
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={2}>
        <CustomTextField
          name="firstName"
          value={values.firstName}
          onChange={handleInputChange}
          placeholder="First name (optional)"
          variant="outlined"
          fullWidth
          error={errors.firstName}
          inputProps={{ style: { fontFamily: "Poppins", fontSize: 14 } }}

        // font size of input text
        />
        <FormHelperText error id="component-error-text">
          {errors.firstName}
        </FormHelperText>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={2}>
        <CustomTextField
          name="lastName"
          placeholder="Last name"
          variant="outlined"
          value={values.lastName}
          onChange={handleInputChange}
          fullWidth
          error={errors.lastName}
          inputProps={{ style: { fontFamily: "Poppins", fontSize: 14 } }} // font size of input text
        />
        <FormHelperText error id="component-error-text">
          {errors.lastName}
        </FormHelperText>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={2}>
        <CustomTextField
          name="address"
          placeholder="Address"
          variant="outlined"
          fullWidth
          value={values.address}
          onChange={handleInputChange}
          error={errors.address}
          inputProps={{ style: { fontFamily: "Poppins", fontSize: 14 } }} // font size of input text
        />
        <FormHelperText error id="component-error-text">
          {errors.address}
        </FormHelperText>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={2}>
        <CustomTextField
          name="city"
          placeholder="City"
          variant="outlined"
          value={values.city}
          onChange={handleInputChange}
          error={errors.city}
          fullWidth
          inputProps={{ style: { fontFamily: "Poppins", fontSize: 14 } }} // font size of input text
        />
        <FormHelperText error id="component-error-text">
          {errors.city}
        </FormHelperText>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={2}>
        <CustomTextField
          name="postelCode"
          placeholder="Postal Code"
          variant="outlined"
          fullWidth
          value={values.postelCode}
          onChange={handleInputChange}
          inputProps={{ style: { fontFamily: "Poppins", fontSize: 14 } }}
          error={errors.postelCode}

        // font size of input text
        />
        <FormHelperText error id="component-error-text">
          {errors.postelCode}
        </FormHelperText>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={2}>
        <CustomTextField
          name="phone"
          placeholder="Phone"
          variant="outlined"
          fullWidth
          value={values.phone}
          onChange={handleInputChange}
          error={errors.phone}
          inputProps={{ style: { fontFamily: "Poppins", fontSize: 14 } }} // font size of input text
        />
        <FormHelperText error id="component-error-text">
          {errors.phone}
        </FormHelperText>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={2}>
        <Typography className="productInfoOrderBrod">
          <Link to={"/cart"} className="links">
            <ArrowBackIosIcon className="productInfoOrderPrice" />
            Return to Cart
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={2}>
        <Button
          variant={"addToCart"}
          onClick={handleSubmit}
        >
          Continue to Shipping
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} px={2} pt={5}>
        <Typography className="productInfoOrderBottom">
          All rights reserved @ateeqshareef
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Information;
