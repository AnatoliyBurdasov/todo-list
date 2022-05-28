import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, ButtonGroup } from "@mui/material";

import "./ItemStatusFilter.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiButton-root:active": {
      backgroundColor: theme.palette.success.light,
    },
    "&.MuiButton-root:hover": {
      backgroundColor: theme.palette.success.light,
    },
  },
}));

const ItemStatusFilter = ({ filter, onChangeFilter }) => {
  const buttons = [
    { id: 1, name: "All", label: "All" },
    { id: 2, name: "Active", label: "Active" },
    { id: 3, name: "Done", label: "Done" },
  ];

  const classes = useStyles();
  return (
    <>
      <ButtonGroup>
        {buttons.map((el) => {
          return (
            <Button
              className={classes.root}
              sx={{
                backgroundColor:
                  filter === el.name ? "success.light" : "success.main",
              }}
              key={el.id}
              variant="outlined"
              onClick={() => onChangeFilter(el.name)}
            >
              {el.name}
            </Button>
          );
        })}
      </ButtonGroup>
    </>
  );
};

export default ItemStatusFilter;
