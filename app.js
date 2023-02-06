const express = require('express');
const UserController = require('./controllers/user.controller');

const app = express();
app.use(express.json());

app.post('/', UserController.createUser);
app.get('/', UserController.getAll);
app.get('/:userId', UserController.getOne);
app.delete('/:userId', UserController.deleteOne);
app.put('/:userId', UserController.updateOne);

module.exports = app;