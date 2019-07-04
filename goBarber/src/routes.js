import { Router } from 'express';

import User from '../src/app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diego',
    email: 'teste@test.com',
    password_hash: 'teste',
    avatar: 'teste.jpg',
  });
  return res.json(user);
});

export default routes;
