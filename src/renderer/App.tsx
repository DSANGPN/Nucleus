// Driver for displaying something.
// In general, all components should be in organized directories

import * as React from 'react';
import { useState } from 'react';
import { DefaultButton } from '@fluentui/react';

function Hello() {
  return <h1>Hello!</h1>;
}

export default function App() {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(num + 1);
  };

  return (
    <>
      <Hello />
      <DefaultButton text="Standard Butt" onClick={handleClick} />
      <h1>{num}</h1>
    </>
  );
}
