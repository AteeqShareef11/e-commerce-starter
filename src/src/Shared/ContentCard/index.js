/* eslint-disable react/prop-types */
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Ovalwhole from "../../assets/ovalwhole.png"

const ContentCard = ({ content, direction = "row", shape }) => {
  const matchesImobile = useMediaQuery("(max-width:600px)");

  return (
    <Box 
      sx={{
        width: "90%",
        margin: "auto",
        maxWidth: "1560px",
        my: 10,
      }}
    >
      <Grid
        container
        direction={direction}
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid position={"relative"} item xs={12} md={6}>
          <img width={"100%"} src={content.img} alt="" />
          <Box>
        <img style={{
            position:"absolute",
            width:"110px",
            top:"45%",
            right:-20,
        }} src={shape} alt=""/>
        </Box>
        </Grid>
        <Grid
          display={"flex"}
          flexDirection="column"
          paddingY={matchesImobile ? "" : "90px !important"}
          paddingX={matchesImobile ? "" : "90px !important"}
          justifyContent={"center"}
          alignItems="flex-start"
          gap={2}
          item
          xs={12}
          md={6}
        >
          <Typography
            fontSize={ matchesImobile ? "22px" : "37px"}
            fontWeight={900}
            lineHeight={matchesImobile ? "30px" : "46.25px"}
            color="fontColor.primary"
          >
            {content.title}
          </Typography>
          <Typography
            fontSize={"18px"}
            fontWeight={400}
            lineHeight={"27px"}
            color="fontColor.primary"
          >
            {content.desc1}
          </Typography>
          <Typography
            fontSize={"18px"}
            fontWeight={400}
            lineHeight={"27px"}
            color="fontColor.primary"
          >
            {content?.desc2}
          </Typography>
          <Button variant="primary">sign up now!</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentCard;
