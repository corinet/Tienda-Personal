const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/src="\/Product/g, 'src="./src/assets/Product');
html = html.replace(/src="\/Icon/g, 'src="./src/assets/Icon');
fs.writeFileSync('index.html', html);

let css = fs.readFileSync('src/style.css', 'utf8');
css = css.replace(/url\('\/HeroBanner\.jpg'\)/g, "url('./assets/HeroBanner.jpg')");
fs.writeFileSync('src/style.css', css);

let viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
viteConfig = viteConfig.replace(/base: '\/Tienda-Personal\/'/g, "base: './'");
fs.writeFileSync('vite.config.ts', viteConfig);

console.log('Fixed all paths');
