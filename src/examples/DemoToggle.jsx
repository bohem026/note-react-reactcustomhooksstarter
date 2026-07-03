import useToggle from '../hooks/useToggle.js';
import { useState } from 'react';

export default function DemoToggle() {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn((prev) => !prev);
  };
  const setTrue = () => {
    setOn(true);
  };
  const setFalse = () => {
    setOn(false);
  };

  return (
    <div>
      <p>
        상태: <b>{String(on)}</b>
      </p>
      <button onClick={toggle}>toggle</button>
      <button onClick={setTrue}>setTrue</button>
      <button onClick={setFalse}>setFalse</button>
    </div>
  );
}
