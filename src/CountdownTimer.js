// CountdownTimer.js

import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';
const CountdownTimer = ({ targetDateTime, onCancel }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDateTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div className='countdown-container'>
      <h2>Countdown Timer</h2>
      <div className='countdown-timer'>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
      <button onClick={onCancel} className='countdown-button'>Cancel Countdown</button>
    </div>
  );
};

export default CountdownTimer;
