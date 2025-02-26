import React, { useState, useEffect } from 'react';

interface TimerProps {
  key: number;
  onTimerEnd?: () => void;
  pause?: boolean;
}

const Timer = ({ key, onTimerEnd, pause = false }: TimerProps) => {
  const [milliseconds, setMilliseconds] = useState(6000);

  useEffect(() => {
    setMilliseconds(6000);
  }, [key]);

  useEffect(() => {
    if (milliseconds <= 0) {
      if (onTimerEnd) onTimerEnd();
      return;
    }
    if (pause) return;

    const timer = setInterval(() => {
      setMilliseconds((prev) => Math.max(0, prev - 10));
    }, 10);
    return () => clearInterval(timer);
  }, [milliseconds, pause]);

  const formatTime = (ms: number) => {
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
