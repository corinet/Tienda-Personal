const https = require('https');
https.get('https://corinet.github.io/Tienda-Personal/src/assets/Product1.png', (res) => {
  console.log('Status Code:', res.statusCode);
});
