import React from 'react';
import useLocalStorage from './useLocalStorage';

function Counter() {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
