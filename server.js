const express = require('express');
const app = express();
const PORT = 3000;
const doMath = require('./math'); //import math


//At the index of our application - use the handle calucation function from 
//math.js file to handle the request
app.get('/', doMath);
app.listen(PORT);
console.log(`Your application is running at http://localhost:${PORT}`);
