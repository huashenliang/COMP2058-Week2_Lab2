const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT);
console.log(`Your application is running at http://localhose:${PORT}`);