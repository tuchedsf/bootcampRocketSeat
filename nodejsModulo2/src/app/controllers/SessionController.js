const { User } = require('../models')
class SessionController {
  create (req, res) {
    return res.render('auth/signin')
  }

  async store (req, res) {
    const { email, password } = req.body
    console.log(email)
    console.log(password)

    const user = await User.findOne({ where: { email } })

    if (!user) {
      console.log('usuario invalido')
      return res.redirect('/')
    }

    if (!(await user.verifyPassword(password))) {
      console.log('usuario invalido password invalida')
      return res.redirect('/')
    }
    console.log('usuario validado')
    return res.render('dashboard')
  }
}

module.exports = new SessionController()
