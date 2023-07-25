import { styled, TextField } from "@mui/material";

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#d3d3d3d3",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "none",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d3d3d3d3",
    },
    "&:hover fieldset": {
      borderColor: "rgba(0, 0, 0, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(0, 0, 0, 0.5)",
    },
    "&.Mui-disabled": {
      backgroundColor: "transparent",
      color: "rgba(0, 0, 0, 0.5)",
    },
  },
});
