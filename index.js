const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;


// Set up the CORS middleware
app.use(cors({}));



const proxyNewcastleUO = createProxyMiddleware({
  target: 'https://newcastle.urbanobservatory.ac.uk',
  changeOrigin: true,
  headers: {
    // Origin: 'http://localhost:5173',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    // 'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
  logger: console,
});

app.use('/api/nuo', proxyNewcastleUO);

app.listen(port, () => {
  console.log('generest server listening on port ' + port);
});
