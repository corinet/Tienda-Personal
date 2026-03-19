const http = require('http');
http.get('http://localhost:3000/src/assets/Product1.png', (res) => {
  console.log('Local Status Code:', res.statusCode);
});
