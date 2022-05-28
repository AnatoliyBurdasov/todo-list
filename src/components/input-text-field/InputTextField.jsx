import React from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  ".MuiOutlinedInput-input": {
    fontSize: theme.spacing(2),
  },
  label: { fontSize: theme.spacing(2) },
}));

const InputTextField = ({ width, onChangeText, ...props }) => {
  return (
    <CustomTextField
      {...props}
      sx={{
        width: { width },
      }}
      onChange={onChangeText}
    />
  );
};

export default InputTextField;
