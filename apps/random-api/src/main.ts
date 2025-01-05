import express, { type Response } from 'express';
import * as path from 'path';
import { randomApiRoute, type RandomColorApiResponse } from '@nx-playground/random-api-interface'

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get(randomApiRoute, (req, res: Response<RandomColorApiResponse>) => {
  const prob = Math.random();

  const color = prob < 0.3 ? 'red' : prob < 0.6 ? 'blue' : 'green';

  res.status(200).json({ color });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
