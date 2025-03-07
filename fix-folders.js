import fs from 'fs';
import path from 'path';

// Function to ensure folder exists with correct files
function ensureFolderStructure(lowerCasePath, upperCasePath) {
  const lowerExists = fs.existsSync(lowerCasePath);
  const upperExists = fs.existsSync(upperCasePath);
  const folderName = path.basename(lowerCasePath);
  
  console.log(`src/${folderName} exists: ${lowerExists}`);
  console.log(`src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)} exists: ${upperExists}`);
  
  // Create the lowercase folder if it doesn't exist
  if (!lowerExists) {
    fs.mkdirSync(lowerCasePath, { recursive: true });
    console.log(`Created src/${folderName} folder`);
  }
  
  // If uppercase folder exists, copy files to lowercase folder
  if (upperExists) {
    console.log(`src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)} exists. Copying files...`);
    
    // Get files from uppercase folder
    const upperFiles = fs.readdirSync(upperCasePath);
    console.log(`Files in src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)}: ${upperFiles.join(', ')}`);
    
    // Copy files from uppercase folder to lowercase folder
    upperFiles.forEach(file => {
      const sourcePath = path.join(upperCasePath, file);
      const destPath = path.join(lowerCasePath, file);
      
      // Skip directories
      if (fs.statSync(sourcePath).isDirectory()) {
        // For directories, recursively ensure they exist
        const lowerDirPath = path.join(lowerCasePath, file);
        if (!fs.existsSync(lowerDirPath)) {
          fs.mkdirSync(lowerDirPath, { recursive: true });
          console.log(`Created directory ${file} in src/${folderName}`);
        }
        
        // Recursively copy files from the directory
        const filesInDir = fs.readdirSync(sourcePath);
        filesInDir.forEach(nestedFile => {
          const nestedSourcePath = path.join(sourcePath, nestedFile);
          const nestedDestPath = path.join(lowerDirPath, nestedFile);
          
          if (fs.statSync(nestedSourcePath).isFile()) {
            if (fs.existsSync(nestedDestPath)) {
              console.log(`File ${file}/${nestedFile} already exists in src/${folderName}. Skipping.`);
              return;
            }
            
            const content = fs.readFileSync(nestedSourcePath);
            fs.writeFileSync(nestedDestPath, content);
            console.log(`Copied ${file}/${nestedFile} from src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)} to src/${folderName}`);
          }
        });
        
        return;
      }
      
      // Skip if file already exists in lowercase folder
      if (fs.existsSync(destPath)) {
        console.log(`File ${file} already exists in src/${folderName}. Skipping.`);
        return;
      }
      
      // Copy file
      const content = fs.readFileSync(sourcePath);
      fs.writeFileSync(destPath, content);
      console.log(`Copied ${file} from src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)} to src/${folderName}`);
    });
  }

  // If the uppercase path doesn't exist, create it (ensure it exists for imports with uppercase)
  if (!upperExists) {
    try {
      // Just create a directory for now (symlinks can be problematic cross-platform)
      fs.mkdirSync(upperCasePath, { recursive: true });
      console.log(`Created src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)} folder`);
      
      // Copy files from lowercase to uppercase
      const files = fs.readdirSync(lowerCasePath);
      files.forEach(file => {
        const sourcePath = path.join(lowerCasePath, file);
        const destPath = path.join(upperCasePath, file);
        
        // For directories, just create them
        if (fs.statSync(sourcePath).isDirectory()) {
          if (!fs.existsSync(destPath)) {
            fs.mkdirSync(destPath, { recursive: true });
            console.log(`Created directory ${file} in src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)}`);
          }
          
          // Copy files within the directory
          const dirFiles = fs.readdirSync(sourcePath);
          dirFiles.forEach(nestedFile => {
            const nestedSourcePath = path.join(sourcePath, nestedFile);
            const nestedDestPath = path.join(destPath, nestedFile);
            
            if (fs.statSync(nestedSourcePath).isFile()) {
              const content = fs.readFileSync(nestedSourcePath);
              fs.writeFileSync(nestedDestPath, content);
              console.log(`Copied ${file}/${nestedFile} to src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)}`);
            }
          });
          
          return;
        }
        
        // Copy regular files
        const content = fs.readFileSync(sourcePath);
        fs.writeFileSync(destPath, content);
        console.log(`Copied ${file} to src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)}`);
      });
    } catch (err) {
      console.error(`Error creating src/${folderName.charAt(0).toUpperCase() + folderName.slice(1)} folder:`, err);
    }
  }
}

// Fix components folder
const componentsLowerPath = path.resolve('./src/components');
const componentsUpperPath = path.resolve('./src/Components');
ensureFolderStructure(componentsLowerPath, componentsUpperPath);

// Fix pages folder
const pagesLowerPath = path.resolve('./src/pages');
const pagesUpperPath = path.resolve('./src/Pages');
ensureFolderStructure(pagesLowerPath, pagesUpperPath);

console.log('Folder structure fixed!'); 