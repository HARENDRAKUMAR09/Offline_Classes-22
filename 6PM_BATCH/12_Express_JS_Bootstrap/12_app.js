const express = require('express');
const app = express();

const router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = 3000;

// Static files middleware
app.use('/public',express.static('public'));

// Map the Application routings
router.mapRoutes(app);


app.listen(port,hostname,() => {
    console.log(`Server is Started at http://${hostname}:${port}`);
});