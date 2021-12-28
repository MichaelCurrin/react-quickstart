import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Counter component</h2>
      <p>
        <i>A simple functional component to change an integer</i>
      </p>
      <p>
        <code>count: {count}</code>
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>
      &nbsp;
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}
