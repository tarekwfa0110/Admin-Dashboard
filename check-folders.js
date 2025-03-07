import fs from 'fs';
import path from 'path';

// Check if src/components exists
const componentsPath = path.resolve('./src/components');
const componentsExists = fs.existsSync(componentsPath);
console.log(`src/components exists: ${componentsExists}`);

// Check if src/Components exists
const ComponentsPath = path.resolve('./src/Components');
const ComponentsExists = fs.existsSync(ComponentsPath);
console.log(`src/Components exists: ${ComponentsExists}`);

// List files in src/components if it exists
if (componentsExists) {
  const files = fs.readdirSync(componentsPath);
  console.log('Files in src/components:');
  files.forEach(file => {
    console.log(`- ${file}`);
  });
}

// List files in src/Components if it exists
if (ComponentsExists) {
  const files = fs.readdirSync(ComponentsPath);
  console.log('Files in src/Components:');
  files.forEach(file => {
    console.log(`- ${file}`);
  });
}

// Check if RootLayout.jsx exists in either folder
const rootLayoutLowerPath = path.resolve('./src/components/RootLayout.jsx');
const rootLayoutUpperPath = path.resolve('./src/Components/RootLayout.jsx');
console.log(`src/components/RootLayout.jsx exists: ${fs.existsSync(rootLayoutLowerPath)}`);
console.log(`src/Components/RootLayout.jsx exists: ${fs.existsSync(rootLayoutUpperPath)}`); 