const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix SCSS content
function fixScssContent(content) {
  // Split into rule blocks
  const blocks = content.split(/(?=\n[^\s}])/);
  
  return blocks.map(block => {
    const lines = block.split('\n');
    const declarations = [];
    const nestedRules = [];
    const others = [];
    
    lines.forEach(line => {
      if (line.trim().length === 0) return;
      
      // Check if line is a declaration (contains : but not {)
      if (line.includes(':') && !line.includes('{')) {
        declarations.push(line);
      }
      // Check if line is a nested rule
      else if (line.includes('{') || line.match(/^\s+[\.\#\&]/)) {
        nestedRules.push(line);
      }
      // Other lines (closing braces, comments, etc)
      else {
        others.push(line);
      }
    });
    
    // Reconstruct the block with declarations first
    return [...declarations, ...nestedRules, ...others].join('\n');
  }).join('\n');
}

// Make the function async
async function fixFiles() {
  try {
    const files = await glob('src/**/*.scss');
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fixedContent = fixScssContent(content);
        fs.writeFileSync(file, fixedContent);
        console.log(`Fixed: ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    });
  } catch (err) {
    console.error('Error finding files:', err);
  }
}

fixFiles(); 
