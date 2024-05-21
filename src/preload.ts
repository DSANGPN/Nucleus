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

window.addEventListener("DOMContentLoaded", () => {
    let rendererScriptsDiv = document.getElementById("rendererScripts");
    const allFiles = getAllFiles('./dist/renderer');
    allFiles.forEach(filePath => {
      const isJSExtension = filePath.split(".").pop() === "js";
      if(isJSExtension) {
        let rendererScriptElement = document.createElement("script");
        rendererScriptElement.src = filePath;
        rendererScriptsDiv.appendChild(rendererScriptElement);
      }
    });
});