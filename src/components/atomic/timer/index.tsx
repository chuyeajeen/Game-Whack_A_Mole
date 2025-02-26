import React, { useState, useEffect } from 'react';
import { TIME } from '../../../constants/game';
import { useRecoilState } from 'recoil';
import { moleSpeedUpState } from '../../../store/moleState';

/**
 * Timer props
 *
 * @param key : restart 시 key 값을 변경해 초기화
 * @param onTimerEnd: timer 끝날 시 콜백함수
 * @param pause : pause 시 timer 멈춤
 */
interface TimerProps {
  refresh: number;
  onTimerEnd?: () => void;
  pause?: boolean;
}

const Timer = ({ refresh, onTimerEnd, pause = false }: TimerProps) => {
  const [milliseconds, setMilliseconds] = useState(TIME);
  const [moleSpeedUp, setMoleSpeedUp] = useRecoilState(moleSpeedUpState);
  useEffect(() => {
    setMilliseconds(TIME);
  }, [refresh]);

  useEffect(() => {
    if (milliseconds <= 0) {
      setMoleSpeedUp(false);
      if (onTimerEnd) onTimerEnd();
      return;
    } else if (milliseconds <= TIME / 6 && !moleSpeedUp) setMoleSpeedUp(true);
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
