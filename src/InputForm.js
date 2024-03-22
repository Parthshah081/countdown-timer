// InputForm.js

import React, { useState } from 'react';
import './InputForm.css';
const InputForm = ({ onSetTargetDateTime }) => {
  const [dateTime, setDateTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dateTime) {
      setError('Please enter a valid date and time');
      return;
    }

    onSetTargetDateTime(dateTime);
    setDateTime('');
    setError('');
  };

  return (
    <div className='input-form-container'>
      <h2 className='input-form-header'>Input Target Date and Time</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className='input-field'
        />
        <button className='submit-button' type="submit">Start Countdown</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default InputForm;
