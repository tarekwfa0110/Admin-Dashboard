import fs from 'fs';
import path from 'path';

// Function to check folder structure
function checkFolderStructure(lowerCasePath, upperCasePath) {
  const folderName = path.basename(lowerCasePath);
  const lowerExists = fs.existsSync(lowerCasePath);
  const upperExists = fs.existsSync(upperCasePath);
  
  console.log(`src/${folderName} exists: ${lowerExists}`);
  console.log(`src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)} exists: ${upperExists}`);
  
  // List files in lowercase folder if it exists
  if (lowerExists) {
    const files = fs.readdirSync(lowerCasePath);
    console.log(`Files in src/${folderName}:`);
    files.forEach(file => {
      console.log(`- ${file}`);
    });
  }
  
  // List files in uppercase folder if it exists
  if (upperExists) {
    const files = fs.readdirSync(upperCasePath);
    console.log(`Files in src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)}:`);
    files.forEach(file => {
      console.log(`- ${file}`);
    });
  }
  
  // Check if specific important files exist
  if (folderName === 'components') {
    const rootLayoutLowerPath = path.join(lowerCasePath, 'RootLayout.jsx');
    const rootLayoutUpperPath = path.join(upperCasePath, 'RootLayout.jsx');
    console.log(`src/${folderName}/RootLayout.jsx exists: ${fs.existsSync(rootLayoutLowerPath)}`);
    console.log(`src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)}/RootLayout.jsx exists: ${fs.existsSync(rootLayoutUpperPath)}`);
  } else if (folderName === 'pages') {
    const dashboardLowerPath = path.join(lowerCasePath, 'Dashboard.jsx');
    const dashboardUpperPath = path.join(upperCasePath, 'Dashboard.jsx');
    console.log(`src/${folderName}/Dashboard.jsx exists: ${fs.existsSync(dashboardLowerPath)}`);
    console.log(`src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)}/Dashboard.jsx exists: ${fs.existsSync(dashboardUpperPath)}`);
  }
}

// Check components folder structure
checkFolderStructure(path.resolve('./src/components'), path.resolve('./src/Components'));

// Check pages folder structure
checkFolderStructure(path.resolve('./src/pages'), path.resolve('./src/Pages')); 