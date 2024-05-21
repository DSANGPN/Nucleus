// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

// Load all scripts from the renderer directory

import * as fs from 'fs';
import * as path from 'path';

// Recursively get all files from a starting directory
const getAllFiles = (dir: string): string[] => {
  const files: string[] = [];

  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      files.push(...getAllFiles(filePath));
    } else {
      files.push(filePath);
    }
  });
  return files;
}

const allFiles = getAllFiles('renderer');
console.log(allFiles);