import { Grid, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Block from "./Block";
import InputElement from "./InputElement";
import CalculationsPageFooter from "./CalculationPageFooter";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  block: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  blockSpan: {
    position: "absolute",
    display: "block",
  },
  root: {
    padding: "100px 20vw 50px",
    position: "absolute",
    top: 0,
  },
}));

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generate_expression = (n) => {
  const expressions = [];
  for (let i = 0; i < n; i++) {
    const signs = ["*", "-", "+"];
    const sign_number = getRandomIntInclusive(0, 2);
    expressions.push(
      `${getRandomIntInclusive(1, 10)} ${
        signs[sign_number]
      } ${getRandomIntInclusive(1, 10)}`
    );
  }
  return expressions;
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CalculationsPage = () => {
  const mc = useStyles();
  const query = useQuery();
  const quantity = parseInt(query.get("quantity"));
  const [expressions] = useState(generate_expression(quantity));
  const [values, setValues] = useState(new Array(quantity));
  const [totalDone, setTotalDone] = useState(0);
  const [loading, setLoading] = useState(true);

  const init_array = [];

  const onInputChange = (index, value) => {
    setValues((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
  };

  const [blocks, setBlocks] = useState(init_array);

  useEffect(() => {
    if (blocks.length === quantity) setLoading(false);
  }, [blocks, quantity]);

  useEffect(() => {
    let total = 0;
    values.forEach((el) => {
      if (el !== undefined) total += 1;
    });
    setTotalDone(total);
  }, [values]);

  useEffect(() => {
    setBlocks(() => {
      return expressions.map((exp, index) => (
        <Block
          color={
            values[index]
              ? // eslint-disable-next-line
                parseInt(values[index]) === eval(expressions[index])
                ? "success"
                : "failed"
              : "default"
          }
          key={index}
          className={mc.block}
        >
          <span className={mc.blockSpan}>
            {exp.replace(/\*/g, "x")} = &nbsp;
          </span>
          <InputElement
            disabled={values[index] !== undefined}
            index={index}
            onSubmitInput={onInputChange}
          />
        </Block>
      ));
    });
  }, [values, mc, expressions]);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <>
          <Grid container spacing={2} className={mc.root}>
            {blocks.map((el) => el)}
            <Grid item md={12}>
              <CalculationsPageFooter total={quantity} totalDone={totalDone} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default CalculationsPage;