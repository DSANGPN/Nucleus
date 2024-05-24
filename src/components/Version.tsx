import packageJson from '../../package.json';

export default function Version() {
  return <h2>{packageJson.version}</h2>;
}
