import { Router } from 'express';

import authMiddleware from '../src/app/middlewares/auth';

import UserController from '../src/app/controllers/UserController';
import SessionController from '../src/app/controllers/SessionController';

const routes = new Router();

/*authMiddleware
ou pode ser colocado em cada rota:
ex: routes.get('/', authMiddleware, UserController.index);
ou pode ser chamado "geral" para todas as rotas ai coloca:
routes.use(authMiddleware)
lembrando que para esta opcao o middleware sera chamado para todas as rotas que estão apos a linha acima de carregamento do middleware
*/

routes.post('/signin', SessionController.signin);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
//isso
//routes.get('/', (req, res) => {
//  return UserController.index(req, res);
//});
//pode ficar assim
routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

export default routes;
