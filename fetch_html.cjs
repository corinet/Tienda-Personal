const https = require('https');
https.get('https://corinet.github.io/Tienda-Personal/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const lines = data.split('\n');
    const imgLines = lines.filter(l => l.includes('<img'));
    console.log(imgLines.slice(0, 10).join('\n'));
  });
});
