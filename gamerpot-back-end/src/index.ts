import 'reflect-metadata';
import { json } from 'body-parser';
import { app } from './app';
import { UserRouter } from './routes/user.router';
import { createConnection, getConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

app.use(json());

getConnectionOptions().then(options => {
  createConnection(options).then(() => {
    app.use('/api/v1', UserRouter().router);
  });
});

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () =>
  console.log(`Running on port ${port}`)
);
