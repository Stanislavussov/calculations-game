import React, { memo } from "react";
import ReactStopwatch from "react-stopwatch";

const StopWatch = memo(({ setSeconds }) => {
  return (
    <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    render={({seconds, minutes, hours}) => {
        setSeconds(seconds + minutes * 60 + hours * 3600);
        return (
            <div>
                <p>{seconds + minutes * 60 + hours * 3600}</p>
            </div>
        );
    }}
    />
  );
});

export default StopWatch;
