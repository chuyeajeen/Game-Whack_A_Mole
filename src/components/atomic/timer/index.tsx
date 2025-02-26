import React, { useState, useEffect } from 'react';

interface TimerProps {
  key: number;
  onTimerEnd?: () => void;
}
const Timer = ({ key, onTimerEnd }: TimerProps) => {
  const [milliseconds, setMilliseconds] = useState(600);

  useEffect(() => {
    setMilliseconds(600);
  }, [key]);

  useEffect(() => {
    if (milliseconds <= 0) {
      if (onTimerEnd) onTimerEnd();
      return;
    }
    const timer = setInterval(() => {
      setMilliseconds((prev) => prev - 10);
    }, 10);
    return () => clearInterval(timer);
  }, [milliseconds]);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const millis = Math.floor((ms % 1000) / 10);
    return `${seconds < 10 ? '0' + seconds : seconds}.${millis < 10 ? '0' + millis : millis}`;
  };

  return (
    <div>
      <div>{formatTime(milliseconds)}</div>
    </div>
  );
};

export default Timer;
