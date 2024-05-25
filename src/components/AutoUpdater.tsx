import { useState } from 'react';

export default function AutoUpdater() {
  const [statusString, setStatusString] = useState('no message');

  window.electron.ipcRenderer.on('update_available', () => {
    setStatusString('Update available and downloading');
  });

  window.electron.ipcRenderer.on('update_downloaded', () => {
    setStatusString('Update downloaded. Restart to apply.');
  });

  return <h1 id="autoUpdateMessage">{statusString}</h1>;
}
