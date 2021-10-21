import 'reflect-metadata';
import { json } from 'body-parser';
import { app } from './app';
import { initialRouter } from './routes/initial.router';
import { createConnection, getConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

getConnectionOptions().then(options => {
  createConnection(options).then(() => {
    console.log('Connected to database');
  });
});

const port = process.env.SERVER_PORT || 4000;

app.use(json());

app.use('/api/v1', initialRouter);

app.listen(port, () =>
  console.log(`Running on port ${port}`)
);
