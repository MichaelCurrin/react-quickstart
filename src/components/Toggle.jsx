import { useState } from 'react';

export default function Toggle(props) {
  const [isHidden, setIsHidden] = useState(false);

  const showHide = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <h2>Toggle component</h2>

      <p>A simple functional component.</p>

      <button onClick={() => showHide()}>Toggle</button>

      <p>{!isHidden && props.text}</p>
    </div>
  );
}
