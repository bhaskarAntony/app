import React, { useState, useEffect } from 'react';
import { formatDate } from '../../js/utils';
import './style.css';

const CountDown = ({ date }) => {
  const targetDate = new Date(date); // Target date
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      };
    }

    return timeLeft;
  }

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className='time fw-bold text-center'>
        <h1 className="display-1 text-main-danger">{timeLeft[interval]}</h1>
        <small className="small">{interval}</small>{" "}
      </span>
    );
  });

  return (
    <div className='countdown p-3 p-md-5 d-flex flex-column gap-4 align-items-center'>
      <h1 className='display-5 fw-bold'>
        Next batch starts at <span className="text-main-danger">{formatDate(date)}</span>
      </h1>
      <div className="d-flex gap-3">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default CountDown;
