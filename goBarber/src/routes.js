import { Router } from 'express';

import UserController from '../src/app/controllers/UserController';

const routes = new Router();

//isso
//routes.get('/', (req, res) => {
//  return UserController.index(req, res);
//});
//pode ficar assim
routes.get('/', UserController.index);
//isso
// routes.post('/users', (req, res) => {
//   return UserController.store(req, res);
// });
//pode ficar assim
routes.post('/users', UserController.store);
routes.post('/signin', UserController.signin);

export default routes;
