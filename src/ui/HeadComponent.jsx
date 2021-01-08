import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import c from "classnames";

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid #222",
    padding: "20px 0",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  link: {
    color: "#222",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 30,
    "&:last-child": {
      marginLeft: 50,
    },
  },
  linkActive: {
    fontWeight: "bold",
  },
}));

const HeadComponent = () => {
  const mc = useStyles();
  const location = useLocation();

  return (
    <div className={mc.root}>
      <Link
        className={c(mc.link, location.pathname === "/" && mc.linkActive)}
        to="/"
      >
        Home
      </Link>
      &nbsp;
      <div
        className={c(
          mc.link,
          location.pathname === "/calculations" && mc.linkActive
        )}
      >
        Calculations
      </div>
    </div>
  );
};

export default HeadComponent;
