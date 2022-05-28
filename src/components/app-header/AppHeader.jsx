import React from "react";
import { Typography } from "@mui/material";

const AppHeader = ({ count, todoCount }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <Typography variant="h3"> Todo List</Typography>
      <Typography variant="body1 text-secondary">
        {todoCount} more to do, {count} done
      </Typography>
    </div>
  );
};

export default AppHeader;
