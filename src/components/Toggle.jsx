import { useState } from 'react';

export default function Toggle(props) {
  const { text } = props;

  const [isHidden, setIsHidden] = useState(false);

  const showHide = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <h2>Toggle component</h2>

      <p>
        <i>
          A simple functional component to change a boolean value and show or a
          hide a value
        </i>
      </p>

      <button onClick={showHide}>Click me</button>

      <p>
        <code>isHidden: {isHidden.toString()}</code>
      </p>

      <p>{!isHidden && text}</p>
    </>
  );
}
