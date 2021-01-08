import { Grid, lighten, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(({ color }) => ({
  root: {
    alignItems: "center",
    display: "flex",
    padding: "5px 10px",
    border: "1px solid #222",
    textAlign: "center",
    backgroundColor: ({ color }) =>
      color === "success"
        ? "#34DC55"
        : color === "failed"
        ? lighten("#F33424", 0.5)
        : "#DDD",
  },
}));

const Block = ({ color = "default", children }) => {
  const mc = useStyles({ color: color });

  return (
    <Grid item md={3} sm={6} xs={12}>
      <div className={mc.root}>{children}</div>
    </Grid>
  );
};

export default Block;