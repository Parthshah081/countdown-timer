// App.js

import React, { useState } from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import InputForm from './InputForm';

function App() {
  const [targetDateTime, setTargetDateTime] = useState(null);

  const handleSetTargetDateTime = (dateTime) => {
    setTargetDateTime(dateTime);
  };

  const handleCancelCountdown = () => {
    setTargetDateTime(null);
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      {targetDateTime ? (
        <CountdownTimer targetDateTime={targetDateTime} onCancel={handleCancelCountdown} />
      ) : (
        <InputForm onSetTargetDateTime={handleSetTargetDateTime} />
      )}
    </div>
  );
}

export default App;
