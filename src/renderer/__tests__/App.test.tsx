import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../App';

// This is how it is defined in the context bridge in my code. Modify this as required
const mockElectron = {
  ipcRenderer: {
    sendMessage: jest.fn(),
    on: jest.fn(),
    once: jest.fn(),
    removeEventListener: jest.fn(),
  },
};

beforeAll(() => {
  global.window.electron = mockElectron;
});

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
