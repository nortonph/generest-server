const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

const proxyNewcastleUO = createProxyMiddleware({
  target: 'https://newcastle.urbanobservatory.ac.uk/api/v1.1',
  changeOrigin: true, // needed for virtual hosted sites
});

app.use('/api/nuo', proxyNewcastleUO);

app.listen(port, () => {
  console.log('generest server listening on port ' + port);
});
