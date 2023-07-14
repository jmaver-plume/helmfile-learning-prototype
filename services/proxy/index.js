const express = require('express');
const proxy = require('express-http-proxy')
const app = express();

app.get('/proxy', proxy(process.env.PROXY_HOST));

app.get('/not-proxied', (req, res) => {
    res.json({ message: 'Proxy endpoint' })
})

app.listen(process.env.PORT, () => {
    console.log(`Proxy server is running on port ${process.env.PORT}`);
});
