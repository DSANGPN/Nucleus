// Driver for displaying something.
// In general, all components should be in organized directories

import Dygraph from 'dygraphs';
import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';

function Hello() {
  return <h1>Hello!</h1>;
}

export default function App() {
  console.log(Dygraph);

  return (
    <>
      <Hello />
      <DefaultButton text="Standard Butt" />
    </>
  );
}
