import React, { useState, useEffect } from "react";

const useTimer = (timerToggle) => {
  const [time, setTime] = useState(0);

  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  useEffect(() => {
    let timeInterval;
    if (timerToggle) {
      timeInterval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    } else {
      clearInterval(timeInterval);
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [time, timerToggle]);

  return [getHours, getMinutes, getSeconds];
};

export default useTimer;
