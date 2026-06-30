
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

export default function DemoLocalStorage(){

  return (
    <div>
      <input placeholder="이름 입력" />
      <button >reset</button>
      <p>저장된 값: <b>{}</b></p>
    </div>
  );
}
