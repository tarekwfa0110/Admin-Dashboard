import fs from 'fs';
import path from 'path';

// Paths
const componentsLowerPath = path.resolve('./src/components');
const componentsUpperPath = path.resolve('./src/Components');

// Check if folders exist
const lowerExists = fs.existsSync(componentsLowerPath);
const upperExists = fs.existsSync(componentsUpperPath);

console.log(`src/components exists: ${lowerExists}`);
console.log(`src/Components exists: ${upperExists}`);

// Create the components folder if it doesn't exist
if (!lowerExists) {
  fs.mkdirSync(componentsLowerPath, { recursive: true });
  console.log('Created src/components folder');
}

// If uppercase Components exists, copy files to lowercase components
if (upperExists) {
  console.log('src/Components exists. Copying files...');
  
  // Get files from uppercase Components
  const upperFiles = fs.readdirSync(componentsUpperPath);
  console.log(`Files in src/Components: ${upperFiles.join(', ')}`);
  
  // Copy files from uppercase Components to lowercase components
  upperFiles.forEach(file => {
    const sourcePath = path.join(componentsUpperPath, file);
    const destPath = path.join(componentsLowerPath, file);
    
    // Skip if file already exists in lowercase components
    if (fs.existsSync(destPath)) {
      console.log(`File ${file} already exists in src/components. Skipping.`);
      return;
    }
    
    // Copy file
    const content = fs.readFileSync(sourcePath);
    fs.writeFileSync(destPath, content);
    console.log(`Copied ${file} from src/Components to src/components`);
  });
}

// Check if RootLayout.jsx exists in components
const rootLayoutPath = path.join(componentsLowerPath, 'RootLayout.jsx');
if (!fs.existsSync(rootLayoutPath)) {
  console.error('ERROR: RootLayout.jsx not found in src/components!');
  process.exit(1);
}

console.log('Folder structure fixed!'); 