import React from "react";
import { Alert } from "@mui/material";

const CustomAlert = ({ text, severity }) => {
  return <Alert severity={severity}>{text}</Alert>;
};

export default CustomAlert;
