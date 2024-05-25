// Driver for displaying something.
// In general, all components should be in organized directories
import Counter from 'components/Counter';
import Hello from 'components/Hello';
import Version from 'components/Version';
import AutoUpdater from 'components/AutoUpdater';

export default function Home() {
  return (
    <>
      <Hello />
      <Counter />
      <Version />
      <AutoUpdater />
    </>
  );
}
