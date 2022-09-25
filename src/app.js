const express = require('express');
const login = require('./controllers/loginController');
const userController = require('./controllers/userController');
// ...

const app = express();

app.use(express.json());
app.post('/login', login);
app.post('/user', userController);
// ...
// start project
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
