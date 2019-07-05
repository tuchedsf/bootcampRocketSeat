import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.json({ error: 'token invalido' });
  }

  //const [bearer, token] = authHeader.split(' ');
  //como bearer nao vai ser usado posso descartar a posicao como eh a primeira usa apenas a ,
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    //incluir o id do usuario nas requisições para faciliar nas pesquisas/rotinas etc...
    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};
