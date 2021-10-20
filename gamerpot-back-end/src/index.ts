import { json } from 'body-parser';
import { app } from './app';
import { initialRouter } from './routes/initial.router';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.SERVER_PORT || 4000;

app.use(json());

app.use('/api/v1', initialRouter);

app.listen(port, () =>
  console.log(`Running on port ${port}`)
);