const express = require('express');

// ...

const app = express();

app.use(express.json());

// ...
// start project
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
