const express = require('express');
const app = express();

// Middleware to parse JSON bodies from HTTP requests
app.use(express.json());

app.all('*', (req, res) => {
    res.json({
        url: req.url,
        method: req.method,
        query: req.query,
        body: req.body,
        headers: req.headers
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Main is running on port ${process.env.PORT}`);
});
