const express = require('express');
const app = express();

// Middleware to parse JSON bodies from HTTP requests
app.use(express.json());

app.get('/proxy', (req, res) => {
    res.json({
        url: req.url,
        method: req.method,
        query: req.query,
        body: req.body,
        headers: req.headers,
        message: 'Main endpoint'
    });
});

app.get('/main', (req, res) => {
    res.json({
        url: req.url,
        method: req.method,
        query: req.query,
        body: req.body,
        headers: req.headers,
        message: 'Main endpoint'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Main is running on port ${process.env.PORT}`);
});
