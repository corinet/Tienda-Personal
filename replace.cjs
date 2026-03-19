const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const newContent = content.replace(/\.\/src\/assets\//g, '/');
fs.writeFileSync('index.html', newContent);
console.log('Replaced all occurrences in index.html');
