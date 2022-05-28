import cn from "classnames";
import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";

import "./TodoListItem.scss";

const CustomButton = styled(Button)(({ theme }) => ({
  "&:active": {
    color: theme.palette.error.main,
    border: "none",
  },
}));

const TodoListItem = ({
  done,
  inputText,
  important,
  onToggleDone,
  onDeleteItem,
  onToggleImportant,
}) => {
  return (
    <span className="todo-list-item list-group-item d-flex justify-content-between align-items-center">
      <Typography
        variant="subtitle1"
        className={cn("todo-list-item", {
          "todo-list-item__element--disabled": done,
          "todo-list-item__element--important": important,
        })}
        onClick={onToggleDone}
      >
        {inputText}
      </Typography>
      <div>
        <CustomButton
          color="error"
          variant="outlined"
          sx={{ marginRight: "10px" }}
          onClick={onDeleteItem}
        >
          <DeleteForeverSharpIcon />
        </CustomButton>
        <CustomButton
          color="success"
          variant="outlined"
          onClick={onToggleImportant}
        >
          <PriorityHighIcon />
        </CustomButton>
      </div>
    </span>
  );
};

export default TodoListItem;
