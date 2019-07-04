import bcrypt from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        avatar: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    /**
     * Hooks sao acoes que sao executadas todas as vezes antes de um determinado funcao
     * ex: beforeSave -> executado sempre antes do create/save/update
     */
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    this.prototype.verifyPassword = function(password) {
      return bcrypt.compare(password, this.password_hash);
    };
  }
}

export default User;
