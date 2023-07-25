import { Box, Typography } from "@mui/material";
import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        fontWeight={500}
        color="fontColor.primary"
        fontSize={"15px"}
        textAlign={"center"}
      >
        {profile.title}
      </Typography>
      <Box mt={2}>
        <img width={"100%"} src={profile.img} alt="" />
      </Box>
      <Typography
        width={"70%"}
        fontWeight={600}
        textAlign={"center"}
        fontSize={"18px"}
        color="fontColor.primary"
      >
        {profile.desc}
      </Typography>
    </Box>
  );
};

export default ProfileCard;
