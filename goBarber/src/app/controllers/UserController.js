import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async show() {}

  async store(req, res) {
    //const { email } = req.body;
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      res.status(400).json({ error: 'USUARIO JA CADASTRADO' });
    }
    // const user = await User.create(req.body);
    // return res.json(user); //retorna usuario inteiro.
    const { id, name, email, provider } = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
      provider,
    }); //retorna usuario inteiro.
  }

  async update() {}

  async delete() {}

  async signin(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      res.status(400).json({ error: 'USUARIO NAO ENCONTRADO CADASTRADO' });
    }
    if (!user.verifyPassword(req.body.password)) {
      res.status(400).json({ error: 'PASSWORD INVALIDO' });
    }

    return res.json({ message: 'Login efetuado com sucesso' });
  }
}

export default new UserController();
