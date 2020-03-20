import * as express from 'express';

export const createApp = () => {
  const app = express();

  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

  app.get('/', (req, res) => {
    res.json({ hello: 'express' });
  });

  return app;
};

export default createApp();