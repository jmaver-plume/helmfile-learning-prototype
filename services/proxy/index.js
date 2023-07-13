const express = require('express');
const proxy = require('express-http-proxy')
const app = express();

app.use('*', proxy(process.env.PROXY_HOST));

app.listen(process.env.PORT, () => {
    console.log(`Proxy server is running on port ${process.env.PORT}`);
});
