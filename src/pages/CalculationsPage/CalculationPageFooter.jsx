import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import TimerIcon from "@material-ui/icons/Timer";
import StopWatch from "../../items/StopWatch";

const useStyles = makeStyles(() => ({
  total: {
    fontSize: 30,
  },
  stopWatch: {
    alignItems: "center",
    display: "flex",
    fontSize: 30,
  },
  stopWatchIcon: {
    fontSize: 30,
  },
  root: {
    alignItems: "center",
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
  },
}));

const CalculationPageFooter = ({ total, totalDone }) => {
  const mc = useStyles();
  const [seconds, setSeconds] = useState(0);

  return (
    <div className={mc.root}>
      <div className={mc.total}>
        Finished: {totalDone}/{total}
      </div>
      <div className={mc.stopWatch}>
        {total === totalDone ? (
          <div style={{ color: "#338aff" }}>{seconds}</div>
        ) : (
          <StopWatch setSeconds={setSeconds} />
        )}
        &nbsp;
        <TimerIcon className={mc.stopWatchIcon} />
      </div>
    </div>
  );
};

export default CalculationPageFooter;
