const express = require('express');
const { createProxyMiddelware } = require('http-proxy-middelware');

const app = express();
const port = 3000;

const proxyNewcastleUO = createProxyMiddelware({
  target: 'https://newcastle.urbanobservatory.ac.uk/api/v1.1',
  changeOrigin: true, // needed for virtual hosted sites
});

app.use('/api/nuo');

app.listen(port, () => {
  console.log('generest server listening on port ' + port);
});
