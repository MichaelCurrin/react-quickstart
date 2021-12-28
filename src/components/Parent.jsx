import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [value, setValue] = useState('');

  const setOuterValue = (v) => {
    setValue(v);
  };

  return (
    <div className="Parent">
      <h2>Parent component</h2>

      <p>
        <i>
          Demo of passing data between a child and parent component - both the
          value and state hook function are passed to the child to be used there
        </i>
      </p>

      <div>
        <button onClick={() => setOuterValue(123)}>Set to 123</button>
      </div>

      <Child value={value} setValue={setValue} />
    </div>
  );
}
