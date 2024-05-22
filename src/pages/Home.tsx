// Driver for displaying something.
// In general, all components should be in organized directories

import { Counter } from 'components/Counter';
import { Hello } from 'components/Hello';

export function Home() {


  return (
    <>
      <Hello />
      <Counter />
    </>
  );
}
