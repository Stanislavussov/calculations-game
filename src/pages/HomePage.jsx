import { Button, darken, InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 30,
  },
  input: {
    border: "1px solid #222",
    backgroundColor: (isValid) => (isValid ? "white" : "#F33424"),
    borderRadius: 5,
    padding: "0 10px",
    margin: "10px 0",
    textAlign: "center",
    "& input": {
      textAlign: "center",
    },
  },
  startButton: {
    color: "white",
    display: "block",
    textAlign: "cetner",
    padding: "10px 30px",
    width: "100%",
    margin: "0 auto",
    fontSize: 25,
    borderRadius: 10,
    backgroundColor: "#338AFF",
    "&:hover": {
      backgroundColor: darken("#338AFF", 0.2),
    },
  },
  root: {
    textAlign: "center",
  },
}));

const HomePage = () => {
  const [inputValue, setInputValue] = useState();
  const [isValid, setIsValid] = useState(true);
  const [mc] = useState(useStyles(isValid));
  const history = useHistory();

  const onChangeEvent = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const onClick = (event) => {
    event.preventDefault();
    if (inputValue < 20 || inputValue > 60) {
      setIsValid(false);
    } else {
      setIsValid(true);
      history.push(`/calculations?quantity=${inputValue}`);
    }
  };

  return (
    <div className={mc.root}>
      <div className={mc.title}>NoC</div>
      <form>
        <InputBase
          value={inputValue}
          className={mc.input}
          onChange={onChangeEvent}
        />
        <Button type="submit" onClick={onClick} className={mc.startButton}>
          Start
        </Button>
      </form>
    </div>
  );
};

export default HomePage;
