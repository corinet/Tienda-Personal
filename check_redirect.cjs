const https = require('https');
https.get('https://corinet.github.io/Tienda-Personal', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Location:', res.headers.location);
});
