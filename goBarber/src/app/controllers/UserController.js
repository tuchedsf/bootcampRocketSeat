import User from '../models/User';

import * as Yup from 'yup';

class UserController {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async show() {}

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'VALIDACAO FALHOU' });
    }

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

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) => {
          oldPassword ? field.required : field;
        }),
      confirmPassword: Yup.string().when('password', (password, field) => {
        password ? field.required().oneOf([Yup.ref('password')]) : field;
      }),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'VALIDACAO FALHOU' });
    }

    const { email, oldPassword } = req.body;
    console.log('TCL: UserController -> update -> req.body', req.body);

    const userExists = await User.findByPk(req.userId);

    if (email && email !== userExists.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        res.status(400).json({ error: 'USUARIO JA CADASTRADO' });
      }
    }

    if (oldPassword && !(await userExists.verifyPassword(oldPassword))) {
      res.status(400).json({ error: 'OLD PASSWORD INVALIDO' });
    }

    const { id, name, provider } = await userExists.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async delete() {}

  async signin(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      res.status(400).json({ error: 'USUARIO NAO ENCONTRADO CADASTRADO' });
    }
    if (!(await user.verifyPassword(req.body.password))) {
      res.status(400).json({ error: 'PASSWORD INVALIDO' });
    }

    return res.json({ message: 'Login efetuado com sucesso' });
  }
}

export default new UserController();
