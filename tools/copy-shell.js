const fs = require('fs');
const path = require('path');

// Target the parent "apps" directory containing all frontend applications
const srcParentDir = path.join(__dirname, '../dist/apps/frontend/src/apps');
const destParentDir = path.join(__dirname, '../dist/apps/backend/public');

/**
 * Recursively copies a folder from source to destination
 */
function copyFolderSync(from, to) {
  fs.mkdirSync(to, { recursive: true });

  fs.readdirSync(from).forEach(element => {
    const srcElement = path.join(from, element);
    const destElement = path.join(to, element);

    if (fs.lstatSync(srcElement).isDirectory()) {
      copyFolderSync(srcElement, destElement);
    } else {
      fs.copyFileSync(srcElement, destElement);
    }
  });
}

// Ensure the parent source folder actually exists
if (!fs.existsSync(srcParentDir)) {
  console.error(`Error: Frontend build directory "${srcParentDir}" does not exist. Ensure your frontend build ran successfully first.`);
  process.exit(1);
}

console.log(`🚀 Scanning for frontend applications in: ${srcParentDir}\n`);

try {
  // Read all items under dist/apps/frontend/src/apps
  const items = fs.readdirSync(srcParentDir);
  let copiedCount = 0;

  items.forEach(item => {
    const fullSrcPath = path.join(srcParentDir, item);
    
    // Only copy if it's a directory (e.g., "shell", "dashboard")
    if (fs.lstatSync(fullSrcPath).isDirectory()) {
      const fullDestPath = path.join(destParentDir, item);
      
      console.log(` -> Copying app [${item}] to: ${fullDestPath}`);
      copyFolderSync(fullSrcPath, fullDestPath);
      copiedCount++;
    }
  });

  if (copiedCount === 0) {
    console.log('Warning: No application directories were found to copy.');
  } else {
    console.log(`\nSuccessfully copied ${copiedCount} frontend app(s) to backend public directory!`);
  }

} catch (error) {
  console.error('Failed during the frontend copy process:', error);
  process.exit(1);
}