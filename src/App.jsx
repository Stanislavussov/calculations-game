import React from "react";
import HeadComponent from "./ui/HeadComponent";
import HomePage from "./pages/HomePage";
import { makeStyles } from "@material-ui/core";
import CalculationsPage from "./pages/CalculationsPage/CalculationsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    height: "100vh",
  },
}));

function App() {
  const mc = useStyles();

  return (
    <Router>
      <div className={mc.root}>
        <HeadComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/calculations">
            <CalculationsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
