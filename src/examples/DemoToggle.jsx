
import React from 'react';
import useToggle from '../hooks/useToggle.js';

export default function DemoToggle(){
  return (
    <div>
      <p>상태: <b></b></p>
      <button>toggle</button>
      <button>setTrue</button>
      <button>setFalse</button>
    </div>
  );
}
