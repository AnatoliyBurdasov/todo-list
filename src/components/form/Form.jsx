import React, { useState } from "react";

import Alert from "../alert";
import CustomButton from "../custom-button";
import InputTextField from "../input-text-field";

const Form = ({ onAddItem }) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);

  const onChangeLabel = ({ value }) => {
    setInputText(value);
  };

  const generatorId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!inputText.trim()) {
      setError(!error);
      setTimeout(() => {
        setError(false);
      }, 1500);
    } else {
      const newItem = {
        inputText,
        done: false,
        important: false,
        id: generatorId(),
      };
      onAddItem(newItem);
      setInputText("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex justify-content-between my-3">
        <div>
          <InputTextField
            width="700px"
            value={inputText}
            variant="outlined"
            label="create todo"
            id="outlined-basic"
            placeholder="What needs to be done"
            onChangeText={({ target }) => onChangeLabel(target)}
          />
        </div>
        <CustomButton type="submit" color="success" variant="contained">
          Add Todo
        </CustomButton>
      </div>
      {error && <Alert text="string cannot be empty" severity="warning" />}
    </form>
  );
};

export default Form;
