const express = require('express');
const login = require('./controllers/loginController');
const userController = require('./controllers/userController');
const categoriesController = require('./controllers/categoriesController');
const postController = require('./controllers/postController');
const validateToken = require('./middlewares/validateToken');
// ...

const app = express();

app.use(express.json());
app.post('/login', login);
app.post('/user', userController.createController);
app.get('/user', validateToken, userController.getAll);
app.get('/user/:id', validateToken, userController.getById);
app.get('/categories', validateToken, categoriesController.getAll);
app.post('/categories', validateToken, categoriesController.createControllerCategory);
app.get('/post', validateToken, postController.getAll);
app.get('/post/:id', validateToken, postController.getById);

// ...

// start project
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
