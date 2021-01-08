import { Button, InputBase, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    border: "1px solid #222",
    width: 50,
    marginLeft: 90,
    display: "inline-block",
  },
}));

const InputElement = ({ onSubmitInput, index, disabled = false }) => {
  const mc = useStyles();
  const [inputValue, setInputValue] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitInput(index, inputValue);
  };

  const onChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <InputBase
        disabled={disabled}
        className={mc.root}
        value={inputValue}
        onChange={onChange}
      />
      <Button type="submit" style={{ display: "none" }} />
    </form>
  );
};

export default InputElement;
