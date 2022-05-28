import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ children, onClick, ...props }) => {
  return (
    <div className="d-flex">
      <Button {...props} className="mw-30" onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};
export default CustomButton;
