const express = require('express');
const proxy = require('express-http-proxy')
const app = express();

app.use('*', proxy('localhost:3000'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
