const https = require('https');
https.get('https://corinet.github.io/Tienda-Personal/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const lines = data.split('\n');
    const imgLines = lines.filter(l => l.includes('Product1'));
    console.log('--- LIVE HTML IMG TAGS ---');
    console.log(imgLines.join('\n'));
  });
});
