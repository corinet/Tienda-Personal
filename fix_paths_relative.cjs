const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/src="\/src\/assets\//g, 'src="./src/assets/');
fs.writeFileSync('index.html', html);

let css = fs.readFileSync('src/style.css', 'utf8');
css = css.replace(/url\('\/src\/assets\//g, "url('./assets/");
fs.writeFileSync('src/style.css', css);

console.log('Fixed paths to relative');
