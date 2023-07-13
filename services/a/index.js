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

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});
