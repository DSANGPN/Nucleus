import { useState } from 'react';
import { DefaultButton } from '@fluentui/react';

export default function Counter() {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(num + 1);
  };

  return (
    <>
      <DefaultButton text="Standard Butt" onClick={handleClick} />
      <h1>{num}</h1>
    </>
  );
}
