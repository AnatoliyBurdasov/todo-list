import React from "react";
import InputTextField from "../input-text-field";

const SearchPanel = ({ value, onChangeSearching }) => {
  return (
    <InputTextField
      type="text"
      width="600px"
      value={value}
      label="search"
      variant="outlined"
      id="outlined-basic"
      placeholder="search"
      onChangeText={({ target }) => onChangeSearching(target)}
    />
  );
};

export default SearchPanel;
