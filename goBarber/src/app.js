import express from 'express';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // habilitar app a receber requisições via json
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server; //modo normal
export default new App().server; // sucrase js
