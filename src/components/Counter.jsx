import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter component</h2>

      <p>A simple functional component.</p>

      <p>
        We increment a numeric counter, based on{" "}
        <a href="https://reactjs.org/docs/hooks-state.html">
          Using the State Hook
          </a>{" "}
          tutorial.
        </p>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
