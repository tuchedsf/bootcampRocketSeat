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
  }

  // this.prototype.verifyPassword = function (password) {
  //   return bcrypt.compare(password, this.password_hash);
  // };
}

export default User;
//     {
//       hooks: {
//         beforeSave: async user => {
//           if (user.password) {
//             user.password_hash = await bcrypt.hash(user.password, 8);
//           }
//         },
//       },
//     }
//   );

//   User.prototype.verifyPassword = function(password) {
//     return bcrypt.compare(password, this.password_hash);
//   };
//   return User;
// };
