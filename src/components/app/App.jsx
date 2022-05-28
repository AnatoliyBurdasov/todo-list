import React, { useState } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

import "./App.scss";
import Form from "../form";
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#303030",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

const App = () => {
  const [state, setState] = useState([]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const search = function (items, term) {
    if (!items.length) {
      return items;
    } else {
      return items.filter(
        (item) => item.inputText.toLowerCase().indexOf(term.toLowerCase()) > -1
      );
    }
  };

  const handlerFilter = (items, filter) => {
    switch (filter) {
      case "All":
        return items;
      case "Active":
        return items.filter((item) => !item.done);
      case "Done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const onChangeSearching = ({ value }) => {
    setTerm(value);
  };

  const onChangeFilter = (filter) => {
    setFilter(filter);
  };

  const onDeleteItem = (id) => {
    const result = state.filter((todo) => todo.id !== id);
    setState(result);
  };

  const toggleProperty = (id, arr, nameProperty) => {
    const index = arr.findIndex((todo) => todo.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [nameProperty]: !oldItem[nameProperty] };
    const newArr = [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    setState(newArr);
  };

  const onToggleImportant = (id) => {
    toggleProperty(id, state, "important");
  };

  const onToggleDone = (id) => {
    toggleProperty(id, state, "done");
  };

  const doneCount = state.filter((el) => el.done).length;
  const todoCount = state.filter((el) => el.done === false).length;

  const onAddItem = (newItem) => {
    setState([...state, newItem]);
  };

  const visibleItems = handlerFilter(search(state, term), filter);

  return (
    <ThemeProvider theme={theme}>
      <Container
        className="d-flex flex-column justify-content-center my-2"
        maxWidth="md"
      >
        <AppHeader count={doneCount} todoCount={todoCount} />
        <div className="d-flex justify-content-between my-3">
          <SearchPanel
            value={term}
            label="search"
            width="600px"
            variant="outlined"
            id="outlined-basic"
            placeholder="type to search"
            onChangeSearching={onChangeSearching}
          />
          <ItemStatusFilter filter={filter} onChangeFilter={onChangeFilter} />
        </div>
        <TodoList
          todos={visibleItems}
          onToggleDone={onToggleDone}
          onDeleteItem={onDeleteItem}
          onToggleImportant={onToggleImportant}
        />
        <Form onAddItem={onAddItem} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
