import React, { useState } from 'react';
import torchOn from './images/torch-on.png';
import torchOff from './images/torch-off.png';
const AppFunction = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn ] = useState(false);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  }

  return (
    <>
      <h2>Counter</h2>
    <button onClick={incrementCount}>
      I was clicked { count } times
    </button>

      <h2>Toggle Light</h2>
      <img
        src={
          isOn ? torchOn
            : torchOff
        }
        style={{
          height: '100px',
        }}
        alt="Flashlight"

        onClick={toggleLight}
      />
    </>
  )
};

export default AppFunction;
