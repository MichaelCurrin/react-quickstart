import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Counter component</h2>

      <p><i>A simple functional component.</i></p>

      <p>
        We increment a numeric counter here, based on the{' '}
        <a href="https://reactjs.org/docs/hooks-state.html">
          Using the State Hook
        </a>{' '}
        tutorial in the React docs.
      </p>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
