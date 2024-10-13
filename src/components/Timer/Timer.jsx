import React from "react";
import "./Timer.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState("00:00:00");
  const Ref = useRef();

  function getTimeRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date());
    const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minute = Math.floor((total / 1000 / 60) % 60);
    const second = Math.floor((total / 1000) % 60);
    return {
      total,
      hour,
      minute,
      second,
    };
  }
  function startTimer(e) {
    let { total, hour, minute, second } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        `${hour > 9 ? hour : "0" + hour}:${
          minute > 9 ? minute : "0" + minute
        }:${second > 9 ? second : "0" + second}`
      );
    }
  }

  function clearTime(e) {
    setTimer("00:00:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  }
  function startingTime() {
    let start = new Date();
    start.setSeconds(start.getSeconds() + 10);
    return start;
  }

  useEffect(() => {
    clearTime(startingTime());
  }, []);
  return (
    <div className="timer">
      <h3>{timer}</h3>
    </div>
  );
};

export default Timer;
