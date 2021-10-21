import express from 'express';

const initialRouter = express.Router();

initialRouter.get('/', (req, res) => {
  res.send('Gamerpot backend').status(200);
});

initialRouter.get('/user', (req, res) => {
  res.send({name: 'test1', email: 'test1@gmail.com'}).status(200);
});

export {initialRouter};